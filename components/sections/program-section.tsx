import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Video, Code, TrendingUp, Cpu, Megaphone, Smartphone } from 'lucide-react'

const programs = [
  {
    icon: Video,
    title: 'Content Creator & Broadcasting',
    description: 'Jadi content creator handal dan kuasai broadcasting profesional. Bisa hasilkan ratusan hingga jutaan rupiah dari konten kreatif',
    badge: 'Paling Diminati',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Programmer & AI Engineer',
    description: 'Kuasai programming dan teknologi AI terkini. Langsung bisa kerja sebagai programmer profesional dengan gaji tinggi',
    badge: 'High Demand',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Jadi digital marketer profesional yang mahir strategi marketing online dan social media untuk bisnis modern',
    badge: 'Populer',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Pelajari teknologi AI dan machine learning untuk menjadi ahli di bidang kecerdasan buatan',
    badge: 'Future Tech',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    description: 'Kelola social media profesional dan bangun brand awareness untuk bisnis dan personal branding',
    badge: 'Trending',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Buat aplikasi mobile Android dan iOS yang powerful dan user-friendly untuk berbagai kebutuhan',
    badge: 'In Demand',
    color: 'from-indigo-500 to-purple-500'
  }
]

export function ProgramSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Program Studi Unggulan
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Pilih Program
            <span className="block text-blue-600">Sesuai Minat & Bakatmu</span>
          </h2>
          <p className="text-lg text-gray-600">
            Program unggulan dengan kurikulum adaptif yang disesuaikan dengan kebutuhan industri kreatif digital dan perkembangan IT
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:border-blue-500 cursor-pointer overflow-hidden"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {program.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {program.description}
                </CardDescription>
                <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:underline cursor-pointer">
                  Pelajari Lebih Lanjut →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Mau tahu lebih detail tentang program kami?
          </p>
          <button className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Konsultasi Gratis via WhatsApp →
          </button>
        </div>
      </div>
    </section>
  )
}
