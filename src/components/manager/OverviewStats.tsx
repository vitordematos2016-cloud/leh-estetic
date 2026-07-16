import { treatments, differentials, educationalTopics } from '../../data/lehEstetic'

export function OverviewStats() {
  const categories = new Set(treatments.map((t) => t.category)).size
  const pendingImages = treatments.filter((t) => !t.hasImage).length

  const stats = [
    { label: 'Tratamentos cadastrados', value: treatments.length },
    { label: 'Categorias ativas', value: categories },
    { label: 'Conteúdos publicados', value: educationalTopics.length },
    { label: 'Diferenciais em destaque', value: differentials.length },
    { label: 'Imagens pendentes de envio', value: pendingImages },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-ink-900/8 bg-white/60 p-5">
          <p className="font-display text-3xl font-semibold text-ink-900 tabular-nums">{stat.value}</p>
          <p className="mt-1 text-xs text-ink-700/70">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
