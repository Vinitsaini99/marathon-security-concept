import { Award, Building2, MapPinned } from "lucide-react"
import { clients, company } from "../data/content"

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-b border-navy/8 bg-surface">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">
            Trust &amp; credentials
          </p>
          <h2
            id="trust-heading"
            className="mt-2 font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl"
          >
            Verified company information only
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
            Details below are taken from publicly listed Marathon Security / Zetouch
            materials. No invented statistics are shown on this concept page.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-[0_1px_0_rgba(16,36,58,0.04)]">
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="font-heading text-sm font-bold text-navy sm:text-base">
                {company.iso}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                Listed on the company’s public website as an ISO 9001:2015 certified
                organization.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-white p-5">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="font-heading text-sm font-bold text-navy sm:text-base">
                Offices listed publicly
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                {company.headOffice}. {company.corporateOffice}.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-white p-5">
            <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="font-heading text-sm font-bold text-navy sm:text-base">
                Published service footprint
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{company.coverage}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">
            Organisations publicly listed as clients on marathonsecurity.in
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 min-[390px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex h-[96px] flex-col items-center justify-center gap-2 rounded-xl border border-navy/10 bg-white px-3 py-4 transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_12px_28px_rgba(16,36,58,0.08)] sm:h-[104px]"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-9 w-auto max-w-[110px] object-contain opacity-90 transition group-hover:opacity-100 sm:max-h-10 sm:max-w-[120px]"
                  loading="lazy"
                  width={120}
                  height={40}
                />
                <p className="line-clamp-2 text-center text-[11px] leading-snug font-medium text-navy/70">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
