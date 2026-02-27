# 🎓 Landing Page PMB (Penerimaan Mahasiswa Baru)

Landing page modern dan responsif untuk Penerimaan Mahasiswa Baru dengan copywriting yang menarik dan SEO-friendly.

## ✨ Fitur Utama

- 🎨 **Design Modern**: UI/UX yang menarik dengan Shadcn UI dan Tailwind CSS
- 📱 **Fully Responsive**: Tampil sempurna di semua device (mobile, tablet, desktop)
- ⚡ **Performance Optimized**: Built with Next.js 15 untuk performa maksimal
- 🔍 **SEO Friendly**: Meta tags lengkap untuk ranking Google yang lebih baik
- 📝 **Copywriting Profesional**: Konten persuasif yang meningkatkan konversi
- 🎯 **Call-to-Action**: Multiple CTA strategis untuk meningkatkan pendaftaran
- 📊 **Conversion Optimized**: Layout dan flow yang dirancang untuk konversi tinggi

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Language**: TypeScript
- **Icons**: Lucide React

## 📦 Instalasi

```bash
# Clone repository
git clone <repository-url>

# Masuk ke folder project
cd pmb-landing-page

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🎯 Sections

1. **Hero Section**
   - Headline menarik dengan value proposition
   - CTA utama untuk pendaftaran
   - Trust indicators (statistik, badge)
   - Visual yang eye-catching

2. **Program Section**
   - Showcase program studi unggulan
   - Card design yang modern
   - Badge untuk highlight program populer

3. **Why Choose Us**
   - 8 keunggulan kampus
   - Icon-based design
   - Statistik kredibilitas

4. **Testimonial Section**
   - Review dari alumni sukses
   - Rating bintang
   - Achievement badges
   - Logo perusahaan mitra

5. **Registration Form**
   - Form pendaftaran lengkap
   - Validasi input
   - Success state
   - Trust badges

6. **FAQ Section**
   - Accordion interaktif
   - 8 pertanyaan umum
   - Contact CTA

7. **CTA Section**
   - Final push untuk konversi
   - Urgency indicators
   - Multiple CTA options

8. **Footer**
   - Informasi kontak lengkap
   - Quick links
   - Social media
   - Jam operasional

## 🎨 Customization

### Mengubah Warna Brand

Edit file `app/globals.css` untuk mengubah color scheme:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... */
}
```

### Mengubah Konten

Setiap section memiliki file terpisah di `components/sections/`:
- `hero-section.tsx` - Hero section
- `program-section.tsx` - Program studi
- `why-choose-us.tsx` - Keunggulan
- `testimonial-section.tsx` - Testimoni
- `registration-form.tsx` - Form pendaftaran
- `faq-section.tsx` - FAQ
- `cta-section.tsx` - Call to action
- `footer.tsx` - Footer

### Menambah Program Studi

Edit array `programs` di `components/sections/program-section.tsx`:

```typescript
const programs = [
  {
    icon: Code,
    title: 'Nama Program',
    description: 'Deskripsi program',
    badge: 'Badge Text',
    color: 'from-blue-500 to-cyan-500'
  },
  // ...
]
```

## 📱 SEO Optimization

Landing page ini sudah dioptimasi untuk SEO dengan:

- ✅ Meta tags lengkap (title, description, keywords)
- ✅ Open Graph tags untuk social media
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Alt text untuk images
- ✅ Fast loading time
- ✅ Mobile-friendly
- ✅ Schema markup ready

## 🔧 Build untuk Production

```bash
# Build project
npm run build

# Jalankan production server
npm start
```

## 📊 Conversion Tips

1. **A/B Testing**: Test berbagai headline dan CTA
2. **Analytics**: Integrasikan Google Analytics atau Facebook Pixel
3. **Speed**: Optimize images dan lazy loading
4. **Trust**: Tambahkan lebih banyak social proof
5. **Urgency**: Update countdown dan limited slots

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your needs.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan buat issue di repository ini.

---

**Built with ❤️ using Next.js, Shadcn UI, and Tailwind CSS**
