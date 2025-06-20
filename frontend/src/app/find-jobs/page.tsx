import Post from "@/components/Post/Post";
import JobFilterBar from "./components/filterBar";

export default async function FindJobsPage() {
  return (
    <div>
      <JobFilterBar />
      <div className="grid grid-cols-4 gap-6 w-[85%] mx-auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
