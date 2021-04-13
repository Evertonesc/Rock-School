import { IValidationResult } from "./validation-result.interface";

export class ValidationResult implements IValidationResult {
    readonly isValid: boolean;
    readonly isInvalid: boolean;
    readonly message: string;

    private constructor(isValid: boolean, message: string) {
        this.isValid = isValid;
        this.isInvalid = !isValid;
        this.message = message;

        Object.freeze(this);
    }

    static create(isValid: boolean, message?: string): IValidationResult {
        return new ValidationResult(isValid, message);
    }
}