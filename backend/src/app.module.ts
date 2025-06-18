import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [JobsModule],
  providers: [PrismaService],
})
export class AppModule {}
