// src/components/home/LatestNews.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    title: "Admissions Now Open",
    category: "Latest Update",
  },
  {
    title: "New Student Orientation",
    category: "Upcoming Event",
  },
  {
    title: "Industry Skills Workshop",
    category: "Training",
  },
];

export default function LatestNews() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="text-center">
          <span className="tagline-center">News &amp; Updates</span>
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-subtitle">
            Follow the latest announcements, events and activities from KSTTI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="card flex flex-col"
            >
              {/* Gold accent bar */}
              <div className="mb-6 h-1 w-10 rounded-full bg-[#E5AD23]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4931A]">
                {item.category}
              </span>

              <h3 className="mt-3 flex-1 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                {item.title}
              </h3>

              <Link
                href="/news"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
              >
                Read More
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/news" className="btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}