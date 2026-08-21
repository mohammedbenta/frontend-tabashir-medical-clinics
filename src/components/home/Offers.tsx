"use client";

import { offers } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Offers() {
  const { lang, t } = useI18n();

  return (
    <section id="offers" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-xl">
          <p className="eyebrow">{t.offersEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.offersTitle}
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">{t.offersLead}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <article
              key={o.id}
              className={cn(
                "flex flex-col rounded-[1.45rem] border border-line bg-paper p-6 transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-28px_rgba(8,41,40,0.35)]",
                o.tag && "border-brand/40",
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                {o.tag && (
                  <span className="rounded-full bg-brand px-3 py-1 text-[0.7rem] font-medium text-pine-deep">
                    {o.tag[lang]}
                  </span>
                )}
                <span className="rounded-full bg-bronze/15 px-3 py-1 text-[0.7rem] text-bronze">
                  {o.spots[lang]}
                </span>
              </div>
              <h3 className="mt-4 text-xl text-pine">{o.title[lang]}</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{o.text[lang]}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-light text-brand">{o.price[lang]}</span>
                <span className="text-sm text-muted">{t.sar}</span>
                {o.oldPrice && (
                  <span className="ms-2 text-sm text-muted line-through">{o.oldPrice[lang]}</span>
                )}
              </div>
              <a
                href="#booking"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand text-sm font-medium text-pine-deep hover:bg-brand-hover"
              >
                {t.bookNow}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
