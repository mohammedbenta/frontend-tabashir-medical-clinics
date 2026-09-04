"use client";

import { useMemo, useState } from "react";
import { Media } from "@/components/Media";
import { DoctorCard } from "@/components/DoctorCard";
import { Reveal } from "@/components/Reveal";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { departments, doctors } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export default function DoctorsPage() {
  const { lang, t } = useI18n();
  const [department, setDepartment] = useState("all");
  const visible = useMemo(
    () => (department === "all" ? doctors : doctors.filter((d) => d.specialtyId === department)),
    [department],
  );

  return (
    <main>
      <section className="relative min-h-[58svh] overflow-hidden bg-pine-deep">
        <Media
          src="/images/team.jpg"
          alt={t.doctorsTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/75 to-pine-deep/40" />
        <div className="relative mx-auto flex min-h-[58svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-32 md:px-8">
          <p className="eyebrow text-brand">{t.doctorsEyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[2.3rem] font-light leading-tight tracking-tight text-paper md:text-[3.2rem]">
            {t.doctorsTitle}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-paper/70">{t.doctorsPageLead}</p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.allDoctors}>
            <button
              type="button"
              role="tab"
              aria-selected={department === "all"}
              onClick={() => setDepartment("all")}
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
                onClick={() => setDepartment(s.id)}
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

          {visible.length ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {visible.map((d, i) => (
                <Reveal key={d.id} delay={(i % 4) * 60}>
                  <DoctorCard doctor={d} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="premium-card mt-12 max-w-xl p-8">
              <p className="text-lg font-medium text-pine">{t.noDoctors}</p>
              <p className="mt-3 leading-8 text-ink-soft">{t.noDoctorsLead}</p>
            </div>
          )}
        </div>
      </section>
      <AppointmentCTA specialty={department === "all" ? undefined : department} />
    </main>
  );
}
