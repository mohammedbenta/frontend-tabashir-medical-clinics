"use client";

import Link from "next/link";
import { Media } from "@/components/Media";
import { BookButton } from "@/components/BookButton";
import { ArrowIcon } from "@/components/Logo";
import { type Doctor } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function DoctorCard({
  doctor,
  className,
}: {
  doctor: Doctor;
  className?: string;
}) {
  const { lang, t } = useI18n();
  const meta = [doctor.specialty[lang], doctor.experience?.[lang]].filter(Boolean).join(" · ");

  return (
    <article
      className={cn(
        "premium-card group flex h-full flex-col items-center px-6 pb-6 pt-8 text-center",
        className,
      )}
    >
      <DoctorPortrait doctor={doctor} />
      <h3 className="mt-6 text-[1.15rem] font-medium leading-snug text-pine">{doctor.name[lang]}</h3>
      <p className="mt-1.5 text-sm leading-6 text-ink-soft">{doctor.title[lang]}</p>
      <p className="mt-2 text-xs leading-5 text-muted">{meta}</p>
      <div className="mt-auto flex w-full items-center gap-3 pt-6">
        <BookButton specialty={doctor.specialtyId} doctor={doctor.id} className="h-10 flex-1 px-3 text-[0.8rem]">
          {t.bookShort}
        </BookButton>
        <Link
          href={`/doctors/${doctor.id}`}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-pine transition-colors hover:text-brand"
        >
          {t.viewProfile}
          <ArrowIcon className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}

export function DoctorPortrait({ doctor, size = "card" }: { doctor: Doctor; size?: "card" | "page" }) {
  const { lang, t } = useI18n();
  const dim = size === "page" ? "h-44 w-44 md:h-52 md:w-52" : "h-[11.25rem] w-[11.25rem]";

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
          sizes={size === "page" ? "208px" : "180px"}
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
