import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, generalMessage } from '../../utils/whatsapp'

export function WhatsAppFloatingButton() {
  const { contact } = siteContent
  if (!contact.whatsappNumber) return null

  const url = buildWhatsAppUrl(contact.whatsappNumber, generalMessage())

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Leh Estetic pelo WhatsApp"
      className="fixed right-5 bottom-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sand-50 shadow-lg shadow-ink-900/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500 sm:right-8 sm:bottom-8 sm:px-5"
    >
      <WhatsAppIcon />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.62-1.21A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.7c.2-.6.6-.6.9-.6h.5c.2 0 .4 0 .6.4.2.4.6 1.4.6 1.5.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.2.1.9-.2 1.4-.3.6-1.6 1.1-2.2 1.1-.6 0-1.3.1-4.2-1.2-3.5-1.6-5.7-5.4-5.9-5.6-.2-.3-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.8Z"
        fill="currentColor"
      />
    </svg>
  )
}
