import { ActivityType } from "../../common/enums/activity-type.enum";
import { User } from "../../common/models";

export class UserSession{
    public id: number;
    public time:Date;
    public ipAddress: string;
    public userAgent: string;
    public accessToken: string;
    public type: ActivityType;
    public user:User;
}