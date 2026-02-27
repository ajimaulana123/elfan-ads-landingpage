'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, GraduationCap, Award, Users } from 'lucide-react'

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50" />
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-sm font-semibold px-4 py-2">
              🎓 Pendaftaran Dibuka!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">
              Wujudkan Impian
              <span className="block text-yellow-400">Masa Depan Cemerlang</span>
              Bersama Kami
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Bergabunglah dengan ribuan mahasiswa sukses yang telah memulai perjalanan karir mereka. 
              Dapatkan pendidikan berkualitas dengan fasilitas modern dan dosen berpengalaman.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-200">Program Studi</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">A</div>
                <div className="text-sm text-blue-200">Akreditasi</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">10K+</div>
                <div className="text-sm text-blue-200">Alumni Sukses</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-yellow-400 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
              >
                Info Beasiswa
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                ✓ Beasiswa hingga 100%
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                ✓ Cicilan 0%
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                ✓ Gratis Biaya Pendaftaran
              </Badge>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img 
                src="/hero-image.jpg" 
                alt="Kampus Modern dengan Fasilitas Lengkap"
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
