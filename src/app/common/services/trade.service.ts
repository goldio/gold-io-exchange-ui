import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { BaseHttpService } from './base-http.service';
import { DataResponse, ResponseModel, OpenOrdersResponse, PriceResponse } from '../models/response';
import { Order } from '../models';
import { CreateOrderRequest } from '../models/request';
import { Pair } from "../../index/models/pair.model";
import { PairState } from "../../index/models/pairState.model";

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

    public getMyOpenOrders(pair: Pair): Observable<DataResponse<Order[]>> {
        return this.get(`${this.apiUrl}/trade/pairs/${pair.symbol.replace("/", ".")}/orders/my/open`)
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

    public getStats(pair: Pair): Observable<DataResponse<PairState>> {
        return this.get(`${this.apiUrl}/trade/pairs/${pair.symbol.replace("/", ".")}/stats`)
            .map(response => response.json());
    }

}