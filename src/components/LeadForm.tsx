import { CheckCircle2, Mail, Phone } from "lucide-react"
import { useState, type FormEvent } from "react"
import { company } from "../data/content"
import { WhatsAppIcon } from "./WhatsAppIcon"

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

function buildEnquiryMessage(form: FormState) {
  return [
    "Hello Marathon Security,",
    "",
    "I would like a free security quote.",
    "",
    `Name: ${form.fullName}`,
    `Company: ${form.companyName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Industry: ${form.industry}`,
    `Service: ${form.service}`,
    `Site location: ${form.location}`,
    form.personnel ? `Personnel required: ${form.personnel}` : null,
    "",
    "Requirements:",
    form.requirements,
  ]
    .filter(Boolean)
    .join("\n")
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [channel, setChannel] = useState<"whatsapp" | "email" | null>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = "Full name is required"
    if (!form.companyName.trim()) next.companyName = "Company / society name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email"
    if (!/^[0-9+\-\s()]{10,}$/.test(form.phone)) next.phone = "Enter a valid phone number"
    if (!form.industry) next.industry = "Select an industry"
    if (!form.service) next.service = "Select a service"
    if (!form.location.trim()) next.location = "Site location is required"
    if (!form.requirements.trim()) next.requirements = "Please share your requirements"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function sendEnquiry(via: "whatsapp" | "email") {
    if (!validate()) return
    const message = buildEnquiryMessage(form)

    if (via === "whatsapp") {
      window.open(
        `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      )
    } else {
      const subject = encodeURIComponent(
        `Security enquiry — ${form.service} — ${form.location}`,
      )
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(message)}`
    }

    setChannel(via)
    setSubmitted(true)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    sendEnquiry("whatsapp")
  }

  return (
    <section id="contact" className="bg-navy-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-10">
        <div className="reveal text-white">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Free Quote
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Get a free security quote for your site.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Share your requirement and our team will respond with a tailored discussion.
            You can also call or WhatsApp us directly.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {company.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Marathon Security, I would like a free security quote.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp enquiry
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-gold" />
              {company.email}
            </a>
          </div>
        </div>

        <div className="reveal rounded-2xl bg-white p-5 sm:p-8">
          {submitted ? (
            <div className="flex min-h-[360px] flex-col items-start justify-center sm:min-h-[420px]">
              <CheckCircle2 className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
                Enquiry ready to send
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
                Thank you, {form.fullName}. Your enquiry{" "}
                {channel === "email"
                  ? "has been opened in your email app"
                  : "has been opened in WhatsApp"}
                . Send the message to complete your free quote request.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${company.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
                <button
                  type="button"
                  className="rounded-md border border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy"
                  onClick={() => {
                    setSubmitted(false)
                    setChannel(null)
                    setForm(initial)
                  }}
                >
                  Submit another enquiry
                </button>
              </div>
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
                label="Company / Society Name"
                value={form.companyName}
                error={errors.companyName}
                onChange={(v) => update("companyName", v)}
              />
              <Field
                label="Email"
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
                  "Mining & Minerals",
                  "Corporate Offices & IT Parks",
                  "Tourism & Hospitality",
                  "Warehousing & Logistics",
                  "Healthcare & Institutions",
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
                  "Residential Security",
                  "Security Guard Services",
                  "Executive Protection",
                  "Security Audits",
                  "Other / Multiple",
                ]}
              />
              <Field
                label="Site Location (City)"
                value={form.location}
                error={errors.location}
                onChange={(v) => update("location", v)}
                placeholder="e.g. Jaipur, Bhiwadi, Kota"
              />
              <Field
                label="Estimated Personnel Required"
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
                  placeholder="Site type, shifts, gates, special concerns…"
                />
                {errors.requirements ? (
                  <p className="mt-1 text-xs text-red-600">{errors.requirements}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3.5 text-sm font-bold text-navy-dark transition hover:bg-gold-soft sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => sendEnquiry("email")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-navy/15 bg-white px-5 py-3.5 text-sm font-bold text-navy transition hover:border-gold/50 sm:w-auto"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  Send via Email
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
  placeholder,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  optional?: boolean
  placeholder?: string
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
        placeholder={placeholder}
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
