import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { siteContent } from '../../data/siteContent'

export function Faq() {
  const { faq } = siteContent
  if (faq.length === 0) return null

  return (
    <section className="py-16 sm:py-24">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />

        <div className="flex flex-col gap-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-ink-900/8 bg-white/60 p-5 transition-colors open:bg-white/90"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-ink-900 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500">
                {item.question}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-100 text-clay-600 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-700/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
