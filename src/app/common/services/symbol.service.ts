// import { Injectable } from "@angular/core";
// import { BaseHttpService } from './base-http.service';
// import { Http } from '@angular/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { LocalStorageHelper } from '../helpers';
// import * as moment from 'moment';
// import { Router } from '@angular/router';
// import { SignInRequest, SignUpRequest } from '../models/request';
// import { SignInResponse } from '../models/response/sign-in-response.model';
// import { ResponseModel } from '../models/response';
// import { ActivationRequest } from '../models/request/activation-request.model';
// import { RecoveryRequest } from '../models/request/recovery-requers.model';
// import { ChangeRecoveryPasswordRequest } from '../models/request/change-recovery-password-request.model';

// @Injectable()
// export class SymbolService extends BaseHttpService {
//     private symbolSubject: BehaviorSubject<boolean>;

//     // Check is user logged in
//     private checkAuth() {
//         const symbol = LocalStorageHelper.getSymbols();
//         this.symbolSubject = new BehaviorSubject<boolean>(symbol ? true : false);
//     }

//     // Logout method
//     public logout() {
//         LocalStorageHelper.removeSymbols();
//     }

//     // Check is user logged in now
//     public get isLoggedIn(): Observable<boolean> {
//         return this.symbolSubject.asObservable()
//             .map(logged => {
//                 if (!logged) {
//                     return false;
//                 }

//                 if (this.expired) {
//                     this.logout();
//                     return false;
//                 }

//                 return true;
//             });
//     }

//     // Check is token expired
//     public get expired(): boolean {
//         const token = LocalStorageHelper.getToken();

//         const now = moment.utc();
//         const expiration = moment.utc(token.expireDate);
//         const isTokenExpired = expiration.isBefore(now);

//         const result = ((!token) || (!token.expireDate) || isTokenExpired);
//         return result;
//     }

//     // Save token to localStorage
//     private saveToken(response: SignInResponse): SignInResponse {
//         if (!response) return;
        
//         if (response.securityToken) {
//             LocalStorageHelper.saveToken(response.securityToken);
//             this.symbolSubject.next(true);
//         }

//         return response;
//     }

//     constructor(
//         http: Http,
//         private router: Router
//     ) {
//         super(http);

//         this.checkAuth();
//     }

//     public registration(request: SignUpRequest): Observable<ResponseModel> {
//         return this.post(`${this.apiUrl}/users/sign-up`, request)
//             .map(response => response.json());
//     }

//     public authorization(request: SignInRequest): Observable<SignInResponse> {
//         return this.post(`${this.apiUrl}/users/sign-in`, request)
//             .map(response => this.saveToken(response.json()));
//     }

//     public activation(request: ActivationRequest): Observable<ResponseModel> {
//         return this.post(`${this.apiUrl}/users/activation`, request)
//             .map(response => response.json());
//     }

//     public recoveryEmail(request: RecoveryRequest): Observable<ResponseModel> {
//         return this.post(`${this.apiUrl}/users/recovery`, request)
//             .map(response => response.json());
//     }

//     public recoveryPassword(request: ChangeRecoveryPasswordRequest): Observable<ResponseModel> {
//         return this.post(`${this.apiUrl}/users/recovery/password`, request)
//             .map(response => response.json());
//     }
// }