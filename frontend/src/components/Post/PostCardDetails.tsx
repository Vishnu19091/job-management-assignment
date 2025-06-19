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
  Time Created (Show hours if it is created lesser 24hrs else show days)  
  */
}

export default function PostCardDetails() {
  const companyname: string = "Amazon";
  const jobtitle: string = "Full stack Developer";
  const jobType: string = "On-site"; //On-site | Remote | Hybrid
  const yearofexp: number = 10;
  const description: string = "Description goes here";
  const salaryRange: string = "12-20 yrs";
  const timeCreated: any = "12:00:00";

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <figure>
          <img src="/file.svg" alt={companyname} className="h-20 w-20" />
        </figure>

        {/* Time Created */}
        <p className="bg-blue-400/50 w-fit h-fit rounded-2xl px-2 py-1.5 self-start justify-self-end">
          {timeCreated} ago
        </p>
      </div>
      <h1 className="text-2xl font-bold">{jobtitle}</h1>
      <div className="flex flex-row gap-4">
        {/* Years of Experience */}
        <span className="flex flex-row gap-2">
          <img
            src="/assets/yrofexp.svg"
            alt="years of experience"
            className="w-6 h-6"
          />
          {yearofexp}
        </span>

        {/* Job Type */}
        <span className="flex flex-row gap-2">
          <img src="/assets/job-type.svg" alt="Job Type" className="w-6 h-6" />
          {jobType}
        </span>

        {/* Salary Range */}
        <span className="flex flex-row gap-2">
          <img src="/assets/salary.svg" alt="Job Type" className="w-6 h-6" />
          {salaryRange}
        </span>
      </div>

      {/* Job Description */}
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
