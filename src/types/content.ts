/**
 * Central type definitions for the official Leh Estetic landing page.
 *
 * Philosophy: every section stays visible and fully built at all times.
 * A field left `undefined`/empty means the client hasn't provided that info
 * yet — the component must render a clearly-labeled provisional placeholder
 * ("Foto oficial será adicionada", "Valor sob consulta", etc.), never hide
 * the section or leave a blank gap. See PENDENCIAS_CLIENTE.md for the full
 * list of what's still needed, and GUIA_ATUALIZACAO_CLIENTE.md for where to
 * edit each field once the client sends real content.
 */

export interface CompanyInfo {
  name: string
  officialDomain?: string
}

export interface HeroContent {
  title: string
  subtitle?: string
  description?: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  image?: string
}

export interface ContactInfo {
  whatsappNumber?: string
  phone?: string
  email?: string
  address?: string
}

export interface LocationInfo {
  address: string
  latitude: number | null
  longitude: number | null
  googleMapsPlaceUrl: string
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
  education?: string
  experience?: string
  bio?: string
  photo?: string
  instagramUrl?: string
}

export interface Differential {
  title: string
  description: string
}

export interface AboutInfo {
  history?: string
  mission?: string
  purpose?: string
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
  indication?: string
  careInstructions?: string
  notes?: string
  durationMinutes?: number
  price?: number
  image?: string
  sourceNote: string
}

export interface PackageItem {
  id: string
  name: string
  description: string
  includedServiceIds: string[]
  regularPrice?: number
  promoPrice?: number
  condition?: string
  validUntil?: string
  image?: string
  provisional?: boolean
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating?: number
  source?: string
  photo?: string
  provisional?: boolean
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

export type GalleryCategory = 'fachada' | 'recepcao' | 'sala-atendimento' | 'equipamentos' | 'ambiente' | 'profissional'

export interface GalleryImage {
  id: string
  category: GalleryCategory
  label: string
  image?: string
  alt: string
}

export type BookingMode = 'whatsapp' | 'external' | 'both'

export interface BookingPolicy {
  label: string
  value: string
}

export interface BookingConfig {
  mode: BookingMode
  externalUrl?: string
  whatsappNumber?: string
  defaultMessage: string
  policies: BookingPolicy[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterContent {
  quickLinks: FooterLink[]
  credit: string
  provisionalNotice: string
}

export interface SiteContent {
  company: CompanyInfo
  hero: HeroContent
  contact: ContactInfo
  location: LocationInfo
  professionals: ProfessionalProfile[]
  about: AboutInfo
  differentials: Differential[]
  services: ServiceItem[]
  featuredServices: string[]
  packages: PackageItem[]
  promotions: PackageItem[]
  testimonials: Testimonial[]
  statistics: StatisticItem[]
  faq: FaqItem[]
  paymentMethods: PaymentMethod[]
  businessHours: BusinessHour[]
  gallery: GalleryImage[]
  socialLinks: SocialLinks
  booking: BookingConfig
  footer: FooterContent
}
