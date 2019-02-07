import { ApiKey } from './apiKey.model';
import { FormGroup, FormControl } from '@angular/forms';

export class ApiKeyViewModel {
    public apiKey: ApiKey;
    public form: FormGroup;
    public name: string;

    constructor(apiKey: ApiKey){
        this.apiKey = apiKey;
        this.name = `apiKey_${apiKey.id}`;
        this.form = new FormGroup({
            id: new FormControl(apiKey.id),
            api: new FormControl(apiKey.publicKey),
            secretCode: new FormControl(apiKey.secretKey),
            viewAccInfo: new FormControl(apiKey.accountPermissions),
            redOrder: new FormControl(apiKey.ordersPermissions),
            withdrawFunds: new FormControl(apiKey.fundsPermissions)
          });
    }
}

