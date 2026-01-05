import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('My Portfolio Backend')
    .setDescription('It\'s just a lightweight backend that holds my portfolio datas')
    .setVersion('1.0')
    .addTag('Test Micro')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 5000);
  console.log('✅ API démarrée sur http://localhost:5000');
  console.log('📘 Swagger disponible sur http://localhost:5000/api/docs');
}
bootstrap();
