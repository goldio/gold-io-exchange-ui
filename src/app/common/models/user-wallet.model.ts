import { BaseModel } from './base.model';
import { User } from './user.model';
import { Coin } from './coin.model';

export class UserWallet extends BaseModel {
    // public balance: number;
    // public onOrders: number;
    // public vtcValue: number;


    public user: User;
    public coin: Coin;
    public availableBalance: number;
    public inOrders: number;
    public totalBalance: number;
    public cost: number;
}