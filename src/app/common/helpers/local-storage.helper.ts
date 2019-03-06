import { SecurityToken } from '../models';

export class LocalStorageHelper {
    public static getToken(): SecurityToken {
        const token = localStorage.getItem('Authorization');
        if (!token) return;

        return JSON.parse(token);
    }

    public static saveToken(token: SecurityToken): boolean {
        if (!token) return false;

        localStorage.setItem('Authorization', JSON.stringify(token));
        return true;
    }

    public static removeToken(): void {
        localStorage.removeItem('Authorization');
    }



    // public static getSymbols(): SecurityToken {
    //     const Symbols = localStorage.getItem('Symbols');
    //     if (!Symbols) return;

    //     return JSON.parse(Symbols);
    // }

    // public static saveSymbols(Symbols: string): boolean {
    //     if (!Symbols) return false;

    //     localStorage.setItem('Symbols', JSON.stringify(Symbols));
    //     return true;
    // }

    // public static removeSymbols(): void {
    //     localStorage.removeItem('Symbols');
    // }
}