import { ArrowRight, Phone } from "lucide-react"
import { company } from "../data/content"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function FinalCTA() {
  return (
    <section className="bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal overflow-hidden rounded-2xl bg-navy px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-14">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Ready to secure your site?
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Get a free quote for industrial, corporate or residential security.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Speak with the Marathon Security team about your requirement, or send an
            enquiry from this concept page via WhatsApp or email.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark transition hover:bg-gold-soft"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden />
              Call {company.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Marathon Security, I would like a free security quote.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
