// src/components/home/FeaturedCourses.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Beauty & Cosmetology",
    description:
      "Professional beauty training with practical salon experience.",
  },
  {
    title: "Information Communication Technology",
    description:
      "Develop modern digital skills for today's technology industry.",
  },
  {
    title: "Business Studies",
    description:
      "Build entrepreneurial and business management skills.",
  },
  {
    title: "Hospitality",
    description:
      "Train for careers in catering, food production and hospitality.",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="section bg-[#F8F7F4]">
      <div className="container-xl">
        <div className="text-center">
          <span className="tagline-center">Popular Programmes</span>
          <h2 className="section-title">Explore Our Courses</h2>
          <p className="section-subtitle">
            Industry focused training designed to prepare students for employment
            and entrepreneurship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <article key={course.title} className="card group flex flex-col">
              {/* Gold accent bar */}
              <div className="mb-6 h-1 w-10 rounded-full bg-[#E5AD23]" />

              <h3 className="mb-3 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                {course.title}
              </h3>

              <p className="flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                {course.description}
              </p>

              <Link
                href="/courses"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
              >
                Learn More
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}