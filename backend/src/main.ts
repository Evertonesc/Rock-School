import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostgresConnection } from './infra/core/database/postgres';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  PostgresConnection.sequelizeAuthentication();
  await app.listen(3000);
}
bootstrap();
