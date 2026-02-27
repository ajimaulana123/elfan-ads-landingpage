import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: "PMB TA. 2025-2025 - PENERIMAAN MAHASANTRI BARU | Kampus Adab & AI | ELFAN AI ACADEMY",
    template: "%s | ELFAN AI ACADEMY"
  },
  description: "✅ PENERIMAAN MAHASANTRI BARU (PMB) TA. 2025-2025 ELFAN AI ACADEMY (1 Februari - 30 Juni 2025). Jadi KONTEN KREATOR BROADCASTING, PROGRAMMER & AI ASSISTED, DIGITAL MARKETER profesional. ⚡ Durasi 1 Tahun, 70% Praktik, Sertifikat BSNP & APMI, Garansi Kompetensi. 🎓 Kampus Adab & AI. Daftar Sekarang!",
  
  // Application Name
  applicationName: "ELFAN AI ACADEMY",
  
  // Icons
  icons: {
    icon: [
      { url: '/logo.jpg', type: 'image/jpeg' },
      { url: '/icon.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/logo.jpg',
    apple: [
      { url: '/logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  
  // Keywords
  keywords: [
    // Primary Keywords - 2025
    "PMB 2025",
    "penerimaan mahasantri baru 2025",
    "pendaftaran mahasiswa baru 2025",
    "kuliah IT 2025",
    "kampus adab dan AI",
    "ELFAN AI ACADEMY",
    
    // Long-tail Keywords
    "konten kreator broadcasting",
    "programmer AI assisted",
    "digital marketer profesional",
    "kuliah IT Jakarta",
    "kampus IT terbaik Indonesia",
    
    // Location-based
    "kuliah IT Jakarta Selatan",
    "kampus IT Jakarta",
    "universitas IT Jakarta",
    "sekolah tinggi IT Jakarta",
    
    // Program-specific
    "teknik informatika Jakarta",
    "sistem informasi",
    "manajemen bisnis digital",
    "desain komunikasi visual",
    "multimedia broadcasting",
    "AI engineering Indonesia",
    
    // Benefits
    "beasiswa kuliah IT",
    "kuliah IT murah",
    "kuliah dengan sertifikat BSNP",
    "kuliah dengan sertifikat APMI",
    "kuliah garansi kompetensi",
    "bootcamp programming Indonesia",
    "kursus IT profesional",
    
    // Brand
    "ELFAN AI ACADEMY",
    "elfan academy",
    "elfan ai",
    "kampus elfan",
  ],
  
  // Authors & Creator
  authors: [
    { name: "ELFAN AI ACADEMY", url: "https://elfanacademy.ac.id" }
  ],
  creator: "ELFAN AI ACADEMY",
  publisher: "ELFAN AI ACADEMY",
  
  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Metadata Base
  metadataBase: new URL('https://elfanacademy.ac.id'),
  
  // Alternates
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
      'id': '/',
    },
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://elfanacademy.ac.id',
    siteName: 'ELFAN AI ACADEMY - Kampus Adab & AI',
    title: "PMB TA. 2025-2025 - PENERIMAAN MAHASANTRI BARU | Kampus Adab & AI",
    description: "✅ Jadi KONTEN KREATOR BROADCASTING, PROGRAMMER & AI ASSISTED, DIGITAL MARKETER profesional. Durasi 1 Tahun, 70% Praktik, Sertifikat BSNP & APMI. Mulai 1 Februari - 30 Juni 2025. Daftar Sekarang!",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PMB TA. 2025-2025 ELFAN AI ACADEMY - Kampus Adab & AI',
        type: 'image/jpeg',
      },
      {
        url: '/logo.jpg',
        width: 512,
        height: 512,
        alt: 'ELFAN AI ACADEMY Logo',
        type: 'image/jpeg',
      },
    ],
    emails: ['info@elfanacademy.ac.id'],
    phoneNumbers: ['+62-812-3456-7890'],
    countryName: 'Indonesia',
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@elfanacademy",
    creator: "@elfanacademy",
    title: "PMB TA. 2025-2025 - Kampus Adab & AI | ELFAN AI ACADEMY",
    description: "✅ Jadi KONTEN KREATOR BROADCASTING, PROGRAMMER & AI ASSISTED, DIGITAL MARKETER profesional. Durasi 1 Tahun, 70% Praktik!",
    images: {
      url: '/og-image.jpg',
      alt: 'PMB TA. 2025-2025 ELFAN AI ACADEMY',
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  
  // Category
  category: 'education',
  
  // Classification
  classification: 'Education, Technology, IT Training',
  
  // Other Meta Tags
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Elfan Academy',
    'application-name': 'ELFAN AI ACADEMY',
    'msapplication-TileColor': '#2563eb',
    'msapplication-TileImage': '/logo.jpg',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#2563eb',
    'color-scheme': 'light',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'Indonesian',
    'geo.region': 'ID-JK',
    'geo.placename': 'Jakarta',
    'geo.position': '-6.200000;106.816666',
    'ICBM': '-6.200000, 106.816666',
    'DC.title': 'ELFAN AI ACADEMY - Kampus Adab & AI',
    'DC.creator': 'ELFAN AI ACADEMY',
    'DC.subject': 'Pendidikan IT, Programming, AI, Digital Marketing',
    'DC.description': 'Kampus IT dengan pendekatan Adab & AI',
    'DC.publisher': 'ELFAN AI ACADEMY',
    'DC.contributor': 'ELFAN AI ACADEMY',
    'DC.date': '2025-02-01',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://elfanacademy.ac.id',
    'DC.language': 'id',
    'DC.coverage': 'Indonesia',
    'DC.rights': 'Copyright 2025 ELFAN AI ACADEMY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <StructuredData />
        
        {/* Favicons */}
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="shortcut icon" href="/logo.jpg" />
        
        {/* Canonical & Manifest */}
        <link rel="canonical" href="https://elfanacademy.ac.id" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Verification Codes */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.200000;106.816666" />
        <meta name="ICBM" content="-6.200000, 106.816666" />
        
        {/* Mobile & PWA */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Elfan Academy" />
        
        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/logo.jpg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Language & Content */}
        <meta httpEquiv="content-language" content="id" />
        <meta name="language" content="Indonesian" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="ELFAN AI ACADEMY - Kampus Adab & AI" />
        <meta name="DC.creator" content="ELFAN AI ACADEMY" />
        <meta name="DC.subject" content="Pendidikan IT, Programming, AI, Digital Marketing, Broadcasting" />
        <meta name="DC.description" content="Kampus IT dengan pendekatan Adab & AI untuk mencetak generasi IT yang kompeten dan beradab" />
        <meta name="DC.publisher" content="ELFAN AI ACADEMY" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://elfanacademy.ac.id" />
        <meta name="DC.language" content="id" />
        <meta name="DC.coverage" content="Indonesia" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/logo.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/hero-image.jpg" as="image" type="image/jpeg" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
