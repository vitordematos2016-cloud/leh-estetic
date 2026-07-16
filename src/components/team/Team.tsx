import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { MediaSlot } from '../ui/MediaSlot'
import { siteContent } from '../../data/siteContent'

export function Team() {
  const { settings, professionals } = siteContent
  if (!settings.showTeam || professionals.length === 0) return null

  const heading = professionals.length > 1 ? 'Nossa equipe' : 'Profissional responsável'

  return (
    <section className="bg-sand-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Equipe" title={heading} />

        <div
          className={`grid grid-cols-1 gap-8 ${professionals.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'mx-auto max-w-md'}`}
        >
          {professionals.map((pro) => (
            <div key={pro.id} className="flex flex-col overflow-hidden rounded-3xl bg-white/60">
              <MediaSlot
                src={pro.photo}
                alt={pro.name}
                placeholderLabel="Foto profissional a confirmar"
                aspect="aspect-[4/5]"
                rounded="rounded-t-3xl"
              />
              <div className="flex flex-col gap-2 p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-ink-900">{pro.name}</h3>
                <p className="text-sm font-medium tracking-wide text-clay-600 uppercase">{pro.role}</p>
                {pro.specialties && pro.specialties.length > 0 && (
                  <p className="text-sm text-ink-700/70">{pro.specialties.join(' · ')}</p>
                )}
                {pro.bio && <p className="mt-2 text-sm text-ink-700/80">{pro.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
