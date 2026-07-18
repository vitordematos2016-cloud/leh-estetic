import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

export function Booking() {
  const { booking } = siteContent
  const whatsappUrl = booking.whatsappNumber
    ? buildWhatsAppUrl(booking.whatsappNumber, booking.defaultMessage)
    : undefined

  return (
    <section id="agendamento" className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-10 text-center">
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
          {booking.externalUrl ? (
            <a href={booking.externalUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar pela agenda online">
              <Button variant="secondary">Agendar pela agenda online</Button>
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex items-center justify-center rounded-full border border-dashed border-ink-800/30 px-6 py-3 text-sm font-medium tracking-wide text-ink-700/50"
            >
              Agenda online será adicionada
            </span>
          )}
        </div>

        {booking.policies.length > 0 && (
          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {booking.policies.map((policy) => (
              <div key={policy.label} className="rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left">
                <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">
                  {policy.label}
                </span>
                <p className="mt-1 text-sm text-ink-700/70">{policy.value}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
