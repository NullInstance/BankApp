import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enabling CORS for a quick turn around for server-client communication
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
