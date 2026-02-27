import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Trophy, 
  Users, 
  Building, 
  Laptop, 
  Globe, 
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

const benefits = [
  {
    icon: Trophy,
    title: 'Akreditasi Unggul',
    description: 'Program studi terakreditasi A dan B oleh BAN-PT dengan standar internasional',
    color: 'text-yellow-600 bg-yellow-50'
  },
  {
    icon: Users,
    title: 'Dosen Berkualitas',
    description: 'Pengajar profesional dengan gelar S2 & S3 dari universitas terkemuka',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    icon: Building,
    title: 'Fasilitas Modern',
    description: 'Kampus dengan laboratorium lengkap, perpustakaan digital, dan ruang kelas AC',
    color: 'text-green-600 bg-green-50'
  },
  {
    icon: Laptop,
    title: 'Pembelajaran Hybrid',
    description: 'Kombinasi kuliah tatap muka dan online untuk fleksibilitas maksimal',
    color: 'text-purple-600 bg-purple-50'
  },
  {
    icon: Globe,
    title: 'Jaringan Internasional',
    description: 'Kerjasama dengan universitas luar negeri untuk program pertukaran pelajar',
    color: 'text-red-600 bg-red-50'
  },
  {
    icon: TrendingUp,
    title: 'Karir Cemerlang',
    description: '95% alumni terserap di perusahaan nasional dan multinasional',
    color: 'text-indigo-600 bg-indigo-50'
  },
  {
    icon: Shield,
    title: 'Beasiswa Lengkap',
    description: 'Berbagai pilihan beasiswa prestasi, KIP, dan beasiswa penuh hingga 100%',
    color: 'text-orange-600 bg-orange-50'
  },
  {
    icon: Clock,
    title: 'Proses Cepat',
    description: 'Pendaftaran online 24/7 dengan proses verifikasi hanya 1x24 jam',
    color: 'text-cyan-600 bg-cyan-50'
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
            Mengapa Memilih
            <span className="block text-blue-600">Kampus Kami?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Investasi terbaik untuk masa depanmu dimulai dari pilihan yang tepat hari ini
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Mahasiswa Aktif</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Tingkat Kelulusan</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Mitra Industri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
