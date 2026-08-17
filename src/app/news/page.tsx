import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import prisma from "@/lib/prisma";
import WhatsAppBadge from "@/components/layout/WhatsAppBadge";

export const metadata = {
  title: "News",
};

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

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
            <span className="tagline-center text-[#E5AD23]">
              Latest Updates
            </span>

            <h1 className="!mt-2 font-[family:var(--font-serif)] text-4xl font-bold text-white md:text-5xl">
              News &amp; Announcements
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              Stay informed with the latest announcements, admissions updates,
              and institutional news from KSTTI.
            </p>
          </div>
        </section>

        <section className="section bg-[#F8F7F4]">
          <div className="container-xl ">
            <div className="grid gap-5 lg:grid-cols-3">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="card-hover group overflow-hidden !p-0"
                >
                  <div className="relative !h-64 w-full overflow-hidden">
                    <Image
                      src={item.coverImage ?? ""}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="!p-8">
                    <div className="shrink-0">
                      <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#C4931A]">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h2 className="font-[family:var(--font-serif)] text-2xl font-bold text-[#0A0A0A]">
                        {item.title}
                      </h2>

                      <p className="!mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                        {item.excerpt}
                      </p>

                      <Link
                        href="/apply"
                        className="!mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
                      >
                        Learn More
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-md text-center flex flex-col gap-6">
            <div className="items-center">
              <span className="tagline-center">Admissions Open</span>
              <h2 className="section-title">Ready To Apply?</h2>
              <p className="section-subtitle">
                Join KSTTI and build practical skills that open doors to real
                career opportunities.
              </p>
              <div className="!mt-12 flex flex-wrap justify-center gap-4">
                <Link href="/apply" className="btn-primary">
                  Apply Online
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppBadge />

      <Footer />
    </>
  );
}