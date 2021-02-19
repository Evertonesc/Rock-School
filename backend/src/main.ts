import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelizeAuthentication } from './infra/core/database/database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  sequelizeAuthentication();
  await app.listen(3000);
}
bootstrap();
