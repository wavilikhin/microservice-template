import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as env from 'dotenv-safe';

env.config({ path: './../.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);
}

bootstrap();