"use client";
import dayjs from "dayjs";
import { Button, Text } from "@mantine/core";

// Fetch job post data from db and store in variables
{
  /*
  Data to be collected
  
  Company Name (get the logo of the company if possible)
  years of experience
  Job Title
  Job Type (Mode of work)
  Job Description
  Salary Range
  Location
  application deadline
  Time Created (Show hours if it is created lesser 24hrs else show days)  
  */
}

export default function PostCardDetails() {
  let job = {
    company: "Amazon",
    title: "Developer",
    jobtype: "Remote",
    experience: "1-4 yrs",
    description: "Nothing",
    createdAt: "2025-06-19T09:19:20.876Z",
    salaryRange: "4LPA - 6LPA",
    applicationdeadline: "30-07-2025",
  };

  // Data destructuring
  const companyname: string = job.company;
  const jobtitle: string = job.title;
  const jobType: string = job.jobtype;
  const yearofexp: string = job.experience;
  const description: string = job.description;
  const salaryRange: string = job.salaryRange;
  const deadline: string = job.applicationdeadline;

  // Time ago logic
  const minutesAgo = dayjs().diff(dayjs(job.createdAt), "minute");
  const hoursAgo = dayjs().diff(dayjs(job.createdAt), "hour");
  const daysAgo = dayjs().diff(dayjs(job.createdAt), "day");

  let displaycreateTime: string = "";

  if (minutesAgo < 60) {
    displaycreateTime = "<1hr ago";
  } else if (hoursAgo < 24) {
    displaycreateTime = `${hoursAgo}hrs ago`;
  } else {
    displaycreateTime = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  }

  // Handle null job case
  if (!job.createdAt) {
    return (
      <div className="text-gray-500 text-center p-4">
        No job posts available.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <figure>
          <img src="/file.svg" alt={companyname} className="h-20 w-20" />
        </figure>

        <div className="flex flex-col gap-2 self-start justify-self-end">
          <p className="bg-blue-400/50 w-fit h-fit rounded-2xl px-2 py-1.5 self-end">
            {displaycreateTime}
          </p>
          <p className="bg-red-400/50 w-fit h-fit rounded-xl px-2 py-1.5 self-end">
            {deadline}
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold">{jobtitle}</h1>

      <div className="flex flex-row gap-4">
        <span className="flex flex-row gap-2">
          <img
            src="/assets/yrofexp.svg"
            alt="years of experience"
            className="w-6 h-6"
          />
          {yearofexp}
        </span>

        <span className="flex flex-row gap-2">
          <img src="/assets/job-type.svg" alt="Job Type" className="w-6 h-6" />
          {jobType}
        </span>

        <span className="flex flex-row gap-2">
          <img src="/assets/salary.svg" alt="Salary" className="w-6 h-6" />
          {salaryRange}
        </span>
      </div>

      <div>
        <p>{description}</p>
      </div>
      <Button size="md" style={{ borderRadius: "0.8rem" }} fullWidth>
        <Text size="xl">Apply Now</Text>
      </Button>
    </div>
  );
}
