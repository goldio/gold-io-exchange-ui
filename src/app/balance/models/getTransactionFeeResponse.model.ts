import { ResponseModel } from 'src/app/common/models/response';

export class GetTransactionFeeResponse extends ResponseModel{
    public fee: number;
    public finalAmount: number;
}