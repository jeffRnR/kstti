// src/app/about/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About",
};

const values = [
  {
    title: "Practical Learning",
    description:
      "We emphasize practical training that helps learners develop useful skills they can apply in real working environments.",
  },
  {
    title: "Professionalism",
    description:
      "We encourage discipline, responsibility, integrity, and professional conduct throughout the learning journey.",
  },
  {
    title: "Innovation",
    description:
      "We encourage learners to think creatively, solve problems, and adapt their skills to changing industry needs.",
  },
  {
    title: "Student Support",
    description:
      "We aim to provide learners with guidance and individual attention as they progress through their training.",
  },
];

const steps = [
  {
    step: "01",
    title: "Learn",
    description:
      "Build foundational knowledge and understand the principles behind your chosen area of study.",
  },
  {
    step: "02",
    title: "Practice",
    description:
      "Develop practical competencies by applying knowledge through hands-on learning in modern facilities.",
  },
  {
    step: "03",
    title: "Progress",
    description:
      "Strengthen your skills and prepare for employment, entrepreneurship, or continued education.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Page header ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A0A0A] !py-24 md:!py-32">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: "url('/random.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,173,35,0.07),transparent_60%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent inset-0" />

          <div className="container-xl relative flex flex-col gap-6">
            <span className="tagline-center text-[#E5AD23]">Who We Are</span>

            <h1 className="mt-6 font-[family:var(--font-serif)] text-4xl font-bold text-white md:text-5xl">
              About Kirinyaga Seniors Technical Training Institute
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.85] text-neutral-400">
              Focused on providing quality technical and vocational education
              through practical training, professional development, and
              personalized student support.
            </p>
          </div>
        </section>

        {/* ── Our Institution ─────────────────────────────── */}
        <section className="section bg-white">
          <div className="container-xl">
            <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="flex flex-col gap-6">
                <span className="tagline">Our Institution</span>

                <h2 className="mt-4 font-[family:var(--font-serif)] text-3xl font-bold text-[#0A0A0A] md:text-4xl">
                  Preparing Learners For The World Of Work
                </h2>

                <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-neutral-600">
                  <p>
                    KSTTI provides a learning environment where students can
                    develop practical skills, strengthen their professional
                    abilities, and prepare for future career opportunities.
                  </p>
                  <p>
                    Our approach combines technical knowledge with practical
                    learning so that students can develop skills that are
                    relevant beyond the classroom.
                  </p>
                  <p>
                    We recognize that every learner has different goals and
                    abilities. Our focus on personalized student support helps
                    learners progress through their training with appropriate
                    guidance.
                  </p>
                </div>

                <div className="flex justify-center sm:flex sm:justify-start">
                  <Link href="/apply" className="btn-primary mt-10">
                    Apply Now
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <div className="card-static">
                <div className="!mb-1 h-1 w-10 rounded-full bg-[#E5AD23]" />

                <h3 className="mt-6 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                  Skills That Create Opportunities
                </h3>

                <p className="!mt-4 text-[0.9375rem] leading-relaxed text-neutral-600">
                  We focus on equipping learners with practical competencies,
                  professional values, and knowledge that can support
                  employment, entrepreneurship, and continued personal
                  development.
                </p>

                <div className="!mt-8 !space-y-2 border-t border-[#E8E4DC] !pt-8">
                  {["TVETA Accredited", "Two Campuses", "100% Practical Learning"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E5AD23]" />
                      <span className="text-sm font-semibold text-[#1C1C1C]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ──────────────────────────────────────── */}
        <section className="section bg-[#F8F7F4]">
          <div className="container-xl flex flex-col gap-12">
            <div className="text-center">
              <span className="tagline-center">What Guides Us</span>
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle">
                The principles that shape our approach to teaching and student
                development.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="card flex flex-col">
                  <div className="!mb-1 h-1 w-10 rounded-full bg-[#E5AD23]" />
                  <h3 className="mb-3 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                    {value.title}
                  </h3>
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ────────────────────────────────────── */}
        <section className="section bg-white">
          <div className="container-xl flex flex-col gap-12">
            <div className="text-center">
              <span className="tagline-center">Our Approach</span>
              <h2 className="section-title">Learning Beyond The Classroom</h2>
              <p className="section-subtitle">
                Technical education is most valuable when learners can connect
                what they study with practical situations.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <article key={s.title} className="card flex flex-col">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-[#E5AD23] font-[family:var(--font-serif)] text-sm font-bold text-black">
                    {s.step}
                  </span>
                  <h3 className="mb-3 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                    {s.title}
                  </h3>
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                    {s.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="section bg-[#F8F7F4]">
          <div className="container-md text-center">
            <span className="tagline-center">Your Future Starts Here</span>
            <h2 className="section-title">Build Skills For Your Next Step</h2>
            <p className="section-subtitle">
              Explore our courses and discover a training path that matches
              your goals.
            </p>
            <div className="!mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/apply" className="btn-primary">
                Apply Online
              </Link>
              <Link href="/courses" className="btn-secondary">
                Explore Courses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}