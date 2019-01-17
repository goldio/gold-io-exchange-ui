export class LocalStorageHelper {
    public static getToken(): Token {
        const token = localStorage.getItem('Authorization');
        if (!token) return;

        return JSON.parse(token);
    }

    public static saveToken(token: Token): boolean {
        if (!token) return false;

        localStorage.setItem('Authorization', JSON.stringify(token));
        return true;
    }

    public static removeToken() {
        localStorage.removeItem('Authorization');
    }
}