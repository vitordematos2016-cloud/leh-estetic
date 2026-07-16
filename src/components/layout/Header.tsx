import { useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useSelection } from '../../context/SelectionContext'
import { professional, contact } from '../../data/lehEstetic'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

const whatsappUrl = buildWhatsAppUrl(
  contact.whatsappNumber,
  `Olá, ${professional.name.split(' ')[0]}! Vim através do catálogo digital e gostaria de agendar uma avaliação.`,
)

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { selected, openPanel } = useSelection()

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-sand-50/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <a href="#inicio" className="font-display text-xl font-semibold tracking-wide text-ink-900">
          {professional.name}
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

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={openPanel}
            className="relative rounded-full border border-ink-900/15 p-2 text-ink-800 transition-colors hover:border-clay-500 hover:text-clay-600 cursor-pointer"
            aria-label="Abrir minha seleção de tratamentos"
          >
            <SelectionIcon />
            {selected.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-clay-500 text-[11px] font-semibold text-sand-50">
                {selected.length}
              </span>
            )}
          </button>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Agendar avaliação</Button>
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-ink-900/15 p-2 text-ink-800 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
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
            <button
              onClick={() => {
                openPanel()
                handleNavClick()
              }}
              className="flex items-center justify-between rounded-lg px-2 py-3 text-left text-sm font-medium text-ink-800 hover:bg-sand-100 cursor-pointer"
            >
              Minha seleção
              {selected.length > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-clay-500 text-[11px] font-semibold text-sand-50">
                  {selected.length}
                </span>
              )}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-2"
            >
              <Button variant="primary" className="w-full">
                Agendar avaliação
              </Button>
            </a>
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

function SelectionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5s-6.5-4.06-6.5-8.6A3.9 3.9 0 0 1 10 6.1a3.9 3.9 0 0 1 6.5 2.8c0 4.54-6.5 8.6-6.5 8.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
