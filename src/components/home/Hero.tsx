// src/components/home/Hero.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    // Changed: relative py-20 lg:py-28 instead of rigid min-h-screen
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

      {/* Reduced fixed py-36 to py-20 to prevent overflow stacking */}
      <div className="container-xl relative flex min-h-screen items-center justify-center !py-20 px-4">
        <div className="w-full max-w-4xl text-center items-center justify-center flex flex-col gap-6 !px-4">
 
          <h1 className="font-[family:var(--font-script)] text-5xl text-[#E5AD23] md:text-6xl justify-center flex items-center gap-2 !px-4">
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
        </div>
      </div>
    </section>
  );
}