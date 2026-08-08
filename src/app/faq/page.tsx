// src/app/faq/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Frequently Asked Questions",
};

const faqs = [
  {
    question: "Who can apply to KSTTI?",
    answer:
      "High school graduates, school dropouts, and anyone interested in acquiring practical technical skills are welcome to apply.",
  },
  {
    question: "Where are your campuses located?",
    answer:
      "KSTTI has two campuses: Kerugoya Campus and Ruai Campus.",
  },
  {
    question: "Are the courses offered at both campuses?",
    answer:
      "Yes. The same programmes are offered across both campuses.",
  },
  {
    question: "How do I apply?",
    answer:
      "Applications can be completed online through the admissions portal available on this website.",
  },
  {
    question: "Can I track my application?",
    answer:
      "Yes. After submitting your application, you will be able to track its progress through the applicant portal.",
  },
  {
    question: "What makes KSTTI different?",
    answer:
      "KSTTI focuses on quality education, practical training, and personalized student support through small class sizes.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Support</p>

            <h1 className="text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Find answers to common questions about admissions, campuses,
              courses, and student life.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-lg space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="card rounded-xl p-6 transition hover:shadow-md"
              >
                <summary className="cursor-pointer text-xl font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}