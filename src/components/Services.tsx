import {
  Building,
  Factory,
  FileSearch,
  PackageCheck,
  Shield,
  UserRoundCog,
} from "lucide-react"
import { services } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const icons = [Factory, Building, Shield, UserRoundCog, FileSearch, PackageCheck]

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Security Services"
            title="Solutions aligned to operational needs"
            text="Service descriptions below are adapted from Marathon Security’s publicly listed offerings."
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article
                key={service.title}
                className="reveal group rounded-2xl border border-navy/10 bg-white p-7 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_rgba(16,36,58,0.08)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.text}</p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex text-sm font-semibold text-navy transition group-hover:text-gold"
                >
                  Learn More →
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
