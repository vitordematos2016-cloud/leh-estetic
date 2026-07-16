import { useEffect } from 'react'
import { MediaSlot } from '../ui/MediaSlot'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, serviceMessage } from '../../utils/whatsapp'
import type { ServiceItem } from '../../types/content'

interface ServiceModalProps {
  service: ServiceItem
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const { settings, contact } = siteContent
  const bookingUrl = contact.whatsappNumber
    ? buildWhatsAppUrl(contact.whatsappNumber, serviceMessage(service.name))
    : undefined

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-3xl bg-sand-50 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <MediaSlot
          src={service.image}
          alt={service.name}
          placeholderLabel="Imagem em atualização"
          aspect="aspect-[16/9]"
          rounded="rounded-t-3xl"
        />

        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">
                {service.category}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink-900">{service.name}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="rounded-full border border-ink-900/15 p-2 text-ink-800 hover:border-clay-500 hover:text-clay-600 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="text-base text-ink-700/90">{service.description}</p>

          {service.benefits.length > 0 && (
            <ul className="flex flex-col gap-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-ink-700/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          )}

          {service.technology && (
            <p className="text-sm text-ink-700/70">
              <span className="font-medium text-ink-800">Tecnologia/ativo:</span> {service.technology}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-sm text-ink-700/70">
            {settings.showProcedureDuration && service.durationMinutes && (
              <span>Duração aproximada: {service.durationMinutes} min</span>
            )}
            {settings.showPrices && (
              <span>{service.price ? formatPrice(service.price) : 'Valor sob consulta'}</span>
            )}
          </div>

          <p className="rounded-xl bg-sand-100 p-4 text-xs text-ink-700/70">
            A indicação, o número de sessões e os resultados dependem de avaliação individual com a
            profissional.
          </p>

          {bookingUrl && (
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={`Agendar ${service.name} pelo WhatsApp`}>
              <Button variant="primary" className="w-full">
                Agendar este serviço
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
