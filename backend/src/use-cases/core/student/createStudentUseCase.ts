import { Injectable } from "@nestjs/common";

import { StudentDto } from "@/adapters/dtos/studentDto";
import { IEmail } from "@/domain/interfaces/valueObejcts/email.interface";
import { IFullName } from "@/domain/interfaces/valueObejcts/fullName.interface";
import { Email } from "@/domain/valueObjects/email";
import { FullName } from "@/domain/valueObjects/fullName";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { CreateStudentResponse } from "@/use-cases/types/createStudentResponse";
import { IHttpResponse, ResponseFactory } from "@/domain/validations/httpResponse";
import { Student } from "@/domain/entities/student";

@Injectable()
export class CreateStudentUseCase implements ICreateStudent {

    async createStudent(studentDto: StudentDto): Promise<IHttpResponse<Student>> {
        const studentName: IFullName = FullName.create(studentDto.firstName, studentDto.lastName);
        if (studentName.validate() == false)
            return ResponseFactory.badRequest(false, `The email ${studentDto.email} is invalid`);

        const studentEmail: IEmail = Email.create(studentDto.email);
        if (studentEmail.validate() == false)
            return ResponseFactory.badRequest(false, `The email ${studentDto.email} is invalid`);
    }

    updateStudent(studentDto: StudentDto): Promise<IHttpResponse<Student>> {
        throw new Error("Method not implemented.");
    }
    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse> {
        throw new Error("Method not implemented.");
    }
}