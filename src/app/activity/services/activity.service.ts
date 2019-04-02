import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { UserSession } from '../models/user-session.model';
import { WallenOperation } from '../models/wallet-operation.model';
import { BaseHttpService } from "../../common/services/base-http.service";
import { DataResponse } from "../../common/models/response";

@Injectable()
export class ActivityService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getLogin(): Observable<DataResponse<UserSession[]>> {
        return this.get(`${this.apiUrl}/users/me/activity`)
            .map(response => response.json());
    }

    public getOperations(): Observable<DataResponse<WallenOperation[]>> {
        return this.get(`${this.apiUrl}/users/me/activity`)
            .map(response => response.json());
    }

    // public updateApi(request: CreateUpdateKeyRequest): Observable<DataResponse<ApiKey[]>> {
    //     return this.put(`${this.apiUrl}/apiKeys`, request)
    //         .map(response => response.json());
    // }

    // public generateNewKey(request: CreateUpdateKeyRequest): Observable<DataResponse<ApiKey[]>> {
    //     return this.post(`${this.apiUrl}/apiKeys`, request)
    //         .map(response => response.json());
    // }

    // public deleteApiKey(id: number): Observable<DataResponse<ApiKey[]>> {
    //     return this.delete(`${this.apiUrl}/apiKeys?id=${id}`)
    //         .map(response => response.json());
    // }
}