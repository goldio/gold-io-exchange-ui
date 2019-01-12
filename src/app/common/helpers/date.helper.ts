export class DateHelper {
    public static normalizeMinutesSeconds(minutesOrSeconds: number): string {
        if (minutesOrSeconds < 10) {
            return `0${minutesOrSeconds}`;
        }

        return `${minutesOrSeconds}`;
    }

    public static getTimeFromDate(date: Date): string {
        return `${DateHelper.normalizeMinutesSeconds(date.getHours())}:${DateHelper.normalizeMinutesSeconds(date.getMinutes())}:${DateHelper.normalizeMinutesSeconds(date.getSeconds())}`;
    }
}