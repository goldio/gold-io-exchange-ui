import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataResponse, ResponseModel } from 'src/app/common/models/response';
import { Person } from 'src/app/common/models';
import { UpdatePersonRequest } from 'src/app/common/models/request';
import { ChangePassword } from '../models/changePassword.model';

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