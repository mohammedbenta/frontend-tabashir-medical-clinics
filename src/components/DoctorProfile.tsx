"use client";

import Link from "next/link";
import { Media } from "@/components/Media";
import { BookButton } from "@/components/BookButton";
import { WhatsAppIcon } from "@/components/Logo";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { type Doctor } from "@/data/content";
import { mapsHref, site, telHref, whatsappHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const { lang, t } = useI18n();
  const address = lang === "ar" ? site.address : site.addressEn;
  const faqs = [
    { q: t.doctorFaqWhereQ(doctor.name[lang]), a: t.doctorFaqWhereA },
    { q: t.doctorFaqBookQ, a: t.doctorFaqBookA },
  ];

  return (
    <main>
      <section className="bg-paper px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full bg-cream-deep shadow-[0_8px_20px_rgba(6,30,29,0.08),0_28px_64px_rgba(6,30,29,0.16)] ring-[3px] ring-brand/20 md:h-[340px] md:w-[340px]">
              {doctor.image ? (
                <Media
                  src={doctor.image}
                  alt={t.doctorAlt(doctor.name[lang])}
                  fill
                  priority
                  sizes="340px"
                  className={cn("object-cover object-top", doctor.imagePosition)}
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-deep to-brand-soft text-6xl font-light text-brand">
                  {doctor.initials}
                </span>
              )}
            </div>

          <div>
            <Link
              href="/doctors"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              {t.backToDoctors}
            </Link>
            <p className="eyebrow">{doctor.specialty[lang]}</p>
            <h1 className="mt-3 text-[2.15rem] font-light leading-[1.2] tracking-tight text-pine md:text-[3.1rem]">
              {doctor.name[lang]}
            </h1>
            <p className="mt-3 text-lg text-brand">{doctor.title[lang]}</p>
            {doctor.experience ? (
              <p className="mt-2 text-sm leading-6 text-muted">{doctor.experience[lang]}</p>
            ) : null}

            <dl className="mt-8 grid grid-cols-2 gap-3 border-y border-line py-5 sm:grid-cols-3">
              {doctor.years ? (
                <div className="min-w-0">
                  <dt className="text-2xl font-medium text-pine md:text-[1.75rem]">{doctor.years}+</dt>
                  <dd className="mt-1 text-[0.72rem] leading-snug text-ink-soft md:text-xs">
                    {t.yearsExperience}
                  </dd>
                </div>
              ) : null}
              <div className="min-w-0">
                <dt className="text-2xl font-medium text-pine md:text-[1.75rem]">{t.doctorCity}</dt>
                <dd className="mt-1 text-[0.72rem] leading-snug text-ink-soft md:text-xs">
                  {t.doctorDistrict}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-lg font-medium leading-snug text-pine md:text-xl">
                  {doctor.specialty[lang]}
                </dt>
                <dd className="mt-1 text-[0.72rem] leading-snug text-ink-soft md:text-xs">
                  {t.departmentStat}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton specialty={doctor.specialtyId} doctor={doctor.id} className="h-12 px-7 text-sm">
                {t.book}
              </BookButton>
              <a href="#booking" className="btn-ghost h-12 px-7 text-sm">
                {t.bookOnPage}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-glow bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">{t.aboutDoctor}</p>
            <h2 className="mt-3 text-[1.75rem] font-light tracking-tight text-pine md:text-[2.3rem]">
              {t.aboutDoctorOf(doctor.name[lang])}
            </h2>
            <p className="mt-6 text-[1.05rem] leading-9 text-ink-soft">{doctor.credibility[lang]}</p>

            {doctor.services?.length ? (
              <div className="mt-12">
                <h2 className="text-2xl font-light tracking-tight text-pine">{t.deptServices}</h2>
                <ul className="mt-6 space-y-3">
                  {doctor.services.map((service) => (
                    <li
                      key={service.ar}
                      className="border-s-2 border-bronze ps-4 text-sm leading-7 text-ink-soft"
                    >
                      {service[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-12 divide-y divide-line border-t border-line">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-light text-pine">
                    {faq.q}
                    <span className="text-muted transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-8 text-ink-soft">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[1.5rem] border border-line bg-paper p-6 shadow-[0_12px_32px_rgba(6,30,29,0.06)] lg:sticky lg:top-24">
            <p className="eyebrow">{t.seesAt}</p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-pine">{t.clinicAr}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{address}</p>
            <a href={telHref} className="mt-4 block text-2xl font-light text-pine" dir="ltr">
              {site.phoneDisplay}
            </a>
            <a href="#booking" className="btn-primary mt-6 h-12 w-full text-sm">
              {t.bookOnPage}
            </a>
            <a
              href={whatsappHref(t.waDoctor(doctor.name[lang]))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-3 flex h-12 w-full items-center justify-center gap-2 text-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.inquireWa}
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm text-brand hover:text-brand-hover"
            >
              {t.openMaps}
            </a>
          </aside>
        </div>
      </section>

      <AppointmentCTA specialty={doctor.specialtyId} doctorName={doctor.name[lang]} />
    </main>
  );
}
