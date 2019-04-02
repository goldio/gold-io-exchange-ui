import { ResponseModel } from "../../common/models/response";

export class GetTransactionFeeResponse extends ResponseModel {
    public fee: number;
    public finalAmount: number;
}