import { Instruments } from "../enums/instruments";
import { IStudent } from "../interfaces/entities/student.interface";
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

    validate(): boolean {
        const studentName = this.fullName;
        if (!studentName.firstName || !studentName.lastName)
            return false;

        if (!this.email)
            return false;

        return true;
    }
}