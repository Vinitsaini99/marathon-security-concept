import { industries, images } from "../data/content"
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
          {industries.map((item, index) => (
            <article
              key={item.title}
              className="reveal overflow-hidden rounded-2xl border border-navy/10 bg-surface"
            >
              {index === 0 ? (
                <img
                  src={images.industry}
                  alt=""
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-2 w-full bg-gradient-to-r from-navy to-gold" />
              )}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
