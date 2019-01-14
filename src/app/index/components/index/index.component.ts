import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import { WebsocketService } from 'src/app/common/services/websocket.service';
import { TradeHistoryItem, OrderBookItem, CandlestickItem } from '../../models';
import { BinanceService } from 'src/app/common/services/binance.service';
import { DateHelper } from 'src/app/common/helpers';
import { Symbol } from '../../models/symbol.model';

declare var TradingView: any;
declare var Swiper: any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	private priceChart: am4charts.XYChart;
	private depthChart: am4charts.XYChart;

	public chart: boolean = false;
	public currencyBox: boolean = false;
	public buyCell: boolean = false;
	public responciveTabs = 2;

	public symbols: Symbol[];
	public currentSymbol: Symbol;

	public tradeHistory: TradeHistoryItem[] = [];
	public orderBookBids: OrderBookItem[] = [];
	public orderBookAsks: OrderBookItem[] = [];

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
				console.log(msg);
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
						});
					}
				}
			});
	}

	constructor(
		private websocketService: WebsocketService,
		private binanceService: BinanceService
	) {
		/* this.binanceService
			.getSimpleData()
			.subscribe(res => {
				this._chart = new Chart({
					chart: {
						type: 'line'
					},
					title: {
						text: 'Linechart'
					},
					credits: {
						enabled: false
					},
					series: [
						{
							type: 'candlestick',
							name: 'Line 1',
							data: res
						}
					]
				});
			}); */
	}

	ngOnInit() {
		new Swiper('.swiper-container', {
			scrollContainer: true
		});

		this.loadSymbols();

		// new TradingView.widget({
		//   "autosize": true,
		//   "symbol": "COINBASE:BTCUSD",
		//   "interval": "D",
		//   "timezone": "Europe/London",
		//   "theme": "Dark",
		//   "style": "9",
		//   "locale": "en",
		//   "toolbar_bg": "rgba(9, 19, 41, 1)",
		//   "enable_publishing": false,
		//   "save_image": false,
		//   "hideideas": true
		// });
	}

	private async getCandlestickData(): Promise<CandlestickItem[]> {
		const symbol = this.currentSymbol ? this.currentSymbol.symbol : "ETHBTC";
		const data = await this.binanceService
			.getCandlestickData(symbol)
			.toPromise();

		const result: CandlestickItem[] = [];
		data.forEach(item => {
			let resItem = new CandlestickItem();
			let date = new Date(item[6]);

			resItem.date = date.toString();
			resItem.open = `${item[1]}`;
			resItem.high = `${item[2]}`;
			resItem.low = `${item[3]}`;
			resItem.close = `${item[4]}`;

			result.push(resItem);
		});

		console.log(data);
		return result;
	}

	private async initPriceChart() {
		const data = await this.getCandlestickData();
		this.priceChart = am4core.create(document.querySelector("#price-chart-box") as HTMLElement, am4charts.XYChart);

		this.priceChart.paddingRight = 20;
		//this.priceChart.dateFormatter.inputDateFormat = "YYYY-MM-dd";

		let dateAxis = this.priceChart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.grid.template.location = 0;

		let valueAxis = this.priceChart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;

		let series = this.priceChart.series.push(new am4charts.CandlestickSeries());
		series.dataFields.dateX = "date";
		series.dataFields.valueY = "close";
		series.dataFields.openValueY = "open";
		series.dataFields.lowValueY = "low";
		series.dataFields.highValueY = "high";
		series.simplifiedProcessing = true;
		series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

		series.riseFromPreviousState.properties.fillOpacity = 1;
		series.dropFromPreviousState.properties.fillOpacity = 0;

		this.priceChart.cursor = new am4charts.XYCursor();

		// a separate series for scrollbar
		let lineSeries = this.priceChart.series.push(new am4charts.LineSeries());
		lineSeries.dataFields.dateX = "date";
		lineSeries.dataFields.valueY = "close";
		// need to set on default state, as initially series is "show"
		lineSeries.defaultState.properties.visible = false;

		// hide from legend too (in case there is one)
		lineSeries.hiddenInLegend = true;
		lineSeries.fillOpacity = 0.5;
		lineSeries.strokeOpacity = 0.5;

		let scrollbarX = new am4charts.XYChartScrollbar();
		scrollbarX.series.push(lineSeries);
		this.priceChart.scrollbarX = scrollbarX;

		this.priceChart.data = data;
		console.log(this.priceChart);
		console.log(data);
	}

	private initDepthChart(): void {
		this.depthChart = am4core.create(document.querySelector("#depth-chart-box") as HTMLElement, am4charts.XYChart);

		// Add data
		this.depthChart.dataSource.url = "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50";
		this.depthChart.dataSource.reloadFrequency = 30000;
		this.depthChart.dataSource.adapter.add("parsedData", function (data) {

			// Function to process (sort and calculate cummulative volume)
			function processData(list, type, desc) {

				// Convert to data points
				for (let i = 0; i < list.length; i++) {
					list[i] = {
						value: Number(list[i][0]),
						volume: Number(list[i][1]),
					}
				}

				// Sort list just in case
				list.sort(function (a, b) {
					if (a.value > b.value) {
						return 1;
					}
					else if (a.value < b.value) {
						return -1;
					}
					else {
						return 0;
					}
				});

				// Calculate cummulative volume
				if (desc) {
					for (let i = list.length - 1; i >= 0; i--) {
						if (i < (list.length - 1)) {
							list[i].totalvolume = list[i + 1].totalvolume + list[i].volume;
						}
						else {
							list[i].totalvolume = list[i].volume;
						}
						let dp = {};
						dp["value"] = list[i].value;
						dp[type + "volume"] = list[i].volume;
						dp[type + "totalvolume"] = list[i].totalvolume;
						res.unshift(dp);
					}
				}
				else {
					for (let i = 0; i < list.length; i++) {
						if (i > 0) {
							list[i].totalvolume = list[i - 1].totalvolume + list[i].volume;
						}
						else {
							list[i].totalvolume = list[i].volume;
						}
						let dp = {};
						dp["value"] = list[i].value;
						dp[type + "volume"] = list[i].volume;
						dp[type + "totalvolume"] = list[i].totalvolume;
						res.push(dp);
					}
				}

			}

			// Init
			let res = [];
			processData(data.bids, "bids", true);
			processData(data.asks, "asks", false);

			return res;
		});

		// Set up precision for numbers
		this.depthChart.numberFormatter.numberFormat = "#,###.####";

		// Create axes
		let xAxis = this.depthChart.xAxes.push(new am4charts.CategoryAxis());
		xAxis.dataFields.category = "value";
		//xAxis.renderer.grid.template.location = 0;
		xAxis.renderer.minGridDistance = 50;
		xAxis.title.text = "Price (BTC/ETH)";

		let yAxis = this.depthChart.yAxes.push(new am4charts.ValueAxis());
		yAxis.title.text = "Volume";

		// Create series
		let series = this.depthChart.series.push(new am4charts.StepLineSeries());
		series.dataFields.categoryX = "value";
		series.dataFields.valueY = "bidstotalvolume";
		series.strokeWidth = 2;
		series.stroke = am4core.color("#0f0");
		series.fill = series.stroke;
		series.fillOpacity = 0.1;
		series.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]"

		let series2 = this.depthChart.series.push(new am4charts.StepLineSeries());
		series2.dataFields.categoryX = "value";
		series2.dataFields.valueY = "askstotalvolume";
		series2.strokeWidth = 2;
		series2.stroke = am4core.color("#f00");
		series2.fill = series2.stroke;
		series2.fillOpacity = 0.1;
		series2.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]"

		let series3 = this.depthChart.series.push(new am4charts.ColumnSeries());
		series3.dataFields.categoryX = "value";
		series3.dataFields.valueY = "bidsvolume";
		series3.strokeWidth = 0;
		series3.fill = am4core.color("#000");
		series3.fillOpacity = 0.2;

		let series4 = this.depthChart.series.push(new am4charts.ColumnSeries());
		series4.dataFields.categoryX = "value";
		series4.dataFields.valueY = "asksvolume";
		series4.strokeWidth = 0;
		series4.fill = am4core.color("#000");
		series4.fillOpacity = 0.2;

		// Add cursor
		this.depthChart.cursor = new am4charts.XYCursor();
	}

	ngAfterViewInit() {
		// this.initPriceChart();
		// this.initDepthChart();
		new TradingView.widget({
			'container_id': 'price-chart-box1',
			"autosize": true,
			"symbol": "COINBASE:BTCUSD",
			"interval": "D",
			"timezone": "Europe/London",
			"theme": "Light",
			"style": "9",
			"locale": "en",
			"toolbar_bg": "rgba(255, 255, 255, 1)",
			"enable_publishing": false,
			"save_image": false,
			"hideideas": true
		  });
		//   depth-chart-box1
		new TradingView.widget({
			'container_id': 'depth-chart-box1',
			"autosize": true,
			"symbol": "KRAKEN:XRPUSD",
			"interval": "D",
			"timezone": "Europe/London",
			"theme": "Dark",
			"style": "9",
			"locale": "en",
			"toolbar_bg": "rgba(9, 19, 41, 1)",
			"enable_publishing": false,
			"save_image": false,
			"hideideas": true
		  });
	}
}
