import { processSteps } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="How engagement works"
            title="Requirement → Site Assessment → Quotation → Deployment"
            text="A clear path from first enquiry to supervised deployment on site."
          />
        </div>

        <div className="relative mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-10 right-10 left-10 hidden h-px bg-navy/15 lg:block" />
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="reveal relative rounded-2xl border border-navy/10 bg-surface p-5 sm:p-6"
            >
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
