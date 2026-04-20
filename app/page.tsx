import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { OrigenSection } from '@/components/origen-section'
import { ProductosSection } from '@/components/productos-section'
import { StoriesSection } from '@/components/stories-section'
import { SostenibilidadSection } from '@/components/sostenibilidad-section'
import { FaqSection } from '@/components/faq-section'
import { ContactoSection } from '@/components/contacto-section'
import { ClubSection } from '@/components/club-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OrigenSection />
      <ProductosSection />
      <StoriesSection />
      <SostenibilidadSection />
      <FaqSection />
      <ContactoSection />
      <ClubSection />
      <Footer />
    </main>
  )
}
