import { FormControl, AbstractControl } from "@angular/forms";

export abstract class BaseLayoutComponent {
    public showError(errorText: string, field: FormControl | AbstractControl, errorType: string){
        let errors = {};
        errors[errorType] = true;
        field.setErrors(errors);
        return errorText;
    }

    protected isVisible: boolean = false;

    constructor() {
        setTimeout(() => {
            this.isVisible = true;
        }, 100);
    }
}