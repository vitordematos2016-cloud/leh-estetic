import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, packageMessage, promotionMessage } from '../../utils/whatsapp'
import type { PackageItem } from '../../types/content'

function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function PackageCard({ item, isPromotion }: { item: PackageItem; isPromotion: boolean }) {
  const { contact } = siteContent
  const message = isPromotion ? promotionMessage(item.name) : packageMessage(item.name)
  const bookingUrl = contact.whatsappNumber ? buildWhatsAppUrl(contact.whatsappNumber, message) : undefined
  const includedServices = item.includedServiceIds
    .map((id) => siteContent.services.find((s) => s.id === id)?.name)
    .filter(Boolean)

  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-ink-900/8 bg-white/60 p-6">
      <h3 className="font-display text-xl font-semibold text-ink-900">{item.name}</h3>
      <p className="text-sm text-ink-700/80">{item.description}</p>

      {includedServices.length > 0 && (
        <ul className="flex flex-col gap-1 text-sm text-ink-700/70">
          {includedServices.map((name) => (
            <li key={name}>• {name}</li>
          ))}
        </ul>
      )}

      <div className="flex items-baseline gap-2">
        {item.regularPrice && (
          <span className="text-sm text-ink-700/50 line-through">{formatPrice(item.regularPrice)}</span>
        )}
        {item.promoPrice && (
          <span className="font-display text-2xl font-semibold text-clay-600">
            {formatPrice(item.promoPrice)}
          </span>
        )}
      </div>
      {item.validUntil && <p className="text-xs text-ink-700/60">Válido até {item.validUntil}</p>}

      {bookingUrl && (
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-2">
          <Button variant="primary" className="w-full">
            Tenho interesse
          </Button>
        </a>
      )}
    </div>
  )
}

export function Packages() {
  const { settings, packages, promotions } = siteContent
  const showPackages = settings.showPackages && packages.length > 0
  const showPromotions = settings.showPromotions && promotions.length > 0

  if (!showPackages && !showPromotions) return null

  return (
    <section className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        {showPromotions && (
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Por tempo limitado" title="Promoções" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {promotions.map((item) => (
                <PackageCard key={item.id} item={item} isPromotion />
              ))}
            </div>
          </div>
        )}

        {showPackages && (
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Combos" title="Pacotes" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((item) => (
                <PackageCard key={item.id} item={item} isPromotion={false} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
