# Guia de Atualização — Leh Estetic

Este guia explica onde editar cada informação da landing page depois que a cliente enviar seus dados reais. Quase tudo fica em **um único arquivo**: `src/data/siteContent.ts`.

## Filosofia do projeto

Toda a estrutura da landing page já está montada, visível e funcional — nada fica escondido esperando dados reais. Onde ainda não há informação confirmada, aparece um texto provisório claro (ex: "Foto oficial será adicionada", "Valor sob consulta", "Formação a confirmar com a profissional"). Conforme a cliente for enviando cada informação, basta substituir o texto/valor provisório pelo real no `siteContent.ts` — a seção já está pronta para receber o conteúdo, sem precisar criar nada de novo.

## Onde trocar cada coisa

| O que trocar | Onde em `siteContent.ts` |
|---|---|
| Nome da empresa, domínio oficial | `company` |
| Título, subtítulo, descrição e foto da seção inicial (Hero) | `hero` |
| WhatsApp, telefone, e-mail, endereço | `contact` |
| Endereço, coordenadas, link do Google Maps (Place) | `location` |
| Instagram, Facebook, TikTok | `socialLinks` |
| Profissional(is): nome, foto, formação, experiência, bio, Instagram | `professionals` (array — aceita mais de uma profissional) |
| História, missão, propósito, foto do espaço | `about` |
| Diferenciais | `differentials` |
| Serviços e tratamentos (nome, categoria, descrição, benefícios, indicação, cuidados, observações, duração, preço, imagem) | `services` (array) |
| Quais serviços aparecem em "Serviços mais procurados" | `featuredServices` (lista de ids de `services`) |
| Pacotes | `packages` |
| Promoções | `promotions` |
| Depoimentos | `testimonials` |
| Números de credibilidade (ex: "+1000 clientes") | `statistics` |
| Perguntas frequentes | `faq` |
| Formas de pagamento aceitas | `paymentMethods` (use só: `pix`, `dinheiro`, `debito`, `credito`, `parcelamento`) |
| Horário de atendimento | `businessHours` |
| Fotos da galeria (fachada, recepção, sala, equipamentos, ambiente, profissional) | `gallery` |
| WhatsApp/agenda online de agendamento, políticas de sinal/cancelamento/atraso/reagendamento | `booking` |
| Links rápidos do rodapé, aviso e crédito | `footer` |

## Logotipo e fotos

1. Coloque o arquivo de imagem na pasta correspondente (cada uma tem um `README.md` explicando o que vai nela):
   - `src/assets/client/logo/` — logotipo
   - `src/assets/client/hero/` — foto da seção inicial
   - `src/assets/client/professional/` — fotos da(s) profissional(is)
   - `src/assets/client/facade/` — foto da fachada
   - `src/assets/client/space/` — foto do espaço (seção Sobre)
   - `src/assets/client/services/` — uma foto por serviço
   - `src/assets/client/gallery/` — recepção, sala, equipamentos, ambiente, profissional
   - `src/assets/client/testimonials/` — fotos de clientes que autorizaram depoimento
2. No topo de `src/data/siteContent.ts`, importe o arquivo:
   ```ts
   import fotoLeticia from '../assets/client/professional/leticia.jpg'
   ```
3. Use a variável importada no campo correspondente (ex: `photo: fotoLeticia`).

Enquanto um campo de imagem não tiver valor, a página mostra um espaço reservado discreto e legível ("Foto oficial será adicionada", "Imagem do serviço será adicionada" etc.) — o layout não quebra quando a foto real entrar.

## Preços e valores

Cada serviço em `services` tem um campo `price?: number` opcional (em reais, ex: `150` para R$150,00) e `durationMinutes?: number`. Eles aparecem sempre — se não estiverem preenchidos, o site mostra "Valor sob consulta" / "Duração a confirmar" automaticamente. O mesmo vale para `packages`/`promotions` (`regularPrice`, `promoPrice`).

## Mensagens automáticas do WhatsApp

Ficam centralizadas em `src/utils/whatsapp.ts` (mensagem geral, de agendamento, por serviço, por pacote, por promoção) e `src/utils/maps.ts` (links de rota/Waze). Não precisa mexer nesses arquivos a não ser que queiram mudar o texto padrão das mensagens ou o formato dos links.

## Botão "Como chegar"

O modal usa `location.address`, `location.latitude` e `location.longitude` (já preenchidos com as coordenadas oficiais). As opções "Ver fachada" e "Conhecer o espaço" levam até a seção de galeria (`#espaco`).

## Trocar o domínio

Quando a cliente tiver o domínio oficial:
1. Aponte o DNS do domínio para a Hostinger.
2. Peça para ajustar o `FTP_SERVER_DIR` nos GitHub Secrets para a nova pasta.
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
