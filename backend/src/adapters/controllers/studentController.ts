import { Inject, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { CreateStudentUseCase } from "src/use-cases/core/student/createStudentUseCase";
import { ICreateStudent } from "src/use-cases/interfaces/createStudent.interface";
import { CreateStudentResponse } from "src/use-cases/types/createStudentResponse";
import { StudentDto } from "../dtos/studentDto";


@Controller('v1/student')
export class StudentController {

    constructor(@Inject('ICreateStudent') private createStudentUseCase: ICreateStudent) {
        //this.createStudentUseCase = createStudentUseCase;
    }

    @Post()
    async registerStudent(studentDto: StudentDto): Promise<CreateStudentResponse> {
        return await this.createStudentUseCase.createStudent(studentDto);
    }
}