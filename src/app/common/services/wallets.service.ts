import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from "./base-http.service";
import { DataResponse } from "../models/response";
import { UserWallet } from "../models";

@Injectable()
export class WalletsService extends BaseHttpService {
    constructor(http: Http) {
        super(http);
    }

    public getMe(): Observable<DataResponse<UserWallet[]>> {
        return this.get(`${this.apiUrl}/wallets/me`)
            .map(response => response.json());
    }
}