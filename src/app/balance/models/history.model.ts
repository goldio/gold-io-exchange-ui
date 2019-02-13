import { UserWallet } from 'src/app/common/models';
import { WalletOperationType } from 'src/app/common/enums/wallet-operation-type.model';
import { WalletOperationStatus } from 'src/app/common/enums/wallet-operation-status.model';

export class BalanceHistory{
    public userWallet:UserWallet;
    public time: Date;
    public address:string;
    public amount: number;
    public userWalletOperationType: WalletOperationType; 
    public confirmations: number;
    public userWalletOperationStatus:WalletOperationStatus;
}