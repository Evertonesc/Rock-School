import { ValidationResult } from "../core/interfaces/validations/validation-result";
import { IValidationResult } from "../core/interfaces/validations/validation-result.interface";
import { IFullName } from "../core/interfaces/valueObejcts/fullName.interface";

export class FullName implements IFullName {
    readonly firstName: string;
    readonly lastName: string;

    private constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        Object.freeze(this);
    }

    static create(firstName: string, lastName: string) {
        return new FullName(firstName, lastName);
    }

    validate(): IValidationResult {
        const numberNameTest = /^[0-9]+$/;
        const studentFirstName = this.firstName;
        const studentLastName = this.lastName;
        if (!studentFirstName || !studentLastName)
            return ValidationResult.create(false, 'The first name or last name cannot be empty ou null');

        if (studentFirstName.length <= 2 || studentLastName.length <= 2)
            return ValidationResult.create(false, 'The name cannot have less than 2 characters');

        if (studentFirstName.match(numberNameTest) || studentLastName.match(numberNameTest))
            return ValidationResult.create(false, 'The name cannot have numbers')

        return ValidationResult.create(true);
    }

}