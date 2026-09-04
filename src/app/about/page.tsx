"use client";

import { Media } from "@/components/Media";
import { WhyTabashir } from "@/components/home/WhyTabashir";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="relative min-h-[58svh] overflow-hidden bg-pine-deep">
        <Media
          src="/images/authority.jpg"
          alt={t.aboutAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/75 to-pine-deep/40" />
        <div className="relative mx-auto flex min-h-[58svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-32 md:px-8">
          <p className="eyebrow text-brand">{t.aboutEyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[2.3rem] font-light leading-tight tracking-tight text-paper md:text-[3.2rem]">
            {t.aboutPageTitle}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-paper/70">{t.aboutPageLead}</p>
        </div>
      </section>

      <WhyTabashir />
      <AppointmentCTA />
    </main>
  );
}
