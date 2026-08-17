// src/app/contact/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppBadge from "@/components/layout/WhatsAppBadge";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
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
            <span className="tagline-center text-[#E5AD23]">Get in Touch</span>

            <h1 className="!mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
              Contact KSTTI
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              Have a question about admissions, courses, or campus life?
              Contact KSTTI and our team will assist you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="!space-y-8">
              <div className="card">
                <p className="tagline">Campuses</p>

                <div className="!space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Kerugoya Campus
                    </h2>
                    <p className="!mt-2 text-neutral-600 leading-relaxed">
                      Kerugoya Campus
                    </p>
                  </div>

                  <div className="border-t border-neutral-200 !pt-4">
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Ruai Campus
                    </h2>
                    <p className="!mt-2 text-neutral-600 leading-relaxed">
                      Ruai Campus
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <p className="tagline">Contact Details</p>

                <div className="!mt-8 !space-y-2 text-neutral-600">
                  <p>
                    <span className="font-medium text-neutral-900">
                      Phone:
                    </span>{" "}
                    0713 255324 / 0798 469493
                  </p>

                  <p>
                    <span className="font-medium text-neutral-900">
                      Email:
                    </span>{" "}
                    info@kstti.ac.ke
                  </p>

                  <p>
                    <span className="font-medium text-neutral-900">
                      Website:
                    </span>{" "}
                    www.kstti.ac.ke
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <WhatsAppBadge />
      <Footer />
    </>
  );
}