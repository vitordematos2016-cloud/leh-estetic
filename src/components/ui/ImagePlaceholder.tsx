interface ImagePlaceholderProps {
  label: string
  className?: string
  aspect?: string
}

export function ImagePlaceholder({ label, className = '', aspect = 'aspect-[4/5]' }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex ${aspect} items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-sand-200 via-sand-100 to-clay-100 ${className}`}
    >
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.clay.400)_1px,transparent_0)] [background-size:22px_22px]" />
      <span className="relative rounded-full bg-ink-900/70 px-4 py-1.5 text-xs font-medium tracking-wide text-sand-50">
        {label}
      </span>
    </div>
  )
}
