// src/components/home/Departments.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function Departments() {
  const departments = await prisma.department.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section className="section">
      <div className="container-xl">
        <div className="text-center">
          <span className="tagline-center">Departments</span>

          <h2 className="section-title">
            Discover Our Schools
          </h2>

          <p className="section-subtitle">
            Every department focuses on practical learning supported by qualified
            trainers and modern facilities.
          </p>
        </div>

        <div className="!mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((dept) => (
            <article key={dept.id} className="card-hover flex flex-col">
              <div className="!mb-1 h-1 w-10 rounded-full bg-[#E5AD23]" />

              <h3 className="!mb-2 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                {dept.name}
              </h3>

              <p className="flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                {dept.description}
              </p>

              <Link
                href="/departments"
                className="!mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4931A] transition-colors hover:text-[#E5AD23]"
              >
                View Department
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}