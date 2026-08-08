// src/app/contact/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Get In Touch</p>

            <h1 className="text-5xl md:text-6xl">
              Contact KSTTI
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Have a question about admissions, courses, or campus life? Our
              team is ready to assist you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="mb-4 text-2xl">Kerugoya Campus</h2>

                <p className="text-gray-600">
                  Main Campus
                </p>
              </div>

              <div className="card p-8">
                <h2 className="mb-4 text-2xl">Ruai Campus</h2>

                <p className="text-gray-600">
                  Satellite Campus
                </p>
              </div>

              <div className="card p-8">
                <h2 className="mb-4 text-2xl">Contact Details</h2>

                <div className="space-y-3 text-gray-600">
                  <p>Phone: +254 XXX XXX XXX</p>
                  <p>Email: info@kstti.ac.ke</p>
                  <p>Website: www.kstti.ac.ke</p>
                </div>
              </div>
            </div>

            <form className="card space-y-6 p-8">
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--color-primary)"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--color-primary)"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--color-primary)"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--color-primary)"
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}