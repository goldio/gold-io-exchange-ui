import { BaseModel } from './base.model';
import { Coin } from './coin.model';
import { OrderType, OrderStatus } from '../enums';

export class Order extends BaseModel {
    public baseAsset: Coin;
    public quoteAsset: Coin;
    public amount: number;
    public price: number;
    public type: OrderType;
    public status: OrderStatus;
    public time: Date;
}