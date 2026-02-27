'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ust. Zulkifili Muhammad Ali',
    title: "Da'i Nasional",
    image: '🕌',
    rating: 5,
    text: 'Masyaallah dan saya melihat ini menjadi salah satu di antara bab fardu kifayah bahwa umat ini harus menyediakan generasi yang tangguh dalam menguasai dunia IT ke depan kita akan menjadi penguasa dunia dan kita harus punya anak-anak yang hebat di bidang IT, di samping itu ternyata di sini juga bukan hanya semata-mata teknologi yang diajarkan tetapi juga disiapkan untuk bisa mandiri melalui entrepreneurshipnya. Masyaallah ya 1 tahun anak kita menjadi sesuatu, anak kita menjadi penggenggam masa depan dan juga penguasa teknologi, program yang sangat baik dan mulia.',
    achievement: 'Tokoh Nasional'
  },
  {
    name: 'Ibu RIANA KUSUMA SARI',
    title: 'Wali Mahasantri Asal Semarang',
    image: '👩',
    rating: 5,
    text: 'Alhamdulillahi binikmatihi tatimusholihat.... Sampai hari ini kami sangat bersyukur ananda bisa diberikan kesempatan bergabung di Elfan AI academy. Setiap hari orang tua mendapatkan update aktivitas mahasantri yg masyaa Alloh jauh dari perkiraan kami sebelumnya. Tempat belajar yg aman nyaman, dengan bimbingan dan pendampingan para asatidz melalui halaqoh, materi pembelajaran IT yang sangat disenangi oleh anak, membuat kami semakin yakin dgn kurikulum adab AI-nya. Jazaakumulloh Khoiron kepada asatidz yg telah membimbing putra kami, semoga menjadi amal jariyah dan berkah buat Elfan AI Academy.. Baarokalloh fikum',
    achievement: 'Wali Mahasantri'
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
            Apa Kata Mereka
            <span className="block text-blue-600">Tentang Elfan?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Testimoni dari tokoh nasional dan wali mahasantri
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
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-xs text-gray-500">{testimonial.achievement}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Ayo Gabung!</h3>
          <p className="text-xl mb-4">Wujudkan Generasi Peradaban</p>
          <p className="text-2xl font-bold mb-2">Pioneer IT Masa Depan</p>
          <p className="text-lg">Bersama Kampus Adab & AI</p>
          <p className="text-3xl font-bold mt-4">ELFAN AI ACADEMY</p>
        </div>
      </div>
    </section>
  )
}
