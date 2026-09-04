"use client";

import Link from "next/link";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/Logo";
import { departments } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Departments() {
  const { lang, t } = useI18n();

  return (
    <section id="departments" className="section-glow bg-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">{t.helpEyebrow}</p>
            <h2 className="mt-4 text-[1.85rem] font-light leading-snug tracking-tight text-pine md:text-[2.5rem]">
              {t.helpTitle}
            </h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-ink-soft">{t.helpLead}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.id} delay={i * 70}>
              <Link href={d.href} className="premium-card group block overflow-hidden">
                <div className="img-reveal relative h-52">
                  <Media
                    src={d.image}
                    alt={d.name[lang]}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-pine-deep/25 to-transparent" />
                  <div className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/12" />
                </div>
                <div className="p-6">
                  <h3 className="text-[1.15rem] font-medium text-pine">{d.name[lang]}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-ink-soft">{d.description[lang]}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    {t.discover}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
