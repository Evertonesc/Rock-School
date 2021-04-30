import { IValidate } from "../validations/validate.interface";

export interface IPassword extends IValidate {
    readonly password: string
}