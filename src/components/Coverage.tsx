import { MapPin } from "lucide-react"
import { rajasthanCities } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Coverage() {
  return (
    <section id="coverage" className="bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Rajasthan Coverage"
            title="Target cities across Rajasthan"
            text="Headquartered in Jaipur with deployment support for industrial corridors, commercial centres and residential communities statewide."
            light
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {rajasthanCities.map((city) => (
            <article
              key={city.name}
              className="reveal rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-gold/40 hover:bg-white/8"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <h3 className="font-heading text-sm font-bold text-white sm:text-base">
                  {city.name}
                </h3>
              </div>
              <p className="mt-2 text-xs text-white/60 sm:text-[13px]">{city.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
