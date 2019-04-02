import { UserWallet, CoinAddress } from "../../common/models";
import { WalletOperationStatus } from "../../common/enums/wallet-operation-status.enum";

export class BalanceHistory {
    public userWallet: UserWallet;
    public time: Date;
    public address: CoinAddress;
    public amount: number;
    public confirmations: number;
    public userWalletOperationStatus: WalletOperationStatus;
}