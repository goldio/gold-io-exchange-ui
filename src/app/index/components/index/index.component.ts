import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pair } from '../../models/pair.model';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';
import { OrderType, Theme, OrderStatus } from '../../../common/enums';
import { User, Price, UserWallet, Order, WebSocketMessage } from '../../../common/models';
import { AuthService } from '../../../common/services/auth.service';
import { WebsocketService } from '../../../common/services/websocket.service';
import { BinanceService } from '../../../common/services/binance.service';
import { TradeService } from '../../../common/services/trade.service';
import { WalletsService } from '../../../common/services/wallets.service';
import { ThemeService } from '../../../common/services/theme.service';
import { OpenOrdersResponse } from '../../../common/models/response';
import { CreateOrderRequest } from '../../../common/models/request';
import { TvChartContainerComponent } from '../../../tv-chart-container/tv-chart-container.component';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more.src';
HC_more(Highcharts);
import HC_stock from 'highcharts/modules/stock';
import { PairState } from '../../models/pairState.model';
HC_stock(Highcharts);
// import { runInThisContext } from 'vm';

declare var TradingView: any;
declare var Swiper: any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})


export class IndexComponent extends BaseLayoutComponent implements OnInit {
	OrderType = OrderType;

	public stats: PairState;

	public loader = false;
	public isLoggedIn: boolean;

	public scrollbarOptions = { axis: 'yx', theme: 'minimal' };

	public tradeForm: FormGroup;
	public searchForm: FormGroup;

	public mask = [/\d{1,}/, '.', /\d?/, /\d?/];

	public orderError = false;

	public chart: boolean = false;
	public currencyBox: boolean = false;
	public buyCell: boolean = false;
	public buyCellBtn = "PLACE BUY ORDER";
	public responciveTabs = 2;

	public theme: Theme;

	public user: User;

	public pairs: Pair[];
	public currentPair: Pair;
	public currentPrice: Price;

	public currentPairTV: string;

	public baseWallet: UserWallet;
	public quoteWallet: UserWallet;

	public openOrders = {
		buy: new Array<Order>(),
		sell: new Array<Order>()
	};

	public closedOrders: Order[];
	public myOpenOrders: Order[];

	public Highcharts = Highcharts;
	public depthChartOptions: Highcharts.Options;
	public orderBook: { asks: any[], bids: any[] };

	public depthChartData: any;
	public dataDepthAsks: any[];
	public dataDepthBids: any[];

	@ViewChild('priceChart') private priceChart: TvChartContainerComponent;

	public changeOrderAct(act: string) {
		if (act == "buy") {
			this.buyCellBtn = "PLACE BUY ORDER"
			this.buyCell = false;
			this.tradeForm.controls['type'].setValue(OrderType.Buy);
		} else if (act == "sell") {
			this.buyCellBtn = "PLACE SELL ORDER"
			this.buyCell = true;
			this.tradeForm.controls['type'].setValue(OrderType.Sell);
		}
	}

	private initSearchForm(): void {
		this.searchForm = new FormGroup({
			search: new FormControl(null)
		});

		this.searchForm
			.controls['search']
			.valueChanges
			.debounceTime(500)
			.subscribe(value => {
				/* if (!value) {
					this.viewSymbols = this.symbols;
					return;
				}

				this.viewSymbols = this.symbols
					.filter(x =>
						x.symbol.toLowerCase().includes(`${value}`.toLowerCase()) ||
						x.symbol.toLowerCase().includes(`${value}`.toLowerCase())); */
			});
	}

	constructor(
		private authService: AuthService,
		private websocketService: WebsocketService,
		private binanceService: BinanceService,
		private tradeService: TradeService,
		private walletsService: WalletsService,
		private themeService: ThemeService
	) {
		super();

		this.connectThemeService();
		this.initSearchForm();
		this.init();
	}

	// Initialization
	private async init() {
		this.user = await this.getUser();
		this.pairs = await this.getPairs();

		await this.setPair(this.pairs[0]);
	}

	// Init trade form
	private initTradeForm(): void {
		this.tradeForm = new FormGroup({
			baseAsset: new FormControl(this.currentPair.baseAsset.shortName, [Validators.required]),
			quoteAsset: new FormControl(this.currentPair.quoteAsset.shortName, [Validators.required]),
			type: new FormControl(OrderType.Buy, [Validators.required]),
			price: new FormControl(this.currentPrice.price.toFixed(8), [Validators.required]),
			amount: new FormControl(new Number(0).toFixed(8), [Validators.required]),
			total: new FormControl(new Number(0).toFixed(8), [Validators.required]),
		});

		this.tradeForm
			.controls['price']
			.valueChanges
			.debounceTime(500)
			.subscribe(value => {
				if (!value) {
					return;
				}

				let amount = this.tradeForm.value['amount'] || 0;
				
				this.tradeForm.
					controls['total']
					.setValue((value * amount).toFixed(8));
			});

		this.tradeForm
			.controls['amount']
			.valueChanges
			.debounceTime(500)
			.subscribe(value => {
				if (!value) {
					return;
				}

				let price = this.tradeForm.value['price'] || 0;
				
				this.tradeForm.
					controls['total']
					.setValue((value * price).toFixed(8));
			});
	}

	// Connect theme service
	private connectThemeService(): void {
		this.themeService
			.currentState
			.subscribe(theme => {
				if (theme == Theme.Dark) {
					this.scrollbarOptions = { axis: 'yx', theme: 'minimal' };
				} else {
					this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
				}
				
				this.theme = theme;
			});
	}

	// Connect web socket
	private connectWebSocket(): void {
		this.websocketService
			.openChannel(this.currentPair);

		this.websocketService
			.channelMessage
			.subscribe(async (msg) => {
				if (!msg) {
					return;
				}

				const message = JSON.parse(msg.data) as WebSocketMessage;

				if (message.type == "orderBookUpdate") {
					const openOrders = await this.getOpenOrder();
					if (openOrders) {
						this.openOrders.buy = openOrders.buyOrders;
						this.openOrders.sell = openOrders.sellOrders;
					}

					this.closedOrders = await this.getClosedOrders();
					this.myOpenOrders = await this.getMyOpenOrders();

					const wallets = await this.getWallets();
					this.baseWallet = wallets.baseWallet;
					this.quoteWallet = wallets.quoteWallet;

					return;
				}

				if (message.type == "priceUpdate") {
					this.currentPrice = await this.getCurrentPrice();

					return;
				}
			});
	}

	ngOnInit(): void {
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				this.isLoggedIn = logged;
			});

		new Swiper('.swiper-container', {
			scrollContainer: true
		});
	}

	public async getUser(): Promise<User> {
		if (!this.isLoggedIn) {
			return;
		}
		
		const response = await this.authService
			.getUser()
			.toPromise();

		if (!response.success) {
			console.log(response.message);
			return;
		}

		return response.data;
	}

	// Load trade pairs
	public async getPairs(): Promise<Pair[]> {
		const response = await this.tradeService
			.getPairs()
			.toPromise();
		
		if (!response.success) {
			console.log(response.message);
			return new Array<Pair>();
		}

		return response.data;
	}

	public async getStats(): Promise<PairState> {
			const response = await this.tradeService
				.getStats(this.currentPair)
				.toPromise();
			
			if (!response.success) {
				console.log(response.message);
			}
			return response.data;
		}
	// Set current pair
	public async setPair(pair: Pair) {
		this.currencyBox = false;
		this.currentPair = pair;
		this.currentPairTV = `${pair.baseAsset.shortName}.${pair.quoteAsset.shortName}`;

		const openOrders = await this.getOpenOrder();
		if (openOrders) {
			this.openOrders.buy = openOrders.buyOrders;
			this.openOrders.sell = openOrders.sellOrders;
		}

		this.closedOrders = await this.getClosedOrders();
		this.myOpenOrders = await this.getMyOpenOrders();
		this.currentPrice = await this.getCurrentPrice();

		const wallets = await this.getWallets();
		this.baseWallet = wallets.baseWallet;
		this.quoteWallet = wallets.quoteWallet;

		this.stats =  await this.getStats();

		this.initTradeForm();
		this.connectWebSocket();

		//this.priceChart.destroy();
		this.priceChart.init();
	}

	// Load my open orders
	public async getMyOpenOrders(): Promise<Order[]> {
		if (!this.isLoggedIn) {
			return new Array<Order>();
		}

		const response = await this.tradeService
			.getMyOpenOrders(this.currentPair)
			.toPromise();

		if (!response.success) {
			console.log(response.message);
			return new Array<Order>();
		}

		return response.data;
	}

	// Load open orders
	public async getOpenOrder(): Promise<OpenOrdersResponse> {
		const response = await this.tradeService
			.getOpenOrders(this.currentPair)
			.toPromise();

		if (!response.success) {
			console.log(response.message);
			return null;
		}

		return response;
	}

	// Load closed orders
	public async getClosedOrders(): Promise<Order[]> {
		const response = await this.tradeService
			.getClosedOrders(this.currentPair)
			.toPromise();

		if (!response.success) {
			console.log(response.message);
			return new Array<Order>();
		}
		
		return response.data;
	}

	// Load current price
	public async getCurrentPrice(): Promise<Price> {
		const response = await this.tradeService
			.getPriceByPair(this.currentPair)
			.toPromise();

		if (!response.success) {
			console.log(response.message);
			return new Price();
		}

		return new Price(response.price, response.isHigher);
	}

	// Load wallets
	public async getWallets() {
		const response = await this.walletsService
			.getMe()
			.toPromise();

		if (!response.success) {
			console.log(response.message);
			return;
		}

		// console.log(this.currentPair);
		// console.log(response.data);
		const result = {
			baseWallet: response.data.find(x => x.coin.shortName == this.currentPair.baseAsset.shortName),
			quoteWallet: response.data.find(x => x.coin.shortName == this.currentPair.quoteAsset.shortName)
		};
		// console.log(result);

		return result;
	}

	// Submit order form
	public submitOrder(form: FormGroup): void {
		if (form.invalid) {
			console.log('form invalid');
			return;
		}

		const request = new CreateOrderRequest();
		request.baseAsset = form.value['baseAsset'];
		request.quoteAsset = form.value['quoteAsset'];
		request.type = form.value['type'];
		request.price = parseFloat(form.value['price']);
		request.amount = parseFloat(form.value['amount']);
		form.controls['amount'].reset(new Number(0).toFixed(8));
		form.controls['total'].reset(new Number(0).toFixed(8));

		this.tradeService
			.createOrder(request)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}
				this.changeOrderAct('buy');
			});
	}

	private async getOrderBook() {
		const symbol = this.currentPair.symbol;
		const data = await this.binanceService
			.getOrderBook(symbol)
			.toPromise();

		const asks = [];
		data.data.asks.forEach(ask => {
			asks.push([parseFloat(ask[0]), parseFloat(ask[1])]);
		});

		const bids = [];
		data.data.bids.forEach(bid => {
			bids.push([parseFloat(bid[0]), parseFloat(bid[1])]);
		});

		return { asks: asks, bids: bids };
	}

	private async setDepthChartData(points?: { asks: any[], bids: any[] }) {
		if (!this.orderBook) {
			this.orderBook = await this.getOrderBook();
		}

		if (points) {
			points.bids.forEach(point => {
				this.orderBook.bids.unshift(point);
			});

			points.asks.forEach(point => {
				this.orderBook.asks.unshift(point);
			});
		}

		const bestBid = this.getBestBid(this.orderBook.bids);
		const bestAsk = this.getBestAsk(this.orderBook.asks);
		const midPrice = (bestAsk + bestBid) / 2;

		let minAxisExtr = midPrice - 2000;
		//let curMinAxisExtr = minAxisExtr;

		let maxAxisExtr = midPrice + 2000;
		//let curMaxAxisExtr = maxAxisExtr;

		//формирование левого графика
		this.dataDepthBids = [];
		let summBids = 0;
		this.orderBook.bids.forEach(el => {
			if (el[0] > minAxisExtr && el[0] < maxAxisExtr) {
				summBids += Number(el[1]);
				this.dataDepthBids[el[0]] = summBids;
			}
		});
		let chartBidsData = this.convertToGraphData(this.dataDepthBids);

		//формирование правого графика
		this.dataDepthAsks = [];
		let summAsks = 0;
		this.orderBook.asks.forEach(el => {
			if (el[0] > (midPrice - 2000) && el[0] < (midPrice + 2000)) {
				summAsks += Number(el[1]);
				this.dataDepthAsks[el[0]] = summAsks;
			}
		});
		let chartAsksData = this.convertToGraphData(this.dataDepthAsks);


		this.depthChartData = {
			asks: chartAsksData,
			bids: chartBidsData
		};

		if (this.Highcharts.charts[1]) {
			this.Highcharts.charts[1].series[0].update({
				name: 'bids',
				type: 'area',
				data: this.depthChartData.bids
			});

			this.Highcharts.charts[1].series[1].update({
				name: 'asks',
				type: 'area',
				data: this.depthChartData.asks
			});
		}
	}

	private getBestAsk(data: any) {
		let best = Number(data[0][0]);
		let val;
		data.forEach(el => {
			val = Number(el[0]);
			if (el[0] < best) {
				best = el[0];
			}
		});
		return best;
	}

	private getBestBid(data: any) {
		let best = Number(data[0][0]);
		let val;
		data.forEach(el => {
			val = Number(el[0]);
			if (val > best) {
				best = val;
			}
		});
		return best;
	}

	private convertToGraphData(data: any) {
		let convertedData = [];
		for (let key in data) {
			let point = {
				x: Number(key),
				y: data[key]
			};
			convertedData.push(point);
		}
		convertedData.sort(function (first, second) {
			return first.x - second.x;
		});
		return convertedData;
	}

	private updateMainData(updatedElem: any, type: string) {
		if (!this.depthChartData) return;

		let finded = false;
		let val = Number.parseFloat(updatedElem[0]);
		//let series = this.Highcharts.charts[0].series.find(x => x.name == type);

		for (let i = 0; i < this.depthChartData[type].length; i++) {
			let el = this.depthChartData[type][i];
			if (Number.parseFloat(el[0]) == val) {
				this.depthChartData[type][i][1] = updatedElem[1];
				finded = true;
				/* series.setData(this.depthChartData[type]);
				series.update(series.options, true); */
				return true;
			}
		}

		if (type == 'asks') {
			this.dataDepthAsks.push([Number.parseFloat(updatedElem[0]), Number.parseFloat(updatedElem[1])]);
			// console.log(this.dataDepthAsks);
		} else if (type == 'bids') {
			this.dataDepthBids.push([Number.parseFloat(updatedElem[0]), Number.parseFloat(updatedElem[1])]);
			// console.log(this.dataDepthBids);
		}

		/* series.setData(this.depthChartData[type]);
		series.update(series.options, true); */
		return false;
		// mainData[type].forEach(function(el, index){
		//     if(Number(el[0]) == val){
		//         mainData[type][index] = updatedElem[2];
		//         finded = true;
		//     }
		// });
	}

	private async initDepthChart() {
		await this.setDepthChartData();

		this.depthChartOptions = {
			chart: { type: 'area', zoomType: 'xy', animation: true },
			rangeSelector: {
				selected: 1
			},
			title: null,
			credits: { enabled: false },
			xAxis: {
				minPadding: 0,
				maxPadding: 0,
				plotLines: [{
					color: '#888',
					value: 0.1523,
					width: 1,
					label: {
						text: 'Actual price',
						rotation: 90
					}
				}],
				labels: {
					style: {
						fontFamily: 'Helvetica Neue',
						color: '#ffffff',
						fontSize: '10px'
					}
				},
				title: {
					text: 'Price',
					style: {
						fontFamily: 'Helvetica Neue',
						color: '#ffffff',
						fontSize: '10px'
					}
				}
			},
			yAxis: [{
				lineWidth: 1,
				gridLineWidth: 1,
				title: null,
				tickWidth: 1,
				tickLength: 5,
				tickPosition: 'inside',
				labels: {
					align: 'left',
					x: 8,
					style: {
						fontFamily: 'Helvetica Neue',
						color: '#ffffff',
						fontSize: '11px',
						opacity: 0.4
					}
				}
			}, {
				opposite: true,
				linkedTo: 0,
				lineWidth: 1,
				gridLineWidth: 0,
				title: null,
				tickWidth: 1,
				tickLength: 5,
				tickPosition: 'inside',
				labels: {
					align: 'right',
					x: -8,
					style: {
						fontFamily: 'Helvetica Neue',
						color: '#ffffff',
						fontSize: '11px',
						opacity: 0.4
					}
				}
			}],
			legend: { enabled: false },
			plotOptions: {
				area: {
					fillOpacity: 0.2,
					lineWidth: 1,
					step: 'center'
				},
				series: {
					turboThreshold: 10000,
					showInNavigator: true
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
				valueDecimals: 2
			},
			series: [{
				name: 'bids',
				type: 'area',
				data: this.depthChartData.bids
			}, {
				name: 'asks',
				type: 'area',
				data: this.depthChartData.asks
			}]
		};
	}
}
