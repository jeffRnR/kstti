// src/components/home/Hero.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-through-a-university-campus-4512-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Lighter overlay so video breathes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

      <div className="container-xl relative flex min-h-screen items-center justify-center">
        <div className="w-full max-w-4xl py-36 text-center">

          <h1 className="font-[family:var(--font-script)] text-5xl font-bold text-[#E5AD23] md:text-6xl">
            Empowering Minds For Tomorrow
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-[1.9] text-neutral-200 md:text-xl">
            Gain industry ready skills through quality technical education,
            practical training and personalized student support in a modern
            learning environment.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-primary">
              Apply Online
            </Link>
            <Link href="/courses" className="btn-secondary-inverted inline-flex items-center gap-2">
              Explore Courses
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mx-auto mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-12">
            {[
              { value: "2", label: "Campuses" },
              { value: "100%", label: "Practical Learning" },
              { value: "TVETA", label: "Accredited" },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline gap-2.5">
                <span className="font-[family:var(--font-serif)] text-3xl font-bold text-[#E5AD23]">
                  {item.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}