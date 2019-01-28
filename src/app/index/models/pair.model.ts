import { Coin } from 'src/app/common/models';

export class Pair {
    public symbol : string;
    public baseAsset: Coin
    public quoteAsset: Coin;
}