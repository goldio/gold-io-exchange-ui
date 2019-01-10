export class TradeHistoryItem {
    constructor(
        public price: string,
        public amount: string,
        public time: string,
        public isBuyerMaker: boolean
    ) {}
}