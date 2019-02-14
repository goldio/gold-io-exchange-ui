import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/common/models/response';
import { Person } from 'src/app/common/models';
import { UpdatePersonRequest } from 'src/app/common/models/request';
import { ApiKey } from '../models/apiKey.model';
import { CreateUpdateKeyRequest } from '../models/create-update-keyRequest.model';

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