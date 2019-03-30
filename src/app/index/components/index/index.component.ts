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
import { Pair } from '../../models/pair.model';

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

	private initTradeForm(): void {
		this.tradeForm = new FormGroup({
			baseAsset: new FormControl("ETH", [Validators.required]),
			quoteAsset: new FormControl("BTC", [Validators.required]),
			type: new FormControl(OrderType.Buy, [Validators.required]),
			price: new FormControl(null, [Validators.required]),
			amount: new FormControl(null, [Validators.required]),
			total: new FormControl(null, [Validators.required]),
		});
	}

	public submitOrder(form: FormGroup): void {
		console.log(form);
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

	ngOnInit(): void {
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				this.isLoggedIn = logged;
			});

		new Swiper('.swiper-container', {
			scrollContainer: true
		});

		this.initSearchForm();
		this.initTradeForm();
	}

	// Load trade pairs
	public loadPairs(): void {
		this.tradeService
			.getPairs()
			.subscribe(res => {
				if (!res.success) {
					console.log(res.message);
					return;
				}

				this.pairs = res.data;
			});
	}

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
}
