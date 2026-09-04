"use client";

import Link from "next/link";
import { Logo, WhatsAppIcon } from "@/components/Logo";
import { BookButton } from "@/components/BookButton";
import { departments } from "@/data/content";
import { mapsEmbedSrc, mapsHref, site, telHref, whatsappHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { lang, t } = useI18n();
  const addressPrimary = lang === "ar" ? site.address : site.addressEn;
  const addressSecondary = lang === "ar" ? site.addressEn : site.address;
  const heading = lang === "ar" ? site.legalName : site.nameEn;
  const subheading = lang === "ar" ? site.nameEn : site.legalName;

  return (
    <footer id="contact" className="bg-pine-deep text-paper">
      <section className="section-glow bg-paper text-ink">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{t.locationEyebrow}</p>
            <h2 className="mt-4 text-[1.6rem] font-medium leading-snug tracking-tight text-pine md:text-[1.85rem]">
              {heading}
            </h2>
            <p className="mt-2 text-lg font-medium text-brand">{subheading}</p>
            <address className="mt-6 max-w-md text-[0.98rem] not-italic leading-8 text-ink-soft">
              {addressPrimary}
              <span className="mt-1 block text-muted">{addressSecondary}</span>
            </address>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7 h-12 w-fit px-6 text-sm"
            >
              {t.openMaps}
            </a>
          </div>
          <div className="min-h-[260px] overflow-hidden rounded-[1.5rem] border border-line shadow-[0_8px_32px_-12px_rgba(6,30,29,0.1)]">
            <iframe
              title={`${t.locationEyebrow} — ${heading}`}
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[260px] w-full min-h-[260px] border-0 lg:h-full"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo className="[&_img]:h-12 [&_img]:md:h-14" />
          <p className="mt-6 max-w-xs text-[0.95rem] leading-8 text-paper/70">{t.footerBlurb}</p>
          <BookButton className="mt-7 h-11 px-6 text-sm">{t.book}</BookButton>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-brand">{t.specialtiesTitle}</h2>
          <ul className="mt-5 space-y-3 text-[0.92rem] text-paper/65">
            {departments.map((s) => (
              <li key={s.id}>
                <Link href={s.href} className="transition-colors hover:text-paper">
                  {s.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-brand">{t.linksTitle}</h2>
          <ul className="mt-5 space-y-3 text-[0.92rem] text-paper/65">
            <li>
              <Link href="/" className="transition-colors hover:text-paper">
                {t.navHome}
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="transition-colors hover:text-paper">
                {t.navDoctors}
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-paper">
                {t.navAbout}
              </Link>
            </li>
            <li>
              <a href="/#contact" className="transition-colors hover:text-paper">
                {t.navContact}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors hover:text-paper">
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-paper">
                {t.terms}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-brand">{t.contactTitle}</h2>
          <ul className="mt-5 space-y-3.5 text-[0.92rem] leading-7 text-paper/70">
            <li>
              <a href={telHref} className="hover:text-paper">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>{addressPrimary}</li>
            <li>
              {t.hours}
              <span className="mt-1 block text-paper/40">{t.hoursNote}</span>
            </li>
          </ul>
          <a
            href={whatsappHref(t.waDefault)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_16px_-4px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.whatsapp}
          </a>
          <div className="mt-5 flex gap-5 text-sm text-paper/50">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
              {t.instagram}
            </a>
            <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-xs text-paper/35 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {t.rights} © {new Date().getFullYear()} {t.clinicAr}
          </p>
          <p>{t.demoFooter}</p>
        </div>
      </div>
    </footer>
  );
}
