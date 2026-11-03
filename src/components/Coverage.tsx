import { MapPin } from "lucide-react"
import { confirmedLocations } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Coverage() {
  return (
    <section id="coverage" className="bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Rajasthan & Regional Coverage"
            title="Confirmed service locations"
            text="Only locations and footprint details published by Marathon Security / Zetouch are shown here. This concept page does not claim statewide coverage beyond confirmed information."
            light
          />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {confirmedLocations.map((location) => (
            <article
              key={location.name}
              className="reveal rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold-soft uppercase">
                    {location.note}
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg font-bold text-white">
                    {location.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {location.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
