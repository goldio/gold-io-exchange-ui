import { OrderType } from '../../enums';

export class CreateOrderRequest {
    public baseAsset: string;
    public quoteAsset: string;
    public type: OrderType;
    public price: number;
    public amount: number;
}