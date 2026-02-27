import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">UICI Academy</h3>
            <p className="text-sm leading-relaxed mb-4">
              Kampus modern dengan akreditasi unggul, menghasilkan lulusan berkualitas yang siap bersaing di dunia kerja nasional dan internasional.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/uiciacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/uiciacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@uiciacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
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
            <h3 className="text-white font-bold text-lg mb-4">Program Populer</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Teknik Informatika</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Manajemen Bisnis</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Teknik Sipil</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ilmu Kesehatan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Desain Komunikasi Visual</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Lihat Semua Program →</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>Kampus UICI Academy<br/>Jl. Pendidikan Tinggi No. 123<br/>Jakarta Selatan, DKI Jakarta 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+622184504660" className="hover:text-blue-400 transition-colors">
                  +62 (21) 8450-4660
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@uiciacademy.ac.id" className="hover:text-blue-400 transition-colors">
                  info@uiciacademy.ac.id
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Jam Operasional:</p>
              <p className="text-sm font-semibold text-white">Senin - Jumat: 08.00 - 17.00 WIB</p>
              <p className="text-sm font-semibold text-white">Sabtu: 08.00 - 14.00 WIB</p>
              <p className="text-xs text-gray-400 mt-1">Minggu & Tanggal Merah: Tutup</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2024 UICI Academy. All rights reserved.
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
