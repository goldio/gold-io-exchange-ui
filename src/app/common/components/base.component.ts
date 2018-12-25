import { FormControl, AbstractControl } from "@angular/forms";

export abstract class BaseComponent {
    public showError(errorText: string, field: FormControl | AbstractControl, errorType: string){
        let errors = {};
        errors[errorType] = true;
        field.setErrors(errors);
        return errorText;
    }
}