// src/components/home/CampusLife.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gallery = [
  {
    title: "ICT Practical Lessons",
    image: "https://picsum.photos/600/450?random=11",
    span: "col-span-2 row-span-2", // large
  },
  {
    title: "Computer Laboratory",
    image: "https://picsum.photos/600/400?random=12",
    span: "col-span-1 row-span-1", // small
  },
  {
    title: "Beauty & Hairdressing Training",
    image: "https://picsum.photos/600/400?random=13",
    span: "col-span-1 row-span-1", // small
  },
  {
    title: "Hands-on Workshop",
    image: "https://picsum.photos/600/450?random=14",
    span: "col-span-1 row-span-2", // tall
  },
  {
    title: "Student Collaboration",
    image: "https://picsum.photos/900/400?random=15",
    span: "col-span-2 row-span-1", // wide
  },
];

export default function CampusLife() {
  return (
    <section className="section bg-[#F8F7F4]">
      <div className="container-xl flex flex-col gap-12">
        <div className="text-center">
          <span className="tagline-center">Campus Life</span>
          <h2 className="section-title">Experience Life At KSTTI</h2>
          <p className="section-subtitle">
            From practical training and modern laboratories to student
            activities and graduation, KSTTI provides an engaging learning
            environment that prepares students for successful careers.
          </p>
        </div>

        {/*
          Grid layout — 3 cols, auto rows of 220px.
          Items use col/row span to create the Google Photos-style mosaic.
          On mobile collapses to a single column with fixed heights.
        */}
        <div className="mt-14 hidden gap-2 md:grid md:grid-cols-3 md:[grid-auto-rows:220px]">
          {gallery.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden bg-neutral-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y- hover:shadow-[0_20px_48px_rgba(0,0,0,0.13)] ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width:1280px) 50vw, 33vw"
              />

              {/* Hover label */}
              <div className="absolute inset-x-0 bottom-0 left-2 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-5 transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-[family:var(--font-serif)] text-base font-bold text-white p-4">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile fallback — simple single column */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:hidden">
          {gallery.map((item) => (
            <article
              key={item.title}
              className="group relative h-56 overflow-hidden bg-neutral-200 shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-x-0 bottom-0 left-2 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-[family:var(--font-serif)] text-base font-bold text-white">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            Gallery
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}