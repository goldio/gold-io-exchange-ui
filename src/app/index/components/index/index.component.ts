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
import { TradeHistoryItem, OrderBookItem, CandlestickItem } from '../../models';
import { BinanceService } from 'src/app/common/services/binance.service';
import { DateHelper } from 'src/app/common/helpers';
import { Symbol } from '../../models/symbol.model';
import { AuthService } from 'src/app/common/services/auth.service';

declare var TradingView: any;
declare var Swiper: any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	public isLoggedIn: boolean;

	public Highcharts = Highcharts;
	public priceChartOptions: Highcharts.Options;
	public depthChartOptions: Highcharts.Options;

	public chart: boolean = false;
	public currencyBox: boolean = false;
	public buyCell: boolean = false;
	public responciveTabs = 2;

	public symbols: Symbol[];
	public currentSymbol: Symbol;

	public tradeHistory: TradeHistoryItem[] = [];
	public orderBookBids: OrderBookItem[] = [];
	public orderBookAsks: OrderBookItem[] = [];

	public depthChartData: any;
	public dataDepthAsks;
	public dataDepthBids;

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
		convertedData.sort(function(first, second) {
			return first.x - second.x;
		});
		return convertedData;
	}

	private updateMainData(updatedElem: any, type: string) {
		let finded = false;
		let val = Number.parseFloat(updatedElem[0]);
		let series = this.Highcharts.charts[0].series.find(x => x.name == type);
	
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
			this.dataDepthAsks.push([ Number.parseFloat(updatedElem[0]), Number.parseFloat(updatedElem[1]) ]);
			console.log(this.dataDepthAsks);
		} else if (type == 'bids') {
			this.dataDepthBids.push([ Number.parseFloat(updatedElem[0]), Number.parseFloat(updatedElem[1]) ]);
			console.log(this.dataDepthBids);
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
				this.setSymbol();
			});
	}

	private setSymbol(symbol?: Symbol): void {
		this.currencyBox = false;

		if (!symbol) {
			this.currentSymbol = this.symbols.find(x => x.symbol == "ETHBTC");
		} else {
			this.currentSymbol = symbol;
		}

		this.loadTrades();
		this.openDepthStream();
	}

	private loadTrades(): void {
		this.tradeHistory = [];

		this.binanceService
			.getTrades(this.currentSymbol.symbol)
			.subscribe(res => {
				res.forEach(item => {
					this.tradeHistory
						.push({
							price: item.price,
							qty: item.qty,
							isBuyerMaker: item.isBuyerMaker,
							time: DateHelper.getTimeFromDate(new Date(item.time))
						});
				});
			});
	}

	private openDepthStream(): void {
		this.websocketService
			.openDepthStream(this.currentSymbol.symbol);

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

							this.orderBookBids
								.push({
									price: item[0],
									amount: item[1],
									total: `${item[0] * item[1]}`
								});

							/* this.updateMainData(item, 'bids'); */
						});

						messageData['a'].forEach(item => {
							if (this.orderBookAsks.length > 19) {
								this.orderBookAsks.shift();
							}

							this.orderBookAsks
								.push({
									price: item[0],
									amount: item[1],
									total: `${item[0] * item[1]}`
								});

							/* this.updateMainData(item, 'asks'); */
						});
					}
				}
			});
	}

	constructor(
		private authService: AuthService,
		private websocketService: WebsocketService,
		private binanceService: BinanceService
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
	}

	private async getCandlestickData() {
		const symbol = this.currentSymbol ? this.currentSymbol.symbol : "ETHBTC";
		const data = await this.binanceService
			.getCandlestickData(symbol)
			.toPromise();

		const result = [];
		data.forEach(item => {
			let resItem = [];
			resItem.push(item[0]);
			resItem.push(parseFloat(item[1]));
			resItem.push(parseFloat(item[2]));
			resItem.push(parseFloat(item[3]));
			resItem.push(parseFloat(item[4]));
			resItem.push(parseFloat(item[5]));

			result.push(resItem);
		});

		return result;
	}

	private async getOrderBook() {
		const symbol = this.currentSymbol ? this.currentSymbol.symbol : "ETHBTC";
		const data = await this.binanceService
			.getOrderBook(symbol)
			.toPromise();

		const asks = [];
		data.asks.forEach(ask => {
			asks.push([parseFloat(ask[0]), parseFloat(ask[1])]);
		});

		const bids = [];
		data.bids.forEach(bid => {
			bids.push([parseFloat(bid[0]), parseFloat(bid[1])]);
		});

		return { asks: asks, bids: bids };
	}

	private async initPriceChart() {
		const data = await this.getCandlestickData();
		let ohlc = [],
            volume = [],
            dataLength = data.length,
			i = 0;
			
		for (i; i < dataLength; i += 1) {
            ohlc.push([
                new Date(data[i][0] * 1000).toString(), // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);
            volume.push([
                new Date(data[i][0] * 1000).toString(), // the date
                data[i][5] // the volume
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
        this.dataDepthBids = {};
        let summBids = 0;
        data.bids.forEach(el => {
            if (el[0] > minAxisExtr && el[0] < maxAxisExtr) {
                summBids += Number(el[1]);
                this.dataDepthBids[el[0]] = summBids;
            }
        });
        let chartBidsData = this.convertToGraphData(this.dataDepthBids);

        //формирование правого графика
        this.dataDepthAsks = {};
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
