import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { MediaSlot } from '../ui/MediaSlot'
import { siteContent } from '../../data/siteContent'

export function Gallery() {
  const { settings, gallery } = siteContent
  if (!settings.showGallery || gallery.length === 0) return null

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Galeria" title="Nosso espaço" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item) => (
            <MediaSlot
              key={item.id}
              src={item.image}
              alt={item.alt}
              placeholderLabel="Imagem em atualização"
              aspect="aspect-square"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
