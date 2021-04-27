import { StudentMessages } from './../presenters/enums/return-messages';
import { ErrorRequest, SuccessRequest } from './../ports/presenters-return';
import { Body, Inject, Post, Res } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { StudentDto } from "@/adapters/dtos/studentDto";
import { ICreateStudent } from "@/use-cases/interfaces/createStudent.interface";
import { Response } from 'express';
import { BaseController } from "../presenters/core/base-controller";

@Controller('v1/student')
export class SignUpController extends BaseController {

    constructor(@Inject('ICreateStudent') private _createStudentUseCase: ICreateStudent) {
        super();
    }

    @Post()
    async registerStudent(@Body() studentDto: StudentDto, @Res() res: Response): Promise<Response<StudentDto>> {

        const useCaseResponse = await this._createStudentUseCase.createStudent(studentDto);

        if (useCaseResponse.isFailure) {
            const failureUseCase = ErrorRequest(useCaseResponse.isSuccess, useCaseResponse.error)
            return this.clientError(res, failureUseCase);
        }
        const successUseCase = SuccessRequest(useCaseResponse.isSuccess, useCaseResponse.body, StudentMessages.Created);
        return this.ok(res, successUseCase);
    }
}
