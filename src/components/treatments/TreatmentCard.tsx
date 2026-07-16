import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Button } from '../ui/Button'
import { useSelection } from '../../context/SelectionContext'
import type { Treatment } from '../../types'

interface TreatmentCardProps {
  treatment: Treatment
  onViewDetails: (id: string) => void
}

export function TreatmentCard({ treatment, onViewDetails }: TreatmentCardProps) {
  const { isSelected, addTreatment, removeTreatment } = useSelection()
  const selected = isSelected(treatment.id)

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white/60 shadow-sm shadow-ink-900/5">
      <ImagePlaceholder label="Imagem a confirmar" aspect="aspect-[4/3]" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">
          {treatment.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-ink-900">{treatment.name}</h3>
        <p className="text-sm text-ink-700/80">{treatment.subtitle}</p>

        <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
          <Button variant="secondary" className="flex-1" onClick={() => onViewDetails(treatment.id)}>
            Ver detalhes
          </Button>
          <Button
            variant={selected ? 'ghost' : 'primary'}
            className="flex-1"
            onClick={() => (selected ? removeTreatment(treatment.id) : addTreatment(treatment))}
          >
            {selected ? 'Adicionado ✓' : 'Tenho interesse'}
          </Button>
        </div>
      </div>
    </div>
  )
}
