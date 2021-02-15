import { IValidate } from "../validations/validate.interface";

export interface IFullName extends IValidate{
    readonly firstName: string;
    readonly lastName: string;
}