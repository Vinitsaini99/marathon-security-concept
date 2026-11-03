import { Award, Building2, MapPinned } from "lucide-react"
import { clients, company } from "../data/content"

export function TrustBar() {
  return (
    <section className="border-b border-navy/8 bg-surface">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-[0_1px_0_rgba(16,36,58,0.04)]">
            <Award className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-heading text-sm font-bold text-navy">{company.iso}</p>
              <p className="mt-1 text-sm text-ink/65">
                Listed on the company’s public website as an ISO 9001:2015 certified
                organization.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-5">
            <Building2 className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-heading text-sm font-bold text-navy">
                Corporate security experience
              </p>
              <p className="mt-1 text-sm text-ink/65">
                Public materials describe a decade of security and allied services
                across industrial and corporate environments.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-5">
            <MapPinned className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-heading text-sm font-bold text-navy">Industry coverage</p>
              <p className="mt-1 text-sm text-ink/65">{company.coverage}</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">
            Organisations publicly listed as clients on marathonsecurity.in
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {clients.map((name) => (
              <span
                key={name}
                className="rounded-md border border-navy/10 bg-white px-3 py-2 text-xs font-medium text-navy/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
