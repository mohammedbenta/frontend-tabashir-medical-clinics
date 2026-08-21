"use client";

import { Media } from "@/components/Media";
import { technologies } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Technology() {
  const { lang, t } = useI18n();

  return (
    <section className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-xl">
          <p className="eyebrow">{t.techEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.techTitle}
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">{t.techLead}</p>
        </div>
        <div className="mt-14 space-y-10">
          {technologies.map((item, i) => (
            <article
              key={item.title.en}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <div className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] md:min-h-[320px]">
                <Media
                  src={item.image}
                  alt={item.title[lang]}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="max-w-lg lg:px-6">
                <span className="font-light text-bronze">
                  {lang === "en" ? `0${i + 1}` : ["٠١", "٠٢", "٠٣", "٠٤"][i]}
                </span>
                <h3 className="mt-3 text-2xl font-normal text-pine">{item.title[lang]}</h3>
                <p className="mt-3 leading-8 text-ink-soft">{item.text[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
