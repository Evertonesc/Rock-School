import { IEmail } from "../interfaces/valueObejcts/email.interface";

export class Email implements IEmail {
    readonly address: string;

    private constructor(address: string) {
        this.address = address;
        Object.freeze(this);
    }

    static create(address: string) {
        return new Email(address);
    }

    validate(): boolean {
        var tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!this.address)
            return false;

        if (this.address.length > 256)
            return false;

        if (tester.test(this.address) === false)
            return false;

        var [account, address] = this.address.split('@');
        if (account.length > 64)
            return false;

        var domainParts = address.split('.');
        if (domainParts.some(function (part) {
            return part.length > 63
        })) {
            return false;
        }

        return true;
    }
}