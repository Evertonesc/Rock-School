import { CreateStudentUseCase } from './../../use-cases/core/student/createStudentUseCase';
import { Controller, Get, Inject, Post } from "@nestjs/common";
import { Body, Put } from "@nestjs/common";
import { BaseController } from "../presenters/core/base-controller";
import { StudentDto } from '../dtos/studentDto';
import { IHttpResponse } from '../presenters/core/http-response.interface';

@Controller('v1/student/update')
export class StudentController extends BaseController {

    @Post()
    async updateStudent(@Body() studentDto: string): Promise<string> {

        if (studentDto)
            return this.mockEscResponse('Test response', 'This is a test response');
    }
}