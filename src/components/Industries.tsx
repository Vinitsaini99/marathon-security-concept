import { industries } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Built for complex operating environments"
            text="From manufacturing floors to corporate campuses, coverage is planned around the realities of each site."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.title}
              className="reveal group overflow-hidden rounded-2xl border border-navy/10 bg-surface transition hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_18px_40px_rgba(16,36,58,0.1)]"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-heading text-lg font-bold text-white drop-shadow">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-5">
                <p className="text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
