import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Departments",
};

export default async function DepartmentsPage() {
  const departments = await prisma.department.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#0A0A0A] !py-24 md:!py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,173,35,0.07),transparent_60%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#E5AD23]/50 to-transparent" />

          <div className="container-xl relative flex flex-col gap-6">
            <span className="tagline-center text-[#E5AD23]">
              Departments
            </span>

            <h1 className="!mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
              Departments at KSTTI
            </h1>

            <p className="!mt-2 max-w-xl text-lg leading-[1.85] text-neutral-400">
              Our departments provide practical, competency-based training
              that equips learners with skills required in today's industries.
            </p>


          </div>
        </section>

        <section className="section bg-[#F8F7F4]">
          <div className="container-xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((department) => (
                <article
                  key={department.id}
                  className="card-hover group flex flex-col"
                >
                  <div className="!mb-6 h-1 w-10 rounded-full bg-[#E5AD23]" />

                  <h2 className="font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                    {department.name}
                  </h2>

                  <p className="!mt-3 flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                    {department.description}
                  </p>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
