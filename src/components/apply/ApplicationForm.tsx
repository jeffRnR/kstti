// src/components/apply/ApplicationForm.tsx

"use client";

import { FormEvent, useEffect, useState } from "react";

type Campus = { id: string; name: string };
type Course = { id: string; name: string; department: string };

export default function ApplicationForm() {
  const [campuses, setCampuses] = useState<Campus[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/api/applications/options");
        if (!response.ok) throw new Error("Failed to load application options");
        const data = await response.json();
        setCampuses(data.campuses);
        setCourses(data.courses);
      } catch {
        setMessage({ type: "error", text: "Unable to load application options." });
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/applications", { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Application submission failed.");
      setMessage({
        type: "success",
        text: `Application submitted successfully. Your application number is ${data.applicationNumber}.`,
      });
      form.reset();
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Application submission failed.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="card flex items-center justify-center !py-20 text-center">
        <div>
          <div className="!mx-auto !h-8 !w-8 animate-spin rounded-full border-2 border-[#E5AD23] border-t-transparent" />
          <p className="!mt-5 text-sm font-medium text-neutral-500">Loading application form...</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="!space-y-6">

      <FormSection
        step="01"
        title="Personal Information"
        description="Provide your details as they appear on your official documents."
      >
        <div className="grid gap-7 md:grid-cols-2">
          <Field label="First Name" name="firstName" required />
          <Field label="Middle Name" name="middleName" />
          <Field label="Last Name" name="lastName" required />
          <Field label="Email Address" name="email" type="email" />
          <Field label="Phone Number" name="phone" type="tel" />
          <SelectField label="Gender" name="gender" required>
            <option value="">Select gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </SelectField>
          <Field label="Date of Birth" name="dateOfBirth" type="date" required />
          {/* <Field label="Nationality" name="nationality" required /> */}
          <Field label="County" name="county" required />
          <Field label="Postal Address" name="postalAddress" />
          <Field label="National ID / Passport Number" name="nationalId" />
          <SelectField label="Marital Status" name="maritalStatus" required>
            <option value="">Select marital status</option>
            <option value="SINGLE">Single</option>
            <option value="MARRIED">Married</option>
            <option value="DIVORCED">Divorced</option>
            <option value="WIDOWED">Widowed</option>
          </SelectField>
        </div>
      </FormSection>

      <FormSection
        step="02"
        title="Education & Programme"
        description="Tell us about your academic background and preferred course."
      >
        <div className="grid gap-7 md:grid-cols-2">
          <Field label="KCSE Secondary School" name="kcseSchool" required />
          <Field label="KCSE Grade" name="kcseGrade" required />
          <Field label="KCSE Year Completed" name="kcseYear" type="number" required />
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
                {course.name} — {course.department}
              </option>
            ))}
          </SelectField>
          <SelectField label="Mode of Study" name="modeOfStudy" required>
            <option value="">Select mode of study</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
          </SelectField>
          <SelectField label="Preferred Intake" name="intake" required>
            <option value="">Select intake</option>
            <option value="JANUARY">January</option>
            <option value="MAY">May</option>
            <option value="SEPTEMBER">September</option>
          </SelectField>
        </div>
      </FormSection>

      <FormSection
        step="03"
        title="Parent / Guardian"
        description="Emergency contact and guardian details."
      >
        <div className="grid gap-7 md:grid-cols-2">
          <Field label="Guardian Name" name="guardianName" required />
          <Field label="Relationship" name="guardianRelationship" required />
          <Field label="Guardian Phone" name="guardianPhone" type="tel" required />
          <Field label="Address" name="guardianAddress" />
        </div>
      </FormSection>

      <FormSection
        step="04"
        title="Documents"
        description="Upload clear copies of the required documents. Accepted formats: JPG, PNG, PDF."
      >
        <div className="grid gap-7 md:grid-cols-3">
          <FileField label="Passport Photo" name="passportPhoto" />
          <FileField label="ID Copy" name="idCopy" />
          <FileField label="Birth Certificate" name="birthCertificate" />
          <FileField label="KCSE Certificate / Result Slip / Leaving Certificate" name="kcseCertificate" />
        </div>
      </FormSection>

      {message && (
        <div
          className={`rounded-xl border !p-5 text-sm font-medium ${message.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
            }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-col items-center gap-5 !pt-4">
        <p className="text-xs text-neutral-400">
          Fields marked <span className="text-red-500">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
}

function FormSection({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-static">
      <div className="!mb-9 flex items-start gap-5 border-b border-[#E8E4DC] !pb-9">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E5AD23] font-[family:var(--font-serif)] text-sm font-bold text-black">
          {step}
        </span>
        <div>
          <h2 className="font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
            {title}
          </h2>
          <p className="!mt-1.5 text-sm leading-relaxed text-neutral-500">{description}</p>
        </div>
      </div>
      {children}
    </div>
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
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-[#1C1C1C]">
        {label}
        {required && <span className="!ml-1 text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[#D4CFC4] bg-white !px-4 !py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#E5AD23] focus:ring-2 focus:ring-[#E5AD23]/20 placeholder:text-neutral-400"
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
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-[#1C1C1C]">
        {label}
        {required && <span className="!ml-1 text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full rounded-lg border border-[#D4CFC4] bg-white !px-4 !py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#E5AD23] focus:ring-2 focus:ring-[#E5AD23]/20"
      >
        {children}
      </select>
    </div>
  );
}

function FileField({ label, name }: { label: string; name: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-[#1C1C1C]">
        {label}
      </label>
      <div className="relative flex min-h-[100px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#D4CFC4] bg-[#F8F7F4] !px-4 !py-8 text-center">
        <p className="text-xs font-semibold text-neutral-500">Click to upload</p>
        <p className="!mt-1.5 text-[0.7rem] text-neutral-400">JPG, PNG or PDF</p>
        <input
          id={name}
          name={name}
          type="file"
          className="absolute inset-0 cursor-pointer opacity-0"
          accept="image/*,.pdf"
        />
      </div>
    </div>
  );
}