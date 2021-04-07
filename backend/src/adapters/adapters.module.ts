import { UseCasesModule } from '@/use-cases/use-cases.module';
import { Module } from '@nestjs/common';
import { SignUpController } from './controllers/signupController';

@Module({
    controllers: [SignUpController],
    imports: [UseCasesModule]
})
export class AdaptersModule { }
