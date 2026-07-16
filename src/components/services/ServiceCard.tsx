import { MediaSlot } from '../ui/MediaSlot'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, serviceMessage } from '../../utils/whatsapp'
import type { ServiceItem } from '../../types/content'

interface ServiceCardProps {
  service: ServiceItem
  onViewDetails: (id: string) => void
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  const { settings, contact } = siteContent
  const bookingUrl = contact.whatsappNumber
    ? buildWhatsAppUrl(contact.whatsappNumber, serviceMessage(service.name))
    : undefined

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white/60 shadow-sm shadow-ink-900/5">
      <MediaSlot
        src={service.image}
        alt={service.name}
        placeholderLabel="Imagem em atualização"
        aspect="aspect-[4/3]"
        rounded="rounded-t-3xl"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">
          {service.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-ink-900">{service.name}</h3>
        {service.subtitle && <p className="text-sm text-ink-700/80">{service.subtitle}</p>}

        <div className="mt-1 flex flex-wrap gap-3 text-xs text-ink-700/60">
          {settings.showProcedureDuration && service.durationMinutes && (
            <span>{service.durationMinutes} min</span>
          )}
          {settings.showPrices && (
            <span>{service.price ? formatPrice(service.price) : 'Valor sob consulta'}</span>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
          <Button variant="secondary" className="flex-1" onClick={() => onViewDetails(service.id)}>
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
}

function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
