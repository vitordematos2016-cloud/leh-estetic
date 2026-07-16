import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { MediaSlot } from '../ui/MediaSlot'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, bookingMessage } from '../../utils/whatsapp'

export function Hero() {
  const { company } = siteContent
  const bookingUrl = siteContent.contact.whatsappNumber
    ? buildWhatsAppUrl(siteContent.contact.whatsappNumber, bookingMessage())
    : undefined

  return (
    <section id="inicio" className="pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="font-display text-4xl leading-tight font-semibold text-ink-900 sm:text-5xl lg:text-6xl">
            {company.name}
          </h1>
          {company.slogan && (
            <p className="max-w-lg text-sm font-medium tracking-wide text-clay-600 uppercase">
              {company.slogan}
            </p>
          )}
          {company.description && (
            <p className="max-w-lg text-lg text-ink-700/90">{company.description}</p>
          )}
          <div className="mt-2 flex flex-wrap gap-4">
            <a href="#servicos">
              <Button variant="primary">Conhecer serviços</Button>
            </a>
            {bookingUrl && (
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar atendimento pelo WhatsApp">
                <Button variant="secondary">Agendar atendimento</Button>
              </a>
            )}
          </div>
        </div>

        <MediaSlot
          src={company.heroImage}
          alt={company.name}
          placeholderLabel="Foto oficial será adicionada"
          className="w-full"
        />
      </Container>
    </section>
  )
}
