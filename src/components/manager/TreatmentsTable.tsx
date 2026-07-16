import { treatments } from '../../data/lehEstetic'

export function TreatmentsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-900/8 bg-white/60">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink-900/8 text-xs tracking-wide text-ink-700/60 uppercase">
            <th className="px-5 py-3 font-medium">Tratamento</th>
            <th className="px-5 py-3 font-medium">Categoria</th>
            <th className="px-5 py-3 font-medium">Status da imagem</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment) => (
            <tr key={treatment.id} className="border-b border-ink-900/8 last:border-0">
              <td className="px-5 py-4">
                <p className="font-medium text-ink-900">{treatment.name}</p>
                <p className="text-xs text-ink-700/60">{treatment.subtitle}</p>
              </td>
              <td className="px-5 py-4 text-ink-700/80">{treatment.category}</td>
              <td className="px-5 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    treatment.hasImage
                      ? 'bg-clay-100 text-clay-600'
                      : 'bg-sand-200 text-ink-700/70'
                  }`}
                >
                  {treatment.hasImage ? 'Imagem enviada' : 'Imagem pendente'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
