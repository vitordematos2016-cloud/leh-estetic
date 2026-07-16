import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Treatment } from '../types'

interface SelectionContextValue {
  selected: Treatment[]
  isSelected: (id: string) => boolean
  addTreatment: (treatment: Treatment) => void
  removeTreatment: (id: string) => void
  clearSelection: () => void
  isPanelOpen: boolean
  openPanel: () => void
  closePanel: () => void
}

const SelectionContext = createContext<SelectionContextValue | null>(null)

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Treatment[]>([])
  const [isPanelOpen, setPanelOpen] = useState(false)

  const value = useMemo<SelectionContextValue>(
    () => ({
      selected,
      isSelected: (id) => selected.some((item) => item.id === id),
      addTreatment: (treatment) =>
        setSelected((current) =>
          current.some((item) => item.id === treatment.id) ? current : [...current, treatment],
        ),
      removeTreatment: (id) => setSelected((current) => current.filter((item) => item.id !== id)),
      clearSelection: () => setSelected([]),
      isPanelOpen,
      openPanel: () => setPanelOpen(true),
      closePanel: () => setPanelOpen(false),
    }),
    [selected, isPanelOpen],
  )

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
}

export function useSelection() {
  const context = useContext(SelectionContext)
  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider')
  }
  return context
}
