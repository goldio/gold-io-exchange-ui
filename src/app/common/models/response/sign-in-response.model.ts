import { ResponseModel } from './response.model';
import { SecurityToken } from '../security-token.model';

export class SignInResponse extends ResponseModel {
    public securityToken: SecurityToken;
}