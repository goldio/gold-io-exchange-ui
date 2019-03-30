export class Price {
    public price: number;
    public isHigher: boolean;

    constructor(price?: number, isHigher?: boolean) {
        if (!price) {
            this.price = 0;
        } else {
            this.price = price;
        }

        if (!isHigher) {
            this.isHigher = true;
        } else {
            this.isHigher = isHigher;
        }
    }
}