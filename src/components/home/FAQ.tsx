"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function FAQ() {
  const { lang, t } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">{t.faqEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.faqTitle}
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">{t.faqLead}</p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q.en}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-start"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="text-lg text-pine">{item.q[lang]}</span>
                  <span
                    className={cn(
                      "mt-1 text-bronze transition-transform",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[0.95rem] leading-8 text-ink-soft">{item.a[lang]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
