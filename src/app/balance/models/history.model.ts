import { UserWallet, CoinAddress } from 'src/app/common/models';
import { WalletOperationStatus } from 'src/app/common/enums/wallet-operation-status.model';

export class BalanceHistory{
    public userWallet:UserWallet;
    public time: Date;
    public address: CoinAddress;
    public amount: number;
    public confirmations: number;
    public userWalletOperationStatus:WalletOperationStatus;
}