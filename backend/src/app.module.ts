import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters/adapters.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({
  imports: [AdaptersModule, DomainModule, InfraModule, UseCasesModule],
  controllers: [],
})
export class AppModule { }
