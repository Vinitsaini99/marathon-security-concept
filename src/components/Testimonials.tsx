import { Quote } from "lucide-react"
import { sampleCaseStudies, testimonials } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Feedback published on the existing website"
            text="These quotes appear on marathonsecurity.in and are presented here for demonstration only."
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="reveal rounded-2xl border border-navy/10 bg-white p-7"
            >
              <Quote className="h-6 w-6 text-gold" />
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

        <div className="reveal mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                Case Studies
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-navy">
                Sample layouts pending approved project stories
              </h3>
            </div>
            <span className="rounded-md bg-navy/5 px-3 py-1.5 text-xs font-semibold text-navy/70">
              Placeholder content · not live case data
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {sampleCaseStudies.map((item) => (
              <article
                key={item.industry}
                className="rounded-2xl border border-dashed border-navy/20 bg-white p-6"
              >
                <p className="text-xs font-semibold tracking-wide text-gold uppercase">
                  {item.industry}
                  {item.sample ? " · Sample" : ""}
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-navy">Security Requirement</dt>
                    <dd className="mt-1 text-ink/70">{item.requirement}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Proposed Solution</dt>
                    <dd className="mt-1 text-ink/70">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Project Outcome</dt>
                    <dd className="mt-1 text-ink/70">{item.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
