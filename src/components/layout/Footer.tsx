import { Container } from '../ui/Container'
import { professional } from '../../data/lehEstetic'

export function Footer() {
  return (
    <footer className="border-t border-ink-900/8 py-10">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="font-display text-lg font-semibold text-ink-900">{professional.name}</p>
        <p className="text-xs leading-relaxed text-ink-700/50">
          Demonstração não oficial desenvolvida com base em informações públicas. Conteúdo sujeito
          à validação da profissional.
        </p>
      </Container>
    </footer>
  )
}
