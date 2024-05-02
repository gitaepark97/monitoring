import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { winstonLogger } from './util/winston.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: winstonLogger });

  await app.listen(8000);
}
bootstrap();
