# 🎨 Customization Guide

Panduan lengkap untuk mengkustomisasi landing page sesuai kebutuhan Anda.

## 📝 Mengubah Konten

### 1. Hero Section

File: `components/sections/hero-section.tsx`

```typescript
// Ubah headline
<h1>
  Wujudkan Impian
  <span>Masa Depan Cemerlang</span>
  Bersama Kami
</h1>

// Ubah statistik
<div className="text-2xl font-bold">50+</div>
<div className="text-sm">Program Studi</div>
```

### 2. Program Studi

File: `components/sections/program-section.tsx`

```typescript
const programs = [
  {
    icon: Code, // Import dari lucide-react
    title: 'Nama Program Baru',
    description: 'Deskripsi program',
    badge: 'Populer',
    color: 'from-blue-500 to-cyan-500' // Gradient Tailwind
  },
  // Tambah program lainnya...
]
```

### 3. Keunggulan (Why Choose Us)

File: `components/sections/why-choose-us.tsx`

```typescript
const benefits = [
  {
    icon: Trophy, // Icon dari lucide-react
    title: 'Judul Keunggulan',
    description: 'Deskripsi keunggulan',
    color: 'text-yellow-600 bg-yellow-50'
  },
  // Tambah keunggulan lainnya...
]
```

### 4. Testimoni

File: `components/sections/testimonial-section.tsx`

```typescript
const testimonials = [
  {
    name: 'Nama Alumni',
    program: 'Program Studi',
    year: '2024',
    image: '👨‍💻', // Emoji atau URL image
    rating: 5,
    text: 'Testimoni lengkap...',
    achievement: 'Posisi di Perusahaan'
  },
  // Tambah testimoni lainnya...
]
```

### 5. FAQ

File: `components/sections/faq-section.tsx`

```typescript
const faqs = [
  {
    question: 'Pertanyaan?',
    answer: 'Jawaban lengkap...'
  },
  // Tambah FAQ lainnya...
]
```

## 🎨 Mengubah Warna Brand

### 1. Warna Utama

File: `app/globals.css`

```css
:root {
  /* Primary Color (Biru) */
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  
  /* Secondary Color */
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
}
```

### 2. Gradient Background

File: `components/sections/hero-section.tsx`

```typescript
// Ubah gradient
className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"

// Contoh gradient lain:
// from-purple-600 via-pink-600 to-red-600
// from-green-600 via-teal-600 to-blue-600
```

### 3. Button Colors

```typescript
// Primary Button
<Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">

// Secondary Button
<Button className="bg-blue-600 hover:bg-blue-700">

// Outline Button
<Button variant="outline" className="border-2 border-white">
```

## 🖼️ Menambah Gambar

### 1. Logo

Tambahkan logo di folder `public/`:

```
public/
  ├── logo.png
  ├── logo-white.png
  └── favicon.ico
```

Update di `components/sections/hero-section.tsx`:

```typescript
<Image 
  src="/logo.png" 
  alt="Logo Universitas"
  width={200}
  height={60}
/>
```

### 2. Hero Image

```typescript
// Ganti emoji dengan image
<Image 
  src="/hero-image.jpg"
  alt="Kampus"
  width={600}
  height={600}
  className="rounded-2xl"
/>
```

### 3. Favicon

Ganti file `app/favicon.ico` dengan favicon Anda.

## 📱 Informasi Kontak

### 1. Nomor WhatsApp

File: `components/sections/faq-section.tsx` dan `cta-section.tsx`

```typescript
// Ubah nomor WhatsApp
href="https://wa.me/6281234567890"
```

### 2. Email & Telepon

File: `components/sections/footer.tsx`

```typescript
<a href="tel:+6281234567890">+62 812-3456-7890</a>
<a href="mailto:info@universitas.ac.id">info@universitas.ac.id</a>
```

### 3. Alamat

```typescript
<span>Jl. Pendidikan No. 123, Jakarta Selatan</span>
```

## 🔗 Social Media

File: `components/sections/footer.tsx`

```typescript
<a href="https://facebook.com/username">
  <Facebook className="w-5 h-5" />
</a>
<a href="https://instagram.com/username">
  <Instagram className="w-5 h-5" />
</a>
```

## 📊 Form Pendaftaran

File: `components/sections/registration-form.tsx`

### 1. Tambah Field Baru

```typescript
<div className="space-y-2">
  <Label htmlFor="fieldname">Label Field *</Label>
  <Input 
    id="fieldname" 
    placeholder="Placeholder"
    required
  />
</div>
```

### 2. Ubah Pilihan Select

```typescript
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Pilih..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### 3. Integrasi dengan API

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const formData = {
    name: e.target.fullname.value,
    email: e.target.email.value,
    // ... field lainnya
  }
  
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setIsSuccess(true)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 🎯 SEO Optimization

### 1. Meta Tags

File: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Judul Halaman | Brand",
  description: "Deskripsi halaman untuk SEO",
  keywords: "keyword1, keyword2, keyword3",
  // ...
}
```

### 2. Structured Data

File: `components/structured-data.tsx`

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Nama Universitas",
  "description": "Deskripsi",
  // ... update semua field
}
```

### 3. Open Graph Images

Tambahkan image di `public/og-image.jpg` (1200x630px)

```typescript
openGraph: {
  images: ['/og-image.jpg'],
}
```

## 🎭 Animasi

### 1. Fade In Animation

```typescript
<div className="animate-fade-in">
  Konten yang akan fade in
</div>
```

### 2. Hover Effects

```typescript
<Card className="hover:shadow-2xl hover:scale-105 transition-all duration-300">
```

### 3. Custom Animation

File: `app/globals.css`

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}
```

## 📱 Responsiveness

### Breakpoints Tailwind

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### Contoh Penggunaan

```typescript
<div className="text-2xl md:text-4xl lg:text-5xl">
  Responsive Text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive Grid
</div>
```

## 🔧 Advanced Customization

### 1. Tambah Section Baru

Buat file baru: `components/sections/new-section.tsx`

```typescript
export function NewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Konten section */}
      </div>
    </section>
  )
}
```

Import di `app/page.tsx`:

```typescript
import { NewSection } from '@/components/sections/new-section'

export default function Home() {
  return (
    <main>
      {/* ... sections lain */}
      <NewSection />
    </main>
  )
}
```

### 2. Custom Fonts

File: `app/layout.tsx`

```typescript
import { YourFont } from "next/font/google"

const yourFont = YourFont({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-your-font"
})
```

### 3. Dark Mode

Install dependencies:

```bash
npm install next-themes
```

Setup theme provider dan toggle button.

## 💡 Tips

1. **Konsistensi**: Gunakan warna dan spacing yang konsisten
2. **Performance**: Optimize images dengan Next.js Image component
3. **Accessibility**: Pastikan contrast ratio minimal 4.5:1
4. **Mobile First**: Design untuk mobile terlebih dahulu
5. **Testing**: Test di berbagai device dan browser

## 🆘 Troubleshooting

### Styling tidak muncul

```bash
# Clear cache dan rebuild
rm -rf .next
npm run dev
```

### Icon tidak muncul

```bash
# Install ulang lucide-react
npm install lucide-react
```

### TypeScript errors

```bash
# Generate types
npm run build
```

---

**Need help? Create an issue di repository!**
