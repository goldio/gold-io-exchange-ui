import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TradeHistoryItem } from 'src/app/index/models';
import { ExchangeInfo } from 'src/app/index/models/exchange-info.model';
import { OrderBookResponse } from '../models/binance/order-book-response.model';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class BinanceService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    /* public getSimpleData(): Observable<any> {
        return this.http.get(`/highcharts/samples/data/aapl-ohlc.json`)
            .map(response => response.json());
    } */

    public getTrades(symbol: string): Observable<any> {
        return this.get(`${this.apiUrl}/binance/trades/${symbol.replace('/', '')}`)
            .map(response => response.json());
    }   

    public getExchangeInfo(): Observable<ExchangeInfo> {
        return this.get(`/binance/api/v1/exchangeInfo`)
            .map(response => response.json());
    }

    public getCandlestickData(symbol: string): Observable<any> {
        return this.get(`${this.apiUrl}/binance/klines/${symbol.replace('/', '')}`)
            .map(response => response.json());
    }

    public getOrderBook(symbol: string, limit: number = 500): Observable<any> {
        return this.get(`${this.apiUrl}/binance/depth/${symbol.replace('/', '')}`)
            .map(response => response.json());
    }
}