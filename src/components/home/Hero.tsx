"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Media } from "@/components/Media";
import { departments, doctors } from "@/data/content";
import { BookButton } from "@/components/BookButton";
import { DepartmentIcon } from "@/components/DepartmentIcon";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const HERO_POSTER = "/images/hero-poster.jpg";
const HERO_VIDEO = "/videos/hero.mp4";
const HERO_VIDEO_SM = "/videos/hero-sm.mp4";

function armHeroVideo(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  return video.play().catch(() => undefined);
}

function HeroBackground({ alt }: { alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("src");
      video.load();
      return;
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      video.src = HERO_VIDEO;
    }

    const tryPlay = () => {
      void armHeroVideo(video);
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    const onVisible = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("touchstart", tryPlay, { passive: true });
    window.addEventListener("click", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, []);

  return (
    <>
      <Media
        src={HERO_POSTER}
        alt={alt}
        fill
        preload
        sizes="100vw"
        className="hero-media object-cover object-center"
      />
      <video
        ref={videoRef}
        src={HERO_VIDEO_SM}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        disablePictureInPicture
        aria-hidden
        className="hero-media absolute inset-0 h-full w-full object-cover object-center"
      />
    </>
  );
}

function HeroTrust({
  children,
  value,
  label,
  iconClassName,
}: {
  children: ReactNode;
  value: string;
  label: string;
  iconClassName?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <svg
        viewBox="0 0 24 24"
        className={cn("h-6 w-6 shrink-0 md:h-7 md:w-7", iconClassName ?? "text-brand")}
        fill="none"
        aria-hidden
      >
        {children}
      </svg>
      <div>
        <p className="text-[0.88rem] font-medium leading-snug text-paper md:text-[0.95rem]">{value}</p>
        <p className="mt-0.5 text-[0.68rem] font-medium leading-4 text-paper/55 md:text-[0.72rem] md:leading-5">
          {label}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const { lang, t } = useI18n();

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden bg-pine-deep">
      <HeroBackground alt={t.heroAlt} />
      <div
        className={cn(
          "absolute inset-0",
          lang === "en"
            ? "bg-gradient-to-r from-pine-deep/95 via-pine-deep/78 to-pine-deep/25"
            : "bg-gradient-to-l from-pine-deep/95 via-pine-deep/78 to-pine-deep/25",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/75 via-transparent to-pine-deep/45" />

      <div className="relative mx-auto flex min-h-dvh max-w-[1400px] flex-col px-5 pb-8 pt-24 sm:px-8 md:pt-28 lg:pb-10">
        <div className="flex flex-1 flex-col justify-center">
          <div
            className={cn(
              "w-full max-w-xl md:max-w-2xl lg:max-w-5xl",
              lang === "en" ? "mr-auto text-left" : "ml-auto text-right",
            )}
          >
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-[0.65rem] font-medium tracking-[0.12em] text-brand sm:px-4 sm:text-[0.7rem] sm:tracking-[0.14em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span className="truncate">{t.heroEyebrow}</span>
          </p>
          <h1 className="mt-5 text-[2.05rem] font-light leading-[1.22] tracking-tight text-paper sm:mt-6 sm:text-[2.5rem] md:mt-7 md:text-5xl lg:text-[2.85rem] lg:leading-none lg:whitespace-nowrap xl:text-[3.25rem]">
            {t.heroTitle1}
            <span className="mt-1.5 block font-medium text-brand lg:mt-0 lg:inline">
              {" "}
              {t.heroTitle2}
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-[0.98rem] leading-8 text-paper/70 md:mt-7 md:text-[1.08rem] md:leading-[2]">
            {t.heroLead}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center md:mt-10">
            <BookButton className="cta-pulse h-12 w-full px-8 text-[0.92rem] sm:h-[3.25rem] sm:w-auto sm:text-[0.95rem]">
              {t.book}
            </BookButton>
            <a
              href="#departments"
              className="btn-ghost h-12 w-full px-8 text-[0.92rem] sm:h-[3.25rem] sm:w-auto sm:text-[0.95rem]"
            >
              {t.exploreDepartments}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-10 md:gap-x-8 md:gap-y-5">
            <li>
              <HeroTrust
                value={t.googleRating}
                label={t.googleRatingLead}
              >
                <path
                  d="M12 3.2l2.35 4.76 5.25.76-3.8 3.7.9 5.24L12 15.18 7.3 17.66l.9-5.24-3.8-3.7 5.25-.76L12 3.2z"
                  fill="currentColor"
                />
              </HeroTrust>
            </li>
            <li>
              <HeroTrust value={t.heroTrustLicense} label={t.heroTrustLicenseLead}>
                <path
                  d="M12 3.2l7.2 2.4v6.1c0 4.4-3 7.2-7.2 8.9-4.2-1.7-7.2-4.5-7.2-8.9V5.6L12 3.2z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.8 12.1l2.1 2.1 4.3-4.4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </HeroTrust>
            </li>
            <li>
              <HeroTrust
                value={String(doctors.length)}
                label={t.heroTrustDoctorsLead}
              >
                <path
                  d="M8.2 10.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zM15.8 10.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zM4.8 19v-1.2A3.4 3.4 0 0 1 8.2 14.4h.6M19.2 19v-1.2a3.4 3.4 0 0 0-3.4-3.4h-.6M12 13.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2zM8.8 19.2v-.8A3.2 3.2 0 0 1 12 15.2 3.2 3.2 0 0 1 15.2 18.4v.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </HeroTrust>
            </li>
          </ul>
          </div>
        </div>

        <nav
          className={cn(
            "hidden shrink-0 border-t border-white/10 pt-5 lg:block",
            lang === "en" ? "text-left" : "text-right",
          )}
          aria-label={t.navDepartments}
        >
          <ul className="flex flex-wrap gap-2">
            {departments.map((d) => (
              <li key={d.id}>
                <Link
                  href={d.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[0.82rem] font-medium text-paper/80 transition-colors hover:border-brand/40 hover:bg-brand/15 hover:text-paper"
                >
                  <DepartmentIcon id={d.id} className="h-3.5 w-3.5 text-brand" />
                  {d.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
