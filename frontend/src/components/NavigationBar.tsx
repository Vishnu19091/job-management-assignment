"use client";
import Link from "next/link";
import { useState } from "react";
import CreateJob from "./CreatePostModal";

export default function NavigationBar() {
  const [cjmodalopened, setcjmodalopened] = useState(false);

  return (
    <div className="flex flex-row items-center gap-4 my-5 px-8 py-4 shadow-[0px_0px_100px_1px_rgba(0,0,0,0.2)] rounded-[99rem] w-fit mx-auto">
      <figure>
        <Link href="/">
          <img src="/assets/cmw.svg" alt="" />
        </Link>
      </figure>

      <Link href="/home">Home</Link>
      <Link href="/find-jobs">Find Jobs</Link>
      <Link href="/find-talents">Find Talents</Link>
      <Link href="/about">About us</Link>
      <Link href="/testimonials">Testimonials</Link>

      {/* This Create Jobs button open a modal window then the admin can create a post in the find jobs page */}
      <button
        onClick={() => setcjmodalopened(true)}
        className="bg-linear-to-bl from-[#9751ff] to-[#6400b0] text-white px-4 py-2 hover:scale-105 rounded-full transition-transform duration-300 ease-in-out cursor-pointer"
      >
        Create Jobs
      </button>
      <CreateJob
        cjmodalopened={cjmodalopened}
        onClose={() => setcjmodalopened(false)}
      />
    </div>
  );
}
