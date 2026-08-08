// src/app/gallery/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Gallery",
};

const gallery = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
}));

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral-950 text-white">
          <div className="container-xl section text-center">
            <p className="tagline mb-4">Campus Life</p>

            <h1 className="text-5xl md:text-6xl">
              KSTTI Gallery
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
              Explore our campuses, learning environment, workshops, student
              activities, and practical training through our gallery.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-xl grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex h-full items-center justify-center text-sm font-medium text-gray-500">
                  Image {item.id}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}