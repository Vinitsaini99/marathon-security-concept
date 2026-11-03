import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react"
import { useState, type FormEvent } from "react"
import { company } from "../data/content"

type FormState = {
  fullName: string
  companyName: string
  email: string
  phone: string
  industry: string
  service: string
  location: string
  personnel: string
  requirements: string
}

const initial: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  service: "",
  location: "",
  personnel: "",
  requirements: "",
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = "Full name is required"
    if (!form.companyName.trim()) next.companyName = "Company name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid business email"
    if (!/^[0-9+\-\s()]{10,}$/.test(form.phone)) next.phone = "Enter a valid phone number"
    if (!form.industry) next.industry = "Select an industry"
    if (!form.service) next.service = "Select a service"
    if (!form.location.trim()) next.location = "Site location is required"
    if (!form.requirements.trim()) next.requirements = "Please share project requirements"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy-dark py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-10">
        <div className="reveal text-white">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Lead Generation
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build a Safer Workplace Together.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            This is a frontend demonstration form. Submissions stay on this page and are
            not sent to a live backend until Marathon Security authorizes integration.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {company.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              WhatsApp enquiry
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-gold" />
              {company.email}
            </a>
          </div>
        </div>

        <div className="reveal rounded-2xl bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-start justify-center">
              <CheckCircle2 className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
                Demo enquiry received
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
                Thank you, {form.fullName}. This confirmation is for demonstration only.
                No customer data was transmitted to a server.
              </p>
              <button
                type="button"
                className="mt-6 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initial)
                }}
              >
                Submit another demo enquiry
              </button>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
              <Field
                label="Full Name"
                value={form.fullName}
                error={errors.fullName}
                onChange={(v) => update("fullName", v)}
              />
              <Field
                label="Company Name"
                value={form.companyName}
                error={errors.companyName}
                onChange={(v) => update("companyName", v)}
              />
              <Field
                label="Business Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => update("email", v)}
              />
              <Field
                label="Phone Number"
                value={form.phone}
                error={errors.phone}
                onChange={(v) => update("phone", v)}
              />
              <Select
                label="Industry"
                value={form.industry}
                error={errors.industry}
                onChange={(v) => update("industry", v)}
                options={[
                  "Manufacturing & Factories",
                  "Infrastructure & Construction",
                  "Corporate Offices",
                  "Warehousing & Logistics",
                  "Healthcare",
                  "Residential Communities",
                  "Other",
                ]}
              />
              <Select
                label="Required Security Service"
                value={form.service}
                error={errors.service}
                onChange={(v) => update("service", v)}
                options={[
                  "Industrial Security",
                  "Corporate Security",
                  "Security Guard Services",
                  "Executive Protection",
                  "Security Audits",
                  "Asset Protection",
                  "Other / Multiple",
                ]}
              />
              <Field
                label="Site Location"
                value={form.location}
                error={errors.location}
                onChange={(v) => update("location", v)}
              />
              <Field
                label="Estimated Security Personnel Required"
                value={form.personnel}
                error={errors.personnel}
                onChange={(v) => update("personnel", v)}
                optional
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-navy">
                  Project Requirements
                </label>
                <textarea
                  rows={4}
                  value={form.requirements}
                  onChange={(e) => update("requirements", e.target.value)}
                  className="w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm outline-none transition focus:border-gold"
                />
                {errors.requirements ? (
                  <p className="mt-1 text-xs text-red-600">{errors.requirements}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-gold px-5 py-3.5 text-sm font-bold text-navy-dark transition hover:bg-gold-soft sm:w-auto"
                >
                  Request a Security Proposal
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  optional,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  optional?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
        {optional ? <span className="font-normal text-ink/45"> (optional)</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm outline-none transition focus:border-gold"
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  error?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
