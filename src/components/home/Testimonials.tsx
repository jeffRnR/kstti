// src/components/home/Testimonials.tsx

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Student",
    course: "ICT",
    quote:
      "The practical approach and supportive instructors helped me build confidence and job ready skills.",
  },
  {
    name: "Graduate",
    course: "Beauty Therapy",
    quote:
      "Small class sizes allowed me to receive individual guidance throughout my training.",
  },
  {
    name: "Alumni",
    course: "Building Technology",
    quote:
      "KSTTI prepared me with practical experience that made my transition into the workplace much easier.",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container-xl">
        <div className="text-center">
          <span className="tagline-center text-[#E5AD23]">Testimonials</span>
          <h2 className="mt-4 font-[family:var(--font-serif)] text-4xl font-bold text-white md:text-[2.5rem]">
            What Our Students Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.quote}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.3)]"
            >
              {/* Quote icon */}
              <Quote size={28} className="mb-5 text-[#E5AD23]/60" />

              {/* Quote text */}
              <p className="flex-1 text-[1rem] leading-[1.85] text-neutral-300">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5AD23]/15 font-[family:var(--font-serif)] text-base font-bold text-[#E5AD23]">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
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