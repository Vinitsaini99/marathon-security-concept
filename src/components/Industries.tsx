import { industries } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Industries() {
  return (
    <section id="industries" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Security planned around real operating sites"
            text="Separate coverage approaches for factories, warehouses, hospitals, corporate offices, residential societies and construction sites."
          />
        </div>

        <div className="mt-10 grid gap-4 min-[390px]:grid-cols-1 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.title}
              className="reveal group overflow-hidden rounded-2xl border border-navy/10 bg-surface transition hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_18px_40px_rgba(16,36,58,0.1)]"
            >
              <div className="relative h-44 overflow-hidden sm:h-48 lg:h-52">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                  width={600}
                  height={320}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-lg font-bold text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6 sm:pt-5">
                <p className="text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
