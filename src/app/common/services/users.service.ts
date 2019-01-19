import { Injectable } from "@angular/core";
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { DataResponse } from '../models/response';
import { User } from '../models';
import { Http } from '@angular/http';

@Injectable()
export class UsersService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getMe(): Observable<DataResponse<User>> {
        return this.get(`${this.apiUrl}/users/me`)
            .map(response => response.json());
    }
}