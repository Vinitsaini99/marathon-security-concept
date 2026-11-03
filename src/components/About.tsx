import { aboutFeatures, images } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="About Marathon Security"
            title="Security Beyond Protection"
            text="Delivering professional security solutions through trained personnel, structured supervision and a commitment to protecting people, property and business operations."
          />
        </div>

        <div className="mt-10 grid items-center gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="reveal overflow-hidden rounded-2xl">
            <img
              src={images.about}
              alt="Professional team coordinating security operations"
              className="h-full min-h-[260px] w-full object-cover sm:min-h-[360px] lg:min-h-[420px]"
              loading="lazy"
            />
          </div>

          <div className="reveal">
            <p className="text-base leading-relaxed text-ink/75">
              Zetouch Security Services Pvt. Ltd. presents itself as a professionally
              managed provider of security and allied services. Public company
              materials describe training across security, vigilance and human
              resources, with solutions ranging from guarding services to audits and
              consultation.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-wide text-navy uppercase">
              Motto: Reliability, Quality, and Results
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutFeatures.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy/10 bg-surface p-5"
                >
                  <h3 className="font-heading text-base font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
