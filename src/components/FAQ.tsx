import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { faqs } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="FAQ"
            title="Clear answers before you enquire"
            text="Responses are aligned with information published by Marathon Security / Zetouch Security Services."
          />
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-surface">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q} className="px-5 sm:px-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-heading text-base font-bold text-navy">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-relaxed text-ink/70">{item.a}</p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
