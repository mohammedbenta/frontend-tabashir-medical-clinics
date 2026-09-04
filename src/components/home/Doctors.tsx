"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { DoctorCard } from "@/components/DoctorCard";
import { ArrowIcon } from "@/components/Logo";
import { departments, doctors } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Doctors() {
  const { lang, t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [department, setDepartment] = useState("all");
  const visibleDoctors =
    department === "all" ? doctors : doctors.filter((d) => d.specialtyId === department);

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

  function Arrows() {
    return (
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-pine shadow-sm transition-all hover:border-brand hover:text-brand"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-pine shadow-sm transition-all hover:border-brand hover:text-brand"
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
    );
  }

  return (
    <section id="doctors" className="section-glow bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{t.doctorsEyebrow}</p>
            <h2 className="mt-4 text-[1.85rem] font-light leading-snug tracking-tight text-pine md:text-[2.5rem]">
              {t.doctorsTitle}
            </h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-ink-soft">{t.doctorsLead}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label={t.allDoctors}>
              <button
                type="button"
                role="tab"
                aria-selected={department === "all"}
                onClick={() => selectDepartment("all")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  department === "all"
                    ? "bg-brand text-pine-deep shadow-[0_4px_16px_-4px_rgba(18,179,176,0.4)]"
                    : "border border-line bg-paper text-pine hover:border-brand hover:text-brand",
                )}
              >
                {t.allDoctors}
              </button>
              {departments.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={department === s.id}
                  onClick={() => selectDepartment(s.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    department === s.id
                      ? "bg-brand text-pine-deep shadow-[0_4px_16px_-4px_rgba(18,179,176,0.4)]"
                      : "border border-line bg-paper text-pine hover:border-brand hover:text-brand",
                  )}
                >
                  {s.name[lang]}
                </button>
              ))}
            </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              {t.viewAllDoctors}
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
            <div className="hidden md:block">
              <Arrows />
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="mt-14 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {visibleDoctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} className="w-[min(86vw,19.5rem)] shrink-0 snap-start" />
          ))}
        </div>
        <div className="mt-6 flex justify-center md:hidden">
          <Arrows />
        </div>
      </div>
    </section>
  );
}
