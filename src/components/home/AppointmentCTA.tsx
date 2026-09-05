"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Logo";
import { departments } from "@/data/content";
import { mapsEmbedSrc, mapsHref, site, whatsappHref } from "@/lib/site";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const fieldClass =
  "h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-[0.95rem] text-ink outline-none transition-[border-color,box-shadow] focus:border-brand focus:shadow-[0_0_0_3px_rgba(18,179,176,0.18)]";

export function AppointmentCTA({
  specialty,
  doctorName,
}: {
  specialty?: string;
  doctorName?: string;
}) {
  const { lang, t } = useI18n();
  const { preset } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState(specialty ?? "");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (preset.specialty) {
      setDept(preset.specialty);
      setSent(false);
      return;
    }
    if (specialty) setDept(specialty);
  }, [preset.specialty, specialty]);

  const selected = departments.find((s) => s.id === dept);
  const canSubmit =
    name.trim().length > 1 && phone.replace(/\s/g, "").length >= 9 && Boolean(dept);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSent(true);
  }

  return (
    <>
    <section id="booking" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <Media
        src="/images/booking-lounge.jpg"
        alt={lang === "ar" ? "ردهة الاستقبال" : "Reception lounge"}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <Reveal>
        <div className="relative mx-auto max-w-[1400px]">
          <div
            className={cn(
              "w-full max-w-[26.5rem] rounded-[1.75rem] border border-white/12 bg-pine-deep/70 p-7 shadow-[0_28px_80px_-28px_rgba(6,30,29,0.55)] md:p-8",
              lang === "en" ? "mr-auto text-left" : "ml-auto text-right",
            )}
          >
            <p className="eyebrow text-brand">{t.ctaEyebrow}</p>
            <h2 className="mt-3 text-[1.65rem] font-light leading-snug tracking-tight text-paper md:text-[1.9rem]">
              {doctorName ? t.ctaTitleDoctor(doctorName) : t.ctaTitle}
            </h2>
            <p className="mt-3 text-[0.98rem] leading-7 text-paper/70">
              {doctorName ? t.ctaLeadDoctor : t.ctaLead}
            </p>

            {sent ? (
              <div className="mt-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/15">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand" fill="none" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-lg font-medium text-paper">{t.leadSent}</p>
                <p className="mt-2 leading-7 text-paper/70">{t.leadSentLead}</p>
                <p className="mt-3 text-sm text-paper/50">
                  {name} · {phone} · {selected?.name[lang]}
                  {doctorName ? ` · ${doctorName}` : ""}
                </p>
                <a
                  href={whatsappHref(t.waLead(name, phone, selected?.name[lang] ?? "", doctorName))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-medium text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.confirmWhatsapp}
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-7 space-y-3.5 text-start">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium tracking-normal text-paper/65 ltr:tracking-wide">
                    {t.leadName}
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    autoComplete="name"
                    className={fieldClass}
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium tracking-normal text-paper/65 ltr:tracking-wide">
                    {t.leadPhone}
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    autoComplete="tel"
                    dir="ltr"
                    className={cn(fieldClass, lang === "ar" ? "text-right" : "text-left")}
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium tracking-normal text-paper/65 ltr:tracking-wide">
                    {t.leadDept}
                  </span>
                  <span className="relative block">
                    <select
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                      className={cn(fieldClass, "appearance-none pe-11")}
                      required
                    >
                      <option value="">{t.chooseSpecialty}</option>
                      {departments.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name[lang]}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 12 8"
                      className="pointer-events-none absolute end-4 top-1/2 h-2.5 w-3 -translate-y-1/2 text-pine"
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
                  </span>
                </label>
                <div className="flex pt-3">
                  <button
                    type="submit"
                    className="inline-flex h-[3.25rem] w-full items-center justify-center rounded-full bg-brand text-[0.95rem] font-medium text-pine-deep shadow-[0_8px_32px_-8px_rgba(18,179,176,0.5)] transition-colors hover:bg-brand-hover"
                  >
                    {t.bookNow}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
    {doctorName ? null : <LocationMap />}
    </>
  );
}

function LocationMap() {
  const { lang, t } = useI18n();
  const addressPrimary = lang === "ar" ? site.address : site.addressEn;
  const addressSecondary = lang === "ar" ? site.addressEn : site.address;
  const heading = lang === "ar" ? site.legalName : site.nameEn;
  const subheading = lang === "ar" ? site.nameEn : site.legalName;

  return (
    <section className="section-glow bg-paper text-ink">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{t.locationEyebrow}</p>
          <h2 className="mt-4 text-[1.6rem] font-medium leading-snug tracking-tight text-pine md:text-[1.85rem]">
            {heading}
          </h2>
          <p className="mt-2 text-lg font-medium text-brand">{subheading}</p>
          <address className="mt-6 max-w-md text-[0.98rem] not-italic leading-8 text-ink-soft">
            {addressPrimary}
            <span className="mt-1 block text-muted">{addressSecondary}</span>
          </address>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 h-12 w-fit px-6 text-sm"
          >
            {t.openMaps}
          </a>
        </div>
        <div className="min-h-[260px] overflow-hidden rounded-[1.5rem] border border-line shadow-[0_8px_32px_-12px_rgba(6,30,29,0.1)]">
          <iframe
            title={`${t.locationEyebrow} — ${heading}`}
            src={mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[260px] w-full min-h-[260px] border-0 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
