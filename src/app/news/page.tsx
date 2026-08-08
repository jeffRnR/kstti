// src/app/news/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "News",
};

const news = [
  {
    title: "July 2026 Intake Ongoing",
    description:
      "Applications are open for our ongoing intake across all programmes at both campuses.",
    date: "Admissions",
  },
  {
    title: "Industry Focused Training",
    description:
      "Our programmes continue to emphasize practical learning and workplace readiness.",
    date: "Academics",
  },
  {
    title: "Student Support Services",
    description:
      "KSTTI continues to provide personalized support through small class sizes and dedicated instructors.",
    date: "Student Life",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Latest Updates</p>

            <h1 className="text-5xl md:text-6xl">
              News & Announcements
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Stay informed with the latest announcements, admissions updates,
              and institutional news.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl space-y-8">
            {news.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <span className="inline-block rounded-full bg-(--color-primary) px-4 py-1 text-sm font-semibold text-black">
                  {item.date}
                </span>

                <h2 className="mt-5 text-3xl">{item.title}</h2>

                <p className="mt-4 text-gray-600">
                  {item.description}
                </p>

                <Link
                  href="/admissions"
                  className="mt-6 inline-flex font-semibold text-(--color-primary)"
                >
                  Learn More →
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