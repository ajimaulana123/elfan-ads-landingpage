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
import { CheckCircle2, Loader2 } from 'lucide-react'

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <section id="registration-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pendaftaran Berhasil! 🎉
              </h3>
              <p className="text-gray-600 mb-6">
                Terima kasih telah mendaftar. Tim kami akan menghubungi Anda dalam 1x24 jam untuk proses selanjutnya.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Langkah Selanjutnya:</strong><br />
                  1. Cek email untuk konfirmasi pendaftaran<br />
                  2. Siapkan dokumen yang diperlukan<br />
                  3. Tunggu panggilan dari tim kami
                </p>
              </div>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Daftar Lagi
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
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
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Formulir Pendaftaran PMB 2024/2025</CardTitle>
              <CardDescription className="text-blue-100">
                Gratis biaya pendaftaran • Proses cepat 1x24 jam • Beasiswa hingga 100%
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Nama Lengkap *</Label>
                    <Input 
                      id="fullname" 
                      placeholder="Masukkan nama lengkap"
                      required
                      className="focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
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
                    <Select required>
                      <SelectTrigger className="focus:border-blue-500">
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sma">SMA/SMK/MA</SelectItem>
                        <SelectItem value="d3">D3</SelectItem>
                        <SelectItem value="s1">S1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Tahun Lulus *</Label>
                    <Select required>
                      <SelectTrigger className="focus:border-blue-500">
                        <SelectValue placeholder="Pilih tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="older">Sebelum 2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Program Selection */}
                <div className="space-y-2">
                  <Label htmlFor="program">Program Studi yang Diminati *</Label>
                  <Select required>
                    <SelectTrigger className="focus:border-blue-500">
                      <SelectValue placeholder="Pilih program studi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ti">Teknik Informatika</SelectItem>
                      <SelectItem value="si">Sistem Informasi</SelectItem>
                      <SelectItem value="mb">Manajemen Bisnis</SelectItem>
                      <SelectItem value="ak">Akuntansi</SelectItem>
                      <SelectItem value="ts">Teknik Sipil</SelectItem>
                      <SelectItem value="dkv">Desain Komunikasi Visual</SelectItem>
                      <SelectItem value="ik">Ilmu Kesehatan</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Scholarship Interest */}
                <div className="space-y-2">
                  <Label htmlFor="scholarship">Tertarik dengan Beasiswa? *</Label>
                  <Select required>
                    <SelectTrigger className="focus:border-blue-500">
                      <SelectValue placeholder="Pilih opsi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Ya, saya tertarik</SelectItem>
                      <SelectItem value="no">Tidak, terima kasih</SelectItem>
                      <SelectItem value="info">Butuh informasi lebih lanjut</SelectItem>
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
