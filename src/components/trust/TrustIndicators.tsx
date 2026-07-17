import { Container } from '../ui/Container'
import { siteContent } from '../../data/siteContent'

export function TrustIndicators() {
  const { statistics } = siteContent
  if (statistics.length === 0) return null

  return (
    <section className="border-y border-ink-900/8 bg-white/60 py-10">
      <Container>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-display text-3xl font-semibold text-ink-900 tabular-nums">
                {stat.value}
              </span>
              <span className="mt-1 text-xs tracking-wide text-ink-700/70 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
