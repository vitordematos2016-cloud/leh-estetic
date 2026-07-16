import type { SiteContent } from '../types/content'

const ADDRESS = 'Rua José Sampaio, nº 28, Sala 101 - 1º Andar, Guaraniaçu'

/**
 * Single source of truth for the official Leh Estetic landing page.
 *
 * Everything here that is a real, public, confirmed fact is sourced from the
 * @leh_estetic Instagram profile (checked 2026-07-16) or was given directly
 * by the client/user in chat (WhatsApp number). Nothing is invented — fields
 * the client hasn't sent yet are simply left out (`undefined`) and the
 * relevant `settings.show*` flag is `false` so the section stays hidden
 * instead of showing empty/fake content. See PENDENCIAS_CLIENTE.md for the
 * full list of what's still needed, and GUIA_ATUALIZACAO_CLIENTE.md for
 * where to edit each field once the client sends real content.
 */
export const siteContent: SiteContent = {
  company: {
    name: 'Leh Estetic',
    slogan: 'Especialista em Rejuvenescimento facial',
    description:
      'Especialista em Rejuvenescimento facial! Focada em Estética Regenerativa. + de 1000 clientes atendidas.',
    // officialDomain: pendente — cliente ainda vai adquirir domínio próprio
  },

  contact: {
    whatsappNumber: '5545998188396',
    address: ADDRESS,
    // phone, email: pendentes
  },

  location: {
    address: ADDRESS,
    // latitude, longitude: pendentes — NÃO inventar. Preencher com as
    // coordenadas reais da fachada assim que a cliente confirmar (ver
    // GUIA_ATUALIZACAO_CLIENTE.md). Enquanto forem `null`, as opções de
    // Street View e Waze do modal "Como chegar" ficam ocultas.
    latitude: null,
    longitude: null,
    // googleMapsPlaceUrl: pendente — link específico do Google Maps (Place),
    // opcional; a rota já funciona a partir do endereço mesmo sem ele.
    googleMapsPlaceUrl: '',
    streetView: {
      // enabled só deve virar `true` depois que latitude/longitude/heading
      // reais da fachada forem confirmados.
      enabled: false,
      heading: 0,
      pitch: 0,
      fov: 80,
    },
  },

  professionals: [
    {
      id: 'leticia-balbinott',
      name: 'Leticia Balbinott',
      role: 'Esteticista',
      specialties: ['Rejuvenescimento facial', 'Estética regenerativa'],
      bio: 'Esteticista em Guaraniaçu, com atuação voltada ao rejuvenescimento facial e à estética regenerativa. Cada atendimento parte de uma avaliação individual.',
      // photo: pendente — foto profissional em alta resolução
    },
  ],

  about: {
    // history, mission, purpose: pendentes — aguardando texto da cliente
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
    // spaceImage: pendente
  },

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
      featured: true,
      // durationMinutes, price: pendentes — settings.showPrices/showProcedureDuration ficam false até confirmação
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
      featured: true,
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
      sourceNote: 'Serviço identificado pelo destaque "Dermaplaning" do perfil público.',
    },
  ],

  packages: [],
  promotions: [],
  testimonials: [],

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

  paymentMethods: [],
  businessHours: [],
  gallery: [],

  socialLinks: {
    instagramUrl: 'https://www.instagram.com/leh_estetic',
    // facebookUrl, tiktokUrl: pendentes
  },

  settings: {
    showPrices: false,
    showProcedureDuration: false,
    showPromotions: false,
    showPackages: false,
    showTestimonials: false,
    showStatistics: true,
    showTeam: true,
    showBeforeAndAfter: false,
    showFAQ: true,
    showMap: false,
    showOnlineBooking: false,
    showGallery: false,
  },

  booking: {
    mode: 'whatsapp',
    whatsappNumber: '5545998188396',
    defaultMessage: 'Olá! Gostaria de agendar uma avaliação pelo site da Leh Estetic.',
    // externalUrl: pendente — cliente pode informar link de agenda online, se usar
  },
}
