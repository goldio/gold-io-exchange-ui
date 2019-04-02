import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ChangePassword } from '../models/changePassword.model';
import { BaseHttpService } from "../../common/services/base-http.service";
import { ResponseModel } from "../../common/models/response";

@Injectable()
export class SecurityService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }


    public updatePassword(request: ChangePassword): Observable<ResponseModel> {
        return this.post(`${this.apiUrl}/users/me/security/update`, request)
            .map(response => response.json());
    }
}