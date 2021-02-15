import { StudentDto } from "src/adapters/dtos/studentDto";
import { CreateStudentError } from "../../../domain/errors/createStudentError";
import { IEmail } from "src/domain/interfaces/valueObejcts/email.interface";
import { IFullName } from "src/domain/interfaces/valueObejcts/fullName.interface";
import { Email } from "../../../domain/valueObjects/email";
import { ICreateStudent } from "src/use-cases/interfaces/createStudent.interface";
import { CreateStudentResponse } from "src/use-cases/types/createStudentResponse";
import { FullName } from "src/domain/valueObjects/fullName";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateStudentUseCase implements ICreateStudent {

    async createStudent(studentDto: StudentDto): Promise<CreateStudentResponse> {
        const studentName: IFullName = FullName.create(studentDto.firstName, studentDto.lastName);
        if (studentName.validate() == false)
            return new CreateStudentError.InvalidFullName;

        const studentEmail: IEmail = Email.create(studentDto.email);
        if (studentEmail.validate() == false)
            return new CreateStudentError.InvalidEmail(studentEmail.address);
    }
    updateStudent(studentDto: StudentDto): Promise<CreateStudentResponse> {
        throw new Error("Method not implemented.");
    }
    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse> {
        throw new Error("Method not implemented.");
    }
}