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

    public static create(o: WebSocketOrder) {
        const order = new Order();
        order.amount = o.Amount;
        order.balance = o.Balance;
        order.price = o.Price;
        order.type = o.Type;
        order.status = o.Status;
        order.time = o.Time;

        return order;
    }
}

class WebSocketOrder {
    public Amount: number;
    public Balance: number;
    public Price: number;
    public Type: OrderType;
    public Status: OrderStatus;
    public Time: Date; 
}