// src/components/home/WhyChooseUs.tsx

const features = [
  {
    title: "Quality Education",
    description: "Competency-based curricula delivered by qualified, experienced instructors.",
  },
  {
    title: "Personalized Student Support",
    description: "Small class sizes mean every student gets the attention they deserve.",
  },
  {
    title: "Competency Based Training",
    description: "Hands-on programmes built around real skills employers look for.",
  },
  {
    title: "Industry Ready Graduates",
    description: "Leave campus equipped and confident to enter the job market.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-[#F8F7F4]">
      <div className="container-xl flex flex-col gap-12">
        <div className="text-center">
          <span className="tagline-center">Why Choose KSTTI</span>
          <h2 className="section-title">Learn In A Supportive Environment</h2>
          <p className="section-subtitle">
            Small class sizes allow every learner to receive individual attention
            while developing practical workplace skills.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="card-hover flex flex-col">
              <div className="mb-6 h-1 w-10 rounded-full bg-[#E5AD23]" />

              <h3 className="mb-3 font-[family:var(--font-serif)] text-xl font-bold text-[#0A0A0A]">
                {feature.title}
              </h3>

              <p className="flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}