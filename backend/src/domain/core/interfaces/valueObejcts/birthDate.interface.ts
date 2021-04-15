import { IValidate } from "../validations/validate.interface";

export interface IBirthDate extends IValidate {
    readonly birthDate: Date;
}