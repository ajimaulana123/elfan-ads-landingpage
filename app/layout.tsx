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
  title: "Pendaftaran Mahasiswa Baru 2024/2025 | UICI Academy",
  description: "Daftar sekarang! Penerimaan Mahasiswa Baru 2024/2025 UICI Academy. Beasiswa hingga 100%, Program Studi Terakreditasi, Fasilitas Modern, dan Peluang Karir Cemerlang. Raih Masa Depanmu!",
  keywords: "PMB 2024, pendaftaran mahasiswa baru, kuliah, UICI Academy, beasiswa, program studi, pendidikan tinggi, kampus Jakarta",
  authors: [{ name: "UICI Academy" }],
  openGraph: {
    title: "Pendaftaran Mahasiswa Baru 2024/2025 | UICI Academy",
    description: "Wujudkan impianmu! Daftar sekarang dan dapatkan beasiswa hingga 100%",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pendaftaran Mahasiswa Baru 2024/2025 | UICI Academy",
    description: "Wujudkan impianmu! Daftar sekarang dan dapatkan beasiswa hingga 100%",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
