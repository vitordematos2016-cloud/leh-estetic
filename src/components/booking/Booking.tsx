import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

export function Booking() {
  const { booking, settings } = siteContent
  const showWhatsapp = booking.mode === 'whatsapp' || booking.mode === 'both'
  const showExternal = settings.showOnlineBooking && (booking.mode === 'external' || booking.mode === 'both') && booking.externalUrl

  const whatsappUrl =
    showWhatsapp && booking.whatsappNumber
      ? buildWhatsAppUrl(booking.whatsappNumber, booking.defaultMessage)
      : undefined

  if (!whatsappUrl && !showExternal) return null

  return (
    <section id="agendamento" className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading
          eyebrow="Agendamento"
          title="Agende seu atendimento"
          description="Escolha a forma mais fácil para você."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp">
              <Button variant="primary">Agendar pelo WhatsApp</Button>
            </a>
          )}
          {showExternal && (
            <a href={booking.externalUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar pela agenda online">
              <Button variant="secondary">Agendar pela agenda online</Button>
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
