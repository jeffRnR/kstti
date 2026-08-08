// src/app/about/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Who We Are</p>

            <h1 className="text-5xl md:text-6xl">
              About Kirinyaga Seniors Technical Training Institute
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Kirinyaga Seniors Technical Training Institute is committed to
              providing quality technical education through practical training,
              personalized student support, and industry-focused learning that
              prepares graduates for employment and entrepreneurship.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-lg grid gap-8 lg:grid-cols-3">
            <article className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl">Our Vision</h2>

              <p>
                To be a leading institution in technical and vocational
                education through quality training and innovation.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl">Our Mission</h2>

              <p>
                To equip learners with practical skills, professional values,
                and knowledge that meet industry and societal needs.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl">Why Choose KSTTI</h2>

              <p>
                Small class sizes, quality education, experienced instructors,
                practical learning, and dedicated student support ensure every
                learner receives individual attention.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}