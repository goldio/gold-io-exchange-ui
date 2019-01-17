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
}