export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "UICI Academy",
    "description": "Kampus modern dengan akreditasi unggul, menghasilkan lulusan berkualitas yang siap bersaing di dunia kerja nasional dan internasional",
    "url": "https://uiciacademy.ac.id",
    "logo": "https://uiciacademy.ac.id/logo.png",
    "image": "https://uiciacademy.ac.id/og-image.jpg",
    "telephone": "+62-21-8450-4660",
    "email": "info@uiciacademy.ac.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pendidikan Tinggi No. 123",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://facebook.com/uiciacademy",
      "https://instagram.com/uiciacademy",
      "https://youtube.com/@uiciacademy"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Pendaftaran Mahasiswa Baru 2024/2025",
      "description": "Beasiswa hingga 100%, Program Studi Terakreditasi",
      "price": "0",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
