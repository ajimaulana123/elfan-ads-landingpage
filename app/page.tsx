import { HeroSection } from '@/components/sections/hero-section'
import { ProgramSection } from '@/components/sections/program-section'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { RegistrationForm } from '@/components/sections/registration-form'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <ProgramSection />
      <WhyChooseUs />
      <TestimonialSection />
      <RegistrationForm />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
