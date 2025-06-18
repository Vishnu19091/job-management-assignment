// src/jobs/jobs.module.ts
import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { PrismaClientModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [JobsController],
  providers: [JobsService],
  imports:[PrismaClientModule]
})
export class JobsModule {}
