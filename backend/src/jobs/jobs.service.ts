// jobs/jobs.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  
  async findAll() {
    return this.prisma.job.findMany({ orderBy: { createdAt: 'desc' } });
  }
  
  async findOne(id: string) {
    return this.prisma.job.findUnique({ where: { id } });
  }
 
  async create(data: CreateJobDto) {
    return this.prisma.job.create({ data });
  }
  
  async remove(id: string) {
    return this.prisma.job.delete({ where: { id } });
  }
}
