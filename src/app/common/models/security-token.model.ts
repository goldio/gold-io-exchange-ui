import { UserRole } from '../enums';

export class SecurityToken {
    public token: string;
    public role: UserRole;
    public expireDate: Date;
}