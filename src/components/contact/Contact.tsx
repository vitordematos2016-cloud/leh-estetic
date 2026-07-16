import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { contact, professional } from '../../data/lehEstetic'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

const whatsappUrl = buildWhatsAppUrl(
  contact.whatsappNumber,
  `Olá, ${professional.name.split(' ')[0]}! Vim através do catálogo digital e gostaria de agendar uma avaliação.`,
)

export function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SectionHeading
          eyebrow="Contato"
          title="Agende sua avaliação"
          description="Consulte disponibilidade e tire suas dúvidas antes de agendar."
        />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-ink-900/8 bg-white/60 p-6 text-left">
            <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">WhatsApp</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-display text-lg font-semibold text-ink-900 hover:text-clay-600"
            >
              {contact.whatsappDisplay}
            </a>
          </div>

          <div className="rounded-2xl border border-ink-900/8 bg-white/60 p-6 text-left">
            <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">Instagram</span>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-display text-lg font-semibold text-ink-900 hover:text-clay-600"
            >
              {contact.instagramHandle}
            </a>
          </div>

          <div className="rounded-2xl border border-ink-900/8 bg-white/60 p-6 text-left">
            <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">Endereço</span>
            <p className="mt-2 font-display text-lg font-semibold text-ink-900">{contact.city}</p>
            <p className="text-sm text-ink-700/80">{contact.address}</p>
          </div>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Agendar avaliação</Button>
        </a>
        <p className="text-xs text-ink-700/50">
          Horário sujeito à confirmação direta com a profissional.
        </p>
      </Container>
    </section>
  )
}
