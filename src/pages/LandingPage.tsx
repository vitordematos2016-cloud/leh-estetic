import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/hero/Hero'
import { TrustIndicators } from '../components/trust/TrustIndicators'
import { About } from '../components/about/About'
import { Team } from '../components/team/Team'
import { Services } from '../components/services/Services'
import { FeaturedServices } from '../components/services/FeaturedServices'
import { Packages } from '../components/packages/Packages'
import { Gallery } from '../components/gallery/Gallery'
import { Testimonials } from '../components/testimonials/Testimonials'
import { Faq } from '../components/faq/Faq'
import { Booking } from '../components/booking/Booking'
import { Location } from '../components/location/Location'
import { PaymentMethods } from '../components/payment/PaymentMethods'
import { WhatsAppFloatingButton } from '../components/whatsapp/WhatsAppFloatingButton'

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <About />
        <Team />
        <Services />
        <FeaturedServices />
        <Packages />
        <Gallery />
        <Testimonials />
        <Faq />
        <Booking />
        <Location />
        <PaymentMethods />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}
