import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {

    static invalidYear(control: AbstractControl) : ValidationErrors | null {
        let regexp: RegExp = /^(19|20)\d{2}$/;
        if(regexp.test(control.value as string)){
            return null;
        }
        return { invalidYear: true };
    }
}