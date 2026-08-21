"use client";

import { Media } from "@/components/Media";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Hero() {
  const { lang, t } = useI18n();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-pine-deep">
      <Media
        src="/images/hero-office.jpg"
        alt={t.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[32%_center]"
      />
      <div
        className={cn(
          "absolute inset-0",
          lang === "en"
            ? "bg-gradient-to-r from-pine-deep/92 via-pine-deep/72 to-pine-deep/25"
            : "bg-gradient-to-l from-pine-deep/92 via-pine-deep/72 to-pine-deep/25",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-pine-deep/35" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-28 pt-32 md:justify-center md:px-8 md:pb-32 md:pt-28">
        <div
          className={cn(
            "max-w-2xl",
            lang === "en" ? "mr-auto text-left" : "ml-auto text-right",
          )}
        >
          <p className="eyebrow text-bronze-soft">{t.heroEyebrow}</p>
          <h1 className="mt-5 text-[2.35rem] font-light leading-[1.25] text-paper sm:text-5xl lg:text-[3.65rem] lg:leading-[1.2]">
            {t.heroTitle1}
            <span className="mt-1 block font-normal">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-lg text-[1.05rem] leading-9 text-paper/78">{t.heroLead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#booking"
              className="cta-pulse inline-flex h-12 items-center rounded-full bg-brand px-7 text-[0.95rem] font-medium text-pine-deep transition-colors hover:bg-brand-hover"
            >
              {t.book}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-white/25 px-7 text-[0.95rem] text-paper transition-colors hover:bg-white/10"
            >
              {t.contact}
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-7 text-paper">
            <div>
              <dt className="text-[0.7rem] text-bronze-soft">{t.statSpecialties}</dt>
              <dd className="mt-1 text-2xl font-light">{lang === "en" ? "9" : "٩"}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] text-bronze-soft">{t.statDoctors}</dt>
              <dd className="mt-1 text-2xl font-light">{lang === "en" ? "9" : "٩"}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] text-bronze-soft">{t.statPlace}</dt>
              <dd className="mt-1 text-lg font-light leading-7">{t.statPlaceValue}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
