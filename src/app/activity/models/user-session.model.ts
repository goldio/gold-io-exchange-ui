import { User } from 'src/app/common/models';
import { ActivityType } from 'src/app/common/enums/activity-type.enum';

export class UserSession{
    public time:Date;
    public ip: string;
    public activity: ActivityType;
    public user:User
}