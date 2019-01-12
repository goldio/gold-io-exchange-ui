import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TradeHistoryItem } from 'src/app/index/models';

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
}