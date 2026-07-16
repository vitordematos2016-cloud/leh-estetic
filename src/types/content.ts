/**
 * Central type definitions for the official Leh Estetic landing page.
 * A field left `undefined` means the client hasn't provided that info yet —
 * see PENDENCIAS_CLIENTE.md. Components must degrade gracefully (hide the
 * element, or show a neutral "consulte pelo WhatsApp" fallback) rather than
 * render an empty/placeholder-looking string to visitors.
 */

export interface CompanyInfo {
  name: string
  slogan?: string
  description?: string
  officialDomain?: string
  heroImage?: string
}

export interface ContactInfo {
  whatsappNumber?: string
  phone?: string
  email?: string
  address?: string
  googleMapsUrl?: string
}

export interface SocialLinks {
  instagramUrl?: string
  facebookUrl?: string
  tiktokUrl?: string
}

export interface ProfessionalProfile {
  id: string
  name: string
  role: string
  specialties?: string[]
  bio?: string
  photo?: string
}

export interface Differential {
  title: string
  description: string
}

export interface AboutInfo {
  history?: string
  mission?: string
  purpose?: string
  differentials: Differential[]
  spaceImage?: string
}

export type ServiceCategory =
  | 'Rejuvenescimento facial'
  | 'Cuidados faciais'
  | 'Depilação a laser'
  | 'Tecnologias estéticas'

export interface ServiceItem {
  id: string
  category: ServiceCategory
  name: string
  subtitle?: string
  description: string
  benefits: string[]
  technology?: string
  durationMinutes?: number
  price?: number
  image?: string
  featured?: boolean
  sourceNote: string
}

export interface PackageItem {
  id: string
  name: string
  description: string
  includedServiceIds: string[]
  regularPrice?: number
  promoPrice?: number
  validUntil?: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating?: number
  source?: string
  photo?: string
}

export interface StatisticItem {
  label: string
  value: string
}

export interface FaqItem {
  question: string
  answer: string
}

export type PaymentMethod = 'pix' | 'dinheiro' | 'debito' | 'credito' | 'parcelamento'

export interface BusinessHour {
  day: string
  hours: string
}

export interface GalleryImage {
  id: string
  category: 'espaco' | 'equipamentos' | 'procedimentos' | 'produtos' | 'equipe' | 'resultados'
  image?: string
  alt: string
}

export type BookingMode = 'whatsapp' | 'external' | 'both'

export interface BookingConfig {
  mode: BookingMode
  externalUrl?: string
  whatsappNumber?: string
  defaultMessage: string
}

export interface SiteSettings {
  showPrices: boolean
  showProcedureDuration: boolean
  showPromotions: boolean
  showPackages: boolean
  showTestimonials: boolean
  showStatistics: boolean
  showTeam: boolean
  showBeforeAndAfter: boolean
  showFAQ: boolean
  showMap: boolean
  showOnlineBooking: boolean
  showGallery: boolean
}

export interface SiteContent {
  company: CompanyInfo
  contact: ContactInfo
  professionals: ProfessionalProfile[]
  about: AboutInfo
  services: ServiceItem[]
  packages: PackageItem[]
  promotions: PackageItem[]
  testimonials: Testimonial[]
  statistics: StatisticItem[]
  faq: FaqItem[]
  paymentMethods: PaymentMethod[]
  businessHours: BusinessHour[]
  gallery: GalleryImage[]
  socialLinks: SocialLinks
  settings: SiteSettings
  booking: BookingConfig
}
