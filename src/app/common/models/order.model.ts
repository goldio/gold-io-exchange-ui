import { BaseModel } from './base.model';
import { Coin } from './coin.model';
import { OrderType, OrderSide, OrderStatus } from '../enums';
import { User } from './user.model';

export class Order extends BaseModel {
    public user: User;
    public baseAsset: Coin;
    public quoteAsset: Coin;
    public amount: number;
    public balance: number;
    public price: number;
    public limit: number;
    public type: OrderType;
    public side: OrderSide;
    public status: OrderStatus;
    public time: Date;

    public static create(o: WebSocketOrder) {
        const order = new Order();
        order.id = o.Id;
        order.amount = o.Amount;
        order.balance = o.Balance;
        order.price = o.Price;
        order.limit = o.Limit;
        order.type = o.Type;
        order.side = o.Side;
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

        order.user = new User();
        order.user.id = o.User.Id;
        order.user.login = o.User.Login;

        return order;
    }
}

class WebSocketOrder {
    public Id: number;
    public Amount: number;
    public Balance: number;
    public Price: number;
    public Limit: number;
    public Type: OrderType;
    public Side: OrderSide;
    public Status: OrderStatus;
    public Time: Date; 
    public BaseAsset: WebSocketCoin;
    public QuoteAsset: WebSocketCoin;
    public User: WebSocketUser;
}

export class WebSocketCoin {
    public Name: string;
    public ShortName: string;
    public IsCrypto: boolean;
}

export class WebSocketUser {
    public Id: number;
    public Login: string;
}