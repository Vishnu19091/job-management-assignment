"use client";

import { TextInput, Textarea, Button, Container, Title } from "@mantine/core";
import { useState } from "react";

export default function JobPostPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Job Posted!");
  };

  return (
    <Container className="py-10">
      <Title order={2}>Create Job Post</Title>
      <TextInput
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <TextInput
        label="Company"
        name="company"
        value={form.company}
        onChange={handleChange}
        required
      />
      <TextInput
        label="Location"
        name="location"
        value={form.location}
        onChange={handleChange}
        required
      />
      <Textarea
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <Button onClick={handleSubmit} className="mt-4">
        Submit
      </Button>
    </Container>
  );
}
