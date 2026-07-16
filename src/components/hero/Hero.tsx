import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { professional, contact } from '../../data/lehEstetic'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

const whatsappUrl = buildWhatsAppUrl(
  contact.whatsappNumber,
  `Olá, ${professional.name.split(' ')[0]}! Vim através do catálogo digital e gostaria de agendar uma avaliação.`,
)

export function Hero() {
  return (
    <section id="inicio" className="pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="text-xs font-medium tracking-[0.25em] text-clay-500 uppercase">
            {professional.city}
          </span>
          <h1 className="font-display text-4xl leading-tight font-semibold text-ink-900 sm:text-5xl lg:text-6xl">
            {professional.name}
          </h1>
          <p className="max-w-lg text-lg text-ink-700/90">{professional.bio}</p>
          <p className="max-w-lg text-sm font-medium tracking-wide text-clay-600 uppercase">
            {professional.specialties.join(' · ')}
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <a href="#tratamentos">
              <Button variant="primary">Conhecer tratamentos</Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">Agendar avaliação</Button>
            </a>
          </div>
        </div>

        <ImagePlaceholder label="Foto profissional a confirmar" className="w-full" />
      </Container>
    </section>
  )
}
