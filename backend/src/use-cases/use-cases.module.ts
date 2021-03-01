import { Module } from '@nestjs/common';
import { StudentProvider } from './providers/studentProvider';

@Module({
    providers: [StudentProvider],
    exports: [StudentProvider]
})
export class UseCasesModule { }
