import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function Campuses() {
  const campuses = await prisma.campus.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section className="section">
      <div className="container-xl flex flex-col gap-12">
        <div className="text-center">
          <span className="tagline-center text-[#E5AD23]">
            Our Campuses
          </span>

          <h2 className="section-title">
            Study From Either Of Our Two Campuses
          </h2>

          <p className="section-subtitle">
            KSTTI provides the same quality education, practical training and
            student support across both campuses.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {campuses.map((campus) => (
            <article
              key={campus.id}
              className="card-hover group overflow-hidden !p-0"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={
                    campus.code === "KERUGOYA"
                      ? "/images/campuses/kerugoya.jpg"
                      : "/images/campuses/ruai.jpg"
                  }
                  alt={campus.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="!p-8">
                <h3 className="font-[family:var(--font-serif)] text-2xl font-bold text-[#0A0A0A]">
                  {campus.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-[#C4931A]">
                  <MapPin size={15} className="shrink-0" />

                  <span className="text-sm font-semibold">
                    {campus.address}
                  </span>
                </div>

                <p className="mt-5 text-[0.9375rem] leading-relaxed text-neutral-600">
                  {campus.code === "KERUGOYA"
                    ? "The main campus offering quality technical training with modern learning facilities, practical workshops and personalized student support."
                    : "Serving students within Nairobi and its surrounding regions with the same quality education, experienced trainers and practical learning approach."}
                </p>

                <Link
                  href="/campuses"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}