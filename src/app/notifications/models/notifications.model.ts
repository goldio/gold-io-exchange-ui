import { ResponseModel } from "../../common/models/response";
import { User } from "../../common/models";

export class Notifications extends ResponseModel {
    public ID: number;
    public user: User;
    public emailNews: boolean;
    public emailLogins: boolean;
    public emailCoinsRemovals: boolean;
    public emailMarketRemovals: boolean;
}