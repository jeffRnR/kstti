// src/app/campuses/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Campuses",
};

const campuses = [
  {
    name: "Kerugoya Campus",
    description:
      "The main campus offering quality technical education in a supportive learning environment.",
  },
  {
    name: "Ruai Campus",
    description:
      "A modern campus providing the same quality programmes with practical, industry-focused training.",
  },
];

export default function CampusesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Our Campuses</p>

            <h1 className="text-5xl md:text-6xl">
              Learn From Either Campus
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              KSTTI offers the same programmes, quality education, and dedicated
              student support across both campuses.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid gap-8 lg:grid-cols-2">
            {campuses.map((campus) => (
              <article
                key={campus.name}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="mb-4 text-3xl">{campus.name}</h2>

                <p className="mb-8 text-gray-600">
                  {campus.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/admissions"
                    className="rounded-lg bg-(--color-primary) px-6 py-3 font-semibold text-black transition hover:opacity-90"
                  >
                    Apply Now
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-lg border border-neutral-300 px-6 py-3 font-semibold transition hover:bg-neutral-100"
                  >
                    Contact Campus
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}