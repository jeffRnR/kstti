// src/components/layout/Navbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import TopBar from "./TopBar";
import Image from "next/image";


export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Campuses", href: "/campuses" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
    { label: "Courses", href: "/courses" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const coursesActive = pathname.startsWith("/courses");

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="container-xl flex h-20 items-center justify-between">

          {/* Brand mark */}
          <Link href="/" className="flex items-center gap-3.5">
            <Image
              src="/logo.png"
              alt="KSTTI Logo"
              className="object-cover"
              width={70}
              height={70}
            />
            <div className="leading-tight sm:block hidden">
              <span className="block font-[family:var(--font-serif)] text-[1.09rem] sm:text-[0.9rem] font-bold max-w-[250px] text-black">
                KIRINYAGA SENIORS TECHNICAL TRAINING INSTITUTE
              </span>
              <span className="font-[family:var(--font-script)] text-[0.82rem] sm:text-[0.7rem] font-semibold text-[#C4931A]">
                Empowering minds for tomorrow
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`relative text-[0.9375rem] transition ${
                  isActive(href)
                    ? "font-bold text-[#C4931A] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-[#E5AD23]"
                    : "font-semibold text-neutral-700 hover:text-[#E5AD23]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://app.kstti.ac.ke"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Portal
            </Link>
            <Link href="/apply" className="btn-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-neutral-200 !p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-neutral-100 bg-white lg:hidden">
            <div className="container-xl flex flex-col gap-1 !py-5">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg !px-4 !py-2.5 text-[0.9375rem] transition ${
                    isActive(href)
                      ? "font-bold text-[#C4931A] bg-amber-50"
                      : "font-semibold text-neutral-800 hover:bg-amber-50 hover:text-[#C4931A]"
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="https://app.kstti.ac.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"                  
                >
                  Student Portal
                </Link>
                <Link href="/apply" className="btn-primary justify-center">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}