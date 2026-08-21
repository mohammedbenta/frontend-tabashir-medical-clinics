"use client";

import { insurers } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Insurance() {
  const { lang, t } = useI18n();

  return (
    <section className="bg-cream-deep px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-xl">
          <p className="eyebrow">{t.insureEyebrow}</p>
          <h2 className="mt-3 text-2xl font-light leading-snug text-pine md:text-3xl">
            {t.insureTitle}
          </h2>
          <p className="mt-3 leading-8 text-ink-soft">{t.insureLead}</p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {insurers.map((insurer) => (
            <li
              key={insurer.en}
              className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-pine"
            >
              {insurer[lang]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
