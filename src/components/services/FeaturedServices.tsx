import { useState } from 'react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { MediaSlot } from '../ui/MediaSlot'
import { Button } from '../ui/Button'
import { ServiceModal } from './ServiceModal'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, serviceMessage } from '../../utils/whatsapp'

export function FeaturedServices() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { services, featuredServices, contact } = siteContent
  const featured = featuredServices
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s))
  const activeService = featured.find((s) => s.id === activeId) ?? null

  if (featured.length === 0) return null

  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Destaques" title="Serviços mais procurados" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => {
            const bookingUrl = contact.whatsappNumber
              ? buildWhatsAppUrl(contact.whatsappNumber, serviceMessage(service.name))
              : undefined

            return (
              <div
                key={service.id}
                className="flex flex-col overflow-hidden rounded-3xl border-2 border-clay-300 bg-clay-50/80"
              >
                <MediaSlot
                  src={service.image}
                  alt={service.name}
                  placeholderLabel="Imagem do serviço será adicionada"
                  aspect="aspect-[4/3]"
                  rounded="rounded-t-3xl"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="w-fit rounded-full bg-clay-500 px-3 py-1 text-[11px] font-semibold tracking-wide text-sand-50 uppercase">
                    Destaque
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink-900">{service.name}</h3>
                  {service.subtitle && <p className="text-sm text-ink-700/80">{service.subtitle}</p>}

                  <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
                    <Button variant="secondary" className="flex-1" onClick={() => setActiveId(service.id)}>
                      Ver detalhes
                    </Button>
                    {bookingUrl && (
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="flex-1" aria-label={`Agendar ${service.name} pelo WhatsApp`}>
                        <Button variant="primary" className="w-full">
                          Agendar
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      {activeService && <ServiceModal service={activeService} onClose={() => setActiveId(null)} />}
    </section>
  )
}
