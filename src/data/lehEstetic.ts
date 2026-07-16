import type {
  ProfessionalInfo,
  Treatment,
  Differential,
  EducationalTopic,
  ContactInfo,
  MissingImageSlot,
} from '../types'

/**
 * Todo o conteúdo deste arquivo foi extraído do perfil público do Instagram
 * @leh_estetic em 16/07/2026. Nenhum valor, endereço completo, formação,
 * tempo de experiência ou depoimento foi inventado — onde a informação não
 * estava disponível publicamente, foi usada uma chamada neutra.
 */

export const professional: ProfessionalInfo = {
  name: 'Leticia Balbinott',
  role: 'Esteticista',
  city: 'Guaraniaçu',
  bio: 'Especialista em Rejuvenescimento facial! Focada em Estética Regenerativa.',
  specialties: ['Rejuvenescimento facial', 'Estética regenerativa'],
  clientsServed: '+ de 1000 clientes atendidas',
  instagramHandle: '@leh_estetic',
  instagramUrl: 'https://www.instagram.com/leh_estetic',
}

export const treatments: Treatment[] = [
  {
    id: 'limpeza-ghk-cu',
    name: 'Limpeza de Pele com GHK-Cu',
    subtitle: 'Regeneração celular com peptídeo de cobre',
    category: 'Rejuvenescimento facial',
    description:
      'Limpeza de pele associada ao GHK-Cu, um peptídeo que atua na comunicação celular e estimula processos naturais de regeneração da pele, indo além da limpeza superficial.',
    benefits: [
      'Estímulo de colágeno e elastina',
      'Ação antioxidante',
      'Redução da inflamação',
      'Recuperação e renovação da pele',
    ],
    technology: 'GHK-Cu (peptídeo regenerativo)',
    sourceNote: 'Descrição baseada em publicação pública da profissional sobre o procedimento.',
    hasImage: false,
  },
  {
    id: 'peeling',
    name: 'Peeling',
    subtitle: 'Renovação e luminosidade da pele',
    category: 'Cuidados faciais',
    description:
      'Procedimento de peeling divulgado publicamente pela profissional, associado a resultados de pele com aspecto renovado.',
    benefits: ['Pele com aspecto mais iluminado (resultado divulgado pela profissional)'],
    sourceNote: 'Baseado no destaque "Herbal Peel" e em publicações sobre resultados de peeling.',
    hasImage: false,
  },
  {
    id: 'depilacao-laser',
    name: 'Depilação a Laser',
    subtitle: 'Avaliação individual, caso a caso',
    category: 'Depilação a laser',
    description:
      'Depilação a laser com avaliação individualizada — a profissional destaca publicamente que cada caso é tratado de forma personalizada para buscar os melhores resultados.',
    benefits: ['Avaliação individualizada por caso'],
    technology: 'Laser',
    sourceNote: 'Baseado em publicações e no destaque "Dep. Laser H" do perfil.',
    hasImage: false,
  },
  {
    id: 'jato-de-plasma',
    name: 'Jato de Plasma',
    subtitle: 'Tecnologia estética facial',
    category: 'Tecnologias estéticas',
    description:
      'Procedimento divulgado publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso.',
    benefits: [],
    sourceNote: 'Serviço identificado pelo destaque "Jato de plasma" do perfil público.',
    hasImage: false,
  },
  {
    id: 'remocao-tatuagem',
    name: 'Remoção de Tatuagem',
    subtitle: 'Consulte disponibilidade',
    category: 'Tecnologias estéticas',
    description:
      'Procedimento divulgado publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso.',
    benefits: [],
    sourceNote: 'Serviço identificado pelo destaque "Rem. Tatuagem" do perfil público.',
    hasImage: false,
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    subtitle: 'Cuidado facial',
    category: 'Cuidados faciais',
    description:
      'Procedimento divulgado publicamente pela profissional. Consulte disponibilidade e indicação para o seu caso.',
    benefits: [],
    sourceNote: 'Serviço identificado pelo destaque "Dermaplaning" do perfil público.',
    hasImage: false,
  },
]

export const differentials: Differential[] = [
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
]

export const educationalTopics: EducationalTopic[] = [
  {
    title: 'Regeneração da pele com peptídeos',
    summary:
      'Como ativos como o GHK-Cu podem apoiar a comunicação celular e os processos naturais de regeneração da pele.',
  },
  {
    title: 'Depilação a laser individualizada',
    summary:
      'Por que a depilação a laser não deve ser tratada de forma padronizada, e sim avaliada caso a caso.',
  },
  {
    title: 'Cuidados após o peeling',
    summary: 'O que esperar da pele nos dias seguintes a um procedimento de peeling.',
  },
  {
    title: 'Tecnologias e ativos em constante evolução',
    summary:
      'A importância de acompanhar novas tecnologias e ativos estéticos para oferecer tratamentos atualizados.',
  },
]

export const contact: ContactInfo = {
  instagramHandle: '@leh_estetic',
  instagramUrl: 'https://www.instagram.com/leh_estetic',
  city: 'Guaraniaçu',
  address: 'Rua José Sampaio, nº 28, Sala 101 - 1º Andar',
  whatsappNumber: '5545998188396',
  whatsappDisplay: '(45) 99818-8396',
  whatsappConfirmed: true,
}

export const missingImageSlots: MissingImageSlot[] = [
  { section: 'Cabeçalho / Hero', description: 'Logotipo (se houver) e foto profissional em alta resolução' },
  { section: 'Apresentação principal (Hero)', description: 'Foto profissional de boa qualidade, com proporção adequada' },
  { section: 'Sobre a profissional', description: 'Foto da profissional (consultório ou retrato)' },
  {
    section: 'Tratamentos',
    description:
      'Uma imagem para cada tratamento: Limpeza com GHK-Cu, Peeling, Depilação a Laser, Jato de Plasma, Remoção de Tatuagem, Dermaplaning',
  },
  {
    section: 'Resultados',
    description:
      'Seção não incluída na demonstração: não há imagens públicas de antes/depois que possam ser vinculadas com segurança a um tratamento específico',
  },
]
