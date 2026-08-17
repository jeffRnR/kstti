// src/app/apply/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationForm from "@/components/apply/ApplicationForm";
import WhatsAppBadge from "@/components/layout/WhatsAppBadge";

export const metadata = {
  title: "Apply Online",
};

export default function ApplyPage() {
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
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

          <div className="container-xl relative flex flex-col gap-6">
            <span className="tagline-center text-[#E5AD23]">Admissions</span>

            <h1 className="!mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
              Apply Online
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              Complete the form below to begin your admission process at KSTTI.
              Applications are reviewed within 3 working days.
            </p>
          </div>
        </section>

        {/* ── Form ────────────────────────────────────────── */}
        <section className="section bg-[#F8F7F4]">
          <div className="container-md">
            <ApplicationForm />
          </div>
        </section>
      </main>
      <WhatsAppBadge />

      <Footer />
    </>
  );
}