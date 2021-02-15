import { IValidate } from "../validations/validate.interface";

export interface IEmail extends IValidate {
    readonly address: string;
}