'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    program: 'Teknik Informatika',
    year: '2023',
    image: '👨‍💻',
    rating: 5,
    text: 'Kampus ini benar-benar mengubah hidupku! Dari yang tidak tahu coding sama sekali, sekarang aku sudah bekerja di perusahaan startup ternama dengan gaji yang memuaskan.',
    achievement: 'Software Engineer di Gojek'
  },
  {
    name: 'Siti Nurhaliza',
    program: 'Manajemen Bisnis',
    year: '2022',
    image: '👩‍💼',
    rating: 5,
    text: 'Beasiswa 100% yang aku dapatkan sangat membantu. Dosennya profesional dan selalu support mahasiswa untuk berkembang. Sekarang aku punya bisnis sendiri!',
    achievement: 'Founder Startup Fashion'
  },
  {
    name: 'Ahmad Rizki',
    program: 'Teknik Sipil',
    year: '2023',
    image: '👷‍♂️',
    rating: 5,
    text: 'Fasilitas lab yang lengkap dan praktikum langsung di proyek nyata membuat aku siap kerja. Belum lulus sudah dapat job offer dari kontraktor besar.',
    achievement: 'Project Engineer di Waskita'
  },
  {
    name: 'Dewi Lestari',
    program: 'Desain Komunikasi Visual',
    year: '2024',
    image: '🎨',
    rating: 5,
    text: 'Kampus yang sangat mendukung kreativitas! Portfolio yang aku buat selama kuliah langsung dilirik agency internasional. Terima kasih untuk semua mentornya!',
    achievement: 'Creative Designer di Ogilvy'
  }
]

export function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Testimoni Alumni
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Kisah Sukses
            <span className="block text-blue-600">Alumni Kami</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ribuan alumni telah meraih kesuksesan di berbagai bidang karir
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:border-blue-500 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote className="w-16 h-16" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Achievement Badge */}
                <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
                  ✓ {testimonial.achievement}
                </Badge>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.program}</div>
                    <div className="text-xs text-gray-500">Lulusan {testimonial.year}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Dipercaya oleh perusahaan terkemuka:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">GOJEK</div>
            <div className="text-2xl font-bold text-gray-400">TOKOPEDIA</div>
            <div className="text-2xl font-bold text-gray-400">BANK BCA</div>
            <div className="text-2xl font-bold text-gray-400">TELKOM</div>
            <div className="text-2xl font-bold text-gray-400">PERTAMINA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
