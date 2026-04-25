import { Header } from "@/components/services-components/header"
import { Footer } from "@/components/services-components/footer"
import { HeroSection } from "@/components/services-components/seo/hero-section"
import { DefinitionSection } from "@/components/services-components/seo/definition-section"
import { ServicesSection } from "@/components/services-components/seo/services-section"
import { BenefitsSection } from "@/components/services-components/seo/benefits-section"
import { ProcessSection } from "@/components/services-components/seo/process-section"
import { TestimonialsSection } from "@/components/services-components/seo/testimonials-section"
import { ComparisonSection } from "@/components/services-components/seo/comparison-section"
import { CapabilitiesSection } from "@/components/services-components/seo/capabilities-section"
import { ToolsSection } from "@/components/services-components/seo/tools-section"
import { UseCasesSection } from "@/components/services-components/seo/use-cases-section"
import { IndustriesSection } from "@/components/services-components/seo/industries-section"
import { CaseStudiesSection } from "@/components/services-components/seo/case-studies-section"
import { InfographicSection } from "@/components/services-components/seo/infographic-section"
import { PricingSection } from "@/components/services-components/seo/pricing-section"
import { FAQSection } from "@/components/services-components/seo/faq-section"
import { CTASection } from "@/components/services-components/seo/cta-section"

export default function SEOServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* HOOK */}
        <HeroSection />
        
        {/* EDUCATE */}
        <DefinitionSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        
        {/* TRUST */}
        <TestimonialsSection />
        <ComparisonSection />
        <CapabilitiesSection />
        <ToolsSection />
        
        {/* PROVE */}
        <UseCasesSection />
        <IndustriesSection />
        <CaseStudiesSection />
        
        {/* CONVERT */}
        <InfographicSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
