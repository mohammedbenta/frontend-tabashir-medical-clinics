export const site = {
  name: "تباشير الطبية",
  nameEn: "Tabashir Medical Clinics",
  tagline: "٩ تخصصات طبية تحت سقف واحد في جدة",
  description:
    "مجمع طبي خاص في جدة يقدّم تخصصات متكاملة، وأطباء متخصصين، وتجربة حجز أوضح من أول خطوة.",
  url: "https://tabashirclinics.com",
  phoneDisplay: "053 909 0509",
  phoneTel: "+966539090509",
  whatsapp: "966539090509",
  email: "info@tabashirclinics.com",
  address: "أبراج ليليان، طريق الأمير سلطان، السلامة، جدة 23545",
  addressEn: "Lilian Towers, Prince Sultan Road, As Salamah, Jeddah 23545",
  legalName: "مجمع عيادات تباشير الطبية",
  city: "جدة",
  hours: "السبت — الخميس · 9 صباحاً — 10 مساءً",
  hoursNote: "الجمعة: مغلق — إلا في المواعيد الطارئة المتفق عليها",
  instagram: "https://www.instagram.com/TabashirClinics",
  twitter: "https://x.com/TabashirClinics",
  mapsQuery: "Lilian Towers Al Amir Sultan As Salamah Jeddah",
} as const;

export const whatsappHref = (text?: string) => {
  const message =
    text ?? "مرحباً، أرغب في الاستفسار عن حجز موعد في عيادات تباشير الطبية.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const telHref = `tel:${site.phoneTel}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.nameEn} ${site.mapsQuery}`,
)}`;

export const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&z=16&output=embed`;
