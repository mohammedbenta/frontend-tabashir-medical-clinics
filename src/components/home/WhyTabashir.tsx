"use client";

import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { authorityStats } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function WhyTabashir() {
  const { lang, t } = useI18n();

  return (
    <section id="why" className="section-glow bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-24px_rgba(6,30,29,0.28)] lg:min-h-0 lg:h-[26rem]">
            <Media
              src="/images/why-clinic.jpg"
              alt={t.aboutAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2 className="mt-4 text-[1.85rem] font-light leading-snug tracking-tight text-pine md:text-[2.5rem]">
              {t.aboutTitle}
            </h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-ink-soft">{t.aboutLead}</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {authorityStats.map((s) => (
                <div
                  key={s.label.en}
                  className="rounded-2xl border border-line bg-paper px-3 py-4"
                >
                  <p className="text-2xl font-light tracking-tight text-brand">{s.value[lang]}</p>
                  <p className="mt-1.5 text-[0.7rem] leading-5 text-muted">{s.label[lang]}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
