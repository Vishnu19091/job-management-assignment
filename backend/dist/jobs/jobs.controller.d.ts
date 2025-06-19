import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
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
    }>;
    create(body: CreateJobDto): Promise<{
        id: string;
        message: string;
    }>;
    remove(id: string): Promise<{
        Message: string;
    }>;
}
