import { BaseModel } from './base.model';
import { City } from './city.model';
import { User } from './user.model';

export class Person extends BaseModel {
    public fullName: string;
    public birthDate: Date;
    public email: string;
    public phoneNumber: string;
    public city: City;
    public address: string;
    public user: User;
}