import { Injectable } from "@angular/core";
import { BaseHttpService } from './base-http.service';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageHelper } from '../helpers';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SignInRequest } from '../models/request';
import { SignInResponse } from '../models/response/sign-in-response.model';

@Injectable()
export class AuthService extends BaseHttpService {
    private loginSubject: BehaviorSubject<boolean>;

    constructor(
        private http: Http,
        private router: Router
    ) {
        super();

        this.checkAuth();
    }

    public authorization(request: SignInRequest): Observable<SignInResponse> {
        return this.http.post(`${this.apiUrl}/account/sign-in`, request)
            .map(response => this.saveToken(response.json()));
    }

    private saveToken(response: SignInResponse): SignInResponse {
        if (!response) return;
        
        if (response.securityToken) {
            LocalStorageHelper.saveToken(response.securityToken);
            this.loginSubject.next(true);
        }

        return response;
    }

    public logout() {
        LocalStorageHelper.removeToken();
        this.loginSubject.next(false);
        this.router.navigate(['/authorization']);
    }

    private checkAuth() {
        const token = LocalStorageHelper.getToken();
        this.loginSubject = new BehaviorSubject<boolean>(token ? true : false);
    }

    public get isLoggedIn(): Observable<boolean> {
        return this.loginSubject.asObservable()
            .map(logged => {
                if (!logged) {
                    return false;
                }

                if (this.expired) {
                    this.logout();
                    return false;
                }

                return true;
            });
    }

    public get expired(): boolean {
        const token = LocalStorageHelper.getToken();

        const now = moment.utc();
        const expiration = moment.utc(token.expireDate);
        const isTokenExpired = expiration.isBefore(now);

        const result = ((!token) || (!token.expireDate) || isTokenExpired);
        return result;
    }
}