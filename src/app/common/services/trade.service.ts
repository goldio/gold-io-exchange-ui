import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TradeHistoryItem } from 'src/app/index/models';
import { ExchangeInfo } from 'src/app/index/models/exchange-info.model';
import { OrderBookResponse } from '../models/binance/order-book-response.model';
import { BaseHttpService } from './base-http.service';
import { DataResponse, ResponseModel, OpenOrdersResponse, PriceResponse } from '../models/response';
import { Pair } from 'src/app/index/models/pair.model';
import { Order } from '../models';
import { CreateOrderRequest } from '../models/request';

@Injectable()
export class TradeService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getPairs(): Observable<DataResponse<Pair[]>> {
        return this.get(`${this.apiUrl}/trade/pairs`)
            .map(response => response.json());
    }

    public getClosedOrders(pair: Pair): Observable<DataResponse<Order[]>> {
        return this.get(`${this.apiUrl}/trade/pairs/${pair.symbol.replace("/", ".")}/orders/closed`)
            .map(response => response.json());
    }
    
    public getOpenOrders(pair: Pair): Observable<OpenOrdersResponse> {
        return this.get(`${this.apiUrl}/trade/pairs/${pair.symbol.replace("/", ".")}/orders/open`)
            .map(response => response.json());
    }

    public getPriceByPair(pair: Pair): Observable<PriceResponse> {
        return this.get(`${this.apiUrl}/trade/pairs/${pair.symbol.replace("/", ".")}/price`)
            .map(response => response.json());
    }

    public createOrder(request: CreateOrderRequest): Observable<ResponseModel> {
        return this.post(`${this.apiUrl}/trade/orders`, request)
            .map(response => response.json());
    }
}