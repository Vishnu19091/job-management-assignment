"use client";
// components/JobFilterBar.tsx
import { useState } from "react";
import { Select } from "@mantine/core";
import { FaSearch, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const locations: string[] = [
  "Chennai",
  "Vellore",
  "Coimbatore",
  "Bangalore",
  "Kochi",
  "Goa",
  "Pune",
  "Delhi",
  "Mumbai",
  "NaviMumbai",
];

export default function JobFilterBar() {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([50000, 80000]);

  return (
    <div className="bg-white/70 rounded-xl shadow-md px-6 py-4 my-5 flex items-center justify-between gap-4 text-gray-700 w-full max-w-full mx-auto">
      {/* Search */}
      <div className="flex items-center self-center gap-2 border-r pr-4">
        <img src="/assets/magnifier.svg" alt="" />
        <Select
          placeholder="Search By Jot, Title, Role"
          data={locations}
          searchable
          nothingFoundMessage="Nothing found..."
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 border-r pr-4">
        <FaMapMarkerAlt className="text-lg" />
        <select
          className="bg-transparent outline-none w-36 text-sm"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Preferred Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Remote">Remote</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      {/* Job Type */}
      <div className="flex items-center gap-2 border-r pr-4">
        <FaUserTie className="text-lg" />
        <select
          className="bg-transparent outline-none w-28 text-sm"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Salary Range */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Salary Per Month</span>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={10000}
            max={100000}
            step={5000}
            value={salaryRange[0]}
            onChange={(e) =>
              setSalaryRange([Number(e.target.value), salaryRange[1]])
            }
          />
          <input
            type="range"
            min={10000}
            max={100000}
            step={5000}
            value={salaryRange[1]}
            onChange={(e) =>
              setSalaryRange([salaryRange[0], Number(e.target.value)])
            }
          />
        </div>
        <span className="text-sm">
          ₹{Math.min(...salaryRange) / 1000}k - ₹
          {Math.max(...salaryRange) / 1000}k
        </span>
      </div>
    </div>
  );
}
