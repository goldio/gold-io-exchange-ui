import { RequestOptionsArgs, RequestOptions, Headers, URLSearchParams } from '@angular/http';

export class RequestHelper {
    static constructRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (!options) {
            options = new RequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }

        return options;
    }

    static buildQuery(params: any): URLSearchParams {
        const res = new URLSearchParams();
        
        for(let param in params) {
            res.set(param, params[param]);
        }

        return res;
    }
}