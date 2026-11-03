import { CheckCircle2, Mail, Phone } from "lucide-react"
import { useState, type FormEvent } from "react"
import { company, formServices } from "../data/content"
import { WhatsAppIcon } from "./WhatsAppIcon"

type FormState = {
  name: string
  companyName: string
  phone: string
  city: string
  service: string
  guards: string
  requirements: string
}

const initial: FormState = {
  name: "",
  companyName: "",
  phone: "",
  city: "",
  service: "",
  guards: "",
  requirements: "",
}

function buildEnquiryMessage(form: FormState) {
  return [
    "Hello Marathon Security,",
    "",
    "I would like a free security quote.",
    "",
    `Name: ${form.name}`,
    `Company / Society: ${form.companyName}`,
    `Phone: ${form.phone}`,
    `City: ${form.city}`,
    `Security service required: ${form.service}`,
    `Number of guards required: ${form.guards}`,
    "",
    "Additional requirements:",
    form.requirements || "—",
  ].join("\n")
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [prepared, setPrepared] = useState(false)
  const [channel, setChannel] = useState<"whatsapp" | "email" | null>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = "Name is required"
    if (!form.companyName.trim()) next.companyName = "Company / society name is required"
    if (!/^[0-9+\-\s()]{10,}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit phone number"
    }
    if (!form.city.trim()) next.city = "City is required"
    if (!form.service) next.service = "Select a security service"
    if (!form.guards.trim() || Number.isNaN(Number(form.guards)) || Number(form.guards) < 1) {
      next.guards = "Enter the number of guards required"
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function prepareEnquiry(via: "whatsapp" | "email") {
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
        `Security enquiry — ${form.service} — ${form.city}`,
      )
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(message)}`
    }

    setChannel(via)
    setPrepared(true)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    prepareEnquiry("whatsapp")
  }

  return (
    <section id="contact" className="bg-navy-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-10">
        <div className="reveal text-white">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Lead enquiry
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Request a free security quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            This concept page has no live backend. Completing the form opens WhatsApp or
            your email app so you can send the enquiry yourself. No fake “submitted”
            confirmation is shown.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden />
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
              <Mail className="h-4 w-4 text-gold" aria-hidden />
              {company.email}
            </a>
          </div>
        </div>

        <div className="reveal rounded-2xl bg-white p-5 sm:p-8">
          {prepared ? (
            <div
              className="flex min-h-[360px] flex-col items-start justify-center sm:min-h-[420px]"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="h-10 w-10 text-gold" aria-hidden />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
                Enquiry draft prepared
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
                Thank you, {form.name}. Your enquiry was opened in{" "}
                {channel === "email" ? "your email app" : "WhatsApp"}. Please press{" "}
                <strong>Send</strong> there to complete the request. Nothing was stored on
                a server from this concept page.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${company.phoneTel}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call now
                </a>
                <button
                  type="button"
                  className="min-h-11 rounded-md border border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy"
                  onClick={() => {
                    setPrepared(false)
                    setChannel(null)
                    setForm(initial)
                    setErrors({})
                  }}
                >
                  Edit / prepare another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
              <Field
                label="Name"
                value={form.name}
                error={errors.name}
                autoComplete="name"
                onChange={(v) => update("name", v)}
              />
              <Field
                label="Company / Society Name"
                value={form.companyName}
                error={errors.companyName}
                autoComplete="organization"
                onChange={(v) => update("companyName", v)}
              />
              <Field
                label="Phone Number"
                type="tel"
                value={form.phone}
                error={errors.phone}
                autoComplete="tel"
                inputMode="tel"
                onChange={(v) => update("phone", v)}
              />
              <Field
                label="City"
                value={form.city}
                error={errors.city}
                placeholder="e.g. Jaipur"
                autoComplete="address-level2"
                onChange={(v) => update("city", v)}
              />
              <Select
                label="Security Service Required"
                value={form.service}
                error={errors.service}
                onChange={(v) => update("service", v)}
                options={formServices}
              />
              <Field
                label="Number of Guards Required"
                type="number"
                value={form.guards}
                error={errors.guards}
                inputMode="numeric"
                min={1}
                onChange={(v) => update("guards", v)}
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="requirements"
                  className="mb-1.5 block text-sm font-semibold text-navy"
                >
                  Additional Requirements
                  <span className="font-normal text-ink/45"> (optional)</span>
                </label>
                <textarea
                  id="requirements"
                  rows={4}
                  value={form.requirements}
                  onChange={(e) => update("requirements", e.target.value)}
                  className="w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm outline-none transition focus:border-gold"
                  placeholder="Site type, shifts, gates, special concerns…"
                />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3.5 text-sm font-bold text-navy-dark transition hover:bg-gold-soft sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => prepareEnquiry("email")}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-navy/15 bg-white px-5 py-3.5 text-sm font-bold text-navy transition hover:border-gold/50 sm:w-auto"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden />
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
  placeholder,
  autoComplete,
  inputMode,
  min,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  placeholder?: string
  autoComplete?: string
  inputMode?: "tel" | "numeric" | "text"
  min?: number
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        min={min}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-11 w-full rounded-md border border-navy/15 px-3 py-2.5 text-sm outline-none transition focus:border-gold"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : null}
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
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <select
        id={id}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-11 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}
