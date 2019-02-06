import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TradeHistoryItem } from 'src/app/index/models';
import { ExchangeInfo } from 'src/app/index/models/exchange-info.model';
import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { Notifications } from '../models/notifications.model';
import { NotificationsUpdate } from '../models/notifications-update.model';

@Injectable()
export class NotificationsService extends BaseHttpService {
    constructor(
        http: Http
    ) {
        super(http);
    }

    public getNotifications(): Observable<Notifications> {
        return this.get(`${this.apiUrl}/persons/me/notifications`)
            .map(response => response.json());
    }  
    
    public updateNotifications(request: NotificationsUpdate): Observable<Notifications> {
        return this.post(`${this.apiUrl}/persons/me/notifications/update`, request)
            .map(response => response.json());
    }
}