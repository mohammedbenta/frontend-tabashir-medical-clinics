"use client";

import { Media } from "@/components/Media";
import { specialties } from "@/data/content";
import { ArrowIcon } from "@/components/Logo";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Specialties() {
  const { lang, t } = useI18n();
  const featured = specialties.filter((s) => s.featured);
  const rest = specialties.filter((s) => !s.featured);

  return (
    <section id="specialties" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-xl">
          <p className="eyebrow">{t.helpEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.helpTitle}
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">{t.helpLead}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {featured.map((s, i) => (
            <a
              key={s.id}
              href={s.href}
              data-specialty={s.href === "#booking" ? s.id : undefined}
              className="img-reveal group relative min-h-[320px] overflow-hidden rounded-[1.6rem] md:min-h-[380px]"
            >
              <Media
                src={s.image}
                alt={s.name[lang]}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ animationDelay: `${i * 80}ms` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/90 via-brand/35 to-brand/10" />
              <div className="absolute inset-0 bg-brand/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-brand/20" />
              <div className="absolute inset-x-7 bottom-0 h-0.5 bg-brand" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-paper">
                <h3 className="text-2xl font-normal">{s.name[lang]}</h3>
                <p className="mt-2 max-w-md text-[0.95rem] leading-7 text-paper/80">
                  {s.description[lang]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-bronze-soft">
                  {t.discover}
                  <ArrowIcon className="h-4 w-4 transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((s) => (
            <a
              key={s.id}
              href="#booking"
              data-specialty={s.id}
              className="group overflow-hidden rounded-[1.35rem] border border-line bg-paper transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(18,38,33,0.45)]"
            >
              <div className="img-reveal relative h-40">
                <Media
                  src={s.image}
                  alt={s.name[lang]}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-brand/35 to-brand/10" />
                <div className="absolute inset-0 bg-brand/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-brand/20" />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-brand" />
              </div>
              <div className="p-5">
                <h3 className="text-lg text-pine">{s.name[lang]}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{s.description[lang]}</p>
                <span className={cn("mt-3 inline-flex items-center gap-1 text-sm text-bronze")}>
                  {t.discover}
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
