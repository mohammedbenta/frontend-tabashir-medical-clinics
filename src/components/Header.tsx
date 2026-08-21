"use client";

import { useEffect, useState } from "react";
import { Logo, PhoneIcon, WhatsAppIcon } from "@/components/Logo";
import { site, telHref, whatsappHref } from "@/lib/site";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function LanguageToggle({
  scrolled,
  open,
}: {
  scrolled: boolean;
  open: boolean;
}) {
  const { lang, setLang, t } = useI18n();
  const light = !(scrolled || open);

  return (
    <div
      role="group"
      aria-label={t.language}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-[0.72rem] font-medium tracking-[0.12em]",
        light ? "border-white/25 text-paper/70" : "border-line text-muted",
      )}
    >
      {(["ar", "en"] as Lang[]).map((code, i) => (
        <span key={code} className="inline-flex items-center gap-1">
          {i > 0 && <span className="opacity-40">|</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={cn(
              "transition-colors",
              lang === code
                ? light
                  ? "text-brand"
                  : "text-brand"
                : light
                  ? "hover:text-paper"
                  : "hover:text-pine",
            )}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-cream/92 shadow-[0_1px_0_rgba(18,179,176,0.14)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-4 px-5 md:h-[5.25rem] md:px-8">
        <Logo
          priority
          className={
            scrolled || open ? "" : "drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
          }
        />

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.navAria}>
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-[0.92rem] transition-colors",
                scrolled ? "text-ink-soft hover:text-ink" : "text-cream/85 hover:text-paper",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle scrolled={scrolled} open={open} />
          <a
            href={telHref}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
              scrolled || open
                ? "border-line text-pine hover:border-brand hover:text-brand"
                : "border-white/25 text-paper hover:bg-paper/10",
            )}
            aria-label={`${t.call} ${site.phoneDisplay}`}
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={whatsappHref(t.waDefault)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
              scrolled || open
                ? "border-line text-pine hover:border-brand hover:text-brand"
                : "border-white/25 text-paper hover:bg-paper/10",
            )}
            aria-label={t.whatsapp}
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#booking"
            className={cn(
              "hidden h-10 items-center rounded-full px-5 text-sm font-medium transition-colors sm:inline-flex",
              "bg-brand text-pine-deep hover:bg-brand-hover",
            )}
          >
            {t.book}
          </a>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              scrolled || open
                ? "border-line text-pine"
                : "border-white/25 text-paper",
            )}
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.menu}</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px w-4 bg-current transition-transform",
                  open && "-translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-4 bg-current transition-transform",
                  open && "translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="flex flex-col px-6 py-6" aria-label={t.menuAria}>
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-4 text-lg text-pine"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-brand text-sm font-medium text-pine-deep hover:bg-brand-hover"
            >
              {t.book}
            </a>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={telHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line text-sm text-pine"
              >
                <PhoneIcon className="h-4 w-4" />
                {t.call}
              </a>
              <a
                href={whatsappHref(t.waDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line text-sm text-pine"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.whatsapp}
              </a>
            </div>
            <p className="mt-3 text-center text-sm text-muted">{site.phoneDisplay}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
