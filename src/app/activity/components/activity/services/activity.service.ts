import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from "../../../../common/services/base-http.service";
import { DataResponse } from "../../../../common/models/response";
import { UserSession } from "../../../models/user-session.model";

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