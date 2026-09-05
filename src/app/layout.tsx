import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BookingProvider } from "@/components/BookingModal";
import { LanguageProvider } from "@/lib/i18n";
import { SkipLink } from "@/components/SkipLink";
import { Splash } from "@/components/Splash";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tabashirclinics.com"),
  title: {
    default: "تباشير الطبية | مجمع طبي خاص في جدة",
    template: "%s | تباشير الطبية",
  },
  description:
    "مجمع تباشير الطبي في جدة: ستة أقسام متخصصة، أطباء متخصصون، وحجز موعد أوضح عبر الموقع أو واتساب. جلدية، أسنان، نساء وولادة والمزيد.",
  keywords: [
    "عيادات تباشير",
    "مجمع طبي جدة",
    "جلدية وتجميل جدة",
    "عيادة أسنان جدة",
    "نساء وولادة جدة",
    "حجز موعد طبي",
  ],
  openGraph: {
    locale: "ar_SA",
    type: "website",
    siteName: site.name,
    title: "تباشير الطبية | رعايتك الطبية في مكان واحد",
    description: site.description,
    url: "/",
    images: [
      {
        url: "/images/hero-office.jpg",
        width: 1800,
        height: 1203,
        alt: "بيئة عيادية حديثة في مجمع تباشير الطبي بجدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تباشير الطبية",
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#12b3b0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${plex.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href="/brand/logo.png" as="image" />
        <link
          rel="preload"
          href="/videos/hero-sm.mp4"
          as="video"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          href="/videos/hero.mp4"
          as="video"
          type="video/mp4"
          media="(min-width: 768px)"
        />
      </head>
      <body className="min-h-full bg-cream font-sans text-ink">
          <Splash />
          <LanguageProvider>
          <SkipLink />
          <div className="grain" aria-hidden />
          <JsonLd />
          <BookingProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppFloat />
          </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
