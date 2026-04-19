import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandPillarsSection } from "@/components/brand-pillars-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MiddleCTASection } from "@/components/middle-cta-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { ClientsSection } from "@/components/clients-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      Kathiravan
      <Header />
      <HeroSection />
      <BrandPillarsSection />
      <AboutSection />
      <ServicesSection />
      <MiddleCTASection />
      <ProcessSection />
      <ClientsSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
