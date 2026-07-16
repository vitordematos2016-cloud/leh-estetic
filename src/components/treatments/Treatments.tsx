import { useState } from 'react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { TreatmentCard } from './TreatmentCard'
import { TreatmentModal } from './TreatmentModal'
import { treatments } from '../../data/lehEstetic'

export function Treatments() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeTreatment = treatments.find((t) => t.id === activeId) ?? null

  return (
    <section id="tratamentos" className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Catálogo"
          title="Tratamentos e cuidados"
          description="Procedimentos divulgados publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} onViewDetails={setActiveId} />
          ))}
        </div>
      </Container>

      {activeTreatment && <TreatmentModal treatment={activeTreatment} onClose={() => setActiveId(null)} />}
    </section>
  )
}
