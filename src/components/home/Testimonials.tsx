import { Quote } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function Testimonials() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <section className="section bg-[#F8F7F4]">
      <div className="container-xl flex flex-col gap-12 ">
        <div className="text-center">
        <span className="tagline-center">Testimonials</span>

        <h2 className="section-title">What Our Students Say</h2>

        <p className="section-subtitle">
          Hear from students and graduates who have built real careers through
          training at KSTTI.
        </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="card-hover flex flex-col gap-6"
            >
              <Quote size={26} className="mb-6 text-[#E5AD23]" />

              <p className="flex-1 font-[family:var(--font-serif)] text-[1.05rem] italic leading-[1.9] text-[#1C1C1C]">
                "{item.quote}"
              </p>

              <div className="my-6 h-px bg-[#E8E4DC]" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5AD23] font-[family:var(--font-serif)] text-base font-bold text-black">
                  {item.name[0]}
                </div>

                <div>
                  <p className="font-semibold text-[#0A0A0A]">{item.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C4931A]">
                    {item.course}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}