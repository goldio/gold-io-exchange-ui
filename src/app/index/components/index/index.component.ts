import { Component, OnInit, AfterViewInit } from '@angular/core';

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

import symbols from './symbols';
import { Pair } from '../../models/pair.model';
import { TradeService } from 'src/app/common/services/trade.service';
import { OrderType } from 'src/app/common/enums';
import { Coin, Wallet } from 'src/app/common/models';
import { WalletsService } from 'src/app/common/services/wallets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateOrderRequest } from 'src/app/common/models/request';
// import { runInThisContext } from 'vm';

declare var TradingView: any;
declare var Swiper: any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {

	public isLoggedIn: boolean;


	public tradeForm: FormGroup;
	public startNumb = "0.0000000"
	public baseAsset:any = 0;
	public quoteAsset:any = 0;
	public orderPrice:any = 0;
	public orderAmount:any = 0;
	public orderTotal:any = 0;
	public wallets: Wallet[];

	public Highcharts = Highcharts;
	public priceChartOptions: Highcharts.Options;
	public depthChartOptions: Highcharts.Options;

	public chart: boolean = false;
	public currencyBox: boolean = false;
	public buyCell: boolean = false;
	public buyCellBtn = "PLACE BUY ORDER";
	public responciveTabs = 2;

	public tradeHistory: TradeHistoryItem[] = [];
	public orderBookBids: OrderBookItem[] = [];
	public orderBookAsks: OrderBookItem[] = [];

	public depthChartData: any;
	public dataDepthAsks: any[];
	public dataDepthBids: any[];

	public symbols: Symbol[];
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

				const coins = ["BTC", "ETH", "EOS"];

				coins.forEach(coin => {
					let symbol = new Symbol();
					symbol.baseAsset = "GIO";
					symbol.quoteAsset = coin;
					symbol.symbol = `GIO${coin}`;
					symbol.gio = true;

					this.symbols.unshift(symbol);
				});

				this.setSymbol();
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
		this.openDepthStream();
		this.initTradeForm();

		if (this.Highcharts.charts[0]) {
			this.Highcharts.charts[0].update(this.priceChartOptions, true);
		}

		if (this.Highcharts.charts[1]) {
			this.Highcharts.charts[1].update(this.depthChartOptions, true);
		}
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
	}

	private openDepthStream(): void {
		this.websocketService.closeDepthStream();
		this.websocketService.closeLocalDepthStream();

		if (this.currentSymbol.gio) {
			this.websocketService.openLocalDepthStream();
			this.websocketService
				.localDepthStreamMessage
				.subscribe(msg => {
					console.log(msg);
				});

			return;
		}

		this.websocketService.openDepthStream(this.currentSymbol.symbol);

		this.websocketService
			.depthStreamMessage
			.subscribe(msg => {
				if (msg) {
					const messageData = JSON.parse(msg.data);

					if (messageData['e'] == "depthUpdate") {
						messageData['b'].forEach(item => {
							if (this.orderBookBids.length > 19) {
								this.orderBookBids.shift();
							}

							let aItem = {
								price: parseFloat(item[0]).toFixed(8),
								amount: parseFloat(item[1]).toFixed(8),
								total: `${(item[0] * item[1]).toFixed(8)}`
							};

							this.orderBookBids.push(aItem);
							this.updateMainData(item, 'bids');
						});

						messageData['a'].forEach(item => {
							if (this.orderBookAsks.length > 19) {
								this.orderBookAsks.shift();
							}

							let aItem = {
								price: parseFloat(item[0]).toFixed(8),
								amount: parseFloat(item[1]).toFixed(8),
								total: `${(item[0] * item[1]).toFixed(8)}`
							};

							this.orderBookAsks.push(aItem);

							/* this.updateMainData(item, 'asks'); */
						});
					}
				}
			});
	}

	private calcQuoteAsset(decr?: boolean): void {
		if (!decr) {
			this.quoteAsset = Number(this.quoteAsset);
			this.quoteAsset += 0.001;
			if (this.quoteAsset > this.wallets.find(x => x.coin.shortName == this.currentSymbol.quoteAsset).balance) {
				this.quoteAsset -= 0.001;
				this.quoteAsset = this.quoteAsset.toFixed(8);
				
			}
		} else {
			this.quoteAsset -= 0.001;
			if (this.quoteAsset < 0.00000001) {
				this.quoteAsset = 0;
				this.quoteAsset = this.quoteAsset.toFixed(8);
				
			}
		}
		this.baseAsset = Number(this.baseAsset);
		this.baseAsset = (this.quoteAsset*this.orderPrice).toFixed(8);
		this.orderTotal = (this.baseAsset * this.orderPrice).toFixed(8);
		this.quoteAsset = this.quoteAsset.toFixed(8);
	}

	private calcBaseAsset(decr?: boolean): void {
		if (!decr) {
			this.baseAsset = Number(this.baseAsset);
			this.baseAsset += 0.001;
			if (this.baseAsset > this.wallets.find(x => x.coin.shortName == this.currentSymbol.baseAsset).balance) {
				this.baseAsset -= 0.001;
				this.baseAsset = this.baseAsset.toFixed(8);
				
			}
		} else {
			this.baseAsset -= 0.001;
			if (this.baseAsset < 0.00000001) {
				this.baseAsset = 0;
				this.baseAsset = this.baseAsset.toFixed(8);
				
			}
		}
		this.quoteAsset = Number(this.quoteAsset);
		this.quoteAsset= (this.baseAsset/this.orderPrice).toFixed(8);
		this.orderTotal = (this.baseAsset * this.orderPrice).toFixed(8);
		this.baseAsset = this.baseAsset.toFixed(8);
	}
	private calcWithNewPrice(){
		this.orderPrice = this.tradeForm.controls['price'].value;
		this.baseAsset = Number(this.baseAsset);
		this.orderPrice = Number(this.orderPrice);
		this.quoteAsset = Number(this.quoteAsset);
		this.baseAsset = (this.quoteAsset * this.orderPrice).toFixed(8);
		this.quoteAsset = (this.quoteAsset * this.quoteAsset).toFixed(8);
		this.orderTotal = (this.baseAsset * this.orderPrice).toFixed(8);
	}

	private getBalance(): void {
		this.walletsService
			.getMe()
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}
				this.wallets = res.data;
				console.log(this.wallets);
			});
	}

	private changeBuySell(act: string) {
		if (act == "buy") {
			this.buyCellBtn = "PLACE BUY ORDER"
			this.buyCell = false;
		}
		if (act == "sell") {
			this.buyCellBtn = "PLACE SELL ORDER"
			this.buyCell = true;
		}
	}

	private initTradeForm(): void {
		this.tradeForm = new FormGroup({
			baseAsset: new FormControl(this.currentSymbol.baseAsset, [Validators.required]),
			quoteAsset: new FormControl(this.currentSymbol.quoteAsset, [Validators.required]),
			type: new FormControl(this.buyCell, [Validators.required]),
			price: new FormControl(this.orderPrice, [Validators.required]),
			amount: new FormControl(this.quoteAsset, [Validators.required]),
			total: new FormControl(this.orderPrice * this.quoteAsset, [Validators.required]),
		});
	}

	public submitOrder(form: FormGroup): void {
		console.log(form);
		if (form.invalid) {
			alert('form invalid');
			return;
		}
		alert('form valid');
		
		this.tradeService
			.createOrder(form.value)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
				}

				this.loadOrderBook();
				this.loadTrades();
			});

		// const req = new order();

		// req.baseAsset = ;
		// // req.quoteAsset = ;
		// req.act = ;

		// req.price = form.value['price'];
		// req.amount = form.value['amount'];
		// req.total = form.value['total'];

		// this.order...
		// 	....(req)
		// 	.subscribe(res => {
		// 		if (!res.success) {
		// 			alert(res.message);
		// 			return;
		// 		}
		// 		alert('OK');
		// 	});
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
				// this.tradeForm.setValue({
				// 	price : res.data,
				// 	amount : "0.0000001",
				// 	total: "0.0000000"
				// });
				this.startNumb = "0.0000000"
			});
		}
		this.orderPrice = 0;
		return;
		
	}

	constructor(
		private authService: AuthService,
		private websocketService: WebsocketService,
		private binanceService: BinanceService,
		private tradeService: TradeService,
		private walletsService: WalletsService
	) {

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

		this.initPriceChart();
		this.initDepthChart();
		this.getBalance();

		this.baseAsset = this.baseAsset.toFixed(8);
		this.quoteAsset = this.quoteAsset.toFixed(8);
		this.orderPrice = this.orderPrice.toFixed(8);
		this.orderAmount = this.orderAmount.toFixed(8);
		this.orderTotal = this.orderTotal.toFixed(8);

	}

	private async getCandlestickData() {
		const symbol = this.currentSymbol ? this.currentSymbol.symbol : "ETHBTC";
		const data = await this.binanceService
			.getCandlestickData(symbol)
			.toPromise();

		return data;
	}

	private async getOrderBook() {
		const symbol = this.currentSymbol ? this.currentSymbol.symbol : "ETHBTC";
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

	private async initPriceChart() {
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
				data: ohlc,
				zIndex: 3,
				pointWidth: 8
			}, {
				type: 'column',
				name: 'Volume',
				data: volume,
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

	private async initDepthChart() {
		const data = await this.getOrderBook();
		const bestBid = this.getBestBid(data.bids);
		const bestAsk = this.getBestAsk(data.asks);
		const midPrice = (bestAsk + bestBid) / 2;

		let minAxisExtr = midPrice - 2000;
		let curMinAxisExtr = minAxisExtr;

		let maxAxisExtr = midPrice + 2000;
		let curMaxAxisExtr = maxAxisExtr;

		//формирование левого графика
		this.dataDepthBids = [];
		let summBids = 0;
		data.bids.forEach(el => {
			if (el[0] > minAxisExtr && el[0] < maxAxisExtr) {
				summBids += Number(el[1]);
				this.dataDepthBids[el[0]] = summBids;
			}
		});
		let chartBidsData = this.convertToGraphData(this.dataDepthBids);

		//формирование правого графика
		this.dataDepthAsks = [];
		let summAsks = 0;
		data.asks.forEach(el => {
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

		this.depthChartOptions = {
			chart: { type: 'area', zoomType: 'xy', animation: true },
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
