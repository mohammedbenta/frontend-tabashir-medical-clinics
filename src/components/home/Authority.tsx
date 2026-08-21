"use client";

import { Media } from "@/components/Media";
import { authorityStats } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Authority() {
  const { lang, t } = useI18n();

  return (
    <section id="about" className="bg-cream-deep px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[1.7rem]">
          <Media
            src="/images/authority.jpg"
            alt={t.aboutAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[30%_20%]"
          />
        </div>
        <div>
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-5 leading-9 text-ink-soft">{t.aboutLead}</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {authorityStats.map((s) => (
              <div key={s.label.en} className="rounded-2xl bg-paper px-3 py-4">
                <p className="text-2xl font-light text-pine">{s.value[lang]}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{s.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
