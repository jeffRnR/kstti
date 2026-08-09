// src/components/home/CallToAction.tsx

import Link from "next/link";

const intakes = [
  {
    name: "January Intake",
    month: "January",
    year: new Date().getFullYear(),
    startDate: new Date(new Date().getFullYear(), 0, 15), // January 15th
    endDate: new Date(new Date().getFullYear(), 0, 31), // January 31st
    ongoing: false
  },
  {
    name: "September Intake",
    month: "September",
    year: new Date().getFullYear(),
    startDate: new Date(new Date().getFullYear(), 8, 15), // September 15th
    endDate: new Date(new Date().getFullYear(), 8, 30), // September 30th
    ongoing: true
  }


]

export default function CallToAction() {
  const intake = intakes.find(intake => intake.ongoing)?.name || "No Intake Currently Ongoing";

  return (
    <section className="section bg-white">
      <div className="container-xl flex flex-col gap-12">
        <div className="text-center">
          <span className="tagline-center">
            {intake} Currently Ongoing
          </span>

          <h2 className="section-title">
            Ready To Begin Your Future?
          </h2>

          <p className="section-subtitle">
            Join KSTTI and build practical skills that open doors to career
            opportunities through quality technical education.
          </p>
        </div>

        <div className="!mt-6 text-center gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:justify-center text-center items-center">
            <Link href="/apply" className="btn-primary text-center">
              Start Your Application
            </Link>

            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}