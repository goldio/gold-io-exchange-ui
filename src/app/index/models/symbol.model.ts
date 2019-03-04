import { Pair } from './pair.model';

export class Symbol {
    public baseAsset: string;
    public quoteAsset: string;
    public icebergAllowed: boolean;
    public status: string;
    public symbol: string;
    public gio: boolean = false;

    public static fromPair(pair: Pair): Symbol {
        const symbol = new Symbol();

        symbol.baseAsset = pair.baseAsset.shortName;
        symbol.quoteAsset = pair.quoteAsset.shortName;
        symbol.icebergAllowed = false;
        symbol.status = "trade";
        symbol.symbol = pair.symbol;
        symbol.gio = true;

        return symbol;
    }
}