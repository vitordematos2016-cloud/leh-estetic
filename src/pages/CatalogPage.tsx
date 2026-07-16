import { SelectionProvider } from '../context/SelectionContext'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'
import { Treatments } from '../components/treatments/Treatments'
import { Differentials } from '../components/differentials/Differentials'
import { EducationalContent } from '../components/content/EducationalContent'
import { Contact } from '../components/contact/Contact'
import { SelectionWidget } from '../components/selection/SelectionWidget'
import { SelectionPanel } from '../components/selection/SelectionPanel'

export function CatalogPage() {
  return (
    <SelectionProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Differentials />
        <EducationalContent />
        <Contact />
      </main>
      <Footer />
      <SelectionWidget />
      <SelectionPanel />
    </SelectionProvider>
  )
}
