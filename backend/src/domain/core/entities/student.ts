import { uuid } from "uuidv4";
import { Courses } from "../../enums/courses";
import { IStudent } from "../interfaces/entities/student.interface";
import { ValidationResult } from "../interfaces/validations/validation-result";
import { IValidationResult } from "../interfaces/validations/validation-result.interface";
import { IEmail } from "../interfaces/valueObejcts/email.interface";
import { IFullName } from "../interfaces/valueObejcts/fullName.interface";

export class Student implements IStudent {
    readonly id: string;
    readonly email: IEmail;
    readonly birthDate: Date;
    readonly courses: Courses;
    readonly fullName: IFullName;

    private constructor(id: string, fullName: IFullName, email: IEmail, birthDate: Date, courses: Courses) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.birthDate = birthDate;
        this.courses = courses;
        Object.freeze(this);
    }

    static create(fullName: IFullName, email: IEmail, birthDate: Date, courses: Courses): IStudent {
        const id = uuid();
        return new Student(id, fullName, email, birthDate, courses);
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