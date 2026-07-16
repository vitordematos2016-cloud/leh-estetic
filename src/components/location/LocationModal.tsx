import { useEffect, useRef, useState, type ReactNode } from 'react'
import { siteContent } from '../../data/siteContent'
import { buildGoogleMapsDirectionsUrl, buildStreetViewUrl, buildWazeUrl } from '../../utils/maps'

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
  const showStreetView = location.streetView.enabled && hasCoordinates
  const showWaze = hasCoordinates

  const directionsUrl = buildGoogleMapsDirectionsUrl(
    hasCoordinates ? `${location.latitude},${location.longitude}` : location.address,
  )
  const streetViewUrl = hasCoordinates
    ? buildStreetViewUrl(
        location.latitude as number,
        location.longitude as number,
        location.streetView.heading,
        location.streetView.pitch,
        location.streetView.fov,
      )
    : undefined
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
          {showStreetView && streetViewUrl && (
            <a
              href={streetViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver a entrada da Leh Estetic em 360° no Google Street View"
              className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
            >
              <IconWrap>
                <StreetViewIcon />
              </IconWrap>
              <span className="text-sm font-medium text-ink-900">Ver entrada em 360°</span>
            </a>
          )}

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traçar rota até a Leh Estetic no Google Maps"
            className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <IconWrap>
              <MapPinIcon />
            </IconWrap>
            <span className="text-sm font-medium text-ink-900">Traçar rota no Google Maps</span>
          </a>

          {showWaze && wazeUrl && (
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir a Leh Estetic no Waze"
              className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-4 text-left transition-colors hover:border-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
            >
              <IconWrap>
                <WazeIcon />
              </IconWrap>
              <span className="text-sm font-medium text-ink-900">Abrir no Waze</span>
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
            <span className="text-sm font-medium text-ink-900">Copiar endereço</span>
          </button>

          <p className="min-h-[1.25rem] text-xs text-clay-600" aria-live="polite">
            {copied && 'Endereço copiado'}
          </p>
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

function StreetViewIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 18c0-3 3.5-5 8-5s8 2 8 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.5 14a10 10 0 0 1 19 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 2.5"
      />
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
