import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { PrismaService } from './prisma/prisma.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [JobsModule],
  providers: [PrismaService, AppService],
  controllers:[AppController]
})
export class AppModule {}
