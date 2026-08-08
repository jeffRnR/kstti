// src/components/apply/ApplicationForm.tsx

"use client";

import { FormEvent, useEffect, useState } from "react";

type Campus = {
  id: string;
  name: string;
};

type Course = {
  id: string;
  name: string;
  department: string;
};

export default function ApplicationForm() {
  const [campuses, setCampuses] = useState<Campus[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/api/applications/options");

        if (!response.ok) {
          throw new Error("Failed to load application options");
        }

        const data = await response.json();

        setCampuses(data.campuses);
        setCourses(data.courses);
      } catch {
        setMessage("Unable to load application options.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Application submission failed.");
      }

      setMessage(
        `Application submitted successfully. Your application number is ${data.applicationNumber}.`,
      );

      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Application submission failed.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <div className="card p-8 text-center">Loading application form...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-8 p-6 md:p-10">
      <div>
        <h2 className="text-2xl">Personal Information</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Provide your details as they appear on your official documents.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="First Name" name="firstName" required />
        <Field label="Middle Name" name="middleName" />
        <Field label="Last Name" name="lastName" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" required />

        <SelectField label="Gender" name="gender" required>
          <option value="">Select gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </SelectField>

        <Field
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          required
        />

        <Field label="Nationality" name="nationality" required />
        <Field label="County" name="county" required />
        <Field label="Sub County" name="subCounty" />
        <Field label="Postal Address" name="postalAddress" required />

        <Field label="National ID / Passport Number" name="nationalId" />
      </div>

      <div>
        <h2 className="text-2xl">Education</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="KCSE Index Number" name="kcseIndexNumber" />
        <Field label="KCSE Grade" name="kcseGrade" />

        <SelectField label="Preferred Campus" name="campusId" required>
          <option value="">Select campus</option>
          {campuses.map((campus) => (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          ))}
        </SelectField>

        <SelectField label="Course" name="courseId" required>
          <option value="">Select course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name} | {course.department}
            </option>
          ))}
        </SelectField>
      </div>

      <div>
        <h2 className="text-2xl">Parent / Guardian</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Guardian Name" name="guardianName" />
        <Field label="Guardian Phone" name="guardianPhone" type="tel" />
      </div>

      <div>
        <h2 className="text-2xl">Documents</h2>

        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <FileField label="Passport Photo" name="passportPhoto" />
          <FileField label="ID Copy" name="idCopy" />
          <FileField label="Certificate" name="certificateFile" />
        </div>
      </div>

      {message && (
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="input"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required = false,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>

      <select id={name} name={name} required={required} className="input">
        {children}
      </select>
    </div>
  );
}

function FileField({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="file"
        className="input"
        accept="image/*,.pdf"
      />
    </div>
  );
}