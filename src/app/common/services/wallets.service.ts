import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/common/models/response';
import { UserWallet } from 'src/app/common/models';

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