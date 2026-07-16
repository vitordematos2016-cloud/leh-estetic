import { useEffect, useState } from 'react'
import { useSelection } from '../../context/SelectionContext'
import { Button } from '../ui/Button'
import { professional, contact } from '../../data/lehEstetic'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { saveLead } from '../../utils/leads'

function buildMessage(
  name: string,
  treatmentNames: string[],
  period: string,
  notes: string,
): string {
  const lines = [
    `Olá, ${professional.name.split(' ')[0]}! Tudo bem?`,
    '',
    `Meu nome é ${name || '[NOME]'} e conheci seus serviços pelo catálogo digital.`,
    '',
    'Tenho interesse nos seguintes tratamentos:',
    '',
    ...treatmentNames.map((t) => `• ${t}`),
    '',
    'Gostaria de receber mais informações e verificar a possibilidade de uma avaliação.',
    '',
    'Preferência de atendimento:',
    period || '[PERÍODO OU DATA]',
    '',
    'Observações:',
    notes || '[OBSERVAÇÕES]',
  ]
  return lines.join('\n')
}

export function SelectionPanel() {
  const { selected, removeTreatment, isPanelOpen, closePanel } = useSelection()
  const [name, setName] = useState('')
  const [period, setPeriod] = useState('')
  const [notes, setNotes] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isPanelOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePanel()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isPanelOpen, closePanel])

  if (!isPanelOpen) return null

  const message = buildMessage(
    name,
    selected.map((t) => t.name),
    period,
    notes,
  )

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const whatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, message)

  const registerLead = () => {
    saveLead({
      name,
      treatments: selected.map((t) => t.name),
      period,
      notes,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink-900/50 backdrop-blur-sm" onClick={closePanel}>
      <div
        className="flex h-full w-full max-w-md flex-col overflow-y-auto bg-sand-50 p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold text-ink-900">Minha seleção</h3>
          <button
            onClick={closePanel}
            aria-label="Fechar"
            className="rounded-full border border-ink-900/15 p-2 text-ink-800 hover:border-clay-500 hover:text-clay-600 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {selected.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 py-16 text-center">
            <p className="text-sm text-ink-700/70">
              Você ainda não adicionou tratamentos. Continue navegando pelo catálogo.
            </p>
            <a href="#tratamentos" onClick={closePanel}>
              <Button variant="secondary">Ver tratamentos</Button>
            </a>
          </div>
        ) : (
          <>
            <ul className="mt-6 flex flex-col gap-3">
              {selected.map((treatment) => (
                <li
                  key={treatment.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-ink-900/8 bg-white/60 p-4"
                >
                  <span className="text-sm font-medium text-ink-800">{treatment.name}</span>
                  <button
                    onClick={() => removeTreatment(treatment.id)}
                    aria-label={`Remover ${treatment.name}`}
                    className="text-xs font-medium text-clay-600 hover:text-clay-500 cursor-pointer"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-sm">
                Seu nome
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="rounded-xl border border-ink-900/15 bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-clay-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Preferência de período ou data
                <input
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  placeholder="Ex: manhãs, próxima semana..."
                  className="rounded-xl border border-ink-900/15 bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-clay-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Observações
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Alguma informação adicional?"
                  className="resize-none rounded-xl border border-ink-900/15 bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-clay-500"
                />
              </label>
            </div>

            <div className="mt-6 rounded-2xl bg-sand-100 p-4">
              <pre className="max-h-40 overflow-y-auto text-xs whitespace-pre-wrap text-ink-700/80">
                {message}
              </pre>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block"
              onClick={registerLead}
            >
              <Button variant="primary" className="w-full">
                Enviar no WhatsApp
              </Button>
            </a>
            <Button
              variant="ghost"
              className="mt-2 w-full"
              onClick={() => {
                handleCopy()
                registerLead()
              }}
            >
              {copied ? 'Mensagem copiada ✓' : 'Copiar mensagem'}
            </Button>
            <p className="mt-3 text-[11px] text-ink-700/60">
              O horário só é confirmado diretamente pela profissional após o envio da mensagem.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
