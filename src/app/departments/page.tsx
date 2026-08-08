// src/app/departments/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Departments",
};

const departments = [
  {
    name: "Beauty & Cosmetology",
    description:
      "Professional training in beauty therapy, hairdressing, barbering, and nail technology.",
  },
  {
    name: "Information Communication Technology",
    description:
      "Practical ICT training focused on modern digital skills and computing technologies.",
  },
  {
    name: "Business Studies",
    description:
      "Industry-oriented programmes that prepare learners for business and entrepreneurship.",
  },
  {
    name: "Hospitality",
    description:
      "Hands-on hospitality training covering food production, customer service, and catering.",
  },
  {
    name: "Technical Studies",
    description:
      "Technical programmes designed to develop practical workplace and self-employment skills.",
  },
  {
    name: "Short Professional Courses",
    description:
      "Flexible short courses for learners seeking practical skills and career advancement.",
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Academic Departments</p>

            <h1 className="text-5xl md:text-6xl">
              Departments at KSTTI
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Our departments provide practical, competency-based training that
              equips learners with skills required in today's industries.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <article
                key={department.name}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="mb-4 text-2xl">{department.name}</h2>

                <p className="text-gray-600">
                  {department.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}