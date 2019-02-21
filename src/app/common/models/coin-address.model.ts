import { BaseModel } from './base.model';
import { UserWallet } from './user-wallet.model';

export class CoinAddress extends BaseModel {
    public publicAddress: string;
    public wallet: UserWallet;
}