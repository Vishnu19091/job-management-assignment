"use client";
import PostCardDetails from "./PostCardDetails";

{
  /* Post component must be created when the admin pubilshes a post */
}

export default function Post() {
  return (
    <div className="flex flex-col gap-4 w-fit p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] inset-2 rounded-2xl hover:translate-y-1 transition-transform duration-300 ease-in-out">
      <PostCardDetails />
    </div>
  );
}
