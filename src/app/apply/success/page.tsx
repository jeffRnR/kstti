// src/app/apply/success/page.tsx

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Application Submitted",
};

export default function ApplicationSuccessPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="section bg-[#F8F7F4]">
          <div className="container-md">
            <div className="card text-center">

              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E5AD23]/15">
                <CheckCircle2 size={32} className="text-[#E5AD23]" />
              </div>

              {/* Eyebrow */}
              <div className="mt-8 flex justify-center">
                <span className="tagline-center">Application Received</span>
              </div>

              {/* Heading */}
              <h1 className="mt-5 font-[family:var(--font-serif)] text-3xl font-bold text-[#0A0A0A] md:text-5xl">
                Thank You For Applying
              </h1>

              {/* Body */}
              <p className="mx-auto mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-neutral-600">
                Your application has been submitted successfully. Our admissions
                team will review it within 3 working days. Keep your application
                number for future reference.
              </p>

              {/* Application number box */}
              <div className="mx-auto mt-10 max-w-sm rounded-xl border border-[#D4CFC4] bg-[#F8F7F4] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  Application Number
                </p>
                <p className="mt-3 font-[family:var(--font-serif)] text-2xl font-bold tracking-wide text-[#0A0A0A]">
                  Your number will appear here
                </p>
              </div>

              {/* Divider */}
              <div className="mx-auto my-10 h-px w-full max-w-sm bg-[#E8E4DC]" />

              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/" className="btn-primary">
                  Return Home
                </Link>
                <Link href="/courses" className="btn-secondary">
                  View Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}