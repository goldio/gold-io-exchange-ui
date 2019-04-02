import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { RequestHelper, LocalStorageHelper } from '../helpers';
import { environment } from '../../../environments/environment';

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

    protected put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (!options)
            options = RequestHelper.constructRequestOptions();

        const securityToken = LocalStorageHelper.getToken();
        if (securityToken) {
            options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        }

        return this.http.post(url, body, options);
    }

    protected delete(url: string,  options?: RequestOptionsArgs): Observable<Response> {
        if (!options)
            options = RequestHelper.constructRequestOptions();

        const securityToken = LocalStorageHelper.getToken();
        if (securityToken) {
            options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        }

        return this.http.delete(url,  options);
    }
}