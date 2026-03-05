import { HeroSection } from '@/components/sections/hero-section'
import { ProgramSection } from '@/components/sections/program-section-new'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { LecturerSection } from '@/components/sections/lecturer-section'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { RegistrationForm } from '@/components/sections/registration-form'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      {/* SEO-optimized semantic HTML */}
      <h1 className="sr-only">
        PENERIMAAN MAHASANTRI BARU (PMB) TA. 2025-2025 - Kuliah IT, Programming, AI, Content Creator & Digital Marketing Terbaik di Indonesia | ELFAN AI ACADEMY | Kampus Adab & AI | Beasiswa | Sertifikat BSNP & APMI
      </h1>
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <HeroSection />
        <WhyChooseUs />
        <ProgramSection />
        <LecturerSection />
        <TestimonialSection />
        <RegistrationForm />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
