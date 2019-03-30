export class CryptoHelper {
    public static normalizeAmountStr(value: number | string): string {
        let result = ``;

        if (typeof value === 'number') {
            result = value.toString()
        } else {
            result = value;
        }

        result = result.replace(" ", "");
        result = result.replace(",", ".");
        
        return result;
    }

    public static changeAmountType(amount: number | string): number | string {
        if (typeof amount === 'number') {
            return amount.toString();
        }

        if (typeof amount === 'string') {
            return parseFloat(amount);
        }
    }

    public static getInteger(value: number): number {
        return parseInt(value.toString());
    }

    public static getDecimal(value: number): number {
        let str = value.toString();
        str = CryptoHelper.normalizeAmountStr(str);

        let zeroPos = str.indexOf('.');
        if (zeroPos == -1) return 0;

        str = str.slice(zeroPos);
        return +str;
    }

    public static transformAmount(amount: number | string): string {
        if (!amount) return `0`;

        let value = amount;
		if (typeof value === 'number') value = value.toString();

		value = CryptoHelper.normalizeAmountStr(value);
        value = parseFloat(value);

        let int = parseInt(value.toString()).toString();
        let dec = CryptoHelper.getDecimal(value).toFixed(2).substr(2, 2);

        let result = ``;

        if (value >= 1000000) {
            result = `${int.substr(0, 1)} ${int.substr(1, 3)} ${int.substr(4, 3)}.${dec}`;
            return result;
        }
        
		if (value >= 100000) {
            result = `${int.substr(0, 3)} ${int.substr(3, 3)}.${dec}`;
            return result;
		}

		if (value >= 10000) {
            result = `${int.substr(0, 2)} ${int.substr(2, 3)}.${dec}`;
            return result;
		}

		if (value >= 1000) {
            result = `${int.substr(0, 1)} ${int.substr(1, 3)}.${dec}`;
            return result;
		}

		if (value >= 0) {
            result = `${int}.${dec}`;
            return result;
		}
    }
}