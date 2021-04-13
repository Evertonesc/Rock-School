import { Body, Inject, Post, Put } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { StudentDto } from "@/adapters/dtos/studentDto";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { Student } from "@/domain/core/entities/student";
import { IHttpResponse } from "../presenters/core/http-response.interface";
import { ResponseFactory } from "../presenters/core/http-response-factory";

@Controller('v1/student')
export class SignUpController {

    constructor(@Inject('ICreateStudent') private _createStudentUseCase: ICreateStudent) { }
    //To-do => Decouple useCase from adapters layer for return values types...
    @Post()
    async registerStudent(@Body() studentDto: StudentDto): Promise<IHttpResponse<StudentDto>> {
        const useCaseResponse = await this._createStudentUseCase.createStudent(studentDto);
        if (useCaseResponse.isFailure)
            return ResponseFactory.badRequest(false, useCaseResponse.message)

        return ResponseFactory.ok(true, useCaseResponse.message, useCaseResponse.body);
    }
}
