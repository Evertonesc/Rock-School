import { Instruments } from "../../enums/instruments";
import { IStudent } from "../interfaces/entities/student.interface";
import { ValidationResult } from "../interfaces/validations/validation-result";
import { IValidationResult } from "../interfaces/validations/validation-result.interface";
import { IEmail } from "../interfaces/valueObejcts/email.interface";
import { IFullName } from "../interfaces/valueObejcts/fullName.interface";

export class Student implements IStudent {
    readonly email: IEmail;
    readonly birthDate: Date;
    readonly instruments: Instruments;
    readonly fullName: IFullName;

    private constructor(fullName: IFullName, email: IEmail, birthDate: Date, instruments: Instruments) {
        this.fullName = fullName;
        this.email = email;
        this.birthDate = birthDate;
        this.instruments = instruments;
        Object.freeze(this);
    }

    static create(fullName: IFullName, email: IEmail, birthDate: Date, instruments: Instruments) {
        return new Student(fullName, email, birthDate, instruments);
    }

    //TO-DO => Pass the email and name validation as parameters 
    /**
     * validate(emailValidation: boolean, nameValidation: boolean)
     * 
     */
    validate(): IValidationResult {
        const studentName = this.fullName;
        if (!studentName.firstName || !studentName.lastName)
            return ValidationResult.create(false);

        if (!this.email)
            return ValidationResult.create(false);

        return ValidationResult.create(true);
    }
}