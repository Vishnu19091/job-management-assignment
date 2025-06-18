// jobs/jobs.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findjobid = await this.jobsService.findOne(id);

    if (!findjobid) {
      throw new InternalServerErrorException(
        `The Requested Job ID:${id} does not exists.😔`,
      );
    }
    return findjobid;
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() body: CreateJobDto) {
    try {
      const createjob = await this.jobsService.create(body);
      return {
        id: createjob.id,
        message: '✅ Job published Successfully!',
      };
    } catch (error) {
      if (error.code === 'P2002') {
        // Prisma unique constraint failed
        throw new BadRequestException(
          'A job with the same title already exists.',
        );
      }
      console.error(error);
      throw new InternalServerErrorException('Failed to publish job😔');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const removeJob = await this.jobsService.remove(id);

      return {
        Message: `❗ Successfully Removed Job ID: ${removeJob.id}`,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        // Prisma unique constraint failed
        throw new NotFoundException(`❗Job ID ${id} has already removed`);
      }
      console.error(error);
      throw new BadRequestException(`❗Failed to remove the Job ID ${id}.`);
    }
  }
}
