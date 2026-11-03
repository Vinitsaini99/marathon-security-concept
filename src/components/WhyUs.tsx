import { CheckCircle2 } from "lucide-react"
import { images, whyChoose } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="A disciplined approach to protection"
            text="The points below reflect practices described in Marathon Security’s public materials — without inflated claims."
          />
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="reveal overflow-hidden rounded-2xl">
            <img
              src={images.why}
              alt="Security professionals in discussion"
              className="min-h-[460px] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="reveal grid gap-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
