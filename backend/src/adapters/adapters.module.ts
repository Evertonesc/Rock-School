import { Module } from '@nestjs/common';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { StudentController } from './controllers/studentController';

@Module({
    controllers: [StudentController],
    imports: [UseCasesModule]
})
export class AdaptersModule { }
