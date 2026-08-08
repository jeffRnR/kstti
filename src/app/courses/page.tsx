// src/app/courses/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Courses",
};

const courseCategories = [
  {
    title: "Beauty & Cosmetology",
    description:
      "Professional training in beauty therapy, hairdressing, barbering, nail technology, and cosmetology.",
  },
  {
    title: "ICT & Computing",
    description:
      "Develop practical digital skills through hands-on computing and information technology training.",
  },
  {
    title: "Business Studies",
    description:
      "Build knowledge in entrepreneurship, office administration, accounting, and business management.",
  },
  {
    title: "Hospitality",
    description:
      "Gain practical skills in catering, food production, customer service, and hospitality management.",
  },
  {
    title: "Technical Courses",
    description:
      "Industry-oriented technical programs designed to prepare students for employment and self-employment.",
  },
  {
    title: "Short Courses",
    description:
      "Flexible short professional courses for learners seeking specific practical skills.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Our Programmes</p>

            <h1 className="text-5xl md:text-6xl">
              Explore Our Courses
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Discover practical, industry-focused training programmes designed
              to equip learners with skills for employment, entrepreneurship,
              and lifelong success.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courseCategories.map((course) => (
              <article
                key={course.title}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="mb-4 text-2xl">{course.title}</h2>

                <p className="mb-8 text-gray-600">
                  {course.description}
                </p>

                <Link
                  href="/admissions"
                  className="inline-flex rounded-lg bg-(--color-primary) px-5 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Apply Now
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}