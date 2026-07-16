import { useEffect } from 'react'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Button } from '../ui/Button'
import { useSelection } from '../../context/SelectionContext'
import type { Treatment } from '../../types'

interface TreatmentModalProps {
  treatment: Treatment
  onClose: () => void
}

export function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  const { isSelected, addTreatment, removeTreatment } = useSelection()
  const selected = isSelected(treatment.id)

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-3xl bg-sand-50 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ImagePlaceholder label="Imagem a confirmar" aspect="aspect-[16/9]" className="rounded-b-none" />

        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">
                {treatment.category}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink-900">{treatment.name}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="rounded-full border border-ink-900/15 p-2 text-ink-800 hover:border-clay-500 hover:text-clay-600 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="text-base text-ink-700/90">{treatment.description}</p>

          {treatment.benefits.length > 0 && (
            <ul className="flex flex-col gap-2">
              {treatment.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-ink-700/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          )}

          {treatment.technology && (
            <p className="text-sm text-ink-700/70">
              <span className="font-medium text-ink-800">Tecnologia/ativo:</span> {treatment.technology}
            </p>
          )}

          <p className="rounded-xl bg-sand-100 p-4 text-xs text-ink-700/70">
            A indicação, o número de sessões e os resultados dependem de avaliação individual com a
            profissional.
          </p>

          <p className="text-[11px] text-ink-700/50">{treatment.sourceNote}</p>

          <Button
            variant={selected ? 'ghost' : 'primary'}
            className="mt-2 w-full"
            onClick={() => (selected ? removeTreatment(treatment.id) : addTreatment(treatment))}
          >
            {selected ? 'Adicionado à Minha Seleção ✓' : 'Adicionar à Minha Seleção'}
          </Button>
        </div>
      </div>
    </div>
  )
}
