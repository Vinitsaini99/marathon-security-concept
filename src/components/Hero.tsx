import { ArrowRight, Phone, ShieldCheck } from "lucide-react"
import { company, images, trustItems } from "../data/content"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[min(100svh,920px)] overflow-hidden">
      <img
        src={images.hero}
        alt="Security planning and operations at a professional facility"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/94 via-navy/90 to-navy/58" />

      <div className="relative mx-auto flex min-h-[min(100svh,920px)] max-w-[1440px] items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-gold-soft uppercase sm:mb-5 sm:text-xs">
            Marathon Security · Zetouch Security Services
          </p>
          <h1 className="font-heading text-[2rem] leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[3.5rem]">
            Trusted Security for Industrial, Corporate &amp; Residential Sites in Rajasthan.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            Verified personnel, professional supervision and customized deployment for
            factories, offices and residential communities across Jaipur and key Rajasthan
            cities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark transition hover:bg-gold-soft"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Marathon Security, I would like a free security quote.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3">
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
