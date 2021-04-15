import { IValidationResult } from "../core/interfaces/validations/validation-result.interface";
import { IBirthDate } from "../core/interfaces/valueObejcts/birthDate.interface";

export class BirthDate implements IBirthDate {
    readonly birthDate: Date;

    private constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }

    public create(birthDate: Date): IBirthDate {
        throw new Error();
    }

    validate(): IValidationResult {
        throw new Error("Method not implemented.");
    }
}