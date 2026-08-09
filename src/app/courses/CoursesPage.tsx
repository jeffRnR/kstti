"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Courses",
};

type IntakeStatus = "Open" | "Closing Soon" | "Closed";

interface Course {
  id: string;
  name: string;
  department: string;
  intakeStatus: IntakeStatus;
  duration: string;
  campus: string;
  feePerSemester: string;
}

interface Department {
  id: string;
  name: string;
}

interface CoursesPageProps {
  courses: Course[];
  departments: Department[];
}

const statusStyles: Record<
  IntakeStatus,
  { dot: string; badge: string }
> = {
  Open: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  "Closing Soon": {
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  Closed: {
    dot: "bg-neutral-400",
    badge: "bg-neutral-100 text-neutral-500 ring-neutral-200",
  },
};

function formatIntakeStatus(status: string): IntakeStatus {
  switch (status) {
    case "OPEN":
      return "Open";
    case "CLOSING_SOON":
      return "Closing Soon";
    case "CLOSED":
      return "Closed";
    default:
      return "Closed";
  }
}

export default function CoursesPage({
  courses,
  departments,
}: CoursesPageProps) {
  const [activeDept, setActiveDept] = useState("All Departments");

  const departmentNames = useMemo(
    () => [
      "All Departments",
      ...departments.map((department) => department.name),
    ],
    [departments]
  );

  const filtered = useMemo(
    () =>
      activeDept === "All Departments"
        ? courses
        : courses.filter((course) => course.department === activeDept),
    [activeDept, courses]
  );

  const countByDept = useMemo(() => {
    const map: Record<string, number> = {
      "All Departments": courses.length,
    };

    departments.forEach((department) => {
      map[department.name] = courses.filter(
        (course) => course.department === department.name
      ).length;
    });

    return map;
  }, [courses, departments]);

  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#0A0A0A] !py-24 md:!py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,173,35,0.07),transparent_60%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

          <div className="container-xl relative flex flex-col gap-6">
            <span className="tagline-center text-[#E5AD23]">
              Our Programmes
            </span>

            <h1 className="!mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
              Explore Our Courses
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              Discover practical, industry-focused training programmes designed
              to equip learners with skills for employment, entrepreneurship,
              and lifelong success.
            </p>
          </div>
        </section>

        <section className="section bg-neutral-50">
          <div className="container-xl flex gap-8 lg:gap-10">
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md">
                <div className="border-b border-neutral-100 bg-[#0A0A0A] !px-5 !py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5AD23]">
                    Filter by
                  </p>

                  <p className="mt-0.5 text-base font-bold text-white">
                    Department
                  </p>
                </div>

                <nav className="!p-3">
                  {departmentNames.map((dept) => {
                    const isActive = activeDept === dept;

                    return (
                      <button
                        key={dept}
                        onClick={() => setActiveDept(dept)}
                        className={[
                          "group flex w-full items-center justify-between rounded-lg !px-4 !py-3 text-left text-sm font-medium transition-all",
                          isActive
                            ? "bg-[#E5AD23] text-[#0A0A0A] shadow-sm"
                            : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
                        ].join(" ")}
                      >
                        <span>{dept}</span>

                        <span
                          className={[
                            "ml-2 min-w-[1.5rem] rounded-full !px-1.5 !py-0.5 text-center text-[11px] font-semibold tabular-nums transition-colors",
                            isActive
                              ? "bg-[#0A0A0A]/15 text-[#0A0A0A]"
                              : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200",
                          ].join(" ")}
                        >
                          {countByDept[dept]}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <div className="border-t border-neutral-100 !px-5 !py-4">
                  <p className="!mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                    Intake Status
                  </p>

                  <div className="flex flex-col gap-2">
                    {(
                      Object.entries(statusStyles) as [
                        IntakeStatus,
                        (typeof statusStyles)[IntakeStatus]
                      ][]
                    ).map(([status, styles]) => (
                      <div key={status} className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${styles.dot}`}
                        />

                        <span className="text-xs text-neutral-500">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="!mb-4 lg:hidden">
                <label className="!mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Filter by Department
                </label>

                <select
                  value={activeDept}
                  onChange={(e) => setActiveDept(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white !px-4 !py-3 text-sm font-medium text-neutral-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E5AD23]"
                >
                  {departmentNames.map((department) => (
                    <option key={department} value={department}>
                      {department} ({countByDept[department]})
                    </option>
                  ))}
                </select>
              </div>

              <div className="!mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900">
                    {activeDept}
                  </h2>

                  <p className="!mt-0.5 text-sm text-neutral-500">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "programme" : "programmes"} found
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-50">
                        <th className="whitespace-nowrap !px-5 !py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Programme
                        </th>

                        <th className="whitespace-nowrap !px-5 !py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Intake
                        </th>

                        <th className="whitespace-nowrap !px-5 !py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Duration
                        </th>

                        <th className="whitespace-nowrap !px-5 !py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Campus
                        </th>

                        <th className="whitespace-nowrap !px-5 !py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Fee / Semester
                        </th>

                        <th className="!px-5 !py-3.5" />
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-neutral-100">
                      {filtered.map((course) => {
                        const intakeStatus = formatIntakeStatus(
                          course.intakeStatus
                        );

                        const s = statusStyles[intakeStatus];
                        const isClosed = intakeStatus === "Closed";

                        return (
                          <tr
                            key={course.id}
                            className="transition-colors hover:bg-amber-50/40"
                          >
                            <td className="!px-5 !py-4">
                              <span className="font-semibold text-neutral-900">
                                {course.name}
                              </span>

                              {activeDept === "All Departments" && (
                                <span className="!mt-0.5 block text-xs text-neutral-400">
                                  {course.department}
                                </span>
                              )}
                            </td>

                            <td className="!px-5 !py-4">
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full !px-2.5 !py-1 text-xs font-semibold ring-1 ring-inset ${s.badge}`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${s.dot}`}
                                />

                                {intakeStatus}
                              </span>
                            </td>

                            <td className="whitespace-nowrap !px-5 !py-4 text-neutral-600">
                              {course.duration}
                            </td>

                            <td className="whitespace-nowrap !px-5 !py-4 text-neutral-600">
                              {course.campus}
                            </td>

                            <td className="whitespace-nowrap !px-5 !py-4 font-mono text-sm font-semibold text-neutral-800">
                              {course.feePerSemester}
                            </td>

                            <td className="!px-5 !py-4 text-right">
                              {isClosed ? (
                                <span className="cursor-not-allowed whitespace-nowrap rounded-lg !px-4 !py-2 text-xs font-semibold text-neutral-400">
                                  Closed
                                </span>
                              ) : (
                                <Link
                                  href="/admissions"
                                  className="inline-block whitespace-nowrap rounded-lg bg-[#E5AD23] !px-4 !py-2 text-xs font-bold text-[#0A0A0A] transition hover:bg-[#d49f1a] hover:shadow-md active:scale-95"
                                >
                                  Apply Now
                                </Link>
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      {filtered.length === 0 && (
                        <tr>
                          <td
                            colSpan={6}
                            className="!px-5 !py-16 text-center text-neutral-400"
                          >
                            No programmes found for this department.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}