import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Admissions",
};

const steps = [
  {
    step: "01",
    title: "Choose a Course",
    description:
      "Explore our programmes and select the course that matches your career goals and interests.",
  },
  {
    step: "02",
    title: "Submit Application",
    description:
      "Complete the online application form and upload the required documents to begin your application.",
  },
  {
    step: "03",
    title: "Application Review",
    description:
      "Your application will be carefully reviewed by our admissions office within a few business days.",
  },
  {
    step: "04",
    title: "Receive Admission Letter",
    description:
      "Successful applicants will receive their admission letter and joining instructions via email.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Page Header ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A0A0A] !py-24 md:!py-32">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: "url('/random.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,173,35,0.07),transparent_60%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />
          

          <div className="container-xl relative flex flex-col gap-6">
            <span className="tagline-center text-[#E5AD23]">Admissions</span>

            <h1 className="!mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
              Start Your Journey at KSTTI
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              Apply online and begin your journey towards practical skills,
              professional growth, and a rewarding career.
            </p>

            <div className="!mt-4 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-primary inline-flex items-center gap-2">
                Apply Online
                <ArrowRight size={17} />
              </Link>
              <Link href="/courses" className="btn-secondary-inverted">
                View Courses
              </Link>
            </div>
          </div>
        </section>

        {/* ── Admission Process ────────────────────────────── */}
        <section className="section bg-[#F8F7F4]">
          <div className="container-xl">
            <div className="text-center">
              <span className="tagline-center text-[#E5AD23]">How It Works</span>
              <h2 className="section-title">Admission Process</h2>
              <p className="section-subtitle">
                Joining KSTTI is straightforward. Follow these four steps to
                secure your place on your chosen programme.
              </p>
            </div>

            <div className="!mt-14 grid gap-8 md:grid-cols-2">
              {steps.map((item) => (
                <article key={item.step} className="card-static">
                  <div className="!mb-6 flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5AD23] font-[family:var(--font-serif)] text-sm font-bold text-black">
                      {item.step}
                    </span>
                    <div className="!mt-1">
                      <h3 className="font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                        {item.title}
                      </h3>
                      <p className="!mt-2 text-[0.9375rem] leading-relaxed text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="section bg-white">
          <div className="container-xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#E5AD23] !px-10 !py-16 text-center md:!py-20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

              <div className="relative">
                <h2 className="font-[family:var(--font-serif)] text-3xl font-bold text-[#0A0A0A] md:text-4xl">
                  Ready to Apply?
                </h2>

                <p className="!mx-auto !mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-[#0A0A0A]/70">
                  Take the first step towards your future. Our admissions team
                  is ready to guide you through the process.
                </p>

                <div className="!mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0A0A0A] !px-8 !py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0A0A0A]/20 !px-8 !py-3.5 text-sm font-bold text-[#0A0A0A] transition hover:border-[#0A0A0A]/40"
                  >
                    Contact Admissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}