import { useState } from 'react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { MediaSlot } from '../ui/MediaSlot'
import { GalleryLightbox } from './GalleryLightbox'
import { siteContent } from '../../data/siteContent'

export function Gallery() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { gallery } = siteContent
  const activeItem = gallery.find((item) => item.id === activeId) ?? null

  if (gallery.length === 0) return null

  return (
    <section id="espaco" className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Galeria"
          title="Conheça nosso espaço"
          description="Toque em uma imagem para ver em tamanho ampliado."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              aria-label={`Ver ${item.label} em tamanho ampliado`}
              className="group flex flex-col gap-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
            >
              <MediaSlot
                src={item.image}
                alt={item.alt}
                placeholderLabel="Imagem será adicionada"
                aspect="aspect-square"
                className="transition-opacity group-hover:opacity-90"
              />
              <span className="text-xs font-medium tracking-wide text-ink-700/70 uppercase">{item.label}</span>
            </button>
          ))}
        </div>
      </Container>

      {activeItem && <GalleryLightbox item={activeItem} onClose={() => setActiveId(null)} />}
    </section>
  )
}
