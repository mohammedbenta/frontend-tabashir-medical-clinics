"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { BookButton } from "@/components/BookButton";
import { DepartmentIcon } from "@/components/DepartmentIcon";
import { departments } from "@/data/content";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function LanguageToggle({ solid }: { solid: boolean }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.language}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.12em]",
        solid ? "border-line text-muted" : "border-white/25 text-paper/70",
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
              lang === code ? "text-brand" : solid ? "hover:text-pine" : "hover:text-paper",
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
  const { lang, t } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDepts, setMobileDepts] = useState(false);
  const menuId = useId();

  const lightPage =
    pathname === "/privacy" ||
    pathname === "/terms" ||
    (pathname.startsWith("/doctors/") && pathname !== "/doctors");
  const solid = scrolled || open || lightPage || deptOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDeptOpen(false);
    setMobileDepts(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      onMouseEnter={() => setDeptOpen(false)}
      className={cn(
        "nav-link text-[0.92rem] font-medium transition-colors",
        solid ? "text-ink-soft hover:text-pine" : "text-cream/85 hover:text-paper",
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-paper/95 shadow-[0_1px_0_rgba(18,179,176,0.12),0_4px_20px_-8px_rgba(6,30,29,0.08)] backdrop-blur-xl"
          : "bg-transparent",
      )}
      onMouseLeave={() => {
        if (window.matchMedia("(min-width: 1024px)").matches) setDeptOpen(false);
      }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-3 px-5 md:h-[5.25rem] md:gap-6 md:px-8">
        <Logo
          priority
          className={solid ? "" : "drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"}
        />

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.navAria}>
          {navLink("/", t.navHome)}

          <div>
            <button
              type="button"
              aria-expanded={deptOpen}
              aria-controls={menuId}
              className={cn(
                "nav-link inline-flex items-center gap-1.5 text-[0.92rem] font-medium transition-colors",
                solid ? "text-ink-soft hover:text-pine" : "text-cream/85 hover:text-paper",
              )}
              onMouseEnter={() => setDeptOpen(true)}
              onClick={() => setDeptOpen((v) => !v)}
            >
              {t.navDepartments}
              <svg
                viewBox="0 0 12 8"
                className={cn("h-2.5 w-2.5 transition-transform", deptOpen && "rotate-180")}
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {navLink("/doctors", t.navDoctors)}
          {navLink("/about", t.navAbout)}
          {navLink("/#contact", t.navContact)}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle solid={solid} />
          <button
            type="button"
            aria-expanded={deptOpen}
            aria-controls={menuId}
            className="btn-primary h-10 items-center gap-1.5 px-3.5 text-[0.8rem] sm:px-5 sm:text-sm md:!hidden"
            onClick={() => {
              setOpen(false);
              setDeptOpen((v) => !v);
            }}
          >
            {t.navDepartments}
            <svg
              viewBox="0 0 12 8"
              className={cn("h-2.5 w-2.5 shrink-0 transition-transform", deptOpen && "rotate-180")}
              fill="none"
              aria-hidden
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <BookButton className="h-10 px-5 text-sm max-lg:!hidden">{t.book}</BookButton>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              solid ? "border-line text-pine" : "border-white/25 text-paper",
            )}
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => {
              setDeptOpen(false);
              setOpen((v) => !v);
            }}
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

      <div
        id={menuId}
        className={cn(
          "overflow-hidden border-t border-line/70 bg-paper transition-all duration-300",
          deptOpen
            ? "max-h-[min(32rem,calc(100svh-4.5rem))] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-2 sm:gap-2 sm:py-6 md:px-8 lg:grid-cols-3">
          {departments.map((d) => (
            <Link
              key={d.id}
              href={d.href}
              className="group flex items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-cream"
            >
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-pine-mid">
                <DepartmentIcon id={d.id} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-pine group-hover:text-brand">
                  {d.name[lang]}
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted">{d.description[lang]}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <nav className="flex flex-col px-6 py-6" aria-label={t.menuAria}>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="border-b border-line/50 py-4 text-lg font-medium text-pine"
            >
              {t.navHome}
            </Link>
            <button
              type="button"
              onClick={() => setMobileDepts((v) => !v)}
              className="flex items-center justify-between border-b border-line/50 py-4 text-lg font-medium text-pine"
              aria-expanded={mobileDepts}
            >
              {t.navDepartments}
              <svg
                viewBox="0 0 12 8"
                className={cn("h-3 w-3 transition-transform", mobileDepts && "rotate-180")}
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {mobileDepts && (
              <div className="border-b border-line/50 py-2">
                {departments.map((d) => (
                  <Link
                    key={d.id}
                    href={d.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-1 py-3 text-ink-soft"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-pine-mid">
                      <DepartmentIcon id={d.id} className="h-4 w-4" />
                    </span>
                    {d.name[lang]}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/doctors"
              onClick={() => setOpen(false)}
              className="border-b border-line/50 py-4 text-lg font-medium text-pine"
            >
              {t.navDoctors}
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="border-b border-line/50 py-4 text-lg font-medium text-pine"
            >
              {t.navAbout}
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="border-b border-line/50 py-4 text-lg font-medium text-pine"
            >
              {t.navContact}
            </Link>
            <BookButton
              className="mt-6 h-12 w-full text-sm"
              onClick={() => setOpen(false)}
            >
              {t.book}
            </BookButton>
          </nav>
        </div>
      )}
    </header>
  );
}
