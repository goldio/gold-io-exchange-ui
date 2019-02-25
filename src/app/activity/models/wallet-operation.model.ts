import { CoinAddress } from 'src/app/common/models';
import { WalletOperationStatus } from 'src/app/common/enums/wallet-operation-status.enum';

export class WallenOperation {
    public address: CoinAddress;
    public time: Date;
    public confirmations: number;
    public amount: number;
    public status: WalletOperationStatus
}

