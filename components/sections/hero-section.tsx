'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, GraduationCap, Award, Users } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50" />
      
      <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 inline-block">
              🎓 PENERIMAAN MAHASANTRI BARU (PMB) TA. 2025-2025
            </Badge>
            
            <div className="text-base mt-4 md:text-lg lg:text-xl text-yellow-300 font-semibold">
              Mulai 1 Februari - 30 Juni 2025
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-poppins">
              Mau jadi
              <span className="block text-yellow-400">KONTEN KREATOR</span>
              <span className="block text-yellow-400">BROADCASTING</span>
              <span className="block mt-2">yang handal, Jadi</span>
              <span className="block text-yellow-400">PROGRAMMER & AI</span>
              <span className="block text-yellow-400">ASSISTED,</span>
              <span className="block mt-2">Jadi DIGITAL</span>
              <span className="block text-yellow-400">MARKETER</span>
              <span className="block">profesional?</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Bisa chuan ratusan hingga jutaan rupiah..
              <span className="block mt-2 font-semibold text-yellow-300">Wujudkan Bersama ELFAN AI ACADEMY</span>
              <span className="block mt-1">akan membimbing kamu sampai bisa dan mahir IT dan langsung dapat kerja.</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 py-4 md:py-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">1 Tahun</div>
                <div className="text-xs md:text-sm text-blue-200">Durasi Belajar</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">70%</div>
                <div className="text-xs md:text-sm text-blue-200">Praktik</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">30%</div>
                <div className="text-xs md:text-sm text-blue-200">Teori</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-yellow-400 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 backdrop-blur-sm w-full sm:w-auto"
              >
                Info Beasiswa
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2 md:gap-4 items-center pt-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs md:text-sm">
                ✓ Sertifikat BSNP & APMI
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs md:text-sm">
                ✓ Garansi Kompetensi
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs md:text-sm">
                ✓ Berasrama AC & CCTV
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs md:text-sm">
                ✓ Kampus Adab & AI
              </Badge>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <Image 
                src="/hero-image.jpg" 
                alt="Kampus Modern dengan Fasilitas Lengkap"
                width={600}
                height={400}
                priority
                quality={85}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 -right-8 bg-white text-blue-900 rounded-xl p-4 shadow-xl animate-bounce">
                <div className="text-sm font-semibold">Pendaftaran Online</div>
                <div className="text-2xl font-bold">24/7</div>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-yellow-400 text-blue-900 rounded-xl p-5 shadow-xl animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="text-sm font-semibold mb-1">Beasiswa</div>
                <div className="text-3xl font-bold">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
