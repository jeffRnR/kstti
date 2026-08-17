// src/app/downloads/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Download } from "lucide-react";
import WhatsAppBadge from "@/components/layout/WhatsAppBadge";

export const metadata = {
  title: "Downloads",
};

const documents = [
  {
    title: "Admission Form",
    description: "Download the official admission application form.",
    href: "#",
  },
  {
    title: "Admission Letter Sample",
    description: "View the format of the admission letter.",
    href: "#",
  },
  {
    title: "Course Brochure",
    description: "Explore programmes offered at KSTTI.",
    href: "#",
  },
  {
    title: "Fee Structure",
    description: "View the latest fee structure for all programmes.",
    href: "#",
  },
  {
    title: "Student Handbook",
    description: "Important information for all students.",
    href: "#",
  },
  {
    title: "Application Requirements",
    description: "Required documents before submitting an application.",
    href: "#",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Resources</p>

            <h1 className="text-5xl md:text-6xl">
              Downloads
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Access important admission documents, brochures, and student
              resources.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <article
                key={document.title}
                className="card flex flex-col justify-between p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <h2 className="mb-4 text-2xl">
                    {document.title}
                  </h2>

                  <p className="text-gray-600">
                    {document.description}
                  </p>
                </div>

                <Link
                  href={document.href}
                  className="btn-primary mt-8 w-fit"
                >
                  <Download size={18} />
                  Download
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <WhatsAppBadge />

      <Footer />
    </>
  );
}