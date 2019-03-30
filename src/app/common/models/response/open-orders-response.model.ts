import { ResponseModel } from './response.model';
import { Order } from '../order.model';

export class OpenOrdersResponse extends ResponseModel {
    public buyOrders: Order[];
    public sellOrders: Order[];
}