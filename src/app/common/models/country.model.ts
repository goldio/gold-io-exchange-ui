import { BaseModel } from './base.model';
import { File } from './file.model';
import { Locale } from './locale.model';

export class Country extends BaseModel {
    public name: string;
    public flag: File;
    public locale: Locale;
}