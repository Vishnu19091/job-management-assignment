import { Prisma } from "generated/prisma";

export class Job implements Prisma.JobCreateInput{
    id?: string | undefined;
    title: string;
    description: string;
    company: string;
    location: string;
    jobtype: string;
    exprerience: string;
    salaryRange: string;
    applicationdeadline: string;
    createdAt?: string | Date | undefined;
}