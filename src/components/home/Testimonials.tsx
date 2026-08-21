"use client";

import { testimonials } from "@/data/content";
import { useI18n } from "@/lib/i18n";

function Stars({ count }: { count: number }) {
  return (
    <p className="text-sm tracking-wide text-bronze" aria-hidden>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </p>
  );
}

export function Testimonials() {
  const { lang, t } = useI18n();

  return (
    <section className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">{t.reviewsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
              {t.reviewsTitle}
            </h2>
            <p className="mt-4 leading-8 text-ink-soft">{t.reviewsLead}</p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-2xl border border-line bg-cream/50 px-5 py-4">
              <p className="text-[0.7rem] font-medium tracking-[0.12em] text-muted">
                {t.googleSource}
              </p>
              <p className="mt-1 text-2xl font-light text-pine">{t.googleRating}</p>
              <Stars count={5} />
              <p className="mt-1 text-xs text-muted">{t.googleCount}</p>
            </div>
            <div className="rounded-2xl border border-line bg-cream/50 px-5 py-4">
              <p className="text-2xl font-light text-pine">{t.patientsServed}</p>
              <p className="mt-1 max-w-[9rem] text-xs leading-5 text-ink-soft">{t.patientsLabel}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <blockquote
              key={item.name.en}
              className="flex flex-col justify-between rounded-[1.4rem] border border-line bg-cream/60 p-6"
            >
              <div>
                <Stars count={item.stars} />
                <p className="mt-3 text-[0.98rem] leading-8 text-ink">&ldquo;{item.text[lang]}&rdquo;</p>
              </div>
              <footer className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-sm font-medium text-pine">
                  {item.initials[lang]}
                </span>
                <div>
                  <cite className="not-italic text-pine">{item.name[lang]}</cite>
                  <p className="mt-0.5 text-xs text-muted">{item.specialty[lang]}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
