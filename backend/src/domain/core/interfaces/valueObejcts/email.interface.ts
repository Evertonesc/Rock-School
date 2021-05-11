import { IValidationResult } from './../../../../../dist/domain/core/interfaces/validations/validation-result.interface.d';
export interface IEmail extends IValidationResult {
    readonly address: string;
}