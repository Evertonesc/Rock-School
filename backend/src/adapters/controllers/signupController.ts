import { Body, Inject, Post, Put } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { StudentDto } from "@/adapters/dtos/studentDto";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { IHttpResponse } from "@/domain/validations/httpResponse";
import { Student } from "@/domain/entities/student";


@Controller('v1/student')
export class SignUpController {

    constructor(@Inject('ICreateStudent') private _createStudentUseCase: ICreateStudent) { }

    @Post()
    async registerStudent(@Body() studentDto: StudentDto): Promise<IHttpResponse<Student>> {
        return await this._createStudentUseCase.createStudent(studentDto);
    }

    @Put()
    create(@Body() studentDto: StudentDto): string {
        return JSON.stringify(studentDto);
    }
}
