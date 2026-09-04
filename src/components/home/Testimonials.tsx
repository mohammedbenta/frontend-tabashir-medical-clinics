"use client";

import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/Media";
import { testimonials } from "@/data/content";
import { useI18n } from "@/lib/i18n";

function Stars({ count }: { count: number }) {
  return (
    <p className="text-sm tracking-wide text-bronze" aria-hidden>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </p>
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

const PREVIEW = 118;

function ReviewCard({
  item,
  lang,
  t,
  onToggle,
}: {
  item: (typeof testimonials)[number];
  lang: "ar" | "en";
  t: { verified: string; readMore: string; readLess: string };
  onToggle: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const text = item.text[lang];
  const long = text.length > PREVIEW || text.includes("\n");
  const shown = open || !long ? text : `${text.slice(0, PREVIEW).trim()}…`;

  return (
    <blockquote
      data-review-card
      className={`premium-card flex w-[min(88vw,22rem)] shrink-0 snap-center flex-col p-7 ${
        open ? "min-h-[22rem]" : "h-[22rem]"
      }`}
    >
      <div className="min-h-0 flex-1">
        <Stars count={item.stars} />
        <p className="mt-4 whitespace-pre-line text-[0.95rem] leading-7 text-ink">
          &ldquo;{shown}&rdquo;
        </p>
        {long && (
          <button
            type="button"
            onClick={() => {
              const next = !open;
              setOpen(next);
              onToggle(next);
            }}
            className="mt-2 text-sm font-medium text-brand hover:text-brand-hover"
          >
            {open ? t.readLess : t.readMore}
          </button>
        )}
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
          <p className="mt-0.5 truncate text-xs text-muted">{item.specialty[lang]}</p>
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
        </div>

        <div
          ref={scrollerRef}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="mt-14 flex items-stretch gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory"
        >
          {testimonials.map((item) => (
            <ReviewCard
              key={item.id}
              item={item}
              lang={lang}
              t={t}
              onToggle={(open) => {
                pausedRef.current = open;
              }}
            />
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
