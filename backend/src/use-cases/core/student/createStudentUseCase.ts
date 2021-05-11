import { Password } from './../../../domain/valueObjects/password';
import { Injectable } from "@nestjs/common";
import { StudentDto } from "@/adapters/dtos/studentDto";
import { IEmail } from "@/domain/core/interfaces/valueObejcts/email.interface";
import { Email } from "@/domain/valueObjects/email";
import { FullName } from "@/domain/valueObjects/fullName";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { IActionResult } from "@/use-cases/models/action-result.interface";
import { ActionResult } from "@/use-cases/models/action-result";



//analysis => Check if is worth create a student global validation mathod for all vo's

@Injectable()
export class CreateStudentUseCase implements ICreateStudent {

    async createStudent(studentDto: StudentDto): Promise<IActionResult<StudentDto>> {

        const studentName = FullName.create(studentDto.firstName, studentDto.lastName);

        if (studentName.isInvalid)
            return ActionResult.createBadRequest(false, studentName.message);

        const studentEmail: IEmail = Email.create(studentDto.email);
        if (studentEmail.isInvalid)
            return ActionResult.createBadRequest(false, studentEmail.message);

        const password = Password.create(studentDto.password);
        const passwordValidation = password.validate();
        if (passwordValidation.isInvalid)
            return ActionResult.createBadRequest(false, passwordValidation.message);

        return ActionResult.create(true, studentDto);
    }
}