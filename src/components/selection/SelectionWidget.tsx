import { useSelection } from '../../context/SelectionContext'

export function SelectionWidget() {
  const { selected, openPanel, isPanelOpen } = useSelection()

  if (selected.length === 0 || isPanelOpen) return null

  return (
    <button
      onClick={openPanel}
      className="fixed right-5 bottom-5 z-30 flex items-center gap-2 rounded-full bg-clay-500 px-5 py-3 text-sm font-medium text-sand-50 shadow-lg shadow-ink-900/20 transition-transform hover:scale-105 cursor-pointer sm:right-8 sm:bottom-8"
    >
      Minha seleção
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sand-50 text-xs font-semibold text-clay-600">
        {selected.length}
      </span>
    </button>
  )
}
