// src/components/home/Departments.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    name: "School of Computing & Informatics",
    description: "Industry focused programmes delivered through competency based education and practical training.",
  },
  {
    name: "School of Cosmetology",
    description: "Industry focused programmes delivered through competency based education and practical training.",
  },
  {
    name: "School of Electrical Engineering",
    description: "Industry focused programmes delivered through competency based education and practical training.",
  },
  {
    name: "School of Building Technology",
    description: "Industry focused programmes delivered through competency based education and practical training.",
  },
  {
    name: "School of Business",
    description: "Industry focused programmes delivered through competency based education and practical training.",
  },
  {
    name: "School of Hospitality",
    description: "Industry focused programmes delivered through competency based education and practical training.",
  },
];

export default function Departments() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="text-center">
          <span className="tagline-center">Departments</span>
          <h2 className="section-title">Discover Our Schools</h2>
          <p className="section-subtitle">
            Every department focuses on practical learning supported by qualified
            trainers and modern facilities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((dept) => (
            <article key={dept.name} className="card flex flex-col">
              <div className="mb-6 h-1 w-10 rounded-full bg-[#E5AD23]" />

              <h3 className="mb-2 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                {dept.name}
              </h3>

              <p className="flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                {dept.description}
              </p>

              <Link
                href="/departments"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
              >
                View Department
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}