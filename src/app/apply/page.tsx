// src/app/apply/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationForm from "@/components/apply/ApplicationForm";

export const metadata = {
  title: "Apply Online",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-dark">
          <div className="container-xl section text-center">
            <p className="tagline">Admissions</p>

            <h1 className="mt-4 text-4xl md:text-6xl">
              Apply Online
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
              Complete your application to begin your admission process at KSTTI.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-md">
            <ApplicationForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}