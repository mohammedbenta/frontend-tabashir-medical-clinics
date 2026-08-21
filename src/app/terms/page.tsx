"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function TermsPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-2xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <p className="eyebrow">{t.clinicAr}</p>
      <h1 className="mt-3 text-3xl font-light text-pine">{t.terms}</h1>
      <p className="mt-6 leading-9 text-ink-soft">{t.termsBody}</p>
      <Link
        href="/"
        className="mt-10 inline-flex h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-pine-deep"
      >
        {t.notFoundBack}
      </Link>
    </main>
  );
}
