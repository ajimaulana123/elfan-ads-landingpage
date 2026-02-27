'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Apa itu PENERIMAAN MAHASANTRI BARU (PMB)?',
    answer: 'PMB adalah program penerimaan mahasiswa baru di ELFAN AI ACADEMY untuk Tahun Akademik 2025-2025. Pendaftaran dibuka mulai 1 Februari sampai 30 Juni 2025. Kami menerima calon mahasantri yang ingin belajar IT dengan pendekatan Adab & AI.'
  },
  {
    question: 'Berapa lama durasi belajar di ELFAN AI ACADEMY?',
    answer: 'Durasi belajar hanya 1 tahun! Masa study singkat, padat, efektif dan efisien. Dengan sistem belajar 70% praktik dan 30% teori, kamu akan langsung mahir dan siap kerja setelah lulus.'
  },
  {
    question: 'Apa saja program yang tersedia?',
    answer: 'Kami memiliki 3 program unggulan: 1) Desain Media Broadcasting & AI (edit foto, video, kreatif AI), 2) Multimedia (fotografi, videografi, editing profesional), 3) Programming & AI Engineering (web development, mobile app, AI agent). Semua program dilengkapi dengan pembinaan Adab & Entrepreneur.'
  },
  {
    question: 'Apakah ada beasiswa atau keringanan biaya?',
    answer: 'Ya! Kami menyediakan berbagai program beasiswa dan keringanan biaya untuk calon mahasantri berprestasi dan kurang mampu. Biaya kuliah juga sangat terjangkau sebagai investasi terbaik untuk masa depan. Hubungi kami untuk informasi lebih detail.'
  },
  {
    question: 'Apa yang dimaksud dengan Kampus Adab & AI?',
    answer: 'ELFAN AI ACADEMY adalah kampus yang menggabungkan kompetensi IT dengan pembinaan Adab Islami. Selain belajar teknologi, mahasantri juga mendapat pembinaan Ilmu Syar\'i, Tahsin & Tahfidz, Literasi, dan Entrepreneur. Kami mencetak generasi IT yang kompeten dan beradab tinggi.'
  },
  {
    question: 'Apakah lulusan mendapat sertifikat?',
    answer: 'Ya! Lulusan akan mendapatkan Sertifikat Nasional dari BSNP (Badan Nasional Sertifikasi Profesi) dan APMI (Asosiasi Profesi Multimedia Indonesia) yang diakui secara nasional. Plus portofolio karya sebagai bukti kompetensi.'
  },
  {
    question: 'Bagaimana sistem belajarnya?',
    answer: 'Sistem belajar kami 70% praktik dan 30% teori. Kamu akan langsung praktik dengan tools profesional, dibimbing dosen praktisi ahli, dan mengerjakan project nyata. Fasilitas lengkap: Smart Lab, Studio Podcast, Multimedia Tools, Smart Class AI, Drone, Data Center, dan masih banyak lagi.'
  },
  {
    question: 'Apakah ada program asrama?',
    answer: 'Ya! Kami menyediakan asrama yang aman dan nyaman dilengkapi dengan ranjang susun, full AC dan CCTV. Asrama juga dilengkapi dengan Masjid untuk pembinaan ruhiyah. Lingkungan kondusif untuk belajar dan berkembang.'
  },
  {
    question: 'Bagaimana prospek kerja setelah lulus?',
    answer: 'Sangat baik! Alumni kami langsung bisa kerja karena sudah dibekali skill praktis dan portofolio. Banyak yang bekerja sebagai Content Creator, Programmer, Digital Marketer, atau bahkan membangun bisnis sendiri dengan penghasilan ratusan hingga jutaan rupiah per bulan.'
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer: 'Pendaftaran sangat mudah! Cukup isi formulir online di website ini, atau hubungi kami via WhatsApp. Tim kami akan membantu proses pendaftaran kamu. Pendaftaran dibuka mulai 1 Februari - 30 Juni 2025. Daftar sekarang sebelum kuota penuh!'
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
