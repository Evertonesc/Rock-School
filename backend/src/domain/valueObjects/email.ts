import { ValidationResult } from "../core/interfaces/validations/validation-result";
import { IValidationResult } from "../core/interfaces/validations/validation-result.interface";
import { IEmail } from "../core/interfaces/valueObejcts/email.interface";
import { PropertieValidation } from "../validations/propertie-validation";

export class Email extends PropertieValidation implements IEmail {
    readonly address: string;

    private constructor(address: string, objectValidation: IValidationResult) {

        super(objectValidation.isValid, objectValidation.message);

        this.address = address;
        Object.freeze(this);
    }

    static create(address: string) {
        const validation = this.validate(address);
        return new Email(address, validation);
    }

    static validate(emailAddress: string): IValidationResult {
        var tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!emailAddress)
            return ValidationResult.create(false, 'The email cannot be empty');

        if (emailAddress.length > 256)
            return ValidationResult.create(false, 'The email cannot have more than 256 characters');

        if (tester.test(emailAddress) === false)
            return ValidationResult.create(false, `The email ${emailAddress} is invalid`);

        var [account, emailAddress] = emailAddress.split('@');
        if (account.length > 64)
            return ValidationResult.create(false, `The email ${emailAddress} is invalid`);

        var domainParts = emailAddress.split('.');
        if (domainParts.some(function (part) {
            return part.length > 63
        })) {
            return ValidationResult.create(false, `The email ${emailAddress} is invalid`);
        }

        return ValidationResult.create(true);
    }
}