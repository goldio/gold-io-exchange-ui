import { User } from 'src/app/common/models';
import { ActivityType } from 'src/app/common/enums/activity-type.enum';

export class UserSession{
    public id: number;
    public time:Date;
    public ipAddress: string;
    public userAgent: string;
    public accessToken: string;
    public type: ActivityType;
    public user:User;
}