import { Injectable } from "@nestjs/common";

import { StudentDto } from "@/adapters/dtos/studentDto";
import { IEmail } from "@/domain/core/interfaces/valueObejcts/email.interface";
import { IFullName } from "@/domain/core/interfaces/valueObejcts/fullName.interface";
import { Email } from "@/domain/valueObjects/email";
import { FullName } from "@/domain/valueObjects/fullName";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { CreateStudentResponse } from "@/use-cases/types/createStudentResponse";
import { Student } from "@/domain/core/entities/student";
import { IHttpResponse } from "@/adapters/presenters/core/http-response.interface";
import { IActionResult } from "@/use-cases/models/action-result.interface";
import { ActionResult } from "@/use-cases/models/action-result";

@Injectable()
export class CreateStudentUseCase implements ICreateStudent {

    async createStudent(studentDto: StudentDto): Promise<IActionResult<StudentDto>> {
        const studentName: IFullName = FullName.create(studentDto.firstName, studentDto.lastName);

        const studentNameValidation = studentName.validate();
        if (studentNameValidation.isInvalid)
            return ActionResult.create(false, studentNameValidation.message);

        const studentEmail: IEmail = Email.create(studentDto.email);
        const emailValidation = studentEmail.validate();
        if (emailValidation.isInvalid)
            return ActionResult.create(false, emailValidation.message);

        return ActionResult.create(true, 'Welcome to the Rock School!', studentDto);
    }

    updateStudent(studentDto: StudentDto): Promise<IHttpResponse<Student>> {
        throw new Error("Method not implemented.");
    }
    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse> {
        throw new Error("Method not implemented.");
    }
}