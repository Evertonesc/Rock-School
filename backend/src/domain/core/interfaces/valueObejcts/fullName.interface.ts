import { IValidationResult } from './../validations/validation-result.interface';
export interface IFullName extends IValidationResult {
    readonly firstName: string;
    readonly lastName: string;
}