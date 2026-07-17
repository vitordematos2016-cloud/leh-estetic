import type { SiteContent } from '../types/content'

const ADDRESS = 'Rua José Sampaio, nº 28, Sala 101 - 1º Andar, Guaraniaçu'
const WHATSAPP_NUMBER = '5545998188396'

/**
 * Single source of truth for the official Leh Estetic landing page.
 *
 * Every section of the site stays visible at all times — nothing is hidden
 * behind a "demo vs production" switch. Fields sourced from the public
 * @leh_estetic Instagram profile (checked 2026-07-16) or given directly by
 * the client/user in chat (WhatsApp number, coordinates) are real. Every
 * other field is intentionally filled with a clearly-worded provisional
 * placeholder — never a fabricated fact — so the full layout is visible and
 * ready; swap the placeholder text/values here once the client confirms
 * them. See PENDENCIAS_CLIENTE.md for the full checklist and
 * GUIA_ATUALIZACAO_CLIENTE.md for where to edit each field.
 */
export const siteContent: SiteContent = {
  company: {
    name: 'Leh Estetic',
    // officialDomain: pendente — cliente ainda vai adquirir domínio próprio
  },

  hero: {
    title: 'Leh Estetic',
    subtitle: 'Especialista em Rejuvenescimento facial',
    description:
      'Especialista em Rejuvenescimento facial! Focada em Estética Regenerativa. + de 1000 clientes atendidas.',
    primaryCtaLabel: 'Conhecer serviços',
    secondaryCtaLabel: 'Agendar atendimento',
    // image: pendente — foto oficial em alta resolução
  },

  contact: {
    whatsappNumber: WHATSAPP_NUMBER,
    address: ADDRESS,
    // phone, email: pendentes
  },

  location: {
    address: ADDRESS,
    // Coordenadas oficiais confirmadas pela cliente.
    latitude: -25.09952986593139,
    longitude: -52.870404056863315,
    // googleMapsPlaceUrl: pendente — link específico do Google Maps (Place),
    // opcional; a rota já funciona a partir das coordenadas mesmo sem ele.
    googleMapsPlaceUrl: '',
  },

  professionals: [
    {
      id: 'leticia-balbinott',
      name: 'Leticia Balbinott',
      role: 'Esteticista',
      specialties: ['Rejuvenescimento facial', 'Estética regenerativa'],
      education: 'Formação a confirmar com a profissional.',
      experience: 'Tempo de experiência a confirmar com a profissional.',
      bio: 'Esteticista em Guaraniaçu, com atuação voltada ao rejuvenescimento facial e à estética regenerativa. Cada atendimento parte de uma avaliação individual.',
      // photo: pendente — foto profissional em alta resolução
      instagramUrl: 'https://www.instagram.com/leh_estetic',
    },
  ],

  about: {
    history: 'A história da Leh Estetic será compartilhada em breve, com o conteúdo enviado pela profissional.',
    mission: 'Missão a confirmar com a profissional.',
    purpose: 'Propósito a confirmar com a profissional.',
    // spaceImage: pendente
  },

  differentials: [
    {
      title: '+ de 1000 clientes atendidas',
      description: 'Número divulgado publicamente pela profissional em sua biografia do Instagram.',
    },
    {
      title: 'Foco em estética regenerativa',
      description:
        'Atuação voltada a processos de regeneração da pele, e não apenas a procedimentos estéticos superficiais.',
    },
    {
      title: 'Avaliação individual por caso',
      description:
        'A profissional reforça publicamente que cada tratamento deve considerar as particularidades de cada pessoa.',
    },
    {
      title: 'Atualização constante em tecnologias e ativos',
      description:
        'Participação divulgada publicamente em imersões sobre novas tecnologias e ativos estéticos.',
    },
  ],

  services: [
    {
      id: 'limpeza-ghk-cu',
      category: 'Rejuvenescimento facial',
      name: 'Limpeza de Pele com GHK-Cu',
      subtitle: 'Regeneração celular com peptídeo de cobre',
      description:
        'Limpeza de pele associada ao GHK-Cu, um peptídeo que atua na comunicação celular e estimula processos naturais de regeneração da pele, indo além da limpeza superficial.',
      benefits: [
        'Estímulo de colágeno e elastina',
        'Ação antioxidante',
        'Redução da inflamação',
        'Recuperação e renovação da pele',
      ],
      technology: 'GHK-Cu (peptídeo regenerativo)',
      indication: 'Indicação a confirmar com a profissional.',
      careInstructions: 'Cuidados pós-procedimento a confirmar com a profissional.',
      notes: 'Nenhuma observação adicional no momento.',
      sourceNote: 'Descrição baseada em publicação pública da profissional sobre o procedimento.',
    },
    {
      id: 'peeling',
      category: 'Cuidados faciais',
      name: 'Peeling',
      subtitle: 'Renovação e luminosidade da pele',
      description:
        'Procedimento de peeling divulgado publicamente pela profissional, associado a resultados de pele com aspecto renovado.',
      benefits: ['Pele com aspecto mais iluminado (resultado divulgado pela profissional)'],
      indication: 'Indicação a confirmar com a profissional.',
      careInstructions: 'Cuidados pós-procedimento a confirmar com a profissional.',
      notes: 'Nenhuma observação adicional no momento.',
      sourceNote: 'Baseado no destaque "Herbal Peel" e em publicações sobre resultados de peeling.',
    },
    {
      id: 'depilacao-laser',
      category: 'Depilação a laser',
      name: 'Depilação a Laser',
      subtitle: 'Avaliação individual, caso a caso',
      description:
        'Depilação a laser com avaliação individualizada — a profissional destaca publicamente que cada caso é tratado de forma personalizada para buscar os melhores resultados.',
      benefits: ['Avaliação individualizada por caso'],
      technology: 'Laser',
      indication: 'Indicação a confirmar com a profissional.',
      careInstructions: 'Cuidados pós-procedimento a confirmar com a profissional.',
      notes: 'Nenhuma observação adicional no momento.',
      sourceNote: 'Baseado em publicações e no destaque "Dep. Laser H" do perfil.',
    },
    {
      id: 'jato-de-plasma',
      category: 'Tecnologias estéticas',
      name: 'Jato de Plasma',
      subtitle: 'Tecnologia estética facial',
      description:
        'Procedimento divulgado publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso.',
      benefits: [],
      indication: 'Indicação a confirmar com a profissional.',
      careInstructions: 'Cuidados pós-procedimento a confirmar com a profissional.',
      notes: 'Nenhuma observação adicional no momento.',
      sourceNote: 'Serviço identificado pelo destaque "Jato de plasma" do perfil público.',
    },
    {
      id: 'remocao-tatuagem',
      category: 'Tecnologias estéticas',
      name: 'Remoção de Tatuagem',
      subtitle: 'Consulte disponibilidade',
      description:
        'Procedimento divulgado publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso.',
      benefits: [],
      indication: 'Indicação a confirmar com a profissional.',
      careInstructions: 'Cuidados pós-procedimento a confirmar com a profissional.',
      notes: 'Nenhuma observação adicional no momento.',
      sourceNote: 'Serviço identificado pelo destaque "Rem. Tatuagem" do perfil público.',
    },
    {
      id: 'dermaplaning',
      category: 'Cuidados faciais',
      name: 'Dermaplaning',
      subtitle: 'Cuidado facial',
      description:
        'Procedimento divulgado publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso.',
      benefits: [],
      indication: 'Indicação a confirmar com a profissional.',
      careInstructions: 'Cuidados pós-procedimento a confirmar com a profissional.',
      notes: 'Nenhuma observação adicional no momento.',
      sourceNote: 'Serviço identificado pelo destaque "Dermaplaning" do perfil público.',
    },
  ],

  featuredServices: ['limpeza-ghk-cu', 'depilacao-laser'],

  packages: [
    {
      id: 'pacote-exemplo-1',
      name: 'Pacote exemplo — em definição',
      description:
        'Este card demonstra como um pacote de serviços vai aparecer no site. Conteúdo a confirmar com a profissional.',
      includedServiceIds: ['limpeza-ghk-cu', 'peeling'],
      condition: 'Condições a confirmar.',
      provisional: true,
    },
  ],

  promotions: [
    {
      id: 'promocao-exemplo-1',
      name: 'Promoção exemplo — em definição',
      description:
        'Este card demonstra como uma promoção vai aparecer no site. Nenhuma promoção real está ativa no momento.',
      includedServiceIds: ['depilacao-laser'],
      condition: 'Condições a confirmar.',
      provisional: true,
    },
  ],

  testimonials: [
    {
      id: 'depoimento-1',
      name: 'Cliente Leh Estetic',
      text: 'Depoimento aguardando autorização e confirmação.',
      provisional: true,
    },
    {
      id: 'depoimento-2',
      name: 'Cliente Leh Estetic',
      text: 'Depoimento aguardando autorização e confirmação.',
      provisional: true,
    },
    {
      id: 'depoimento-3',
      name: 'Cliente Leh Estetic',
      text: 'Depoimento aguardando autorização e confirmação.',
      provisional: true,
    },
  ],

  statistics: [{ label: 'Clientes atendidas', value: '+1000' }],

  faq: [
    {
      question: 'Preciso passar por uma avaliação antes do procedimento?',
      answer: 'Sim, todo tratamento é indicado somente após uma avaliação individual.',
    },
    {
      question: 'Como faço para agendar um horário?',
      answer: 'Envie uma mensagem pelo WhatsApp informando o tratamento de interesse e verifique a disponibilidade.',
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Consulte as formas de pagamento disponíveis diretamente pelo WhatsApp.',
    },
  ],

  paymentMethods: ['pix', 'dinheiro', 'debito', 'credito', 'parcelamento'],

  businessHours: [
    { day: 'Segunda a sexta', hours: 'Horário a confirmar' },
    { day: 'Sábado', hours: 'Horário a confirmar' },
    { day: 'Domingo', hours: 'Horário a confirmar' },
    { day: 'Feriados', hours: 'Consulte disponibilidade' },
    { day: 'Atendimento com hora marcada', hours: 'Informação a confirmar' },
  ],

  gallery: [
    { id: 'fachada', category: 'fachada', label: 'Fachada', alt: 'Fachada da Leh Estetic' },
    { id: 'recepcao', category: 'recepcao', label: 'Recepção', alt: 'Recepção da Leh Estetic' },
    { id: 'sala-atendimento', category: 'sala-atendimento', label: 'Sala de atendimento', alt: 'Sala de atendimento da Leh Estetic' },
    { id: 'equipamentos', category: 'equipamentos', label: 'Equipamentos', alt: 'Equipamentos utilizados na Leh Estetic' },
    { id: 'ambiente', category: 'ambiente', label: 'Ambiente', alt: 'Ambiente da Leh Estetic' },
    { id: 'profissional', category: 'profissional', label: 'Profissional', alt: 'Leticia Balbinott, esteticista' },
  ],

  socialLinks: {
    instagramUrl: 'https://www.instagram.com/leh_estetic',
    // facebookUrl, tiktokUrl: pendentes
  },

  booking: {
    mode: 'whatsapp',
    whatsappNumber: WHATSAPP_NUMBER,
    defaultMessage: 'Olá! Gostaria de agendar uma avaliação pelo site da Leh Estetic.',
    policies: [
      { label: 'Sinal para agendamento', value: 'Em atualização com a profissional.' },
      { label: 'Cancelamento', value: 'Em atualização com a profissional.' },
      { label: 'Atraso', value: 'Em atualização com a profissional.' },
      { label: 'Reagendamento', value: 'Em atualização com a profissional.' },
    ],
    // externalUrl: pendente — cliente pode informar link de agenda online, se usar
  },

  footer: {
    quickLinks: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Contato', href: '#contato' },
    ],
    credit: 'Desenvolvido por Matos Soluções',
    provisionalNotice: 'Conteúdo em fase de confirmação com a profissional.',
  },
}
