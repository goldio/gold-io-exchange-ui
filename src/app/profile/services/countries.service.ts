import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { BaseHttpService } from 'src/app/common/services/base-http.service';
import { DataResponse } from 'src/app/common/models/response';
import { Country, City } from 'src/app/common/models';

@Injectable()
export class CountriesService extends BaseHttpService {
    constructor(http: Http) {
        super(http);
    }

    public getCountries(): Observable<DataResponse<Country[]>> {
        return this.get(`${this.apiUrl}/countries`)
            .map(response => response.json());
    }

    public getCountryCities(countryID: number): Observable<DataResponse<City[]>> {
        return this.get(`${this.apiUrl}/countries/${countryID}/cities`)
            .map(response => response.json());
    }
}