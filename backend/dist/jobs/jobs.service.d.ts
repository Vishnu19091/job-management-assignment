import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        title: string;
        company: string;
        location: string;
        description: string;
        jobtype: string;
        applicationdeadline: string;
        salaryRange: string;
        experience: string;
        id: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        company: string;
        location: string;
        description: string;
        jobtype: string;
        applicationdeadline: string;
        salaryRange: string;
        experience: string;
        id: string;
        createdAt: Date;
    } | null>;
    create(data: CreateJobDto): Promise<{
        title: string;
        company: string;
        location: string;
        description: string;
        jobtype: string;
        applicationdeadline: string;
        salaryRange: string;
        experience: string;
        id: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        company: string;
        location: string;
        description: string;
        jobtype: string;
        applicationdeadline: string;
        salaryRange: string;
        experience: string;
        id: string;
        createdAt: Date;
    }>;
}
