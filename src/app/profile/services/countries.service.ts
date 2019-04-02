import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from "../../common/services/base-http.service";
import { DataResponse } from "../../common/models/response";
import { Country, City } from "../../common/models";

@Injectable()
export class CountriesService extends BaseHttpService {
    constructor(http: Http) {
        super(http);
    }

    public getCountries(): Observable<DataResponse<Country[]>> {
        return this.get(`${this.apiUrl}/countries`)
            .map(response => response.json());
    }

    public getCities(): Observable<DataResponse<City[]>> {
        return this.get(`${this.apiUrl}/cities`)
            .map(response => response.json());
    }

    public getCountryCities(countryID: number): Observable<DataResponse<City[]>> {
        return this.get(`${this.apiUrl}/countries/${countryID}/cities`)
            .map(response => response.json());
    }
}