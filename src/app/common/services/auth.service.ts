import { Injectable } from "@angular/core";
import { BaseHttpService } from './base-http.service';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService extends BaseHttpService {
    private loginSubject: BehaviorSubject<boolean>;

    constructor(
        private http: Http
    ) {
        super();
    }
}