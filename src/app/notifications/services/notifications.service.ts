import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Notifications } from '../models/notifications.model';
import { NotificationsUpdate } from '../models/notifications-update.model';
import { BaseHttpService } from "../../common/services/base-http.service";
import { DataResponse } from "../../common/models/response";

@Injectable()
export class NotificationsService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getNotifications(): Observable<DataResponse<Notifications>> {
        return this.get(`${this.apiUrl}/persons/me/notifications`)
            .map(response => response.json());
    }  
    
    public updateNotifications(request: NotificationsUpdate): Observable<DataResponse<Notifications>> {
        return this.post(`${this.apiUrl}/persons/me/notifications/update`, request)
            .map(response => response.json());
    }
}