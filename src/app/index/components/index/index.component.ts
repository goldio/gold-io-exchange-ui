import { Component, OnInit } from '@angular/core';

import { WebsocketService } from 'src/app/common/services/websocket.service';
import { TradeHistoryItem, OrderBookItem } from '../../models';
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
export class IndexComponent implements OnInit {

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
		if (!symbol) {
			this.currentSymbol = this.symbols.find(x => x.symbol == "ETHBTC");
		} else {
			this.currentSymbol = symbol;
		}

		this.loadTrades();
		this.openDepthStream();
	}

	private loadTrades(): void {
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


}
