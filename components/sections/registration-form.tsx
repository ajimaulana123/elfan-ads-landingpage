'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2 } from 'lucide-react'

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      fullname: formData.get('fullname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      education: formData.get('education'),
      year: formData.get('year'),
      program: formData.get('program'),
      scholarship: formData.get('scholarship'),
    }

    // Format WhatsApp message
    const message = `*PENDAFTARAN PMB 2026/2026*

📝 *Data Calon Mahasiswa:*
Nama: ${data.fullname}
Email: ${data.email}
No. WhatsApp: ${data.phone}
Kota Asal: ${data.city}

🎓 *Informasi Pendidikan:*
Pendidikan Terakhir: ${data.education}
Tahun Lulus: ${data.year}

📚 *Program yang Diminati:*
${data.program}

💰 *Beasiswa:*
${data.scholarship}

Mohon informasi lebih lanjut tentang proses pendaftaran. Terima kasih!`

    // WhatsApp number (ganti dengan nomor WA kampus)
    const waNumber = '6281234567890' // GANTI DENGAN NOMOR WA KAMPUS
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(waUrl, '_blank')
    
    setIsSubmitting(false)
  }

  return (
    <section id="registration-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Pendaftaran Online
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Daftar Sekarang,
              <span className="block text-blue-600">Raih Masa Depanmu!</span>
            </h2>
            <p className="text-lg text-gray-600">
              Isi formulir di bawah ini dan dapatkan informasi lengkap tentang program studi dan beasiswa
            </p>
          </div>

          <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 mt-[-27px] text-white">
              <CardTitle className="text-2xl">Formulir Pendaftaran PMB 2026/2026</CardTitle>
              <CardDescription className="text-blue-100">
                Gratis biaya pendaftaran • Proses cepat 1x24 jam • Beasiswa hingga 100%
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Nama Lengkap *</Label>
                    <Input 
                      id="fullname"
                      name="fullname"
                      placeholder="Masukkan nama lengkap"
                      required
                      className="focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">No. WhatsApp *</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      required
                      className="focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Kota Asal *</Label>
                    <Input 
                      id="city"
                      name="city"
                      placeholder="Masukkan kota asal"
                      required
                      className="focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Education Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="education">Pendidikan Terakhir *</Label>
                    <Select name="education" required>
                      <SelectTrigger className="focus:border-blue-500">
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SMA/SMK/MA">SMA/SMK/MA</SelectItem>
                        <SelectItem value="D3">D3</SelectItem>
                        <SelectItem value="S1">S1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Tahun Lulus *</Label>
                    <Select name="year" required>
                      <SelectTrigger className="focus:border-blue-500">
                        <SelectValue placeholder="Pilih tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="Sebelum 2021">Sebelum 2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Program Selection */}
                <div className="space-y-2">
                  <Label htmlFor="program">Program Studi yang Diminati *</Label>
                  <Select name="program" required>
                    <SelectTrigger className="focus:border-blue-500">
                      <SelectValue placeholder="Pilih program studi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Teknik Informatika">Teknik Informatika</SelectItem>
                      <SelectItem value="Sistem Informasi">Sistem Informasi</SelectItem>
                      <SelectItem value="Manajemen Bisnis">Manajemen Bisnis</SelectItem>
                      <SelectItem value="Akuntansi">Akuntansi</SelectItem>
                      <SelectItem value="Teknik Sipil">Teknik Sipil</SelectItem>
                      <SelectItem value="Desain Komunikasi Visual">Desain Komunikasi Visual</SelectItem>
                      <SelectItem value="Ilmu Kesehatan">Ilmu Kesehatan</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Scholarship Interest */}
                <div className="space-y-2">
                  <Label htmlFor="scholarship">Tertarik dengan Beasiswa? *</Label>
                  <Select name="scholarship" required>
                    <SelectTrigger className="focus:border-blue-500">
                      <SelectValue placeholder="Pilih opsi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ya, saya tertarik">Ya, saya tertarik</SelectItem>
                      <SelectItem value="Tidak, terima kasih">Tidak, terima kasih</SelectItem>
                      <SelectItem value="Butuh informasi lebih lanjut">Butuh informasi lebih lanjut</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Mengirim Data...
                    </>
                  ) : (
                    'Daftar Sekarang - GRATIS'
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  Dengan mendaftar, Anda menyetujui kebijakan privasi kami. 
                  Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm py-2 px-4">
              🔒 Data Aman & Terenkripsi
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              ⚡ Respon Cepat 1x24 Jam
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              ✓ Gratis Biaya Pendaftaran
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
