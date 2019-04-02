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
import { BinanceService } from 'src/app/common/services/binance.service';
import { AuthService } from 'src/app/common/services/auth.service';

import { TradeService } from 'src/app/common/services/trade.service';
import { OrderType, Theme, OrderStatus } from 'src/app/common/enums';
import { WalletsService } from 'src/app/common/services/wallets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/common/services/theme.service';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { UserWallet, Order, Price, WebSocketMessage } from 'src/app/common/models';
import symbols from './symbols';
import { Pair } from '../../models/pair.model';
import { OpenOrdersResponse } from 'src/app/common/models/response';
import { CryptoHelper } from 'src/app/common/helpers';
import { CreateOrderRequest } from 'src/app/common/models/request';

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

	public pairs: Pair[];
	public currentPair: Pair;
	public currentPrice: Price;

	public baseWallet: UserWallet;
	public quoteWallet: UserWallet;

	public openOrders = {
		buy: new Array<Order>(),
		sell: new Array<Order>()
	};

	public closedOrders: Order[];
	public myOpenOrders: Order[];

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
			.subscribe(msg => {
				if (!msg) {
					return;
				}

				const message = JSON.parse(msg.data) as WebSocketMessage;

				if (message.type == "orderBookUpdate") {
					const order = Order.create(JSON.parse(message.message));

					if (`${order.baseAsset.shortName}/${order.quoteAsset.shortName}` != this.currentPair.symbol) {
						return;
					}

					if (order.status == OrderStatus.Open) {
						if (order.type == OrderType.Buy) {
							let existOrder = this.openOrders.buy.find(x => x.id == order.id);

							if (!existOrder) {
								this.openOrders.buy.push(order);
							} else {
								existOrder = order;
							}
						} else if (order.type == OrderType.Sell) {
							let existOrder = this.openOrders.sell.find(x => x.id == order.id);

							if (!existOrder) {
								this.openOrders.sell.push(order);
							} else {
								existOrder = order;
							}
						}
					} else if (order.status == OrderStatus.Closed) {
						if (order.type == OrderType.Buy) {
							this.openOrders.buy = this.openOrders.buy.filter(x => x.id != order.id);
						} else if (order.type == OrderType.Sell) {
							this.openOrders.sell = this.openOrders.sell.filter(x => x.id != order.id);
						}

						this.closedOrders.push(order);
					}
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

	// Set current pair
	public async setPair(pair: Pair) {
		this.currencyBox = false;
		this.currentPair = pair;

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

		this.initTradeForm();
		this.connectWebSocket();
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

		console.log(this.currentPair);
		console.log(response.data);
		const result = {
			baseWallet: response.data.find(x => x.coin.shortName == this.currentPair.baseAsset.shortName),
			quoteWallet: response.data.find(x => x.coin.shortName == this.currentPair.quoteAsset.shortName)
		};
		console.log(result);

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
			});
	}
}
