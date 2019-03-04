import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

/* import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts"; */
/* import { Chart } from 'angular-highcharts'; */
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more.src';
HC_more(Highcharts);
import HC_stock from 'highcharts/modules/stock';
HC_stock(Highcharts);

import { WebsocketService } from 'src/app/common/services/websocket.service';
import { TradeHistoryItem, OrderBookItem, CandlestickItem, TradeHistoryItemNative } from '../../models';
import { BinanceService } from 'src/app/common/services/binance.service';
import { DateHelper } from 'src/app/common/helpers';
import { Symbol } from '../../models/symbol.model';
import { AuthService } from 'src/app/common/services/auth.service';

import { TradeService } from 'src/app/common/services/trade.service';
import { OrderType, Theme } from 'src/app/common/enums';
import { WalletsService } from 'src/app/common/services/wallets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/common/services/theme.service';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { UserWallet } from 'src/app/common/models';
import symbols from './symbols';

// import { runInThisContext } from 'vm';

declare var TradingView: any;
declare var Swiper: any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})


export class IndexComponent extends BaseLayoutComponent implements OnInit, OnDestroy {
	OrderType = OrderType;

	public loader = false;
	public isLoggedIn: boolean;
	
	public scrollbarOptions = { axis: 'yx', theme: 'minimal' };

	public tradeForm: FormGroup;
	public searchForm: FormGroup;
	
	public baseAsset:any = 0;
	public quoteAsset:any = 0;
	public orderPrice:any = 0;
	public orderAmount:any = 0;
	public maxBaseAsset:any = 0;
	public maxQuoteAsset:any = 0;
	
	public orderTotal:any = 0;
	public MyWallets: UserWallet[];
	public baseWallet: UserWallet;
	public quoteWallet: UserWallet;

	public Highcharts = Highcharts;
	public priceChartOptions: Highcharts.Options;
	public depthChartOptions: Highcharts.Options;

	public chart: boolean = false;
	public currencyBox: boolean = false;
	public buyCell: boolean = false;
	public buyCellBtn = "PLACE BUY ORDER";
	public responciveTabs = 2;

	public tradeHistory: TradeHistoryItem[] = [];
	public orderBook: { asks: any[], bids: any[] };
	public orderBookBids: OrderBookItem[] = [];
	public orderBookAsks: OrderBookItem[] = [];

	public depthChartData: any;
	public dataDepthAsks: any[];
	public dataDepthBids: any[];

	public priceChartData: any;

	public theme: Theme;

	public symbols: Symbol[];
	public viewSymbols: Symbol[];
	public currentSymbol: Symbol;

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

	private loadSymbols(): void {
		this.binanceService
			.getExchangeInfo()
			.subscribe(res => {
				this.symbols = res.symbols;
				this.tradeService
					.getPairs()
					.subscribe(res => {
						if (!res.success) {
							console.log(res.message);
							return;
						}

						res.data.forEach(pair => {
							this.symbols.unshift(Symbol.fromPair(pair));
						});

						this.viewSymbols = this.symbols;
						this.setSymbol();
					});
			});
	}

	private setSymbol(symbol?: Symbol): void {
		this.currencyBox = false;

		if (!symbol) {
			this.currentSymbol = this.symbols.find(x => x.symbol == "ETHBTC");
			this.loadPrice('ETH', 'BTC');
		} else {
			this.currentSymbol = symbol;
			this.loadPrice(symbol.baseAsset, symbol.quoteAsset);
		}
		
		this.loadTrades();
		this.loadOrderBook();
		this.getBalance();

		this.initPriceChart().finally(() => this.initDepthChart().finally(() => this.openDepthStream()));

		this.initTradeForm();

		/* if (this.Highcharts.charts[0]) {
			this.Highcharts.charts[0].update(this.priceChartOptions, true);
		}

		if (this.Highcharts.charts[1]) {
			this.Highcharts.charts[1].update(this.depthChartOptions, true);
		} */
	}

	private loadTrades(): void {
		this.tradeHistory = [];

		if (this.currentSymbol.gio) {
			this.tradeService
				.getOrdersBySymbol(this.currentSymbol.baseAsset, this.currentSymbol.quoteAsset)
				.subscribe(res => {
					if (!res.success) {
						alert(res.message);
						return;
					}

					res.data.forEach(item => {
						this.tradeHistory
							.push({
								price: item.price.toFixed(4),
								qty: item.amount.toFixed(8),
								isBuyerMaker: item.type == OrderType.Buy ? true : false,
								isBestMatch: false,
								time: DateHelper.getTimeFromDate(new Date(item.time))
							});
					});
				});

			return;
		}

		this.binanceService
			.getTrades(this.currentSymbol.symbol)
			.subscribe(res => {
				res.data.forEach((item: TradeHistoryItemNative) => {
					this.tradeHistory
						.push({
							price: item.price.toFixed(4),
							qty: item.qty.toFixed(8),
							isBuyerMaker: item.isBuyerMaker,
							isBestMatch: item.isBestMatch,
							time: DateHelper.getTimeFromDate(new Date(item.time))
						});
				});
			});
	}

	private loadOrderBook(): void {
		this.orderBookAsks = [];
		this.orderBookBids = [];

		if (this.currentSymbol.gio) {
			this.tradeService
				.getOrderBookBySymbol(this.currentSymbol.baseAsset, this.currentSymbol.quoteAsset)
				.subscribe(res => {
					if (!res.success) {
						alert(res.message);
						return;
					}

					res.data.forEach(item => {
						if (item.type == OrderType.Buy) {
							this.orderBookAsks
								.push({
									price: item.price.toFixed(8),
									amount: item.amount.toFixed(8),
									total: (item.price * item.amount).toFixed(8)
								});
						} else if (item.type == OrderType.Sell) {
							this.orderBookBids
								.push({
									price: item.price.toFixed(8),
									amount: item.amount.toFixed(8),
									total: (item.price * item.amount).toFixed(8)
								});
						}
					});
				});

			return;
		}

		this.binanceService
			.getOrderBook(this.currentSymbol.symbol)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}

				let points = { asks: [], bids: [] };

				res.data.bids.forEach(item => {
					if (this.orderBookBids.length > 21) {
						this.orderBookBids.shift();
					}

					if (parseFloat(item[1]) > 0) {
						let aItem = {
							price: parseFloat(item[0]).toFixed(8),
							amount: parseFloat(item[1]).toFixed(8),
							total: `${(item[0] * item[1]).toFixed(8)}`
						};

						points.bids.push([parseFloat(item[0]), parseFloat(item[1])]);
						this.orderBookBids.push(aItem);
						this.updateMainData(item, 'bids');
					}
				});

				res.data.asks.forEach(item => {
					if (this.orderBookAsks.length > 21) {
						this.orderBookAsks.shift();
					}

					if (parseFloat(item[1]) > 0) {
						let aItem = {
							price: parseFloat(item[0]).toFixed(8),
							amount: parseFloat(item[1]).toFixed(8),
							total: `${(item[0] * item[1]).toFixed(8)}`
						};
						
						points.asks.push([parseFloat(item[0]), parseFloat(item[1])]);
						this.orderBookAsks.push(aItem);
						this.updateMainData(item, 'asks');
					}
				});

				this.setDepthChartData(points);
			});
	}

	private openDepthStream(): void {
		/* this.websocketService.closeLocalDepthStream(); */

		/* if (this.currentSymbol.gio) {
			this.websocketService.openLocalDepthStream();
			this.websocketService
				.localDepthStreamMessage
				.subscribe(msg => {
					console.log(msg);
				});

			return;
		} */

		this.websocketService.closeDepthStream();
		this.websocketService.openDepthStream(this.currentSymbol.symbol);

		this.websocketService
			.depthStreamMessage
			.subscribe(msg => {
				if (msg) {
					const messageData = JSON.parse(msg.data);
					// console.log(messageData);

					if (messageData['e'] == "depthUpdate") {
						let points = { asks: [], bids: [] };

						messageData['b'].forEach(item => {
							if (this.orderBookBids.length > 21) {
								this.orderBookBids.shift();
							}

							if (parseFloat(item[1]) > 0) {
								let aItem = {
									price: parseFloat(item[0]).toFixed(8),
									amount: parseFloat(item[1]).toFixed(8),
									total: `${(item[0] * item[1]).toFixed(8)}`
								};

								points.bids.push([parseFloat(item[0]), parseFloat(item[1])]);
								this.orderBookBids.push(aItem);
								this.updateMainData(item, 'bids');
							}
						});

						messageData['a'].forEach(item => {
							if (this.orderBookAsks.length > 21) {
								this.orderBookAsks.shift();
							}

							if (parseFloat(item[1]) > 0) {
								let aItem = {
									price: parseFloat(item[0]).toFixed(8),
									amount: parseFloat(item[1]).toFixed(8),
									total: `${(item[0] * item[1]).toFixed(8)}`
								};

								points.asks.push([parseFloat(item[0]), parseFloat(item[1])]);
								this.orderBookAsks.push(aItem);
								this.updateMainData(item, 'asks');
							}
						});

						this.setDepthChartData(points);
					}
				}
			});
	}

	private initTradeForm(): void {
		this.tradeForm = new FormGroup({
			baseAsset: new FormControl(this.currentSymbol.baseAsset, [Validators.required]),
			quoteAsset: new FormControl(this.currentSymbol.quoteAsset, [Validators.required]),
			type: new FormControl(OrderType.Buy, [Validators.required]),
			price: new FormControl(this.orderPrice, [Validators.required]),
			amount: new FormControl(this.orderAmount, [Validators.required]),
			total: new FormControl(this.orderTotal, [Validators.required]),
		});
	}

	public submitOrder(form: FormGroup): void {
		// console.log(form);
		if (form.invalid) {
			alert('form invalid');
			return;
		}
		alert('form valid');
		
		this.loader = true;
		this.tradeService
			.createOrder(form.value)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					this.loader = false;
				}

				this.loadOrderBook();
				this.loadTrades();
				this.loader = false;
			});
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
				if (!value) {
					// this.symbols = this.symbols;
					this.viewSymbols = this.symbols;
					// console.log(this.viewSymbols);
					return;
				}
				this.viewSymbols = this.symbols
					.filter(x =>
						x.symbol.toLowerCase().includes(`${value}`.toLowerCase()) ||
						x.symbol.toLowerCase().includes(`${value}`.toLowerCase()));
				// this.symbols = this.symbols
				// 	.filter(x =>
				// 		x.symbol.toLowerCase().includes(`${value}`.toLowerCase()) ||
				// 		x.symbol.toLowerCase().includes(`${value}`.toLowerCase()));
			});
			// console.log(this.viewSymbols);
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

	ngOnInit() {
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				this.isLoggedIn = logged;
			});

		new Swiper('.swiper-container', {
			scrollContainer: true
		});

		this.loadSymbols();
		
		this.initSearchForm();
		this.convertToFloat();
		
		this.searchForm
		.controls['search']
		.valueChanges
		.debounceTime(500)
		.subscribe(value => {
			if (!value) {
				this.viewSymbols = this.symbols;
				// console.log(this.viewSymbols);
				return;
			}
			this.viewSymbols = this.symbols
				.filter(x =>
					x.symbol.toLowerCase().includes(`${value}`.toLowerCase()) ||
					x.symbol.toLowerCase().includes(`${value}`.toLowerCase()));
		});

		if(!this.isLoggedIn){
			
		}
		
	}

	ngOnDestroy(){
		this.websocketService.closeDepthStream();
		this.websocketService.closeLocalDepthStream();
	}

	private async getCandlestickData() {
		const symbol = this.currentSymbol.symbol;
		const data = await this.binanceService
			.getCandlestickData(symbol)
			.toPromise();

		return data;
	}

	private async getOrderBook() {
		const symbol = this.currentSymbol.symbol;
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

	private async setPriceChartData() {
		const data = await this.getCandlestickData();
		let ohlc = [],
			volume = [],
			dataLength = data.data.length,
			i = 0;

		for (i; i < dataLength; i += 1) {
			ohlc.push([
				new Date(data.data[i][0] * 1000).toString(), // the date
				data.data[i][1], // open
				data.data[i][2], // high
				data.data[i][3], // low
				data.data[i][4] // close
			]);
			volume.push([
				new Date(data.data[i][0] * 1000).toString(), // the date
				data.data[i][5] // the volume
			]);
		}

		this.priceChartData = { ohlc, volume };
	}

	private async initPriceChart() {
		await this.setPriceChartData();

		this.priceChartOptions = {
			chart: { type: 'area' },
			title: null,

			credits: { enabled: false },
			rangeSelector: {
				buttons: [{
					type: 'month',
					count: 2,
					text: '2m'
				}, {
					type: 'all',
					count: 1,
					text: 'All'
				}],
				selected: 1
			},
			xAxis: [{
				labels: {
					style: {
						color: '#a2afbe'
					}
				},
			}],
			yAxis: [{
				labels: {
					align: 'right',
					style: {
						color: '#a2afbe'
					},
					useHTML: true,
					format: '<span style="font-family: Helvetica Neue">${value}</span>',
				},
				title: {
					text: ''
				},
				resize: {
					enabled: true
				}
			}, {
				labels: {
					align: 'left',
					style: {
						color: '#a2afbe'
					},
					enabled: false,
				},
				title: {
					text: ''
				},
				visible: false,
				resize: {
					enabled: true
				}
			}],
			series: [{
				type: 'candlestick',
				name: 'BTC',
				data: this.priceChartData.ohlc,
				zIndex: 3,
				pointWidth: 8
			}, {
				type: 'column',
				name: 'Volume',
				data: this.priceChartData.volume,
				yAxis: 1,
				zIndex: 2,
				pointWidth: 4
			}]


			/* series: [{
				type: 'candlestick',
				name: 'Line1', 
				data: data, 
				dataGrouping: {
					units: [[ 'week', [1] ], [ 'month', [1, 2, 3, 4, 6] ]]
				}
			}] */
		};
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

	private loadPrice(base:string, quote:string,){
		if(this.currentSymbol.gio){
			this.tradeService
			.getPriceByPair(base,quote)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}
				this.orderPrice = res.data;
				this.orderPrice = this.orderPrice.toFixed(8);
			});
		}
		this.orderPrice = 0;
		this.orderPrice = this.orderPrice.toFixed(8);
		return;
		
	}

	public getBalance(): void {
		if(this.isLoggedIn){
			this.walletsService
				.getMe()
				.subscribe(res => {
					if (!res.success) {
						alert(res.message);
						return;
					}
					this.MyWallets = res.data;
					this.baseWallet = this.MyWallets.find(x => x.coin.shortName == this.currentSymbol.baseAsset);
					this.quoteWallet = this.MyWallets.find(x => x.coin.shortName == this.currentSymbol.quoteAsset);

					this.baseAsset = this.baseWallet.balance.toFixed(8);
					this.quoteAsset = this.quoteWallet.balance.toFixed(8);
					//this.calcMaxMyBalance(this.MyWallets);
				});
		}
	}

	public convertToNumber(){
		this.baseAsset = Number(this.baseAsset);
		this.quoteAsset = Number(this.quoteAsset);
		this.orderTotal = Number(this.orderTotal);
		this.orderPrice = Number(this.orderPrice);
		this.orderAmount =   Number(this.orderAmount);
	}

	public convertToFloat(){
		this.baseAsset =  this.baseAsset.toFixed(8);
		this.quoteAsset =  this.quoteAsset.toFixed(8);
		this.orderTotal =  this.orderTotal.toFixed(8);
		this.orderPrice =  this.orderPrice.toFixed(8);
		this.orderAmount =  this.orderAmount.toFixed(8);
	}

	public calcMaxMyBalance(myWallets: UserWallet[]){
		
			
				//if(this.currentSymbol){
				//	this.maxBaseAsset = myWallets.find(x => x.coin.shortName == this.currentSymbol.baseAsset).balance;
				//	this.maxQuoteAsset = myWallets.find(x => x.coin.shortName == this.currentSymbol.quoteAsset).balance;
			//	}
			
		// this.maxBaseAsset = 0.005;
		// this.maxQuoteAsset = 0.005;
			
	}

	public calcAccets(){
		this.convertToNumber();
		
		if(this.orderPrice!=0){
			this.quoteAsset = (this.baseAsset / this.orderPrice);
			this.orderAmount = this.quoteAsset;
		}
		this.orderTotal = this.baseAsset;
		if(this.orderPrice == 0){
			this.orderTotal = 0;
		}
		this.convertToFloat();
	}

	private calcWithNewPrice() {
		setTimeout(() => {
			this.convertToNumber();
			this.orderPrice = this.tradeForm.controls['price'].value;
			this.baseAsset = (this.quoteAsset * this.orderPrice);

			if (this.orderPrice != 0){
				this.quoteAsset = (this.baseAsset / this.orderPrice);
				//this.orderAmount = this.quoteAsset;
			}

			this.orderTotal = this.baseAsset;
			this.baseAsset =  this.baseAsset.toFixed(8);
			this.quoteAsset =  this.quoteAsset.toFixed(8);
			this.orderAmount = this.orderAmount.toFixed(8);
			this.orderTotal =  this.orderTotal.toFixed(8);
		}, 500);
	}

	public calcBaseAss(decr?: boolean) {
		this.convertToNumber();
		if(!decr){
			this.baseAsset += 0.001;
			// if(this.orderType == OrderType.Buy){
			// 	if(this.baseAsset > this.maxBaseAsset){
			// 		this.baseAsset = this.maxBaseAsset;
			// 	}
			// }
		} else{
			this.baseAsset -= 0.001;
			if(this.baseAsset < 0.00000001){
				this.baseAsset = 0;
			}
		}
		if(this.tradeForm.value['type'] == OrderType.Sell){
			if(this.orderPrice!=0){
				this.quoteAsset = (this.baseAsset / this.orderPrice);
				this.orderAmount = this.quoteAsset;
			}
			this.orderTotal = this.baseAsset;
			if(this.orderPrice == 0){
				this.orderTotal = 0;
			}
			//if(this.quoteAsset > this.maxQuoteAsset){
			//	this.quoteAsset = this.maxQuoteAsset;
			//	this.baseAsset = (this.quoteAsset * this.orderPrice);
			//	this.orderAmount = this.quoteAsset;
			//	this.orderTotal = this.orderPrice* this.baseAsset;
			//	this.convertToFloat();
			//	return;
			//}
		}
		this.convertToFloat();
		this.calcAccets();
	}

	public calcQuoteAss(decr?: boolean){
		this.convertToNumber();
		if(!decr){
			this.quoteAsset += 0.001;
			//if(this.orderType == OrderType.Sell){
			//	if(this.quoteAsset > this.maxQuoteAsset){
			//		this.quoteAsset = this.maxQuoteAsset;
			//	}
			//}
			this.orderAmount = this.quoteAsset;
		} else{
			this.quoteAsset -= 0.001;
			if(this.quoteAsset < 0.00000001){
				this.quoteAsset = 0;
				this.orderAmount = this.quoteAsset;
			}
		}
		this.baseAsset = (this.quoteAsset * this.orderPrice);
		//if(this.orderType == OrderType.Buy){
		//	if(this.baseAsset > this.maxBaseAsset){
		//		this.baseAsset = this.maxBaseAsset;
		//	}
		//}
		this.convertToFloat();
		this.calcAccets();
	}

	public  calcWithNewAmount(){
		setTimeout(() => {
			this.convertToNumber();
			this.quoteAsset = this.tradeForm.controls['amount'].value;
			this.orderAmount = this.tradeForm.controls['amount'].value;
			this.baseAsset = this.quoteAsset * this.orderPrice;

			if (this.tradeForm.value['type'] == OrderType.Buy){
				//	if(this.baseAsset > this.maxBaseAsset){
				//		this.baseAsset = this.maxBaseAsset;
				//	}

				if(this.orderPrice != 0){
					this.quoteAsset = this.baseAsset / this.orderPrice;
				}
				
				this.orderAmount = this.quoteAsset;
				this.orderTotal = this.baseAsset;
				// this.baseAsset = 
				// this.orderTotal =
			}

			if(this.tradeForm.value['type'] == OrderType.Sell){
				//	if(this.quoteAsset > this.maxQuoteAsset){
				//	this.quoteAsset = this.maxQuoteAsset;
				//		this.orderAmount = this.maxQuoteAsset;
				//	}
				this.baseAsset = this.quoteAsset * this.orderPrice;
				this.orderTotal = this.baseAsset;
			}

			this.orderTotal = this.baseAsset;
			this.baseAsset = this.baseAsset.toFixed(8);
			this.quoteAsset =  this.quoteAsset.toFixed(8);
			this.orderTotal =  this.orderTotal.toFixed(8);
			this.orderAmount = this.orderAmount.toFixed(8);
		}, 500);
	}

	public calcWithNewTotal() {
		setTimeout(() => {
			this.convertToNumber();
			this.orderTotal = this.tradeForm.controls['total'].value;
			this.baseAsset = this.tradeForm.controls['total'].value;

			if(this.tradeForm.value['type'] == OrderType.Buy){
				//	if(this.baseAsset > this.maxBaseAsset){
				//		this.baseAsset = this.maxBaseAsset;
				//	}
				if(this.orderPrice!=0){
					this.quoteAsset = this.baseAsset / this.orderPrice;
				}
				this.orderAmount = this.quoteAsset;
				this.orderTotal = this.baseAsset;
			}

			if (this.quoteAsset != 0) {
				this.orderPrice = (this.orderTotal / this.quoteAsset);
			} else{
				this.orderPrice =  this.orderPrice;
			}

		if (this.tradeForm.value['type'] == OrderType.Sell) {
			//	if(this.quoteAsset > this.maxQuoteAsset){
			//		this.quoteAsset = this.maxQuoteAsset;
			//		this.orderAmount = this.maxQuoteAsset;
				// }
			this.baseAsset = this.quoteAsset * this.orderPrice;
			this.orderTotal = this.baseAsset;
		}

			this.orderAmount = this.quoteAsset;
			this.baseAsset =  this.baseAsset.toFixed(8);
			this.orderPrice =  this.orderPrice.toFixed(8);
			this.orderAmount =  this.orderAmount.toFixed(8);
			this.quoteAsset =  this.quoteAsset.toFixed(8);
		}, 500);
	}

	public maxValues(act: string){
		if (act == "buy") {
			this.buyCellBtn = "PLACE BUY ORDER"
			this.buyCell = false;
			this.tradeForm.controls['type'].setValue(OrderType.Buy);
		}
		if (act == "sell") {
			this.buyCellBtn = "PLACE SELL ORDER"
			this.buyCell = true;
			this.tradeForm.controls['type'].setValue(OrderType.Sell);
		}
		this.convertToNumber();
		if(this.tradeForm.value['type'] == OrderType.Buy){
			// if(this.baseAsset > this.maxBaseAsset){
			// 	this.baseAsset = this.maxBaseAsset;
			// }
			if(this.orderPrice != 0){
				this.quoteAsset = this.baseAsset / this.orderPrice;
			}
			this.orderAmount = this.quoteAsset;
			this.orderTotal = this.baseAsset;
			
		}

		if(this.tradeForm.value['type'] == OrderType.Sell){
			// if(this.quoteAsset > this.maxQuoteAsset){
			// 	this.quoteAsset = this.maxQuoteAsset;
			// }
			this.orderAmount = this.quoteAsset;
			this.baseAsset = this.quoteAsset * this.orderPrice;
			this.orderTotal = this.baseAsset;
		}
		this.convertToFloat();

		console.log(this.tradeForm.value);
	}
}
