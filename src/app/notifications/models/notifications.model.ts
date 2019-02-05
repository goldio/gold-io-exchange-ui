import { User } from 'src/app/common/models';
import { ResponseModel } from 'src/app/common/models/response';

export class Notifications extends ResponseModel{
    public ID: number;
    public user: User;
    public emailNews: boolean;
    public emailLogins: boolean;
    public emailCoinsRemovals: boolean;
    public emailMarketRemovals: boolean;
}