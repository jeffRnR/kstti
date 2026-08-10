// src/components/contact/ContactForm.tsx

"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "success" | "error" | null;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: null, message: "" });
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send your message.");

      form.reset();
      setStatus({ type: "success", message: "Your message has been sent successfully. We will get back to you shortly." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-white border border-[#D4CFC4] !p-8 shadow-xl"
    >
      <div className="flex flex-col gap-4">
        <span className="tagline">Send A Message</span>
        <h2 className="font-[family:var(--font-serif)] text-3xl font-bold text-[#0A0A0A]">
          How can we help?
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-500">
          Fill in the form below and our team will respond within 1–2 working days.
        </p>
      </div>

      <div className="!mt-6">

        {status.type && (
          <div
            role="alert"
            className={`rounded-xl border !p-4 text-sm font-medium ${status.type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-800"
              }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <Field id="name" label="Full Name" type="text" required autoComplete="name" />
          <Field id="email" label="Email Address" type="email" required autoComplete="email" />
        </div>

        <Field id="subject" label="Subject" type="text" required />

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-[#1C1C1C]">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full min-h-[13rem] resize-y rounded-2xl border border-[#D4CFC4] bg-white !p-4 text-sm text-[#1C1C1C] outline-none transition focus:border-[#E5AD23] focus:ring-0.5 focus:ring-[#E5AD23]/20"
          />
        </div>

        <div className="!pt-6 flex items-center sm:justify-start justify-center">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-[#1C1C1C]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-[#D4CFC4] bg-white !px-4 !py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#E5AD23] focus:ring-0.5 focus:ring-[#E5AD23]/20"
      />
    </div>
  );
}