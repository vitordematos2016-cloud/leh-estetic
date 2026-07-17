import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { MediaSlot } from '../ui/MediaSlot'
import { siteContent } from '../../data/siteContent'

export function Team() {
  const { professionals } = siteContent
  if (professionals.length === 0) return null

  const heading = professionals.length > 1 ? 'Nossa equipe' : 'Profissional responsável'

  return (
    <section className="bg-sand-100/60 py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Equipe" title={heading} />

        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white/60 sm:flex-row"
            >
              <MediaSlot
                src={pro.photo}
                alt={pro.name}
                placeholderLabel="Foto profissional a confirmar"
                aspect="aspect-[4/5]"
                rounded="rounded-none"
                className="sm:w-2/5"
              />
              <div className="flex flex-1 flex-col gap-2 p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-ink-900">{pro.name}</h3>
                <p className="text-sm font-medium tracking-wide text-clay-600 uppercase">{pro.role}</p>
                {pro.specialties && pro.specialties.length > 0 && (
                  <p className="text-sm text-ink-700/70">{pro.specialties.join(' · ')}</p>
                )}
                {pro.bio && <p className="mt-2 text-sm text-ink-700/80">{pro.bio}</p>}

                <dl className="mt-3 flex flex-col gap-1 text-sm text-ink-700/70">
                  {pro.education && (
                    <div className="flex gap-2">
                      <dt className="font-medium text-ink-800">Formação:</dt>
                      <dd>{pro.education}</dd>
                    </div>
                  )}
                  {pro.experience && (
                    <div className="flex gap-2">
                      <dt className="font-medium text-ink-800">Experiência:</dt>
                      <dd>{pro.experience}</dd>
                    </div>
                  )}
                </dl>

                {pro.instagramUrl && (
                  <a
                    href={pro.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-medium text-clay-600 hover:text-clay-500"
                  >
                    Ver no Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
