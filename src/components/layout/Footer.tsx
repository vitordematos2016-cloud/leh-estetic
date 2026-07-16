import { Container } from '../ui/Container'
import { siteContent } from '../../data/siteContent'

export function Footer() {
  const { company, contact, socialLinks, businessHours } = siteContent
  const year = new Date().getFullYear()

  const socials = [
    socialLinks.instagramUrl && { label: 'Instagram', href: socialLinks.instagramUrl },
    socialLinks.facebookUrl && { label: 'Facebook', href: socialLinks.facebookUrl },
    socialLinks.tiktokUrl && { label: 'TikTok', href: socialLinks.tiktokUrl },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <footer className="border-t border-ink-900/8 py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-lg font-semibold text-ink-900">{company.name}</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-700/70">
          {contact.phone && <span>{contact.phone}</span>}
          {contact.email && <span>{contact.email}</span>}
          {contact.address && <span>{contact.address}</span>}
        </div>

        {businessHours.length > 0 && (
          <div className="text-sm text-ink-700/70">
            {businessHours.map((item) => (
              <p key={item.day}>
                {item.day}: {item.hours}
              </p>
            ))}
          </div>
        )}

        {socials.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink-800 hover:text-clay-600"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}

        <p className="text-xs text-ink-700/50">
          © {year} {company.name}. Todos os direitos reservados.
        </p>

        <p className="text-xs leading-relaxed text-ink-700/40">
          Conteúdo em atualização — página em fase de finalização com a profissional.
        </p>

        <p className="text-[11px] text-ink-700/30">Desenvolvido por Matos Soluções</p>
      </Container>
    </footer>
  )
}
