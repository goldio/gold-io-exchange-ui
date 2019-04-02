import { CoinAddress } from "../../common/models";
import { WalletOperationStatus } from "../../common/enums/wallet-operation-status.enum";

export class WallenOperation {
    public address: CoinAddress;
    public time: Date;
    public confirmations: number;
    public amount: number;
    public status: WalletOperationStatus
}

