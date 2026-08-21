"use client";

import { Media } from "@/components/Media";
import { clinicGallery } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function ClinicTour() {
  const { lang, t } = useI18n();

  return (
    <section className="bg-cream-deep px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-xl">
          <p className="eyebrow">{t.tourEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-4xl">
            {t.tourTitle}
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">{t.tourLead}</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px]">
        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {clinicGallery.map((shot) => (
            <figure
              key={shot.src}
              className="relative h-64 w-[78vw] shrink-0 overflow-hidden rounded-[1.4rem] sm:h-80 sm:w-[420px]"
            >
              <Media
                src={shot.src}
                alt={shot.alt[lang]}
                fill
                sizes="420px"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-deep/75 to-transparent px-5 py-4 text-sm text-paper">
                {shot.alt[lang]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
