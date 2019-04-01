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

        order.baseAsset = new Coin();
        order.baseAsset.name = o.BaseAsset.Name;
        order.baseAsset.shortName = o.BaseAsset.ShortName;
        order.baseAsset.isCrypto = o.BaseAsset.IsCrypto;

        order.quoteAsset = new Coin();
        order.quoteAsset.name = o.QuoteAsset.Name;
        order.quoteAsset.shortName = o.QuoteAsset.ShortName;
        order.quoteAsset.isCrypto = o.QuoteAsset.IsCrypto;

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
    public BaseAsset: WebSocketCoin;
    public QuoteAsset: WebSocketCoin;
}

export class WebSocketCoin {
    public Name: string;
    public ShortName: string;
    public IsCrypto: boolean;
}