"use client";
import Post from "@/components/Post/Post";
import JobFilterBar from "./components/filterBar";

export default function FindJobsPage() {
  return (
    <>
      <JobFilterBar />
      {/* <p>This is Find Jobs Page.</p> */}

      <div className="w-[80%] mx-auto grid grid-cols-4 gap-5">
        <Post />
      </div>
    </>
  );
}
