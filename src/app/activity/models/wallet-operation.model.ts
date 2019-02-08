import { WalletOperationType } from 'src/app/common/enums/wallet-operation-type.model';
import { Coin } from 'src/app/common/models';

export class WallenOperation{
    public coin: Coin;
    public date: Date;
    public confirmations: number;
    public amount: number;
    public type:  WalletOperationType;
}

