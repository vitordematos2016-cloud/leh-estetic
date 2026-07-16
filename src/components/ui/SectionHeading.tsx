interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-medium tracking-[0.25em] text-clay-500 uppercase">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-ink-700/80">{description}</p>}
    </div>
  )
}
