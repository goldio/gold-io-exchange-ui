import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from "../../common/services/base-http.service";
import { DataResponse } from "../../common/models/response";
import { Person } from "../../common/models";
import { UpdatePersonRequest } from "../../common/models/request";

@Injectable()
export class PersonsService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getMe(): Observable<DataResponse<Person>> {
        return this.get(`${this.apiUrl}/persons/me`)
            .map(response => response.json());
    }

    public updateMe(request: UpdatePersonRequest): Observable<DataResponse<Person>> {
        return this.post(`${this.apiUrl}/persons/me/update`, request)
            .map(response => response.json());
    }
}