"use client";

import { Logo, WhatsAppIcon } from "@/components/Logo";
import { specialties } from "@/data/content";
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
      <section className="bg-cream text-ink">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-8 px-5 py-12 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{t.locationEyebrow}</p>
            <h2 className="mt-3 text-2xl font-normal leading-snug text-pine md:text-[1.85rem]">
              {heading}
            </h2>
            <p className="mt-2 text-lg text-brand">{subheading}</p>
            <address className="mt-5 max-w-md text-[0.98rem] not-italic leading-8 text-ink-soft">
              {addressPrimary}
              <span className="mt-1 block text-muted">{addressSecondary}</span>
            </address>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 w-fit items-center rounded-full bg-brand px-5 text-sm font-medium text-pine-deep hover:bg-brand-hover"
            >
              {t.openMaps}
            </a>
          </div>
          <div className="min-h-[240px] overflow-hidden rounded-[1.35rem] border border-line">
            <iframe
              title={`${t.locationEyebrow} — ${heading}`}
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[240px] w-full min-h-[240px] border-0 lg:h-full"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo className="[&_img]:h-12 [&_img]:md:h-14" />
          <p className="mt-6 max-w-xs text-[0.95rem] leading-8 text-paper">{t.footerBlurb}</p>
        </div>

        <div>
          <h2 className="text-sm font-medium text-bronze">{t.specialtiesTitle}</h2>
          <ul className="mt-5 space-y-2.5 text-[0.92rem] text-paper/75">
            {specialties.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#specialties" className="transition-colors hover:text-paper">
                  {s.name[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-bronze">{t.linksTitle}</h2>
          <ul className="mt-5 space-y-2.5 text-[0.92rem] text-paper/75">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="transition-colors hover:text-paper">
                {t.faqLink}
              </a>
            </li>
            <li>
              <a href="/privacy" className="transition-colors hover:text-paper">
                {t.privacy}
              </a>
            </li>
            <li>
              <a href="/terms" className="transition-colors hover:text-paper">
                {t.terms}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-bronze">{t.contactTitle}</h2>
          <ul className="mt-5 space-y-3 text-[0.92rem] leading-7 text-paper/80">
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
              <span className="mt-1 block text-paper/50">{t.hoursNote}</span>
            </li>
          </ul>
          <a
            href={whatsappHref(t.waDefault)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.whatsapp}
          </a>
          <div className="mt-5 flex gap-4 text-sm text-paper/60">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              {t.instagram}
            </a>
            <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-xs text-paper/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {t.rights} © {new Date().getFullYear()} {t.clinicAr}
          </p>
          <p>{t.demoFooter}</p>
        </div>
      </div>
    </footer>
  );
}
