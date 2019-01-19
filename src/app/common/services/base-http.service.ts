import { environment } from 'src/environments/environment';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { RequestHelper, LocalStorageHelper } from '../helpers';

export class BaseHttpService {
    public apiUrl: string = environment.apiEndpoint;

    constructor(
        private http: Http
    ) {
        
    }

    protected get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (!options)
            options = RequestHelper.constructRequestOptions();

        const securityToken = LocalStorageHelper.getToken();
        if (securityToken) {
            options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        }

        return this.http.get(url, options);
    }

    protected post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (!options)
            options = RequestHelper.constructRequestOptions();

        const securityToken = LocalStorageHelper.getToken();
        if (securityToken) {
            options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        }

        return this.http.post(url, body, options);
    }
}