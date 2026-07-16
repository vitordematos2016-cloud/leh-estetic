import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { siteContent } from '../../data/siteContent'

export function Testimonials() {
  const { settings, testimonials } = siteContent
  if (!settings.showTestimonials || testimonials.length === 0) return null

  return (
    <section className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Depoimentos" title="Quem já passou por aqui" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col gap-3 rounded-2xl bg-white/60 p-6">
              {testimonial.rating && (
                <span className="text-clay-500" aria-label={`${testimonial.rating} de 5 estrelas`}>
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </span>
              )}
              <p className="text-sm text-ink-700/90">"{testimonial.text}"</p>
              <p className="text-xs font-medium tracking-wide text-ink-800 uppercase">{testimonial.name}</p>
              {testimonial.source && <p className="text-xs text-ink-700/50">via {testimonial.source}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
