import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { educationalTopics } from '../../data/lehEstetic'

export function EducationalContent() {
  return (
    <section className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Conteúdo"
          title="Conteúdos e cuidados"
          description="Temas abordados publicamente pela profissional, resumidos para facilitar a leitura."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {educationalTopics.map((topic) => (
            <div key={topic.title} className="flex flex-col gap-2 rounded-2xl bg-white/60 p-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">{topic.title}</h3>
              <p className="text-sm text-ink-700/80">{topic.summary}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
