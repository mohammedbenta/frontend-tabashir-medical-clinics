"use client";

import { benefits } from "@/data/content";
import { useI18n } from "@/lib/i18n";

function BenefitIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "specialists") {
    return (
      <svg {...common} aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (id === "tech") {
    return (
      <svg {...common} aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    );
  }
  if (id === "integrated") {
    return (
      <svg {...common} aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}

export function WhyChoose() {
  const { lang, t } = useI18n();

  return (
    <section className="bg-pine-deep px-5 py-24 text-paper md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-2xl">
          <p className="eyebrow text-bronze-soft">{t.whyEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug md:text-4xl">{t.whyTitle}</h2>
          <p className="mt-4 max-w-xl leading-8 text-paper/70">{t.whyLead}</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article key={b.id} className="bg-pine-deep p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-bronze">
                <BenefitIcon id={b.id} />
              </span>
              <span className="mt-5 block font-light text-bronze">{b.num[lang]}</span>
              <h3 className="mt-3 text-xl font-normal">{b.title[lang]}</h3>
              <p className="mt-3 text-[0.95rem] leading-8 text-paper/68">{b.text[lang]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
