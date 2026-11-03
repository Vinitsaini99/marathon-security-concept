import {
  Building,
  Factory,
  FileSearch,
  Home,
  Shield,
  UserRoundCog,
} from "lucide-react"
import { primaryServices, services } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const primaryIcons = [Factory, Building, Home]
const supportIcons = [Shield, UserRoundCog, FileSearch]

const supportServices = services.slice(3)

export function Services() {
  return (
    <section id="services" className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Security Services"
            title="Industrial, corporate & residential security"
            text="Three focused service lines for the sites that need disciplined guarding, clear supervision and reliable response."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {primaryServices.map((service, index) => {
            const Icon = primaryIcons[index]
            return (
              <article
                key={service.title}
                className="reveal group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_rgba(16,36,58,0.08)] sm:p-7"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.text}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm font-medium text-navy/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="mt-auto pt-6 inline-flex text-sm font-semibold text-navy transition group-hover:text-gold"
                >
                  Get a Free Quote →
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-10 sm:mt-12">
          <p className="text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">
            Additional services
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {supportServices.map((service, index) => {
              const Icon = supportIcons[index]
              return (
                <article
                  key={service.title}
                  className="reveal flex gap-4 rounded-xl border border-navy/10 bg-white p-5 transition hover:border-gold/35"
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/95 text-gold">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                      {service.text}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
