import { environment } from 'src/environments/environment';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { RequestHelper, LocalStorageHelper } from '../helpers';

export class BaseHttpService {
    private http: Http;
    public apiUrl: string = environment.apiEndpoint;

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (!options)
            options = RequestHelper.constructRequestOptions();

        const securityToken = LocalStorageHelper.getToken();
        if (securityToken) {
            options.headers.set('Authorization', securityToken.token)
        }

        return this.http.get(url, options);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (!options)
            options = RequestHelper.constructRequestOptions();

        const securityToken = LocalStorageHelper.getToken();
        if (securityToken) {
            options.headers.set('Authorization', securityToken.token)
        }

        return this.http.post(url, body, options);
    }
}