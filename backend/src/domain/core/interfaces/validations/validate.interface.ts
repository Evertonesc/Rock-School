import { IValidationResult } from "./validation-result.interface";

export interface IValidate {
    validate(...paramsForValidate: any): IValidationResult
}