import { ImagePlaceholder } from './ImagePlaceholder'

interface MediaSlotProps {
  src?: string
  alt: string
  placeholderLabel: string
  aspect?: string
  className?: string
  rounded?: string
}

/**
 * Renders a real <img> once `src` is provided by the client; until then,
 * shows a discreet, clearly-labeled placeholder so the layout never breaks
 * when the real photo is dropped in later (see GUIA_ATUALIZACAO_CLIENTE.md).
 */
export function MediaSlot({
  src,
  alt,
  placeholderLabel,
  aspect = 'aspect-[4/5]',
  className = '',
  rounded = 'rounded-3xl',
}: MediaSlotProps) {
  if (!src) {
    return <ImagePlaceholder label={placeholderLabel} aspect={aspect} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${aspect} w-full ${rounded} object-cover ${className}`}
    />
  )
}
