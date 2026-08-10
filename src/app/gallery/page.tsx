import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Gallery",
};

const heightClass = {
  NORMAL: "h-52",
  TALL: "h-80",
  WIDE_TALL: "h-72",
} as const;

export default async function GalleryPage() {
  const gallery = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#0A0A0A]">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: "url('/random.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,173,35,0.07),transparent_60%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

          <div className="container-xl relative !py-24 text-center md:!py-32">
            <span className="tagline text-[#E5AD23]">Campus Life</span>

            <h1 className="!mt-3 font-serif text-5xl font-bold text-white md:text-6xl">
              KSTTI Gallery
            </h1>

            <p className="mx-auto !mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Explore our campuses, learning environments, workshops, student
              activities, and practical training sessions.
            </p>
          </div>
        </section>

        <section className="bg-neutral-50 !py-16">
          <div className="container-xl">
            <div
              className="columns-2 gap-4 md:columns-3 lg:columns-4"
              style={{ columnFill: "balance" }}
            >
              {gallery.map((item, index) => (
                <div
                  key={item.id}
                  className={[
                    "group relative mb-4 break-inside-avoid overflow-hidden border border-neutral-200 bg-neutral-200 shadow-sm",
                    "cursor-pointer transition duration-300 hover:shadow-xl hover:border-[#E5AD23]/40",
                    heightClass[item.span],
                  ].join(" ")}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg,
                        hsl(${((index + 1) * 37) % 360}, 12%, 82%) 0%,
                        hsl(${((index + 1) * 37 + 40) % 360}, 10%, 72%) 100%)`,
                    }}
                  />

                  <div className="absolute inset-0 bg-[#0A0A0A]/0 transition-all duration-300 group-hover:bg-[#0A0A0A]/40" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-1 px-4 py-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#E5AD23]">
                      {item.title}
                    </p>
                  </div>

                  <span className="absolute right-3 top-3 rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}