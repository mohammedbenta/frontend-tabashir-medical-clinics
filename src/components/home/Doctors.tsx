"use client";

import { useRef, useState } from "react";
import { Media } from "@/components/Media";
import { doctors, specialties } from "@/data/content";
import { whatsappHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Doctors() {
  const { lang, t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [department, setDepartment] = useState<string>("all");
  const visibleDoctors =
    department === "all"
      ? doctors
      : doctors.filter((d) => d.specialtyId === department);

  function selectDepartment(id: string) {
    setDepartment(id);
    scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }

  function scrollByCard(direction: "next" | "prev") {
    const root = scrollerRef.current;
    if (!root) return;
    const card = root.querySelector("article");
    if (!card) return;
    const step = card.getBoundingClientRect().width + 20;
    const goingNext = direction === "next";
    const delta = lang === "ar" ? (goingNext ? -step : step) : goingNext ? step : -step;
    root.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <section id="doctors" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{t.doctorsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
              {t.doctorsTitle}
            </h2>
            <p className="mt-4 leading-8 text-ink-soft">{t.doctorsLead}</p>
            <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label={t.allDepartments}>
              <button
                type="button"
                role="tab"
                aria-selected={department === "all"}
                onClick={() => selectDepartment("all")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  department === "all"
                    ? "bg-brand font-medium text-pine-deep"
                    : "border border-line text-pine hover:border-brand",
                )}
              >
                {t.allDepartments}
              </button>
              {specialties.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={department === s.id}
                  onClick={() => selectDepartment(s.id)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    department === s.id
                      ? "bg-brand font-medium text-pine-deep"
                      : "border border-line text-pine hover:border-brand",
                  )}
                >
                  {s.name[lang]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-pine hover:border-brand"
              aria-label={lang === "ar" ? "السابق" : "Previous"}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-pine hover:border-brand"
              aria-label={lang === "ar" ? "التالي" : "Next"}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="mt-12 flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {visibleDoctors.map((d) => (
            <article
              key={d.id}
              className="group w-[min(86vw,22rem)] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-line bg-paper"
            >
              <div className="relative h-72 overflow-hidden bg-cream-deep">
                {d.image ? (
                  <Media
                    src={d.image}
                    alt={t.doctorAlt(d.name[lang])}
                    fill
                    sizes="352px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ objectPosition: d.imagePosition ?? "50% 20%" }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="flex h-28 w-28 items-center justify-center rounded-full bg-paper text-4xl font-light text-bronze shadow-[0_12px_40px_-20px_rgba(8,41,40,0.35)]">
                      {d.initials}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-bronze">{d.specialty[lang]}</p>
                <h3 className="mt-1 text-xl text-pine">{d.name[lang]}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d.title[lang]}</p>
                <p className="mt-2 text-xs text-muted">{d.experience[lang]}</p>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{d.credibility[lang]}</p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="#booking"
                    data-specialty={d.specialtyId}
                    data-doctor={d.id}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-brand text-sm font-medium text-pine-deep hover:bg-brand-hover"
                  >
                    {t.bookShort}
                  </a>
                  <a
                    href={whatsappHref(t.waDoctor(d.name[lang]))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-line px-3 text-sm text-pine hover:border-brand"
                  >
                    {t.viewProfile}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
