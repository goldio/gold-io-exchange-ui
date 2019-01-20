import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TradeHistoryItem } from 'src/app/index/models';
import { ExchangeInfo } from 'src/app/index/models/exchange-info.model';
import { OrderBookResponse } from '../models/binance/order-book-response.model';

@Injectable()
export class BinanceService {
    constructor(
        private http: Http
    ) {}

    /* public getSimpleData(): Observable<any> {
        return this.http.get(`/highcharts/samples/data/aapl-ohlc.json`)
            .map(response => response.json());
    } */

    public getTrades(symbol: string): Observable<TradeHistoryItem[]> {
        return this.http.get(`/binance/api/v1/trades?symbol=${symbol}`)
            .map(response => response.json());
    }

    public getExchangeInfo(): Observable<ExchangeInfo> {
        return this.http.get(`/binance/api/v1/exchangeInfo`)
            .map(response => response.json());
    }

    public getCandlestickData(symbol: string): Observable<any> {
        return this.http.get(`/binance/api/v1/klines?symbol=${symbol}&interval=1w`)
            .map(response => response.json());
    }

    public getOrderBook(symbol: string, limit: number = 1000): Observable<OrderBookResponse> {
        return this.http.get(`/binance/api/v1/depth?symbol=BTCUSDT&limit=${limit}`)
            .map(response => response.json());
    }
}