import { Injectable } from "@angular/core";
import { BaseHttpService } from './base-http.service';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageHelper } from '../helpers';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SignInRequest, SignUpRequest } from '../models/request';
import { SignInResponse } from '../models/response/sign-in-response.model';
import { ResponseModel } from '../models/response';

@Injectable()
export class AuthService extends BaseHttpService {

    private loginSubject: BehaviorSubject<boolean>;

    // Check is user logged in
    private checkAuth() {
        const token = LocalStorageHelper.getToken();
        this.loginSubject = new BehaviorSubject<boolean>(token ? true : false);
    }

    // Logout method
    public logout() {
        LocalStorageHelper.removeToken();

        this.loginSubject.next(false);
        this.router.navigate(['/authorization']);
    }

    // Check is user logged in now
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

    // Check is token expired
    public get expired(): boolean {
        const token = LocalStorageHelper.getToken();

        const now = moment.utc();
        const expiration = moment.utc(token.expireDate);
        const isTokenExpired = expiration.isBefore(now);

        const result = ((!token) || (!token.expireDate) || isTokenExpired);
        return result;
    }

    // Save token to localStorage
    private saveToken(response: SignInResponse): SignInResponse {
        if (!response) return;
        
        if (response.securityToken) {
            LocalStorageHelper.saveToken(response.securityToken);
            this.loginSubject.next(true);
        }

        return response;
    }

    constructor(
        private router: Router
    ) {
        super();

        this.checkAuth();
    }

    public registration(request: SignUpRequest): Observable<ResponseModel> {
        return this.post(`${this.apiUrl}/users/sign-up`, request)
            .map(response => response.json());
    }

    public authorization(request: SignInRequest): Observable<SignInResponse> {
        return this.post(`${this.apiUrl}/users/sign-in`, request)
            .map(response => this.saveToken(response.json()));
    }
}