import { useState } from 'react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from './ServiceCard'
import { ServiceModal } from './ServiceModal'
import { siteContent } from '../../data/siteContent'

export function FeaturedServices() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const featured = siteContent.services.filter((s) => s.featured)
  const activeService = featured.find((s) => s.id === activeId) ?? null

  if (featured.length === 0) return null

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Destaques" title="Serviços mais procurados" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} onViewDetails={setActiveId} />
          ))}
        </div>
      </Container>

      {activeService && <ServiceModal service={activeService} onClose={() => setActiveId(null)} />}
    </section>
  )
}
