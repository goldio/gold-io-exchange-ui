import { SubscribeType } from '../../enums';

export class SubscribeRequest {
    public type: SubscribeType;
    public message: string;
}