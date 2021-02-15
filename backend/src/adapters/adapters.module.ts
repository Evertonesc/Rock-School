import { Module } from '@nestjs/common';
import { CreateStudentUseCase } from 'src/use-cases/core/student/createStudentUseCase';
import { StudentProvider } from 'src/use-cases/studentProvider';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { StudentController } from './controllers/studentController';

@Module({
    controllers: [StudentController],
    imports: [UseCasesModule]
    //imports: [CreateStudentUseCase],
    //providers: [CreateStudentUseCase]
})
export class AdaptersModule { }
