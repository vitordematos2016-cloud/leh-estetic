export interface ProfessionalInfo {
  name: string
  role: string
  city: string
  bio: string
  specialties: string[]
  clientsServed: string
  instagramHandle: string
  instagramUrl: string
}

export type TreatmentCategory =
  | 'Rejuvenescimento facial'
  | 'Cuidados faciais'
  | 'Depilação a laser'
  | 'Tecnologias estéticas'

export interface Treatment {
  id: string
  name: string
  subtitle: string
  category: TreatmentCategory
  description: string
  benefits: string[]
  technology?: string
  sourceNote: string
  hasImage: boolean
}

export interface Differential {
  title: string
  description: string
}

export interface EducationalTopic {
  title: string
  summary: string
}

export interface ContactInfo {
  instagramHandle: string
  instagramUrl: string
  city: string
  address: string
  whatsappNumber: string
  whatsappDisplay: string
  whatsappConfirmed: boolean
}

export interface MissingImageSlot {
  section: string
  description: string
}

export interface Lead {
  name: string
  treatments: string[]
  period: string
  notes: string
  createdAt: string
}
