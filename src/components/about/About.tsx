import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { MediaSlot } from '../ui/MediaSlot'
import { siteContent } from '../../data/siteContent'

export function About() {
  const { about, company } = siteContent
  const hasStory = Boolean(about.history || about.mission || about.purpose)

  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MediaSlot
            src={about.spaceImage}
            alt={`Espaço da ${company.name}`}
            placeholderLabel="Foto do espaço em atualização"
            aspect="aspect-square"
            className="order-2 lg:order-1"
          />

          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <span className="text-xs font-medium tracking-[0.25em] text-clay-500 uppercase">Sobre</span>
            <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">{company.name}</h2>
            {hasStory ? (
              <>
                {about.history && <p className="text-base text-ink-700/90">{about.history}</p>}
                {about.mission && <p className="text-base text-ink-700/90">{about.mission}</p>}
                {about.purpose && <p className="text-base text-ink-700/90">{about.purpose}</p>}
              </>
            ) : (
              company.description && <p className="text-base text-ink-700/90">{company.description}</p>
            )}
          </div>
        </div>

        {about.differentials.length > 0 && (
          <div className="flex flex-col gap-8">
            <SectionHeading title="Por que confiar no cuidado da sua pele" align="center" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.differentials.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-ink-900/8 bg-white/60 p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-ink-900">{item.title}</h3>
                  <p className="text-sm text-ink-700/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
