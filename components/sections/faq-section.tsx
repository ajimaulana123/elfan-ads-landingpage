'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Bagaimana cara mendaftar sebagai mahasiswa baru?',
    answer: 'Pendaftaran sangat mudah! Cukup isi formulir online di website kami, upload dokumen yang diperlukan (KTP, Ijazah, Foto), dan tunggu konfirmasi dari tim kami dalam 1x24 jam. Seluruh proses bisa dilakukan secara online tanpa perlu datang ke kampus.'
  },
  {
    question: 'Apakah ada beasiswa yang tersedia?',
    answer: 'Ya! Kami menyediakan berbagai jenis beasiswa: Beasiswa Prestasi (hingga 100%), Beasiswa KIP Kuliah, Beasiswa Hafiz Quran, Beasiswa Atlet, dan Beasiswa Kurang Mampu. Anda bisa mendaftar beasiswa bersamaan dengan pendaftaran mahasiswa baru.'
  },
  {
    question: 'Berapa biaya kuliah per semester?',
    answer: 'Biaya kuliah bervariasi tergantung program studi, mulai dari Rp 3.000.000 hingga Rp 8.000.000 per semester. Kami juga menyediakan sistem cicilan 0% dan berbagai skema pembayaran yang fleksibel untuk meringankan beban orang tua.'
  },
  {
    question: 'Apakah ijazah dan akreditasi kampus diakui?',
    answer: 'Tentu! Kampus kami terakreditasi oleh BAN-PT dengan akreditasi A dan B untuk berbagai program studi. Ijazah kami diakui secara nasional dan internasional, sehingga lulusan kami bisa bekerja di mana saja.'
  },
  {
    question: 'Kapan jadwal perkuliahan dimulai?',
    answer: 'Perkuliahan dimulai setiap bulan September untuk semester ganjil dan Februari untuk semester genap. Namun, pendaftaran dibuka sepanjang tahun. Semakin cepat Anda mendaftar, semakin besar peluang mendapatkan beasiswa.'
  },
  {
    question: 'Apakah ada program kelas karyawan?',
    answer: 'Ya, kami memiliki program kelas karyawan dengan jadwal kuliah di akhir pekan (Sabtu-Minggu) atau malam hari. Cocok untuk Anda yang sudah bekerja namun ingin melanjutkan pendidikan ke jenjang yang lebih tinggi.'
  },
  {
    question: 'Bagaimana prospek kerja setelah lulus?',
    answer: 'Sangat baik! 95% alumni kami terserap di dunia kerja dalam 6 bulan setelah lulus. Kami memiliki Career Center yang membantu mahasiswa mendapatkan pekerjaan, magang, dan membangun networking dengan 500+ perusahaan mitra.'
  },
  {
    question: 'Apakah bisa pindah dari kampus lain?',
    answer: 'Bisa! Kami menerima mahasiswa pindahan dari kampus lain dengan proses konversi SKS. Silakan hubungi tim admisi kami untuk konsultasi lebih lanjut mengenai persyaratan dan prosedur pindah kampus.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Pertanyaan yang
            <span className="block text-blue-600">Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum seputar pendaftaran dan perkuliahan
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="hover:border-blue-500 transition-all cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/622184504660" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              💬 Chat via WhatsApp
            </a>
            <a 
              href="tel:+622184504660"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              📞 Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
