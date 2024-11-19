/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const documentOptions = new DocumentBuilder()
    .setTitle('API Rico')
    .addServer('http://localhost:5000')
    .build();
  const documentation = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('documentation', app, documentation);
  await app.listen(5000);
}
bootstrap();
