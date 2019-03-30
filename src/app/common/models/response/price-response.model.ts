import { ResponseModel } from '.';

export class PriceResponse extends ResponseModel {
    public price: number;
    public isHigher: boolean;
}