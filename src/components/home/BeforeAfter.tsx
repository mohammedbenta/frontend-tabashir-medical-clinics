"use client";

import { beforeAfter } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function BeforeAfter() {
  const { lang, t } = useI18n();

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-xl">
          <p className="eyebrow">{t.beforeEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.beforeTitle}
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">{t.beforeLead}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {beforeAfter.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[1.45rem] border border-line bg-paper">
              <div className="grid grid-cols-2">
                <figure className="relative flex h-52 items-center justify-center border-e border-line bg-cream-deep md:h-60">
                  <figcaption className="absolute start-3 top-3 rounded-full bg-pine-deep px-2.5 py-1 text-[0.65rem] text-paper">
                    {t.beforeLabel}
                  </figcaption>
                </figure>
                <figure className="relative flex h-52 items-center justify-center bg-cream md:h-60">
                  <figcaption className="absolute start-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[0.65rem] font-medium text-pine-deep">
                    {t.afterLabel}
                  </figcaption>
                </figure>
              </div>
              <p className="px-5 py-4 text-sm text-pine">{item.label[lang]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
