import { ApiKeyRole } from "../../common/enums";

export class ApiKey{
    public id : number;
    public publicKey : string;
    public role: ApiKeyRole;
    public expired: Date;
}