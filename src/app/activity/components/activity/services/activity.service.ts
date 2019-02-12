import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/common/models/response';
import { Person } from 'src/app/common/models';
import { UpdatePersonRequest } from 'src/app/common/models/request';
import { UserSession } from 'src/app/activity/models/user-session.model';
import { WallenOperation } from 'src/app/activity/models/wallet-operation.model';

@Injectable()
export class ActivityService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getlogin(): Observable<DataResponse<UserSession[]>> {
        return this.get(`${this.apiUrl}/users/me/activity`)
            .map(response => response.json());
    }

}