import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/common/models/response';
import { Person } from 'src/app/common/models';
import { UpdatePersonRequest } from 'src/app/common/models/request';
import { UserSession } from '../models/user-session.model';
import { WallenOperation } from '../models/wallet-operation.model';

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