import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  const { port, host } = configService.get("app")
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port);

  console.log(`Server running on ${host}`)
}
bootstrap();
