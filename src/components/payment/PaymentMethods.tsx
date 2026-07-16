import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { siteContent } from '../../data/siteContent'
import type { PaymentMethod } from '../../types/content'

const labels: Record<PaymentMethod, string> = {
  pix: 'Pix',
  dinheiro: 'Dinheiro',
  debito: 'Cartão de débito',
  credito: 'Cartão de crédito',
  parcelamento: 'Parcelamento',
}

export function PaymentMethods() {
  const { paymentMethods } = siteContent
  if (paymentMethods.length === 0) return null

  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionHeading eyebrow="Pagamento" title="Formas de pagamento" align="center" />
        <div className="flex flex-wrap justify-center gap-3">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-ink-900/15 px-4 py-2 text-sm font-medium text-ink-800"
            >
              {labels[method]}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
