# Guia de Atualização — Leh Estetic

Este guia explica onde editar cada informação da landing page depois que a cliente enviar seus dados reais. Quase tudo fica em **um único arquivo**: `src/data/siteContent.ts`.

## Onde trocar cada coisa

| O que trocar | Onde |
|---|---|
| Nome da empresa, slogan, descrição | `siteContent.company` |
| WhatsApp, telefone, e-mail, endereço, link do Google Maps | `siteContent.contact` |
| Instagram, Facebook, TikTok | `siteContent.socialLinks` |
| Foto(s) da profissional/equipe | `siteContent.professionals` (campo `photo`) |
| História, missão, propósito, diferenciais | `siteContent.about` |
| Serviços e tratamentos | `siteContent.services` (array) |
| Pacotes | `siteContent.packages` |
| Promoções | `siteContent.promotions` |
| Depoimentos | `siteContent.testimonials` |
| Números de credibilidade (ex: "+1000 clientes") | `siteContent.statistics` |
| Perguntas frequentes | `siteContent.faq` |
| Formas de pagamento aceitas | `siteContent.paymentMethods` (use só: `pix`, `dinheiro`, `debito`, `credito`, `parcelamento`) |
| Horário de atendimento | `siteContent.businessHours` |
| Fotos da galeria | `siteContent.gallery` |
| Domínio oficial | `siteContent.company.officialDomain` (e depois `index.html`, `robots.txt`, `sitemap.xml` — ver seção "Trocar o domínio" abaixo) |
| Agenda online / WhatsApp de agendamento | `siteContent.booking` |

## Logotipo e fotos

1. Coloque o arquivo de imagem em uma destas pastas (cada uma tem um `README.md` explicando o que vai nela):
   - `src/assets/client/` — logo
   - `src/assets/team/` — fotos da profissional/equipe
   - `src/assets/services/` — uma foto por serviço
   - `src/assets/gallery/` — fotos do espaço, equipamentos, resultados
2. No topo de `src/data/siteContent.ts`, importe o arquivo:
   ```ts
   import fotoLeticia from '../assets/team/leticia.jpg'
   ```
3. Use a variável importada no campo correspondente (ex: `photo: fotoLeticia`).

Enquanto um campo de imagem não tiver valor, a página mostra um espaço reservado discreto ("Foto a confirmar") — o layout não quebra quando a foto real entrar.

## Mostrar ou esconder seções

Em `siteContent.settings`, cada campo controla uma seção:

```ts
settings: {
  showPrices: false,          // preços nos serviços
  showProcedureDuration: false, // duração dos procedimentos
  showPromotions: false,      // seção de promoções
  showPackages: false,        // seção de pacotes
  showTestimonials: false,    // depoimentos
  showStatistics: true,       // números de credibilidade
  showTeam: true,             // seção de equipe/profissional
  showBeforeAndAfter: false,  // (reservado para uso futuro)
  showFAQ: true,              // perguntas frequentes
  showMap: false,             // botão/mapa de rota
  showOnlineBooking: false,   // botão de agenda externa
  showGallery: false,         // galeria de fotos
}
```

Basta trocar `false` por `true` (ou o contrário) depois que o conteúdo real da seção estiver preenchido.

## Preços e valores

Cada serviço em `siteContent.services` tem um campo `price?: number` opcional (em reais, ex: `150` para R$150,00) e `durationMinutes?: number`. Eles só aparecem no site se `settings.showPrices` / `settings.showProcedureDuration` estiverem `true`. Se um serviço específico não tiver preço mesmo com a seção ativada, o site mostra "Valor sob consulta" automaticamente.

## Mensagens automáticas do WhatsApp

Ficam centralizadas em `src/utils/whatsapp.ts`. Cada botão de "Agendar" já usa a mensagem certa (geral, por serviço, por pacote, por promoção) — não precisa mexer nesse arquivo a não ser que quiram mudar o texto padrão das mensagens.

## Trocar o domínio

Quando a cliente tiver o domínio oficial:
1. Aponte o DNS do domínio para a Hostinger.
2. Peça para eu (ou quem for mexer no deploy) ajustar o `FTP_SERVER_DIR` nos GitHub Secrets para a nova pasta.
3. Atualize estas 4 referências ao endereço atual (`leh-estetic.matossolucoes.com`) para o domínio novo:
   - `index.html` (`canonical`, `og:url`)
   - `public/robots.txt` (linha do Sitemap)
   - `public/sitemap.xml` (`<loc>`)
   - `siteContent.company.officialDomain`

## Testar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5174`.

## Publicar (deploy)

```bash
npm run build
git add .
git commit -m "Atualiza conteúdo da landing page"
git push origin main
```

O GitHub Actions builda e publica sozinho via FTP. Não é necessário mexer em `.github/workflows/deploy.yml`, `public/.htaccess` nem nos Secrets do GitHub para isso — eles já estão configurados e funcionando.
