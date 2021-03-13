import { Module } from '@nestjs/common';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { SignUpController } from './controllers/signupController';

@Module({
    controllers: [SignUpController],
    imports: [UseCasesModule]
})
export class AdaptersModule { }
