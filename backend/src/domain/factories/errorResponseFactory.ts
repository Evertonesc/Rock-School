import { CreateStudentResponse } from "src/use-cases/types/createStudentResponse";
import { CreateStudentError } from "../errors/createStudentError";

export class ErrorResponseFactory {
    static returnInvalidNameError(): CreateStudentResponse {
        return new CreateStudentError.InvalidFullName;
    }

    static returnInvalidEmailError(emailAddress: string): CreateStudentResponse {
        return new CreateStudentError.InvalidEmail(emailAddress);
    }
}