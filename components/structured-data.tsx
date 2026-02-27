export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://elfanacademy.ac.id/#organization",
    "name": "ELFAN AI ACADEMY",
    "alternateName": "Elfan Academy",
    "description": "Lembaga pendidikan IT terbaik di Indonesia yang fokus mencetak content creator, programmer, AI engineer, dan digital marketer profesional. Beasiswa hingga 100%, sertifikat BSNP & APMI, garansi kerja.",
    "url": "https://elfanacademy.ac.id",
    "logo": {
      "@type": "ImageObject",
      "url": "https://elfanacademy.ac.id/logo.png",
      "width": 250,
      "height": 60
    },
    "image": "https://elfanacademy.ac.id/og-image.jpg",
    "telephone": "+62-812-3456-7890",
    "email": "info@elfanacademy.ac.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pendidikan IT No. 123",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.200000",
      "longitude": "106.816666"
    },
    "sameAs": [
      "https://facebook.com/elfanacademy",
      "https://instagram.com/elfanacademy",
      "https://youtube.com/@elfanacademy",
      "https://twitter.com/elfanacademy",
      "https://linkedin.com/company/elfanacademy",
      "https://tiktok.com/@elfanacademy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://elfanacademy.ac.id/#course",
    "name": "Program Kuliah IT, Programming, AI & Digital Marketing",
    "description": "Program pendidikan komprehensif 1 tahun untuk menjadi Content Creator, Programmer, AI Engineer, dan Digital Marketer profesional. 70% praktik, sertifikat BSNP & APMI, garansi kompetensi.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ELFAN AI ACADEMY",
      "sameAs": "https://elfanacademy.ac.id"
    },
    "offers": [
      {
        "@type": "Offer",
        "category": "Beasiswa 100%",
        "price": "0",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-02-01",
        "validThrough": "2026-06-30",
        "url": "https://elfanacademy.ac.id/#registration"
      },
      {
        "@type": "Offer",
        "category": "Beasiswa 75%",
        "price": "5000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-02-01",
        "validThrough": "2026-06-30"
      },
      {
        "@type": "Offer",
        "category": "Beasiswa 50%",
        "price": "10000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-02-01",
        "validThrough": "2026-06-30"
      }
    ],
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "duration": "P12M",
        "startDate": "2026-09-01",
        "endDate": "2026-08-31"
      }
    ],
    "educationalCredentialAwarded": "Sertifikat BSNP & APMI"
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://elfanacademy.ac.id/#website",
    "url": "https://elfanacademy.ac.id",
    "name": "ELFAN AI ACADEMY - PMB 2026/2026",
    "description": "Pendaftaran Mahasiswa Baru (PMB) 2026/2026 - Kuliah IT, Programming, AI & Digital Marketing",
    "publisher": {
      "@id": "https://elfanacademy.ac.id/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://elfanacademy.ac.id/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "id-ID"
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://elfanacademy.ac.id/#webpage",
    "url": "https://elfanacademy.ac.id",
    "name": "PMB 2026/2026 - Pendaftaran Mahasiswa Baru Kuliah IT & Digital Marketing",
    "description": "Pendaftaran Mahasiswa Baru (PMB) 2026/2026 ELFAN AI ACADEMY. Beasiswa 100%, Gratis Pendaftaran, Sertifikat BSNP & APMI. Daftar Sekarang!",
    "isPartOf": {
      "@id": "https://elfanacademy.ac.id/#website"
    },
    "about": {
      "@id": "https://elfanacademy.ac.id/#organization"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://elfanacademy.ac.id/og-image.jpg"
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-27",
    "inLanguage": "id-ID"
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kapan pendaftaran mahasiswa baru (PMB) 2026/2026 dibuka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pendaftaran mahasiswa baru (PMB) 2026/2026 ELFAN AI ACADEMY dibuka mulai 1 Februari 2026 hingga 30 Juni 2026. Proses pendaftaran cepat hanya 1x24 jam dan gratis biaya pendaftaran."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja program studi yang tersedia di ELFAN AI ACADEMY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Program studi yang tersedia: Teknik Informatika, Sistem Informasi, Manajemen Bisnis Digital, Akuntansi, Teknik Sipil, Desain Komunikasi Visual, dan Ilmu Kesehatan. Semua program fokus pada praktik 70% dengan sertifikat BSNP & APMI."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah ada beasiswa untuk mahasiswa baru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya! ELFAN AI ACADEMY menyediakan beasiswa hingga 100% untuk mahasiswa berprestasi. Tersedia juga beasiswa 75% dan 50%. Gratis biaya pendaftaran untuk semua calon mahasiswa."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara mendaftar kuliah di ELFAN AI ACADEMY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cara mendaftar sangat mudah: 1) Isi formulir pendaftaran online di website, 2) Data akan dikirim via WhatsApp ke tim kami, 3) Tim kami akan menghubungi Anda dalam 1x24 jam untuk proses selanjutnya. Gratis biaya pendaftaran!"
        }
      },
      {
        "@type": "Question",
        "name": "Apa keunggulan kuliah di ELFAN AI ACADEMY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keunggulan ELFAN AI ACADEMY: 70% praktik langsung, sertifikat BSNP & APMI yang diakui industri, garansi kompetensi, beasiswa hingga 100%, dosen praktisi berpengalaman, fasilitas modern, dan fokus pada skill yang dibutuhkan industri (IT, Programming, AI, Content Creator, Digital Marketing)."
        }
      }
    ]
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://elfanacademy.ac.id"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "PMB 2026/2026",
        "item": "https://elfanacademy.ac.id/#registration"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
