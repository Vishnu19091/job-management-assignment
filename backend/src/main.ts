import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT=3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Job_Management_Admin')
    .setDescription('The Job Management Admin Interface APi').build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Enable CORS
  app.enableCors({
    origin: '*', //set to all
    methods: 'GET,POST,PUT,DELETE', //allowed methods
    credentials: true,
    allowedHeaders:'Content-Type, Authorization',
  })
  await app.listen(PORT);
}
bootstrap();