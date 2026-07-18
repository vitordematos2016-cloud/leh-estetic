import { useEffect, useRef, useState, type ReactNode } from 'react'
import { siteContent } from '../../data/siteContent'
import { buildGoogleMapsDirectionsUrl, buildWazeUrl } from '../../utils/maps'

interface LocationModalProps {
  onClose: () => void
}

export function LocationModal({ onClose }: LocationModalProps) {
  const { location } = siteContent
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
    closeButtonRef.current?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const hasCoordinates = location.latitude !== null && location.longitude !== null

  const directionsUrl = buildGoogleMapsDirectionsUrl(
    hasCoordinates ? `${location.latitude},${location.longitude}` : location.address,
  )
  const wazeUrl = hasCoordinates ? buildWazeUrl(location.latitude as number, location.longitude as number) : undefined

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(location.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink-900/50 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-h-[85vh] overflow-y-auto rounded-t-3xl bg-sand-50 p-6 shadow-xl transition-all duration-300 motion-reduce:transition-none sm:max-w-md sm:rounded-3xl sm:p-8 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 sm:translate-y-0 sm:scale-95'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 id="location-modal-title" className="font-display text-xl font-semibold text-ink-900">
            Como chegar
          </h3>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full border border-ink-900/15 p-2 text-ink-800 transition-colors hover:border-clay-500 hover:text-clay-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="mt-2 text-sm text-ink-700/70">{location.address}</p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver rotas até a Leh Estetic no Google Maps"
            className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <IconWrap>
              <MapPinIcon />
            </IconWrap>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-ink-900">Google Maps</span>
              <span className="text-xs text-ink-700/60">Ver rotas e escolher como chegar.</span>
            </span>
          </a>

          {wazeUrl && (
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar navegação até a Leh Estetic no Waze"
              className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
            >
              <IconWrap>
                <WazeIcon />
              </IconWrap>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-ink-900">Waze</span>
                <span className="text-xs text-ink-700/60">Iniciar navegação de carro.</span>
              </span>
            </a>
          )}

          <button
            onClick={handleCopy}
            aria-label="Copiar endereço da Leh Estetic"
            className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <IconWrap>
              <CopyIcon />
            </IconWrap>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-ink-900">Copiar endereço</span>
              <span className="text-xs text-ink-700/60" aria-live="polite">
                {copied ? 'Endereço copiado' : 'Copiar para a área de transferência.'}
              </span>
            </span>
          </button>

          <a
            href="#espaco"
            onClick={onClose}
            aria-label="Ver a foto da fachada da Leh Estetic"
            className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <IconWrap>
              <FacadeIcon />
            </IconWrap>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-ink-900">Ver fachada</span>
              <span className="text-xs text-ink-700/60">Abrir o espaço reservado para a foto da fachada.</span>
            </span>
          </a>

          <a
            href="#espaco"
            onClick={onClose}
            aria-label="Conhecer o espaço da Leh Estetic"
            className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <IconWrap>
              <GalleryIcon />
            </IconWrap>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-ink-900">Conhecer o espaço</span>
              <span className="text-xs text-ink-700/60">Abrir a galeria preparada.</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-100 text-clay-600">
      {children}
    </span>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function WazeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3l3.5 7.5L20 12l-4.5 1.5L12 21l-3.5-7.5L4 12l4.5-1.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function FacadeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 21V9l8-5 8 5v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function GalleryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="10" r="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 17l4-4 3 3 3-4 4 5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}
