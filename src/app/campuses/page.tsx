import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import Image from "next/image";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Campuses",
};

export default async function CampusesPage() {
  const campuses = await prisma.campus.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <Navbar />
      <main>
        {/* ── Page header ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A0A0A] !py-24 md:!py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,173,35,0.07),transparent_60%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

          <div className="container-xl relative flex flex-col gap-6">
            <span className="tagline-center text-[#E5AD23]">Our Campuses</span>

            <h1 className="!mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
              Learn From Either Campus
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              KSTTI offers the same programmes, quality education, and dedicated
              student support across both campuses.
            </p>
          </div>
        </section>

        {/* ── Campuses List ────────────────────────────────── */}
        <section className="section bg-[#F8F7F4]">
          <div className="container-xl">
            <div className="grid gap-10 lg:grid-cols-2">
              {campuses.map((campus) => (
                <article
                  key={campus.name}
                  className="card-hover group overflow-hidden !p-0"
                >
                  {/* Campus Image */}
                  {campus.image && (
                    <div className="relative !h-64 w-full overflow-hidden">
                      <Image
                        src={campus.image}
                        alt={campus.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <div className="!p-8">
                    <div className="!mb-1 !mt-5 h-1 w-10 rounded-full bg-[#E5AD23]" />

                    <h2 className="font-serif text-2xl font-bold text-[#0A0A0A]">
                      {campus.name}
                    </h2>

                    <div className="!mt-2 flex items-center gap-2 text-[#C4931A]">
                      <MapPin size={16} className="shrink-0" />
                      <span className="text-sm font-semibold">
                        {campus.location}
                      </span>
                    </div>

                    <p className="!mt-5 text-[0.9375rem] leading-relaxed text-neutral-600">
                      {campus.description}
                    </p>

                    {/* Directions Block */}
                    <div className="!mt-6">
                      <div className="flex items-start gap-2.5">
                        <Navigation
                          size={18}
                          className="!mt-0.5 shrink-0 text-[#C4931A]"
                        />

                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C4931A]">
                            Directions
                          </h3>

                          <p className="!mt-1 text-xs leading-relaxed text-neutral-500">
                            {campus.directions}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Google Map Embed */}
                    {campus.mapEmbedUrl && (
                      <div className="!mt-6 h-48 w-full overflow-hidden rounded-xl border border-neutral-200">
                        <iframe
                          src={campus.mapEmbedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${campus.name} Location Map`}
                        />
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="!mt-8 flex flex-wrap gap-3">
                      <Link href="/apply" className="btn-primary">
                        Apply Now
                      </Link>

                      <a
                        href={campus.mapsUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        Google Maps
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}