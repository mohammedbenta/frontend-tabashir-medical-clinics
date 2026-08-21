"use client";

import { Media } from "@/components/Media";
import { WhatsAppIcon } from "@/components/Logo";
import { whatsappHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="relative mx-5 mb-10 overflow-hidden rounded-[1.8rem] md:mx-8 md:mb-14">
      <div className="relative min-h-[420px] md:min-h-[480px]">
        <Media
          src="/images/cta.jpg"
          alt={t.ctaAlt}
          fill
          sizes="100vw"
          className="object-cover object-[30%_center]"
        />
        <div className="absolute inset-0 bg-pine-deep/60" />
        <div className="relative flex min-h-[420px] flex-col items-start justify-center px-6 py-16 text-paper md:min-h-[480px] md:px-16">
          <p className="eyebrow text-bronze-soft">{t.ctaEyebrow}</p>
          <h2 className="mt-3 max-w-lg text-3xl font-light leading-snug md:text-5xl">
            {t.ctaTitle}
          </h2>
          <p className="mt-4 max-w-md text-[1.05rem] leading-8 text-paper/86">{t.ctaLead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-medium text-pine-deep hover:bg-brand-hover"
            >
              {t.book}
            </a>
            <a
              href={whatsappHref(t.waDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-7 text-sm text-paper"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
