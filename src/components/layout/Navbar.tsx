// src/components/layout/Navbar.tsx

"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import TopBar from "./TopBar";

const departments = [
  {
    name: "Beauty & Cosmetology",
    courses: ["Hairdressing", "Beauty Therapy", "Barbering", "Nail Technology"],
  },
  {
    name: "ICT",
    courses: ["Computer Packages", "ICT", "Software Development"],
  },
  {
    name: "Business",
    courses: ["Business Management", "Sales & Marketing"],
  },
  {
    name: "Hospitality",
    courses: ["Food Production", "Catering"],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="container-xl flex h-20 items-center justify-between">

          {/* Brand mark */}
          <Link href="/" className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5AD23] text-lg font-black text-black shadow-md">
              K
            </span>
            <div className="leading-tight">
              <span className="block font-[family:var(--font-display)] text-[1.05rem] font-bold tracking-[0.18em] text-black">
                KSTTI
              </span>
              <span className="font-[family:var(--font-script)] text-[0.9rem] font-semibold text-[#C4931A]">
                Empowering minds for tomorrow
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {["Home", "About", "Campuses", "News", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[0.9375rem] font-semibold text-neutral-700 transition-colors hover:text-[#E5AD23]"
              >
                {item}
              </Link>
            ))}

            {/* Courses mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
            >
              <button className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-neutral-700 transition-colors hover:text-[#E5AD23]">
                Courses
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${showCourses ? "rotate-180" : ""}`}
                />
              </button>

              {showCourses && (
                <div className="absolute right-0 top-full mt-3 w-[620px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl">

                  {/* Panel header */}
                  <div className="border-b border-neutral-100 bg-[#F8F7F4] px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4931A]">
                      Departments &amp; Courses
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-500">
                      Browse all programmes offered at KSTTI
                    </p>
                  </div>

                  {/* 2-column department grid */}
                  <div className="grid grid-cols-2 gap-px bg-neutral-100">
                    {departments.map((dept) => (
                      <div key={dept.name} className="bg-white p-5">
                        <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#0A0A0A]">
                          {dept.name}
                        </p>
                        <ul className="space-y-0.5">
                          {dept.courses.map((course) => (
                            <li key={course}>
                              <Link
                                href="/courses"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-amber-50 hover:text-[#C4931A]"
                              >
                                {course}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Panel footer */}
                  <div className="flex items-center justify-between border-t border-neutral-100 bg-[#F8F7F4] px-6 py-3">
                    <Link
                      href="/courses"
                      className="text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
                    >
                      View all courses →
                    </Link>
                    <Link
                      href="/apply"
                      className="rounded-lg bg-[#E5AD23] px-4 py-1.5 text-sm font-bold text-black transition hover:bg-[#C4931A]"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://app.kstti.ac.ke"
              className="rounded-lg border border-neutral-300 px-5 py-2 text-[0.9rem] font-semibold text-neutral-700 transition hover:border-[#E5AD23] hover:text-[#C4931A]"
            >
              Student Portal
            </a>
            <Link href="/apply" className="btn-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-neutral-200 p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-neutral-100 bg-white lg:hidden">
            <div className="container-xl flex flex-col gap-1 py-5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Campuses", href: "/campuses" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-lg px-4 py-2.5 text-[0.9375rem] font-semibold text-neutral-800 transition hover:bg-amber-50 hover:text-[#C4931A]"
                >
                  {label}
                </Link>
              ))}

              {/* Mobile courses accordion */}
              <button
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[0.9375rem] font-semibold text-neutral-800 transition hover:bg-amber-50 hover:text-[#C4931A]"
              >
                Courses
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileCoursesOpen && (
                <div className="mb-1 ml-2 space-y-5 rounded-xl border border-neutral-100 bg-[#F8F7F4] p-4">
                  {departments.map((dept) => (
                    <div key={dept.name}>
                      <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#0A0A0A]">
                        {dept.name}
                      </p>
                      <ul className="space-y-0.5">
                        {dept.courses.map((course) => (
                          <li key={course}>
                            <Link
                              href="/courses"
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-amber-50 hover:text-[#C4931A]"
                            >
                              {course}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://app.kstti.ac.ke"
                  className="btn-secondary text-center"
                >
                  Student Portal
                </a>
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