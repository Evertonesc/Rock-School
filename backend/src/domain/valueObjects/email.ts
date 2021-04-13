import { ValidationResult } from "../core/interfaces/validations/validation-result";
import { IValidationResult } from "../core/interfaces/validations/validation-result.interface";
import { IEmail } from "../core/interfaces/valueObejcts/email.interface";

export class Email implements IEmail {
    readonly address: string;

    private constructor(address: string) {
        this.address = address;
        Object.freeze(this);
    }

    static create(address: string) {
        return new Email(address);
    }

    validate(): IValidationResult {
        var tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!this.address)
            return ValidationResult.create(false, 'The email cannot be empty');

        if (this.address.length > 256)
            return ValidationResult.create(false, 'The email cannot have more than 256 characters');

        if (tester.test(this.address) === false)
        return ValidationResult.create(false, `The email ${this.address} is invalid` );

        var [account, address] = this.address.split('@');
        if (account.length > 64)
        return ValidationResult.create(false, `The email ${this.address} is invalid` );

        var domainParts = address.split('.');
        if (domainParts.some(function (part) {
            return part.length > 63
        })) {
            return ValidationResult.create(false, `The email ${this.address} is invalid` );
        }

        return ValidationResult.create(true);
    }
}