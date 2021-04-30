import { ValidationResult } from './../core/interfaces/validations/validation-result';
import { IValidationResult } from '../core/interfaces/validations/validation-result.interface';
import { IPassword } from './../core/interfaces/valueObejcts/password.interface';
export class Password implements IPassword {

    readonly password: string;

    private constructor(password: string) {
        this.password = password;
        Object.freeze(this);
    }

    public static create(password: string): IPassword {
        return new Password(password);
    }

    validate(): IValidationResult {

        if (this.password.length <= 5)
            return ValidationResult.create(false, 'The password cannot have less than 5 characteres');

        return ValidationResult.create(true);
    }
}