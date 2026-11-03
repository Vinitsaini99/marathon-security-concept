import { company } from "../data/content"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        "Hello Marathon Security, I would like to discuss a security requirement.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Marathon Security"
      className="fixed right-4 bottom-[4.75rem] z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(16,36,58,0.25)] transition hover:scale-105 md:inline-flex md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
