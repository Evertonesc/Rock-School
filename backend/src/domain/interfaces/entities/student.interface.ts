import { IFullName } from '../valueObejcts/fullName.interface';
import { IValidate } from '../validations/validate.interface';
import { IEmail } from '../valueObejcts/email.interface';
import { Instruments } from 'src/domain/enums/instruments';

export interface IStudent extends IValidate {
    readonly fullName: IFullName;
    readonly email: IEmail;
    readonly birthDate: Date;
    readonly instruments: Instruments;
}