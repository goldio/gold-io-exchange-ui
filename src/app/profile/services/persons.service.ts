import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/common/models/response';
import { Person } from 'src/app/common/models';

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
}