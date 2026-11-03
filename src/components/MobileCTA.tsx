import { Phone } from "lucide-react"
import { company } from "../data/content"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={`tel:${company.phoneTel}`}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-navy/15 text-xs font-semibold text-navy"
        >
          <Phone className="h-3.5 w-3.5 text-gold" />
          Call
        </a>
        <a
          href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
            "Hello Marathon Security, I would like a free security quote.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md bg-[#25D366] text-xs font-semibold text-white"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold text-xs font-bold text-navy-dark"
        >
          Free Quote
        </a>
      </div>
    </div>
  )
}
