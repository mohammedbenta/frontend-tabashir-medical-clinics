import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.nameEn,
    alternateName: site.name,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/images/hero-office.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lilian Towers, Prince Sultan Road, As Salamah",
      addressLocality: "Jeddah",
      postalCode: "23545",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.543333,
      longitude: 39.172778,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
    medicalSpecialty: [
      "Dermatology",
      "Dentistry",
      "Gynecologic",
      "Gastroenterologic",
      "Otolaryngologic",
      "Surgical",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
