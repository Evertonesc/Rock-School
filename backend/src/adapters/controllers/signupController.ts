import { Body, Inject, Post, Put } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { ICreateStudent } from "src/use-cases/interfaces/createStudent.interface";
import { CreateStudentResponse } from "src/use-cases/types/createStudentResponse";
import { StudentDto } from "../dtos/studentDto";


@Controller('v1/student')
export class SignUpController {

    constructor(@Inject('ICreateStudent') private createStudentUseCase: ICreateStudent) { }

    @Post()
    async registerStudent(@Body() studentDto: StudentDto): Promise<CreateStudentResponse> {
        return await this.createStudentUseCase.createStudent(studentDto);
    }

    @Put()
    create(@Body() studentDto: StudentDto): string {
        return JSON.stringify(studentDto);
    }
}
