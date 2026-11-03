import { company, images, navLinks, services } from "../data/content"

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <img src={images.logo} alt="Marathon Security" className="h-12 w-auto object-contain" />
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            {company.legalName} — a concept demonstration of a premium corporate security
            presence prepared by Euonus IT.
          </p>
          <p className="mt-3 text-xs font-semibold tracking-wide text-navy uppercase">
            {company.motto}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold text-navy">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink/70 hover:text-navy">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold text-navy">Security Services</h3>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.title}>
                <a href="#services" className="text-sm text-ink/70 hover:text-navy">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold text-navy">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>
              <a href={`tel:${company.phoneTel}`} className="hover:text-navy">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-navy">
                {company.email}
              </a>
            </li>
            <li>{company.headOffice}</li>
            <li>{company.corporateOffice}</li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={company.referenceSite} className="font-semibold text-navy hover:text-gold">
              Existing website
            </a>
            <span className="text-ink/30">|</span>
            <a href="#contact" className="font-semibold text-navy hover:text-gold">
              Privacy note
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-xs text-ink/55 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.legalName} ({company.brand}). All rights
              reserved.
            </p>
            <p>Concept demo prepared by Euonus IT · Not the live production website.</p>
          </div>
          <p className="max-w-4xl leading-relaxed text-ink/45">
            This website design, layout, copy structure and source code are protected by
            copyright. Unauthorised copying, reproduction, redistribution or reuse of any
            part of this material is prohibited without prior written permission from Euonus
            IT / {company.legalName}.
          </p>
        </div>
      </div>
    </footer>
  )
}
