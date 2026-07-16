import { useEffect, useState } from 'react'
import { getLeads } from '../../utils/leads'
import type { Lead } from '../../types'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function LeadsList() {
  const [leads, setLeads] = useState<Lead[]>([])

  useEffect(() => {
    setLeads(getLeads())
  }, [])

  if (leads.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-900/15 bg-white/40 p-8 text-center">
        <p className="text-sm text-ink-700/70">
          Nenhuma solicitação registrada neste navegador ainda.
        </p>
        <p className="mt-1 text-xs text-ink-700/50">
          Use o catálogo público e clique em "Enviar no WhatsApp" ou "Copiar mensagem" na Minha
          Seleção para simular uma solicitação aqui.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {leads.map((lead, index) => (
        <div key={index} className="rounded-2xl border border-ink-900/8 bg-white/60 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-medium text-ink-900">{lead.name || 'Nome não informado'}</p>
            <span className="text-xs text-ink-700/50">{formatDate(lead.createdAt)}</span>
          </div>
          <p className="mt-2 text-sm text-ink-700/80">{lead.treatments.join(', ')}</p>
          {lead.period && <p className="mt-1 text-xs text-ink-700/60">Preferência: {lead.period}</p>}
          {lead.notes && <p className="mt-1 text-xs text-ink-700/60">Obs.: {lead.notes}</p>}
        </div>
      ))}
    </div>
  )
}
