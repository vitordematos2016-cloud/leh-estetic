import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { MediaSlot } from '../ui/MediaSlot'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

export function Hero() {
  const { hero, contact } = siteContent
  const bookingUrl = contact.whatsappNumber
    ? buildWhatsAppUrl(contact.whatsappNumber, `Olá! Gostaria de agendar uma avaliação pelo site da ${siteContent.company.name}.`)
    : undefined

  return (
    <section id="inicio" className="pt-14 pb-16 sm:pt-20 sm:pb-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5 text-left">
          <h1 className="font-display text-4xl leading-tight font-semibold text-ink-900 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          {hero.subtitle && (
            <p className="max-w-lg text-sm font-medium tracking-wide text-clay-600 uppercase">
              {hero.subtitle}
            </p>
          )}
          {hero.description && (
            <p className="max-w-lg text-lg text-ink-700/90">{hero.description}</p>
          )}
          <div className="mt-2 flex flex-wrap gap-4">
            <a href="#servicos">
              <Button variant="primary">{hero.primaryCtaLabel}</Button>
            </a>
            {bookingUrl && (
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar atendimento pelo WhatsApp">
                <Button variant="secondary">{hero.secondaryCtaLabel}</Button>
              </a>
            )}
          </div>
        </div>

        <MediaSlot
          src={hero.image}
          alt={hero.title}
          placeholderLabel="Foto oficial será adicionada"
          className="w-full"
        />
      </Container>
    </section>
  )
}
