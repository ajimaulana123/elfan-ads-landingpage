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
  title: "PMB TA. 2025-2025 - PENERIMAAN MAHASANTRI BARU | Kampus Adab & AI | ELFAN AI ACADEMY",
  description: "✅ PENERIMAAN MAHASANTRI BARU (PMB) TA. 2025-2025 ELFAN AI ACADEMY (1 Februari - 30 Juni 2025). Jadi KONTEN KREATOR BROADCASTING, PROGRAMMER & AI ASSISTED, DIGITAL MARKETER profesional. ⚡ Durasi 1 Tahun, 70% Praktik, Sertifikat BSNP & APMI, Garansi Kompetensi. 🎓 Kampus Adab & AI. Daftar Sekarang!",
  icons: {
    icon: [
      { url: '/logo.jpg' },
      { url: '/icon.jpg' },
    ],
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
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
    "kuliah IT Jakarta",
    "kampus IT terbaik Indonesia",
    "universitas IT Jakarta",
    
    // Program-specific
    "teknik informatika",
    "sistem informasi",
    "manajemen bisnis digital",
    "desain komunikasi visual",
    
    // Benefits
    "beasiswa kuliah 100%",
    "kuliah gratis pendaftaran",
    "kuliah dengan sertifikat BSNP",
    "kuliah garansi kerja",
    "bootcamp programming Indonesia",
    
    // Brand
    "ELFAN AI ACADEMY",
    "elfan academy",
    "elfan ai",
  ].join(", "),
  authors: [{ name: "ELFAN AI ACADEMY", url: "https://elfanacademy.ac.id" }],
  creator: "ELFAN AI ACADEMY",
  publisher: "ELFAN AI ACADEMY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elfanacademy.ac.id'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
    },
  },
  openGraph: {
    title: "PMB TA. 2025-2025 - PENERIMAAN MAHASANTRI BARU | Kampus Adab & AI",
    description: "✅ Jadi KONTEN KREATOR BROADCASTING, PROGRAMMER & AI ASSISTED, DIGITAL MARKETER profesional. Durasi 1 Tahun, 70% Praktik, Sertifikat BSNP & APMI!",
    url: 'https://elfanacademy.ac.id',
    siteName: 'ELFAN AI ACADEMY',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PMB 2026/2026 ELFAN AI ACADEMY - Kuliah IT & Digital Marketing',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "PMB TA. 2025-2025 - Kampus Adab & AI | ELFAN AI ACADEMY",
    description: "✅ Jadi KONTEN KREATOR BROADCASTING, PROGRAMMER & AI ASSISTED, DIGITAL MARKETER profesional!",
    images: ['/og-image.jpg'],
    creator: '@elfanacademy',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'education',
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
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="canonical" href="https://elfanacademy.ac.id" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.200000;106.816666" />
        <meta name="ICBM" content="-6.200000, 106.816666" />
        <meta name="theme-color" content="#2563eb" />
        <meta httpEquiv="content-language" content="id" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elfan Academy" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
