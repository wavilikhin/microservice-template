import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as env from 'dotenv-safe';
import { Logger } from '@nestjs/common';

env.config({ path: './../.env' });

async function bootstrap() {
  //   Logger.log(`DB URL: ${process.env.DATABASE_URL}`, 'NestApplication');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  Logger.log(`Listening on port :${process.env.PORT}`, 'NestApplication');
}

bootstrap();
