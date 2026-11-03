import { Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import { company, images, navLinks } from "../data/content"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? "border-navy/10 bg-white/95 shadow-[0_8px_30px_rgba(16,36,58,0.08)] backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={images.logo}
            alt="Marathon Security logo"
            className="h-10 w-auto object-contain sm:h-11"
            loading="eager"
          />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate font-heading text-sm font-bold text-navy">
              Marathon Security
            </p>
            <p className="truncate text-[11px] text-ink/60">{company.legalName}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneTel}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4 text-gold" />
            {company.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy/15 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-navy hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${company.phoneTel}`}
              className="mt-2 inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4 text-gold" />
              {company.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="mt-1 rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-navy-dark"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
