import { useState } from 'react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from './ServiceCard'
import { ServiceModal } from './ServiceModal'
import { siteContent } from '../../data/siteContent'

export function Services() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { services } = siteContent
  const activeService = services.find((s) => s.id === activeId) ?? null

  return (
    <section id="servicos" className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Catálogo"
          title="Serviços e tratamentos"
          description="Consulte disponibilidade e indicação para o seu caso."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onViewDetails={setActiveId} />
          ))}
        </div>
      </Container>

      {activeService && <ServiceModal service={activeService} onClose={() => setActiveId(null)} />}
    </section>
  )
}
