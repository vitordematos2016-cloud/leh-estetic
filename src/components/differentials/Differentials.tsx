import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { differentials } from '../../data/lehEstetic'

export function Differentials() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Diferenciais" title="Por que confiar no cuidado da sua pele" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-ink-900/8 bg-white/60 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="text-sm text-ink-700/80">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
