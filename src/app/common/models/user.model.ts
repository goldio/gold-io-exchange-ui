import { BaseModel } from './base.model';

export class User extends BaseModel {
    public login: string;
    public registrationDate: Date;
    public isActive : boolean;
}