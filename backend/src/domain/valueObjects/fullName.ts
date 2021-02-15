import { IFullName } from "../interfaces/valueObejcts/fullName.interface";

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

    validate(): boolean {
        const numberNameTest = /^[0-9]+$/;
        const studentFirstName = this.firstName;
        const studentLastName = this.lastName;
        if (!studentFirstName || !studentLastName)
            return false;

        if (studentFirstName.length <= 2 || studentLastName.length <= 2)
            return false;

        if (studentFirstName.match(numberNameTest) || studentLastName.match(numberNameTest))
            return false;

        return true;
    }

}