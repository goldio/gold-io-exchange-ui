import { BaseModel } from './base.model';
import { File } from './file.model';

export class Locale extends BaseModel {
    public name: string;
    public langCode: string;
    public icon: File;
}