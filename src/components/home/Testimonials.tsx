"use client";

import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/Media";
import { testimonials } from "@/data/content";
import { useI18n } from "@/lib/i18n";

const GOOGLE_STAR = "#fbbc04";
const GOOGLE_STAR_EMPTY = "#d0d0d0";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 2.6l2.7 6.1 6.6.7-5 4.6 1.4 6.5L12 17.8 6.3 20.5 7.7 14 2.7 9.4l6.6-.7L12 2.6z"
        fill={filled ? GOOGLE_STAR : GOOGLE_STAR_EMPTY}
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <p className="mt-0.5 flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </p>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#12b3b0" />
      <path
        d="M6.2 10.2l2.2 2.2 5.4-5.5"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewCard({
  item,
  lang,
  t,
}: {
  item: (typeof testimonials)[number];
  lang: "ar" | "en";
  t: { verified: string };
}) {
  return (
    <blockquote
      data-review-card
      className="premium-card flex min-h-[22rem] w-[min(88vw,22rem)] shrink-0 snap-center flex-col p-7 lg:w-[calc((100%-2.5rem)/3)] lg:snap-start"
    >
      <div className="min-h-0 flex-1">
        <p className="whitespace-pre-line text-[0.95rem] leading-7 text-ink">
          &ldquo;{item.text[lang]}&rdquo;
        </p>
      </div>
      <footer className="mt-5 flex items-center gap-3 border-t border-line/60 pt-5">
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream-deep text-sm font-medium text-white ring-2 ring-brand/20">
          {"image" in item && item.image ? (
            <Media
              src={item.image}
              alt={item.name[lang]}
              fill
              sizes="48px"
              className="object-cover object-top"
            />
          ) : (
            <span
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: "avatar" in item ? item.avatar : "#34a853" }}
            >
              {"initial" in item ? item.initial : item.name[lang].slice(0, 1)}
            </span>
          )}
        </span>
        <div className="min-w-0">
          <cite className="flex items-center gap-1.5 not-italic font-medium text-pine">
            <span className="truncate">{item.name[lang]}</span>
            <VerifiedIcon />
            <span className="sr-only">{t.verified}</span>
          </cite>
          <Stars count={item.stars} />
        </div>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const { lang, t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const go = (i: number) => {
      const cards = root.querySelectorAll<HTMLElement>("[data-review-card]");
      const card = cards[i];
      if (!card) return;
      // Scroll only within the horizontal container — never the page
      const targetLeft = card.offsetLeft - (root.clientWidth - card.offsetWidth) / 2;
      root.scrollTo({ left: targetLeft, behavior: "smooth" });
      setActive(i);
    };

    const tick = () => {
      if (pausedRef.current) return;
      if (window.matchMedia("(min-width: 768px)").matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      indexRef.current = (indexRef.current + 1) % testimonials.length;
      go(indexRef.current);
    };

    const id = window.setInterval(tick, 6000);
    const onScroll = () => {
      const cards = [...root.querySelectorAll<HTMLElement>("[data-review-card]")];
      if (!cards.length) return;
      const mid = root.getBoundingClientRect().left + root.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const box = card.getBoundingClientRect();
        const dist = Math.abs(box.left + box.width / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      indexRef.current = best;
      setActive(best);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(id);
      root.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="section-glow bg-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">{t.reviewsEyebrow}</p>
          <h2 className="mt-4 text-[1.85rem] font-light leading-snug tracking-tight text-pine md:text-[2.5rem]">
            {t.reviewsTitle}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-8 text-ink-soft">{t.reviewsLead}</p>
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2">
            <GoogleLogo className="h-5 w-5" />
            <span className="sr-only">{t.googleSource}</span>
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} filled />
              ))}
            </span>
            <span className="text-[1.05rem] font-medium text-pine">{t.googleRating}</span>
          </div>
        </div>

        <div
          ref={scrollerRef}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="mt-14 flex items-stretch gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory lg:[scrollbar-width:none]"
        >
          {testimonials.map((item) => (
            <ReviewCard key={item.id} item={item} lang={lang} t={t} />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-hidden>
          {testimonials.map((item, i) => (
            <span
              key={item.id}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-brand" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
