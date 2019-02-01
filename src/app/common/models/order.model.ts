import { BaseModel } from './base.model';
import { Coin } from './coin.model';
import { OrderType, OrderStatus } from '../enums';
import { User } from './user.model';

export class Order extends BaseModel {
    public user: User;
    public baseAsset: Coin;
    public quoteAsset: Coin;
    public amount: number;
    public balance: number;
    public price: number;
    public type: OrderType;
    public status: OrderStatus;
    public time: Date;
}