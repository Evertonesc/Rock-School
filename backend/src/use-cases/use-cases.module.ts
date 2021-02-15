import { Module } from '@nestjs/common';
import { CreateStudentUseCase } from './core/student/createStudentUseCase';

const StudentProvider = {
    provide: 'ICreateStudent',
    useClass: CreateStudentUseCase
}
@Module({
    //providers: [CreateStudentUseCase],
    providers: [StudentProvider],
    //exports: [CreateStudentUseCase],
    exports: [StudentProvider]
})
export class UseCasesModule { }
