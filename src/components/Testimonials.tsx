import { Quote } from "lucide-react"
import { testimonials } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Feedback published on the existing website"
            text="These quotes appear on marathonsecurity.in and are presented here for demonstration only."
          />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="reveal rounded-2xl border border-navy/10 bg-white p-6 sm:p-7"
            >
              <Quote className="h-6 w-6 text-gold" aria-hidden />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-navy/10 pt-4">
                <p className="font-heading text-sm font-bold text-navy">{item.name}</p>
                <p className="text-xs text-ink/60">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
