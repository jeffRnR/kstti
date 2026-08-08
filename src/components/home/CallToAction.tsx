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
    <section className="section bg-[#0A0A0A]">
      <div className="container-md text-center">
        <span className="tagline-center text-[#E5AD23]">
          {intake} Currently Ongoing
        </span>

        <h2 className="mt-6 font-[family:var(--font-serif)] text-4xl font-bold text-white md:text-5xl">
          Ready To Begin Your Future?
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-[1.85] text-neutral-400">
          Join KSTTI and build practical skills that open doors to career
          opportunities through quality technical education.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/apply" className="btn-primary">
            Start Your Application
          </Link>

          <Link href="/contact" className="btn-secondary-inverted">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}