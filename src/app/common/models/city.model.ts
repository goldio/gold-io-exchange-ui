import { BaseModel } from './base.model';
import { Country } from './country.model';

export class City extends BaseModel {
    public name: string;
    public country: Country;
}