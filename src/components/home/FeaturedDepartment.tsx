"use client";

import Link from "next/link";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/Logo";
import { departments, featuredDental } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function FeaturedDepartment() {
  const { lang } = useI18n();
  const dental = departments.find((d) => d.id === "dental");
  if (!dental) return null;

  return (
    <section className="section-glow bg-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-24px_rgba(6,30,29,0.22)] sm:min-h-[420px] lg:min-h-[540px]">
            <Media
              src={featuredDental.image}
              alt={featuredDental.title[lang]}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.4s] hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/35 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow">{featuredDental.eyebrow[lang]}</p>
          <h2 className="mt-4 text-[1.85rem] font-light leading-snug tracking-tight text-pine md:text-[2.5rem]">
            {featuredDental.title[lang]}
          </h2>
          <p className="mt-5 max-w-lg text-[1.02rem] leading-8 text-ink-soft">
            {featuredDental.lead[lang]}
          </p>
          <ul className="mt-8 space-y-3.5">
            {dental.services.map((s) => (
              <li key={s.en} className="flex items-center gap-3 text-[0.98rem] text-pine">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {s[lang]}
              </li>
            ))}
          </ul>
          <Link href={featuredDental.href} className="btn-primary mt-9 h-12 px-7 text-sm">
            {featuredDental.cta[lang]}
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
