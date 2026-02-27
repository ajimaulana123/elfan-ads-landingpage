import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Briefcase, Code, Heart, Building2, Palette } from 'lucide-react'

const programs = [
  {
    icon: Code,
    title: 'Teknik Informatika',
    description: 'Menjadi ahli teknologi dan programmer handal dengan kurikulum berbasis industri',
    badge: 'Paling Diminati',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Briefcase,
    title: 'Manajemen Bisnis',
    description: 'Kembangkan jiwa entrepreneur dan leadership untuk menjadi pemimpin masa depan',
    badge: 'Akreditasi A',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Heart,
    title: 'Ilmu Kesehatan',
    description: 'Berkontribusi untuk kesehatan masyarakat dengan pendidikan medis terkini',
    badge: 'Beasiswa 100%',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Building2,
    title: 'Teknik Sipil',
    description: 'Bangun infrastruktur negara dengan ilmu teknik sipil yang komprehensif',
    badge: 'Terakreditasi',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Desain Komunikasi Visual',
    description: 'Wujudkan kreativitas menjadi karya seni dan desain yang bernilai tinggi',
    badge: 'Populer',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: BookOpen,
    title: 'Pendidikan',
    description: 'Menjadi pendidik profesional yang membentuk generasi masa depan bangsa',
    badge: 'Akreditasi A',
    color: 'from-indigo-500 to-blue-500'
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
            Pilih Program Studi
            <span className="block text-blue-600">Sesuai Passion-mu</span>
          </h2>
          <p className="text-lg text-gray-600">
            Lebih dari 50 program studi terakreditasi dengan kurikulum yang disesuaikan dengan kebutuhan industri
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
            Tidak menemukan program yang kamu cari?
          </p>
          <button className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Lihat Semua Program Studi (50+) →
          </button>
        </div>
      </div>
    </section>
  )
}
