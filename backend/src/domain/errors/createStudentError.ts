import { IDomainReturn } from "../interfaces/valueObejcts/domainReturn.interface";
import { Result } from "../validations/result";

export namespace CreateStudentError {

    export class InvalidEmail extends Result<IDomainReturn>{
        public constructor(emailAddress: string) {
            super(false, {
                message: `The email ${emailAddress} is invalid`
            })
        }
    }

    export class InvalidFullName extends Result<IDomainReturn>{
        public constructor() {
            super(false, {
                message: `The student name is invalid`
            })
        }
    }
}