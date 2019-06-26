import { OrderType, OrderSide } from '../../enums';

export class CreateOrderRequest {
    public baseAsset: string;
    public quoteAsset: string;
    public type: OrderType;
    public side: OrderSide;
    public limit: number;
    public price: number;
    public amount: number;
}