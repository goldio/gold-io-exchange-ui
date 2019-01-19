import { ResponseModel } from './response.model';

export class DataResponse<T> extends ResponseModel {
    public data: T;
}