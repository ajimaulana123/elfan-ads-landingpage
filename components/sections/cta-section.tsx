'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-8 animate-bounce">
            <Sparkles className="w-10 h-10 text-blue-900" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-poppins">
            Jangan Tunda Lagi!
            <span className="block mt-2">Masa Depan Cerah Menunggumu</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ribuan calon mahasiswa sudah mendaftar. Kuota terbatas dan beasiswa segera ditutup. 
            Daftar sekarang sebelum terlambat!
          </p>

          {/* Urgency Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-blue-100">Pendaftar Bulan Ini</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400">30 Hari</div>
              <div className="text-sm text-blue-100">Pendaftaran Ditutup</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-sm text-blue-100">Beasiswa Tersedia</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToForm}
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-yellow-400/50 transition-all"
            >
              Daftar Sekarang - GRATIS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-bold text-lg px-10 py-7 backdrop-blur-sm"
              onClick={() => window.open('https://wa.me/622184504660', '_blank')}
            >
              💬 Konsultasi Gratis
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-blue-100">✓ Tanpa Biaya Pendaftaran</span>
            <span className="text-blue-100">•</span>
            <span className="text-blue-100">✓ Proses Cepat 1x24 Jam</span>
            <span className="text-blue-100">•</span>
            <span className="text-blue-100">✓ Beasiswa Hingga 100%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
