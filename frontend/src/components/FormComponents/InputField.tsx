"use client";
import { Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";

interface FieldProp {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string | null) => void;
}

export function JobField({ label, placeholder, value, onChange }: FieldProp) {
  return (
    <>
      <Select
        label={label}
        placeholder={placeholder}
        style={{ outlineColor: "black" }}
        value={value}
        onChange={onChange}
        data={["Full-time", "Part-time", "Contract", "Internship"]}
      />
    </>
  );
}

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

export function LocationField({
  label,
  placeholder,
  value,
  onChange,
}: FieldProp) {
  return (
    <>
      <Select
        label={label}
        placeholder={placeholder}
        data={locations}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

import dayjs from "dayjs";
// Can select date between current date to next 30days
export function SelectDeadlineDate({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <DateInput
      value={value}
      onChange={(date) => {
        if (date) {
          onChange(dayjs(date).format("YYYY-MM-DD"));
        }
      }}
      minDate={new Date()}
      maxDate={dayjs().add(1, "month").toDate()}
      label="Set Deadline"
      placeholder="Set Deadline"
      className="w-full"
    />
  );
}
