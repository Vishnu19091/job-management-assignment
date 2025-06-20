import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger API Docs Setup (optional, but helpful)
  const config = new DocumentBuilder()
    .setTitle('Job Management Admin')
    .setDescription('The Job Management Admin Interface API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  // ✅ Use environment-provided port or fallback to 3001 for local
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

bootstrap();
