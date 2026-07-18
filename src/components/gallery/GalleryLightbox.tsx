import { useEffect } from 'react'
import { MediaSlot } from '../ui/MediaSlot'
import type { GalleryImage } from '../../types/content'

interface GalleryLightboxProps {
  item: GalleryImage
  onClose: () => void
}

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex w-full max-w-3xl flex-col gap-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide text-sand-50 uppercase">{item.label}</span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full border border-sand-50/30 p-2 text-sand-50 hover:border-sand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <MediaSlot
          src={item.image}
          alt={item.alt}
          placeholderLabel={`${item.label}: imagem será adicionada`}
          aspect="aspect-[4/3]"
        />
      </div>
    </div>
  )
}
