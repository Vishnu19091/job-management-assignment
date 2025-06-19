"use client";
import { MultiSelect } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";

interface FieldProp {
  label: string;
  placeholder: string;
}

export function MultipleSelectionJobField({ label, placeholder }: FieldProp) {
  return (
    <>
      <MultiSelect
        label={label}
        placeholder={placeholder}
        style={{ outlineColor: "black" }}
        data={["Full-time", "Part-time", "Contract", "Internship"]}
        hidePickedOptions
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

export function MultipleSelectionLocationField({
  label,
  placeholder,
}: FieldProp) {
  return (
    <>
      <MultiSelect
        label={label}
        placeholder={placeholder}
        data={locations}
        hidePickedOptions
      />
    </>
  );
}

import dayjs from "dayjs";
// Can select date between current date to next 30days
export function SelectDeadlineDate() {
  return (
    <DateInput
      minDate={dayjs().format("YYYY-MM-DD")}
      maxDate={dayjs().add(1, "month").format("YYYY-MM-DD")}
      label="Date input"
      placeholder="Date input"
    />
  );
}
