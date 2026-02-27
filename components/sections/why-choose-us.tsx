import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Users, 
  Building, 
  Laptop, 
  Clock, 
  TrendingUp,
  Shield,
  BookOpen
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Alumni Kompeten',
    description: 'Hasil pembinaan sangat kompeten dibidang IT, beradab tinggi dan langsung bisa kerja',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    icon: BookOpen,
    title: 'Kurikulum Adaptif',
    description: 'Menyesuaikan dengan kebutuhan industri creativ digital dan perkembangan IT',
    color: 'text-purple-600 bg-purple-50'
  },
  {
    icon: Clock,
    title: 'Durasi Belajar',
    description: 'Masa study, singkat, padat, efektif efesien hanya 1 tahun',
    color: 'text-green-600 bg-green-50'
  },
  {
    icon: TrendingUp,
    title: 'System Belajar',
    description: '70% praktik & 30% teori untuk hasil maksimal',
    color: 'text-orange-600 bg-orange-50'
  },
  {
    icon: Users,
    title: 'Tenaga Pengajar Profesional',
    description: 'Langsung belajar dari ahlinya',
    color: 'text-indigo-600 bg-indigo-50'
  },
  {
    icon: Shield,
    title: 'Garansi Kompetensi',
    description: 'Hasil didikan dijamin bisa dan terampil',
    color: 'text-red-600 bg-red-50'
  },
  {
    icon: Award,
    title: 'Sertifikat Nasional',
    description: 'BSNP & APMI (Asosiasi Profesi Multimedia Indonesia)',
    color: 'text-yellow-600 bg-yellow-50'
  },
  {
    icon: Building,
    title: 'Ruang Belajar',
    description: 'Ruang kelas yang nyaman ber-AC full CCTV',
    color: 'text-cyan-600 bg-cyan-50'
  },
  {
    icon: Building,
    title: 'Berasrama',
    description: 'Ruang asrama yang nyaman ber-AC full CCTV',
    color: 'text-pink-600 bg-pink-50'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Keunggulan Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Kenapa Harus di
            <span className="block text-blue-600">ELFAN AI ACADEMY?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Rasakan kelebihannya
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-blue-500 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-lg ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1 Tahun</div>
              <div className="text-blue-100">Durasi Belajar</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Praktik Langsung</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Garansi Kompetensi</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Akses Fasilitas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
