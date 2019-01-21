import { Injectable } from "@angular/core";
import { StateService } from './state.service';
import { Theme } from '../enums/theme.enum';

@Injectable()
export class ThemeService extends StateService<Theme> {
    constructor(){
        super();

        this.state.next(Theme.Dark);
    }

    public setState() {
        if(this.state.value == Theme.Dark) {
            this.state.next(Theme.Ligth);
        } else {
            this.state.next(Theme.Dark);
        }
    }
}