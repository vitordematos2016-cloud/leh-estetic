import { Container } from '../ui/Container'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { professional } from '../../data/lehEstetic'

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder label="Foto a confirmar" aspect="aspect-square" className="order-2 lg:order-1" />

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="text-xs font-medium tracking-[0.25em] text-clay-500 uppercase">Sobre</span>
          <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            {professional.name}
          </h2>
          <p className="text-base text-ink-700/90">
            {professional.role} em {professional.city}, com atuação voltada ao {' '}
            {professional.specialties.map((s) => s.toLowerCase()).join(' e ')}.
          </p>
          <p className="text-base text-ink-700/90">{professional.clientsServed}.</p>
          <p className="text-base text-ink-700/90">
            Cada atendimento parte de uma avaliação individual, respeitando as características e o
            momento de cada pele.
          </p>
        </div>
      </Container>
    </section>
  )
}
