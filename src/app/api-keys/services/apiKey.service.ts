import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ApiKey } from '../models/apiKey.model';
import { CreateUpdateKeyRequest } from '../models/create-update-keyRequest.model';
import { BaseHttpService } from "../../common/services/base-http.service";
import { DataResponse } from "../../common/models/response";

@Injectable()
export class ApiService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getApi(): Observable<DataResponse<ApiKey[]>> {
        return this.get(`${this.apiUrl}/apiKeys`)
            .map(response => response.json());
    }

    public updateApi(request: CreateUpdateKeyRequest, id: number): Observable<DataResponse<ApiKey[]>> {
        return this.put(`${this.apiUrl}/apiKeys/${id}/update`, request )
            .map(response => response.json());
    }

    public generateNewKey(request: CreateUpdateKeyRequest): Observable<DataResponse<ApiKey[]>> {
        return this.post(`${this.apiUrl}/apiKeys`, request)
            .map(response => response.json());
    }

    public deleteApiKey(id: number): Observable<DataResponse<ApiKey[]>> {
        return this.post(`${this.apiUrl}/apiKeys/${id}/delete`, id)
            .map(response => response.json());
    }
}