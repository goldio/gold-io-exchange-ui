import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DepositResponse } from '../models/deposit-response.model';
import { WithdrawlRequest } from '../models/withdrawl-request.model';
import { BalanceHistory } from '../models/history.model';
import { GetTransactionFeeResponse } from '../models/getTransactionFeeResponse.model';
import { GetTransactionFeeRequest } from '../models/getTransactionFeeRequest.model';
import { BaseHttpService } from "../../common/services/base-http.service";
import { ResponseModel, DataResponse } from "../../common/models/response";

@Injectable()
export class BalanceService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }


    public getDeposit(walletID: number): Observable<DepositResponse> {
        return this.post(`${this.apiUrl}/wallets/${walletID}/deposit`, walletID)
            .map(response => response.json());
    }

    public withdrawlRequest(request: WithdrawlRequest, id:number): Observable<ResponseModel> {
        return this.post(`${this.apiUrl}/wallets/${id}/withdraw`, request)
            .map(response => response.json());
    }

    public getHistoryDeposit(): Observable<DataResponse<BalanceHistory[]>> {
        return this.get(`${this.apiUrl}/wallets/me/history/deposit`)
            .map(response => response.json());
    }

    public getHistoryWithdrawal(): Observable<DataResponse<BalanceHistory[]>> {
        return this.get(`${this.apiUrl}/wallets/me/history/withdraw`)
            .map(response => response.json());
    }

    public getFee(request: GetTransactionFeeRequest): Observable<GetTransactionFeeResponse> {
        return this.post(`${this.apiUrl}/wallets/fee`, request)
            .map(response => response.json());
    }
    
}