type Props = {
  eyebrow?: string
  title: string
  text?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, text, light }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.18em] uppercase ${
            light ? "text-gold-soft" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-ink/75"}`}>
          {text}
        </p>
      ) : null}
    </div>
  )
}
