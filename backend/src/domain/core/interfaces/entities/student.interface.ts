import { Courses } from "@/domain/enums/courses";
import { IValidate } from "../validations/validate.interface";
import { IEmail } from "../valueObejcts/email.interface";
import { IFullName } from "../valueObejcts/fullName.interface";

export interface IStudent extends IValidate {
    readonly id: string,
    readonly fullName: IFullName;
    readonly email: IEmail;
    readonly birthDate: Date;
    readonly courses: Courses;
}