import { processSteps } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="How Our Process Works"
            title="From assessment to supervised deployment"
          />
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-10 right-10 left-10 hidden h-px bg-navy/15 lg:block" />
          {processSteps.map((step) => (
            <div key={step.step} className="reveal relative rounded-2xl border border-navy/10 bg-surface p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-gold">
                {step.step}
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
