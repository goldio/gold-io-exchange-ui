import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TradeHistoryItem } from 'src/app/index/models';
import { ExchangeInfo } from 'src/app/index/models/exchange-info.model';
import { OrderBookResponse } from '../models/binance/order-book-response.model';
import { BaseHttpService } from './base-http.service';
import { Pair } from 'src/app/index/models/pair.model';
import { DataResponse } from '../models/response';

@Injectable()
export class TradeService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getPair(): Observable<DataResponse<Pair[]>> {
        return this.get(`${this.apiUrl}/coins/pairs`)
            .map(response => response.json());
    }
    
}