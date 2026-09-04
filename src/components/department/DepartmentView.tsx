"use client";

import { useState } from "react";
import { Media } from "@/components/Media";
import { BookButton } from "@/components/BookButton";
import { DoctorCard } from "@/components/DoctorCard";
import { Reveal } from "@/components/Reveal";
import { benefits, doctors, type Department } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function DepartmentView({ department }: { department: Department }) {
  const { lang, t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const team = doctors.filter((d) => d.specialtyId === department.id);

  return (
    <main>
      <section className="relative min-h-[72svh] overflow-hidden bg-pine-deep">
        <Media
          src={department.image}
          alt={department.name[lang]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/70 to-pine-deep/40" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="eyebrow text-brand">{t.helpEyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[2.3rem] font-light leading-tight tracking-tight text-paper md:text-[3.2rem]">
            {department.name[lang]}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-paper/70">
            {department.description[lang]}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton specialty={department.id} className="h-12 px-7 text-sm">
              {t.book}
            </BookButton>
            <a href="#intro" className="btn-ghost h-12 px-7 text-sm">
              {t.discover}
            </a>
          </div>
        </div>
      </section>

      <section id="intro" className="section-glow px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">{department.name[lang]}</p>
            <h2 className="mt-4 text-[1.75rem] font-light leading-snug tracking-tight text-pine md:text-[2.3rem]">
              {department.introTitle[lang]}
            </h2>
            <p className="mt-6 text-[1.05rem] leading-9 text-ink-soft">{department.intro[lang]}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-24px_rgba(6,30,29,0.2)] sm:min-h-[420px]">
              <Media
                src={department.whyImage}
                alt={department.name[lang]}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-glow bg-cream px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">{t.featuredServices}</p>
            <h2 className="mt-4 text-[1.75rem] font-light tracking-tight text-pine md:text-[2.3rem]">
              {t.deptServices}
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {department.services.map((s, i) => (
              <Reveal key={s.en} delay={i * 60}>
                <li className="premium-card h-full p-6">
                  <span className="text-sm font-medium tracking-[0.14em] text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-[1.05rem] font-medium leading-7 text-pine">{s[lang]}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-glow px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">{t.doctorsEyebrow}</p>
            <h2 className="mt-4 text-[1.75rem] font-light tracking-tight text-pine md:text-[2.3rem]">
              {t.deptDoctors}
            </h2>
          </Reveal>
          {team.length ? (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {team.map((d, i) => (
                <Reveal key={d.id} delay={i * 70}>
                  <DoctorCard doctor={d} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="premium-card mt-12 max-w-xl p-8">
                <p className="text-lg font-medium text-pine">{t.noDoctors}</p>
                <p className="mt-3 leading-8 text-ink-soft">{t.noDoctorsLead}</p>
                <BookButton specialty={department.id} className="mt-7 h-12 px-7 text-sm">
                  {t.book}
                </BookButton>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-glow bg-paper px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">{t.whyEyebrow}</p>
            <h2 className="mt-4 text-[1.75rem] font-light tracking-tight text-pine md:text-[2.3rem]">
              {t.whyTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.id} delay={i * 70}>
                <div className="premium-card flex gap-5 p-7">
                  <span className="text-sm font-medium tracking-[0.16em] text-bronze">
                    {b.num[lang]}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-pine">{b.title[lang]}</h3>
                    <p className="mt-2 leading-7 text-ink-soft">{b.text[lang]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-glow px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[800px] gap-10">
          <Reveal>
            <p className="eyebrow">{t.faqEyebrow}</p>
            <h2 className="mt-4 text-[1.75rem] font-light tracking-tight text-pine md:text-[2.3rem]">
              {t.deptFaq}
            </h2>
          </Reveal>
          <div className="divide-y divide-line">
            {department.faqs.map((item, i) => (
              <Reveal key={item.q.en} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-start"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-[1.05rem] font-medium text-pine">{item.q[lang]}</span>
                    <span
                      className={cn(
                        "text-xl leading-none text-brand transition-transform",
                        openFaq === i && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 leading-8 text-ink-soft">{item.a[lang]}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
