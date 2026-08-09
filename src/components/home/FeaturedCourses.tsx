import Link from "next/link";
import { ArrowRight } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function FeaturedCourses() {
  const departments = await prisma.department.findMany({
    where: {
      isActive: true,
      courses: {
        some: {
          isActive: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
    include: {
      courses: {
        where: {
          isActive: true,
        },
        orderBy: {
          name: "asc",
        },
        take: 4,
      },
    },
  });

  return (
    <section className="section bg-[#F8F7F4]">
      <div className="container-xl">
        <div className="text-center">
          <span className="tagline-center">Popular Programmes</span>

          <h2 className="section-title">
            Explore Our Courses
          </h2>

          <p className="section-subtitle">
            Industry focused training designed to prepare students for
            employment and entrepreneurship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {departments.slice(0, 4).map((dept) => (
            <article
              key={dept.id}
              className="card group flex flex-col"
            >
              <div className="mb-6 h-1 w-10 rounded-full bg-[#E5AD23]" />

              <h3 className="font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                {dept.name}
              </h3>

              <p className="mt-2 text-[0.9rem] leading-relaxed text-neutral-500">
                {dept.description}
              </p>

              <div className="!my-2 h-px bg-neutral-100" />

              <ul className="flex-1 space-y-2">
                {dept.courses.map((course) => (
                  <li
                    key={course.id}
                    className="flex items-center gap-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E5AD23]" />

                    <span className="text-sm font-medium text-neutral-700">
                      {course.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/courses"
                className="!mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
              >
                View Courses
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>

        <div className="!mt-12 text-center">
          <Link href="/courses" className="btn-primary">
            See All Courses
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}