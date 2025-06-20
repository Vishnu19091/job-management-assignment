"use client";
import { Container, Modal } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import {
  JobField,
  LocationField,
  SelectDeadlineDate,
} from "./FormComponents/InputField";

import { Notification } from "@mantine/core";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CreateJob({
  cjmodalopened,
  onClose,
}: {
  cjmodalopened: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    experience: "",
    salaryMin: "",
    salaryMax: "",
    jobtype: "",
    applicationdeadline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      salaryRange: `₹${form.salaryMin}LPA - ₹${form.salaryMax} LPA`,
    };
    const res = await fetch(`${API_URL}/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result) {
      return (
        <Notification title={result}>
          Now you can close the form or create another Job.
        </Notification>
      );
    }
    // else {
    //   return (
    //     <Notification title="We notify you that">
    //       Something went or you might try to publish with empty data.
    //     </Notification>
    //   );
    // }
  };

  //check input value is numbers
  const [number, setnumber] = useState<string>("");
  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericRegex = /^[0-9]*$/;

    if (numericRegex.test(inputValue)) {
      setnumber(inputValue);
    }
  };

  if (!cjmodalopened) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white w-[90%] md:w-[60%] lg:w-[40%] rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black scale-[3] w-fit h-fit cursor-pointer"
        >
          &times;
        </button>

        {/* Modal Content */}
        <Container className="py-6 flex flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">Create Job Post</h1>

          {/* Job Title & Company */}
          <div className="grid grid-cols-2 gap-5">
            <div
              className={`flex flex-col transition-all duration-300 ease-in-out ${
                form.title ? "text-black" : "text-black/30"
              } focus-within:text-black`}
            >
              <label htmlFor="title">Job Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className={`rounded border p-2 outline-none transition-all ${
                  form.title ? "border-black" : "border-black/30"
                } focus:border-black`}
              />
            </div>

            <div
              className={`flex flex-col transition-all duration-300 ease-in-out ${
                form.company ? "text-black" : "text-black/30"
              } focus-within:text-black`}
            >
              <label htmlFor="company">Company</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className={`rounded border p-2 outline-none transition-all ${
                  form.company ? "border-black" : "border-black/30"
                } focus:border-black`}
              />
            </div>
          </div>

          {/* Location & Job Type */}
          <div className="grid grid-cols-2 gap-5">
            <LocationField
              label="Location"
              placeholder="Chennai Preferred Location"
              value={form.location}
              onChange={(val) => setForm({ ...form, location: val || "" })}
            />
            <JobField
              label="Job Type"
              placeholder="Full-time"
              value={form.jobtype}
              onChange={(val) => setForm({ ...form, jobtype: val || "" })}
            />
          </div>

          {/* Salary & Deadline */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label>Salary Range</label>
              <div className="grid grid-cols-2 gap-2">
                {/* Salary Min */}
                <div className="relative">
                  <input
                    name="salaryMin"
                    value={form.salaryMin}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-2 w-36 border border-black/40 outline-none focus:border-black rounded-lg"
                    type="text"
                    maxLength={8}
                    placeholder="₹0"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/assets/range.svg" alt="" />
                  </div>
                </div>

                {/* Salary Max */}
                <div className="relative">
                  <input
                    name="salaryMax"
                    value={form.salaryMax}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-2 w-36 border border-black/40 outline-none focus:border-black rounded-lg"
                    type="text"
                    maxLength={8}
                    placeholder="₹12000"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/assets/range.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SelectDeadlineDate
                value={form.applicationdeadline}
                onChange={(date) =>
                  setForm({ ...form, applicationdeadline: date })
                }
              />
            </div>
          </div>

          {/* Experience */}
          <div
            className={`flex flex-col w-1/2 transition-all duration-300 ease-in-out ${
              form.experience ? "text-black" : "text-black/30"
            } focus-within:text-black`}
          >
            <label>Experience</label>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              className={`rounded border p-2 outline-none transition-all ${
                form.experience ? "border-black" : "border-black/30"
              } focus:border-black`}
            />
          </div>

          {/* Description */}
          <div
            className={`flex flex-col transition-all duration-300 ease-in-out ${
              form.description ? "text-black" : "text-black/30"
            } focus-within:text-black`}
          >
            <label>Job Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the role..."
              required
              className={`resize rounded-xl border p-2 outline-none transition-all ${
                form.description ? "border-black" : "border-black/30"
              } focus:border-black`}
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-row justify-between mt-4">
            <button className="border-2 px-6 py-2 rounded-xl text-black flex items-center gap-2">
              Save Draft
              <img src="/assets/arrows_black.svg" alt="arrows_black" />
            </button>

            <button
              className="bg-blue-500 px-6 py-2 rounded-xl text-white flex items-center gap-2"
              onClick={handleSubmit}
            >
              Publish
              <img src="/assets/arrows_white.svg" alt="arrows_white" />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

// Do whatever you like but will low pay 👹.
