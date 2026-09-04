"use client";

import { useState } from "react";
import { Media } from "@/components/Media";
import { BookButton } from "@/components/BookButton";
import { ArrowIcon } from "@/components/Logo";
import { type Doctor } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function Portrait({ doctor, size = "card" }: { doctor: Doctor; size?: "card" | "modal" }) {
  const { lang, t } = useI18n();
  const dim = size === "modal" ? "h-36 w-36" : "h-[11.25rem] w-[11.25rem]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-brand-soft ring-[3px] ring-brand/20",
        dim,
      )}
    >
      {doctor.image ? (
        <Media
          key={doctor.image}
          src={doctor.image}
          alt={t.doctorAlt(doctor.name[lang])}
          fill
          sizes={size === "modal" ? "144px" : "180px"}
          className={cn("object-cover", doctor.imagePosition)}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream-deep to-brand-soft text-4xl font-light text-brand">
          {doctor.initials}
        </span>
      )}
    </div>
  );
}

export function DoctorCard({
  doctor,
  className,
}: {
  doctor: Doctor;
  className?: string;
}) {
  const { lang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const meta = [doctor.specialty[lang], doctor.experience?.[lang]].filter(Boolean).join(" · ");

  return (
    <>
      <article
        className={cn(
          "premium-card group flex h-full flex-col items-center px-6 pb-6 pt-8 text-center",
          className,
        )}
      >
        <Portrait doctor={doctor} />
        <h3 className="mt-6 text-[1.15rem] font-medium leading-snug text-pine">{doctor.name[lang]}</h3>
        <p className="mt-1.5 text-sm leading-6 text-ink-soft">{doctor.title[lang]}</p>
        <p className="mt-2 text-xs leading-5 text-muted">{meta}</p>
        <div className="mt-auto flex w-full items-center gap-3 pt-6">
          <BookButton specialty={doctor.specialtyId} doctor={doctor.id} className="h-10 flex-1 px-3 text-[0.8rem]">
            {t.bookShort}
          </BookButton>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-pine transition-colors hover:text-brand"
          >
            {t.viewProfile}
            <ArrowIcon className="h-3 w-3" />
          </button>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-pine-deep/65 backdrop-blur-[6px]"
            aria-label={t.close}
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative z-10 max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-t-[1.8rem] bg-paper shadow-[0_32px_80px_-24px_rgba(6,30,29,0.5)] sm:rounded-[1.8rem]"
          >
            <div className="flex flex-col items-center px-7 pb-8 pt-10 text-center">
              <Portrait doctor={doctor} size="modal" />
              <p className="mt-6 text-xs font-medium text-brand">{doctor.specialty[lang]}</p>
              <h3 className="mt-1 text-2xl font-medium text-pine">{doctor.name[lang]}</h3>
              <p className="mt-1 text-sm text-ink-soft">{doctor.title[lang]}</p>
              {doctor.experience ? (
                <p className="mt-2 text-xs text-muted">{doctor.experience[lang]}</p>
              ) : null}
              <p className="mt-4 text-[0.98rem] leading-8 text-ink-soft">{doctor.credibility[lang]}</p>
              {doctor.services?.length ? (
                <ul className="mt-5 w-full space-y-2 text-start text-sm leading-7 text-ink-soft">
                  {doctor.services.map((service) => (
                    <li key={service.ar} className="flex gap-2">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span>{service[lang]}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
                <BookButton
                  specialty={doctor.specialtyId}
                  doctor={doctor.id}
                  className="h-12 flex-1 text-sm"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {t.book}
                </BookButton>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-12 rounded-full border border-line px-6 text-sm font-medium text-pine transition-colors hover:border-brand hover:text-brand"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
