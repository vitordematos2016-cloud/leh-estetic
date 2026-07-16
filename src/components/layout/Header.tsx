import { useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import { buildWhatsAppUrl, bookingMessage } from '../../utils/whatsapp'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNavClick = () => setMenuOpen(false)

  const bookingUrl = siteContent.contact.whatsappNumber
    ? buildWhatsAppUrl(siteContent.contact.whatsappNumber, bookingMessage())
    : undefined

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-sand-50/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <a href="#inicio" className="font-display text-xl font-semibold tracking-wide text-ink-900">
          {siteContent.company.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-800/80 transition-colors hover:text-clay-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          {bookingUrl && (
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar atendimento pelo WhatsApp">
              <Button variant="primary">Agendar atendimento</Button>
            </a>
          )}
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-ink-900/15 p-2 text-ink-800 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {menuOpen && (
        <div className="border-t border-ink-900/5 bg-sand-50 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-2 py-3 text-sm font-medium text-ink-800 hover:bg-sand-100"
              >
                {link.label}
              </a>
            ))}
            {bookingUrl && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-2"
                aria-label="Agendar atendimento pelo WhatsApp"
              >
                <Button variant="primary" className="w-full">
                  Agendar atendimento
                </Button>
              </a>
            )}
          </Container>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
