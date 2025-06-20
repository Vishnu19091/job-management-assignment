import Post from "@/components/Post/Post";
import JobFilterBar from "./components/filterBar";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function FindJobsPage() {
  let jobs: any[] = [];

  try {
    const res = await fetch(`${API_URL}/jobs`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch jobs");
    jobs = await res.json();
  } catch (error) {
    console.error("Error loading jobs:", error);
    return <p className="text-red-500 p-4">Failed to load job posts.</p>;
  }

  return (
    <div>
      <JobFilterBar/>
      <div className="grid grid-cols-4 gap-6 w-[85%] mx-auto">
        {jobs.map((job, index) => (
          <Post key={index} job={job} />
        ))}
      </div>
    </div>
  );
}
