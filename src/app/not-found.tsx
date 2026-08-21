"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">{t.notFoundCode}</p>
      <h1 className="mt-4 text-3xl font-light text-pine">{t.notFoundTitle}</h1>
      <p className="mt-3 max-w-md leading-8 text-ink-soft">{t.notFoundLead}</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-medium text-pine-deep"
      >
        {t.notFoundBack}
      </Link>
    </main>
  );
}
