import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap } from 'lucide-react'

const lecturers = [
  {
    name: 'Coach Mohammad Fathurrozi, ST RO',
    title: 'Mentor Enterpreneur',
    image: '👨‍🏫',
    expertise: 'Entrepreneurship & Business Development'
  },
  {
    name: 'Evi Fitriana Hanifah, LC.',
    title: 'Al-Azhar Mesir',
    image: '👩‍🏫',
    expertise: 'Ilmu Syar\'i & Adab'
  },
  {
    name: 'Aji Maulana',
    title: 'AI Engineering Expert',
    image: '👨‍💻',
    expertise: 'Artificial Intelligence & Machine Learning'
  },
  {
    name: 'Arif Fatoni Rohman, S.Ds.',
    title: 'Motion Effect Video & Fotografi',
    image: '🎬',
    expertise: 'Video Production & Photography'
  },
  {
    name: 'Akbar Ramadhan, S.Ds',
    title: 'Kreatif Digital Profesional',
    image: '🎨',
    expertise: 'Digital Creative & Design'
  },
  {
    name: 'Anang Wibowo. S.Si',
    title: 'Ilustrator Expert',
    image: '✏️',
    expertise: 'Illustration & Visual Arts'
  },
  {
    name: 'Mustanna Alghifari',
    title: 'Animator Creation Expert',
    image: '🎞️',
    expertise: 'Animation & Motion Graphics'
  },
  {
    name: 'Herlambang Gilang SN., S.Kom., M.M',
    title: 'Kreatif AI Profesional',
    image: '🤖',
    expertise: 'AI Creative & Innovation'
  },
  {
    name: 'M. Haqqi Alfath, S.Kom',
    title: 'Animator Creation Expert',
    image: '🎭',
    expertise: 'Animation & Character Design'
  },
  {
    name: 'Haliza Assyifa M., A.Md',
    title: 'UI/UX Expert',
    image: '📱',
    expertise: 'User Interface & User Experience'
  },
  {
    name: 'Hadi Wibowo, S.T',
    title: 'IoT Expert',
    image: '🔌',
    expertise: 'Internet of Things & Embedded Systems'
  }
]

const supportPrograms = [
  'Trouble Shooting Hardware & Software',
  'Pilot Drone',
  'Memanah',
  'Berenang',
  'Praktek Lapangan PKU (Program Kontribusi Ummat)',
  'Filtrip (Kunjungan Ke Perusahaan Maju)',
  'Stadium General (Kunjungan Tokoh)'
]

export function LecturerSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Dosen Pengajar
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Belajar Langsung dari
            <span className="block text-blue-600">Para Ahli & Praktisi</span>
          </h2>
          <p className="text-lg text-gray-600">
            Di ELFAN AI ACADEMY Kamu beruntung dibimbing oleh dosen-dosen yang tidak hanya ahli di bidangnya, tetapi juga merupakan praktisi industri yang sukses.
          </p>
        </div>

        {/* Lecturers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {lecturers.map((lecturer, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-blue-500 cursor-pointer text-center"
            >
              <CardContent className="p-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {lecturer.image}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {lecturer.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  {lecturer.title}
                </p>
                <p className="text-xs text-gray-600">
                  {lecturer.expertise}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Programs */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              PROGRAM PENDUKUNG
            </h3>
            <p className="text-blue-100">
              Selain matakuliah pokok, kamu juga akan mendapatkan materi ekstra kuliah
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {supportPrograms.map((program, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 text-xl">✓</div>
                  <p className="text-sm font-medium">{program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
