"use client";

import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { DepartmentIcon } from "@/components/DepartmentIcon";
import { ClockIcon, Logo, MailIcon, PhoneIcon, PinIcon } from "@/components/Logo";
import { departments } from "@/data/content";
import { mapsHref, site, telHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { lang, t } = useI18n();
  const addressPrimary = lang === "ar" ? site.address : site.addressEn;

  return (
    <footer id="contact" className="bg-pine-deep text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-x-16">
        <div className="min-w-0 lg:max-w-[38rem] lg:flex-1">
          <Logo className="[&_img]:h-12 [&_img]:w-auto [&_img]:max-w-full [&_img]:md:h-14" />
          <p className="mt-6 max-w-[38rem] whitespace-pre-line text-[0.95rem] leading-8 text-paper/70">
            {t.footerBlurb}
          </p>
          <BookButton className="mt-7 h-12 w-fit px-6 text-sm">{t.book}</BookButton>
        </div>

        <div className="lg:max-w-[16.5rem] lg:flex-1">
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

        <div className="lg:max-w-[16.5rem] lg:flex-1">
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

        <div className="lg:max-w-[16.5rem] lg:flex-1">
          <h2 className="text-sm font-semibold tracking-wide text-brand">{t.contactTitle}</h2>
          <ul className="mt-5 space-y-3 text-[0.92rem] leading-7 text-paper/70">
            <li>
              <a href={telHref} className="inline-flex items-start gap-2.5 hover:text-paper">
                <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-start gap-2.5 hover:text-paper">
                <MailIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 hover:text-paper"
              >
                <PinIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <span>{addressPrimary}</span>
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5">
              <ClockIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <span>{t.hours}</span>
            </li>
          </ul>
        </div>
      </div>
      </div>

      <nav className="border-t border-white/8" aria-label={t.navDepartments}>
        <ul className="mx-auto flex max-w-[1400px] flex-wrap gap-2 px-5 py-4 md:px-8">
            {departments.map((d) => (
              <li key={d.id}>
                <Link
                  href={d.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[0.82rem] font-medium text-paper/80 transition-colors hover:border-brand/40 hover:bg-brand/15 hover:text-paper"
                >
                  <DepartmentIcon id={d.id} className="h-3.5 w-3.5 text-brand" />
                  {d.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1400px] px-5 py-6 text-xs text-paper/35 md:px-8">
          <p>
            {t.rights} © {new Date().getFullYear()} {t.clinicAr}
          </p>
        </div>
      </div>
    </footer>
  );
}
