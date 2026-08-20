// src/components/layout/Footer.tsx
"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function Footer() {
  const campuses = await prisma.campus.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="container-xl grid gap-12 !py-20 md:grid-cols-[1.4fr_0.8fr_1fr]">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 !mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5AD23] text-base font-black text-black">
              K
            </span>
            <div className="leading-tight">
              <span className="block font-[family:var(--font-display)] text-[0.95rem] font-bold tracking-[0.18em] text-white">
                KSTTI
              </span>
              <span className="font-[family:var(--font-script)] text-sm font-semibold text-[#E5AD23]">
                Empowering minds for tomorrow
              </span>
            </div>
          </div>

          <p className="max-w-sm text-[0.9375rem] leading-relaxed text-neutral-500">
            Quality technical education with practical learning, modern facilities,
            and personalized student support across Kerugoya and Ruai campuses.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="!mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Courses", href: "/courses" },
              { label: "Admissions", href: "/admissions" },
              { label: "Student Portal", href: "https://app.kstti.ac.ke" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="w-fit text-[0.9375rem] text-neutral-500 transition-colors hover:text-[#E5AD23]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="!mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Contact Us
          </h3>

          <div className="space-y-4 text-[0.9375rem] text-neutral-500 ">
            <div className="flex gap-3 items-center">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-[#E5AD23]"
              />
              {campuses.map((campus) => (
                <div key={campus.id} className="flex gap-3 items-center">
                  {campus.mapsUrl ? (
                    <a
                      href={campus.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#E5AD23]"
                    >
                      {campus.name}
                    </a>
                  ) : (
                    <span>{campus.name}</span>
                  )}
                  {campus !== campuses[campuses.length - 1] && (
                    <span className="text-neutral-600">|</span>
                  )}
                </div>
              ))}
            </div>


            <div className="flex gap-3 items-center">
              <Phone size={16} className="mt-0.5 shrink-0 text-[#E5AD23]" />
              <a href="tel:+254713255324" className="transition-colors hover:text-[#E5AD23]">
                +254 713 255 324
              </a>
              <span className="text-neutral-600 sm:block">|</span>
              <a href="tel:+254798469493" className="transition-colors hover:text-[#E5AD23]">
                +254 798 469 493
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={16} className="mt-0.5 shrink-0 text-[#E5AD23]" />
              <a href="mailto:info@kstti.ac.ke" className="transition-colors hover:text-[#E5AD23]">
                info@kstti.ac.ke
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 !py-6">
        <div className="container-xl flex flex-col items-center justify-between gap-3 text-center text-sm text-neutral-600 sm:flex-row">
          <span>© {new Date().getFullYear()} KSTTI. All Rights Reserved.</span>
          <span className="text-xs uppercase tracking-wider">
            Kirinyaga Seniors Technical Training Institute
          </span>
        </div>
      </div>
    </footer>
  );
}