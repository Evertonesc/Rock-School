import { Injectable } from "@nestjs/common";
import { StudentDto } from "@/adapters/dtos/studentDto";
import { IEmail } from "@/domain/core/interfaces/valueObejcts/email.interface";
import { IFullName } from "@/domain/core/interfaces/valueObejcts/fullName.interface";
import { Email } from "@/domain/valueObjects/email";
import { FullName } from "@/domain/valueObjects/fullName";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { IActionResult } from "@/use-cases/models/action-result.interface";
import { ActionResult } from "@/use-cases/models/action-result";



//analysis => Check if is worth create a student global validation mathod for all vo's

@Injectable()
export class CreateStudentUseCase implements ICreateStudent {

    async createStudent(studentDto: StudentDto): Promise<IActionResult<StudentDto>> {
        const studentName: IFullName = FullName.create(studentDto.firstName, studentDto.lastName);

        const studentNameValidation = studentName.validate();
        if (studentNameValidation.isInvalid)
            return ActionResult.createBadRequest(false, studentNameValidation.message);

        const studentEmail: IEmail = Email.create(studentDto.email);
        const emailValidation = studentEmail.validate();
        if (emailValidation.isInvalid)
            return ActionResult.createBadRequest(false, emailValidation.message);

        return ActionResult.create(true, studentDto);
    }
}