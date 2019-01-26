import { BaseModel } from './base.model';
import { User } from './user.model';
import { Coin } from './coin.model';

export class Wallet extends BaseModel {
    public balance: number;
    public onOrders: number;
    public vtcValue: number;
    public user: User;
    public coin: Coin;
}