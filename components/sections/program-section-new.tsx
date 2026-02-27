import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Video, Code, TrendingUp, Cpu, BookOpen, Award } from 'lucide-react'

const programs = [
  {
    icon: Video,
    title: 'Desain Media Broadcasting & AI',
    description: 'Belajar edit foto, manipulasi gambar, vektor, ilustrasi, layout & publikasi. Tool: Photoshop, Illustrator, Corel, InDesign. Kreatif AI untuk desain cepat, tepat dan akurat.',
    badge: 'Paling Diminati',
    color: 'from-red-500 to-pink-500',
    details: [
      'Photoshop, Illustrator, Corel, InDesign',
      'Konsep Desain: Tipografi, warna, layout',
      'Tren Desain Terbaru',
      'Kreatif AI untuk desain berkualitas tinggi',
      'Web Desain: Front-End & Back-End dengan UI/UX'
    ]
  },
  {
    icon: Video,
    title: 'Multimedia',
    description: 'Foto & Videografi profesional, Editing dengan Adobe Premiere Pro, After Effect, Adobe Audio. Kreasi Konten video dan animasi dengan Kreatif AI.',
    badge: 'Populer',
    color: 'from-purple-500 to-indigo-500',
    details: [
      'Adobe Premiere Pro, After Effect, Adobe Audio',
      'Foto & Videografi: Kamera, exposure, lensa',
      'Editing: Visual, audio, narasi',
      'Kreasi Konten: Video dan animasi',
      'Kreatif AI untuk video berkualitas tinggi'
    ]
  },
  {
    icon: Code,
    title: 'Programming & AI Engineering',
    description: 'Membangun aplikasi, website, game, serta sistem digital modern. Web Development, Backend Engineering with Laravel, Mobile App Development (Flutter), AI Agent & Workflow Automation.',
    badge: 'High Demand',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Web Development & AI Integration',
      'Fundamental Web Application & Database',
      'Backend Engineering with Laravel, Cloud & Automation',
      'Mobile Application Development (Flutter)',
      'AI Agent, Workflow Automation & Intelligent Systems'
    ]
  }
]

const facilities = [
  {
    icon: Cpu,
    title: 'Smart Lab',
    description: 'Smart lab system yang memudahkan untuk melakukan explorasi dan pengembangan dengan perangkat canggih',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Video,
    title: 'Studio Podcast',
    description: 'Rekam podcast berkualitas dengan peralatan profesional',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Award,
    title: 'Multimedia Tools',
    description: 'Eksplorasi berbagai macam alat untuk menghasilkan konten creativ yang menarik',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BookOpen,
    title: 'Smart Class AI',
    description: 'Ruang kelas nyaman dilengkapi AC, CCTV, proyektor dan TV Digital 65"',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Video,
    title: 'Drone',
    description: 'Belajar fotografi dan videografi udara dengan drone profesional',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: TrendingUp,
    title: 'Internet 24 Jam',
    description: 'Akses informasi dan sumber belajar kapan saja dan di mana saja',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Cpu,
    title: 'Data Center',
    description: 'Layanan cloud & hosting gratis untuk praktikum website dan transformasi digital',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: BookOpen,
    title: 'Asrama',
    description: 'Ruang asrama aman dan nyaman dilengkapi ranjang susun, full AC dan CCTV',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Masjid',
    description: 'Tempat Ibadah & pembinaan ruhiyah dilengkapi AC & CCTV',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: BookOpen,
    title: 'Perpustakaan Digital',
    description: 'Media untuk mengasah dan meningkatkan literasi',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Award,
    title: 'Pembinaan Adab',
    description: 'Penanaman dan pembinaan Adab melalui keteladanan dan sistem aplikasi kader',
    color: 'from-red-500 to-pink-500'
  }
]

export function ProgramSection() {
  return (
    <>
      {/* Core Competencies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              CORE COMPETENCIES
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Materi Unggulan
              <span className="block text-blue-600">KOMPETENSI IT</span>
            </h2>
            <p className="text-lg text-gray-600">
              Elfan AI Academy menawarkan program studi yang berfokus pada penguasaan kompetensi untuk mencetak sumber daya manusia yang unggul di bidang teknologi informasi, serta dibina dengan penekanan pada pembentukan adab dan karakter yang baik.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:border-blue-500 cursor-pointer overflow-hidden"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {program.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {program.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* KOMPETENSI ADAB Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-blue-600 text-white">
                KOMPETENSI ADAB
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pembinaan Karakter & Adab
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Ilmu Syar'I</h4>
                <p className="text-sm text-gray-600">Fondasi Iman yang Kuat: Aqidah, Adab, Staqofah Islamiyah, Fadhilah Amal, Fiqih Muamalah</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Tahsin & Tahfidz</h4>
                <p className="text-sm text-gray-600">Penguatan dan penguasaan alqur'an sebagai sumber keberkahan dalam hidup</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Literasi</h4>
                <p className="text-sm text-gray-600">Meningkatkan Kemampuan Berpikir Kritis dan akses terhadap Informasi dan Ilmu Pengetahuan</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Entrepreneur & Digital Marketing</h4>
                <p className="text-sm text-gray-600">Mindset Entrepreneur, Marketing Digital, Praktek Bisnis, Berpenghasilan ratusan sampai jutaan rupiah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Fasilitas Berkelas
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Tingkatkan Kreativitas dengan
              <span className="block text-blue-600">Fasilitas Berkelas</span>
            </h2>
            <p className="text-lg text-gray-600">
              Untuk mendukung belajar yang kondusif, Elfan AI Academy memfasilitasi media belajar yang representatif, aman dan nyaman
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:border-blue-500 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <facility.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
