import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'

export function Location() {
  const { contact, businessHours } = siteContent
  if (!contact.address && businessHours.length === 0) return null

  const googleMapsUrl =
    contact.googleMapsUrl ||
    (contact.address
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`
      : undefined)

  return (
    <section id="contato" className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SectionHeading eyebrow="Localização" title="Onde estamos" />

        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contact.address && (
            <div className="rounded-2xl border border-ink-900/8 bg-white/60 p-6 text-left">
              <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">Endereço</span>
              <p className="mt-2 text-sm text-ink-700/80">{contact.address}</p>
            </div>
          )}

          {businessHours.length > 0 && (
            <div className="rounded-2xl border border-ink-900/8 bg-white/60 p-6 text-left">
              <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">Horários</span>
              <ul className="mt-2 flex flex-col gap-1 text-sm text-ink-700/80">
                {businessHours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-4">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {googleMapsUrl && (
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir endereço da Leh Estetic no Google Maps"
          >
            <Button variant="secondary">Como chegar</Button>
          </a>
        )}
      </Container>
    </section>
  )
}
