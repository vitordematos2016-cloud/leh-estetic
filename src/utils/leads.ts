import type { Lead } from '../types'

const STORAGE_KEY = 'leh-estetic-leads-demo'

export function saveLead(lead: Omit<Lead, 'createdAt'>): void {
  try {
    const leads = getLeads()
    leads.unshift({ ...lead, createdAt: new Date().toISOString() })
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads.slice(0, 50)))
  } catch {
    // localStorage indisponível — a demonstração segue funcionando sem persistência
  }
}

export function getLeads(): Lead[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Lead[]) : []
  } catch {
    return []
  }
}
