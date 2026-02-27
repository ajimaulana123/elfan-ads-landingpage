import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">ELFAN AI ACADEMY</h3>
            <p className="text-sm leading-relaxed mb-4">
              Lembaga pendidikan IT modern yang fokus mencetak content creator, programmer, dan digital marketer profesional dengan durasi 1 tahun.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/elfanacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/elfanacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@elfanacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Program Studi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Beasiswa</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fasilitas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Program Unggulan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Content Creator & Broadcasting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Programmer & AI Engineer</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile App Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>ELFAN AI ACADEMY<br/>Jl. Pendidikan IT No. 123<br/>Jakarta Selatan, DKI Jakarta 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+622184504660" className="hover:text-blue-400 transition-colors">
                  +62 (21) 8450-4660
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@elfanacademy.ac.id" className="hover:text-blue-400 transition-colors">
                  info@elfanacademy.ac.id
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Pendaftaran:</p>
              <p className="text-sm font-semibold text-white">1 Februari - 30 Juni 2026</p>
              <p className="text-xs text-gray-400 mt-2">Konsultasi 24/7 via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2026 ELFAN AI ACADEMY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
