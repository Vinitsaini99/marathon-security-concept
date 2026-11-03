import { ArrowRight, ShieldCheck } from "lucide-react"
import { images, trustItems } from "../data/content"

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[88vh] overflow-hidden">
      <img
        src={images.hero}
        alt="Security planning and operations at a professional facility"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/92 via-navy/88 to-navy/55" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] items-center px-4 py-24 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-gold-soft uppercase">
            Marathon Security · Zetouch Security Services
          </p>
          <h1 className="font-heading text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-[3.5rem]">
            Professional Security Solutions for Businesses That Demand More.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Reliable security personnel, professional supervision and customized
            security solutions for industrial, corporate and infrastructure
            environments.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark transition hover:bg-gold-soft"
            >
              Request a Security Proposal
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-t border-white/15 pt-4"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm font-medium text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
