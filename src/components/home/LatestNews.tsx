// src/components/home/LatestNews.tsx

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const news = [
  {
    title: "Admissions Now Open",
    category: "Latest Update",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Students talking on campus during admissions",
  },
  {
    title: "New Student Orientation",
    category: "Upcoming Event",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Students attending orientation event",
  },
  {
    title: "Industry Skills Workshop",
    category: "Training",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Technical workshop training session",
  },
];

export default function LatestNews() {
  return (
    <section className="section bg-white">
      <div className="container-xl flex flex-col gap-12">
        <div className="text-center">
          <span className="tagline-center">News &amp; Updates</span>
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-subtitle">
            Follow the latest announcements, events and activities from KSTTI.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 !p-0">
          {news.map((item) => (
            <article
              key={item.title}
              className="group card-static flex flex-col overflow-hidden !p-0"
            >
              <div className="flex flex-1 flex-col !">
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col md:!p-8 !p-8">
                  {/* Gold accent bar */}
                  <div className="mb-4 h-1 w-10 rounded-full bg-[#E5AD23]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4931A]">
                    {item.category}
                  </span>

                  <h3 className="mt-3 flex-1 font-serif text-xl font-bold text-[#0A0A0A]">
                    {item.title}
                  </h3>

                  <Link
                    href="/news"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
                  >
                    Read More
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/news" className="btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}