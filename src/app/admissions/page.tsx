// src/app/admissions/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Admissions",
};

const steps = [
  {
    step: "01",
    title: "Choose a Course",
    description: "Explore our programmes and select the course that matches your career goals.",
  },
  {
    step: "02",
    title: "Submit Application",
    description: "Complete the online application form and upload the required documents.",
  },
  {
    step: "03",
    title: "Application Review",
    description: "Your application will be reviewed by the admissions office.",
  },
  {
    step: "04",
    title: "Receive Admission Letter",
    description: "Successful applicants can download their admission letter from the applicant portal.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Admissions</p>

            <h1 className="text-5xl md:text-6xl">
              Start Your Journey at KSTTI
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Apply online and begin your journey towards practical skills,
              professional growth, and career success.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/apply"
                className="rounded-lg bg-(--color-primary) px-8 py-4 font-semibold text-black transition hover:opacity-90"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-lg">
            <h2 className="mb-12 text-center text-4xl">
              Admission Process
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-(--color-primary) font-bold text-black">
                    {item.step}
                  </span>

                  <h3 className="mb-4 text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}