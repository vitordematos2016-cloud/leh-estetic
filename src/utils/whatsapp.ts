import { siteContent } from '../data/siteContent'

const COMPANY_NAME = siteContent.company.name

/** Strips formatting and ensures the Brazil country code (55) prefix. */
export function sanitizeWhatsAppNumber(rawNumber: string): string {
  const digits = rawNumber.replace(/\D/g, '')
  if (digits.startsWith('55')) return digits
  return `55${digits}`
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const number = sanitizeWhatsAppNumber(phoneNumber)
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function generalMessage(): string {
  return `Olá! Encontrei o site da ${COMPANY_NAME} e gostaria de mais informações.`
}

export function bookingMessage(): string {
  return `Olá! Gostaria de agendar uma avaliação pelo site da ${COMPANY_NAME}.`
}

export function serviceMessage(serviceName: string): string {
  return `Olá! Conheci o serviço ${serviceName} pelo site da ${COMPANY_NAME} e gostaria de verificar informações e horários disponíveis.`
}

export function packageMessage(packageName: string): string {
  return `Olá! Tenho interesse no pacote "${packageName}" divulgado no site da ${COMPANY_NAME}. Pode me passar mais detalhes?`
}

export function promotionMessage(promotionName: string): string {
  return `Olá! Vi a promoção "${promotionName}" no site da ${COMPANY_NAME} e gostaria de aproveitar. Ainda está disponível?`
}

export function faqMessage(): string {
  return `Olá! Tenho uma dúvida sobre os atendimentos da ${COMPANY_NAME}.`
}
