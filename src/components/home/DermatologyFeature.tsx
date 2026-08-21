"use client";

import { Media } from "@/components/Media";
import { useI18n } from "@/lib/i18n";

const images = [
  "/images/specialties/dermatology.jpg",
  "/images/derm/laser.jpg",
  "/images/derm/hair.jpg",
  "/images/derm/tech.jpg",
];

export function DermatologyFeature() {
  const { t } = useI18n();

  return (
    <section id="dermatology" className="bg-cream-deep">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">{t.dermEyebrow}</p>
          <h2 className="mt-3 text-3xl font-light leading-snug text-pine md:text-[2.6rem]">
            {t.dermTitle}
          </h2>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-9 text-ink-soft">{t.dermLead}</p>
          <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 text-sm text-pine">
            {t.dermList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href="#booking"
            data-specialty="dermatology"
            className="mt-9 inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-medium text-pine-deep hover:bg-brand-hover"
          >
            {t.dermCta}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {t.dermItems.map((title, i) => (
            <figure
              key={title}
              className={`img-reveal relative overflow-hidden rounded-[1.35rem] ${
                i % 2 ? "mt-8" : ""
              } h-52 md:h-64`}
            >
              <Media
                src={images[i]}
                alt={title}
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-deep/80 to-transparent p-4 text-sm text-paper">
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
