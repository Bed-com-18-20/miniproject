import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('AgricultureOnline')
    .setDescription('This is agriculture web application that will allow farmers/users to buy, sell, find agriculture extension services ,comments and apply for loan.')
    .setVersion('1.0')
    .addTag('Designed by Willious')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
