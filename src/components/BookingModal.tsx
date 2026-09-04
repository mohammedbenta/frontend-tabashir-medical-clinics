"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { doctors, departments } from "@/data/content";
import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Logo";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type Preset = { specialty?: string; doctor?: string };

const BookingContext = createContext<{
  openBooking: (preset?: Preset) => void;
  closeBooking: () => void;
  isOpen: boolean;
  preset: Preset;
} | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

const times = ["09:00", "10:00", "11:30", "13:00", "16:00", "18:30", "20:00"];

function upcomingDays(lang: Lang, count = 8) {
  const days: { iso: string; label: string; closed: boolean }[] = [];
  const formatter = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "ar-SA", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const start = new Date();
  start.setDate(start.getDate() + 1);
  for (let i = 0; days.length < count; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      label: formatter.format(d),
      closed: d.getDay() === 5,
    });
  }
  return days;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<Preset>({});

  const openBooking = useCallback((next?: Preset) => {
    setPreset(next ?? {});
    setOpen(false);
    requestAnimationFrame(() => {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.location.assign("/#booking");
    });
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);


  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeBooking]);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, isOpen: open, preset }}>
      {children}
      {open && (
        <BookingDialog
          key={`${preset.specialty ?? ""}-${preset.doctor ?? ""}`}
          preset={preset}
          onClose={closeBooking}
        />
      )}
    </BookingContext.Provider>
  );
}

function BookingDialog({
  preset,
  onClose,
}: {
  preset: Preset;
  onClose: () => void;
}) {
  const { lang, t } = useI18n();
  const days = useMemo(() => upcomingDays(lang), [lang]);
  const [specialty, setSpecialty] = useState(preset.specialty ?? "");
  const [doctor, setDoctor] = useState(preset.doctor ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredDoctors = doctors.filter((d) =>
    specialty ? d.specialtyId === specialty : true,
  );
  const hasDoctors = filteredDoctors.length > 0;
  const selectedDoctor = filteredDoctors.find((d) => d.id === doctor);
  const selectedSpecialty = departments.find((s) => s.id === specialty);
  const doctorLabel = selectedDoctor?.name[lang] ?? t.onDuty;

  const step = !specialty ? 1 : !doctor && hasDoctors ? 2 : !date ? 3 : !time ? 4 : 5;
  const canSubmit = Boolean(
    specialty &&
      (doctor || !hasDoctors) &&
      date &&
      time &&
      name.trim() &&
      phone.replace(/\s/g, "").length >= 9,
  );

  function confirm(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  function reset() {
    setSpecialty(preset.specialty ?? "");
    setDoctor(preset.doctor ?? "");
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setSubmitted(false);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-pine-deep/65 backdrop-blur-[6px]"
        aria-label={t.closeDialog}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative z-10 flex max-h-[92svh] w-full max-w-[34rem] flex-col overflow-hidden rounded-t-[1.8rem] bg-paper shadow-[0_32px_80px_-24px_rgba(6,30,29,0.5)] sm:rounded-[1.8rem]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 md:px-7">
          <div>
            <p className="eyebrow">{t.bookingEyebrow}</p>
            <h2 id="booking-title" className="mt-1.5 text-xl font-medium text-pine">
              {t.bookingTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-lg text-pine transition-colors hover:border-brand hover:text-brand"
            aria-label={t.close}
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 md:px-7">
          {!submitted && (
            <ol className="mb-7 grid grid-cols-4 gap-2">
              {[t.stepSpecialty, t.stepDoctor, t.stepDate, t.stepConfirm].map((label, i) => (
                <li key={label} className="text-center">
                  <span
                    className={cn(
                      "mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-medium transition-colors",
                      step > i
                        ? "bg-brand text-pine-deep shadow-[0_2px_8px_-2px_rgba(18,179,176,0.3)]"
                        : "bg-cream text-muted",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[0.65rem] text-muted">{label}</span>
                </li>
              ))}
            </ol>
          )}

          {submitted ? (
            <div className="py-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand" fill="none" aria-hidden>
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="eyebrow mt-4">{t.received}</p>
              <h3 className="mt-3 text-2xl font-medium text-pine">{t.receivedTitle}</h3>
              <p className="mt-3 leading-8 text-ink-soft">
                {name} · {phone}
                <br />
                {selectedSpecialty?.name[lang]} · {doctorLabel}
                <br />
                {date} — {time}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref(
                    t.waConfirm(
                      selectedSpecialty?.name[lang] ?? "",
                      selectedDoctor?.name[lang] ?? t.onDuty,
                      date,
                      time,
                      name,
                      phone,
                    ),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-medium text-white shadow-[0_4px_16px_-4px_rgba(37,211,102,0.4)]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.confirmWhatsapp}
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="h-12 rounded-full border border-line px-6 text-sm font-medium text-pine transition-colors hover:border-brand hover:text-brand"
                >
                  {t.anotherBooking}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={confirm} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-soft">{t.stepSpecialty}</span>
                <select
                  value={specialty}
                  onChange={(e) => {
                    setSpecialty(e.target.value);
                    setDoctor("");
                  }}
                  className="field"
                >
                  <option value="">{t.chooseSpecialty}</option>
                  {departments.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name[lang]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-soft">{t.stepDoctor}</span>
                <select
                  value={hasDoctors ? doctor : "on-duty"}
                  onChange={(e) => setDoctor(e.target.value)}
                  disabled={!specialty}
                  className="field disabled:opacity-50"
                >
                  {hasDoctors ? (
                    <>
                      <option value="">
                        {specialty ? t.chooseDoctor : t.chooseSpecialtyFirst}
                      </option>
                      {filteredDoctors.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name[lang]} — {d.title[lang]}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="on-duty">{t.onDuty}</option>
                  )}
                </select>
              </label>

              <div>
                <p className="mb-2 text-sm font-medium text-ink-soft">{t.date}</p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {days.map((d) => (
                    <button
                      key={d.iso}
                      type="button"
                      disabled={d.closed}
                      onClick={() => setDate(d.iso)}
                      className={cn(
                        "min-w-[5.4rem] rounded-2xl border px-3 py-2.5 text-center text-xs font-medium transition-all",
                        d.closed && "cursor-not-allowed opacity-40",
                        date === d.iso
                          ? "border-brand bg-brand text-pine-deep shadow-[0_2px_8px_-2px_rgba(18,179,176,0.3)]"
                          : "border-line bg-paper text-ink hover:border-brand/40",
                      )}
                    >
                      {d.label}
                      {d.closed && <span className="mt-1 block">{t.closed}</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-ink-soft">{t.time}</p>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {times.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      disabled={!date}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "h-10 rounded-xl border text-sm font-medium transition-all disabled:opacity-40",
                        time === slot
                          ? "border-brand bg-brand text-pine-deep shadow-[0_2px_8px_-2px_rgba(18,179,176,0.3)]"
                          : "border-line text-ink hover:border-brand/40",
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-soft">{t.patientName}</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    autoComplete="name"
                    className="field"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-soft">{t.patientPhone}</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    autoComplete="tel"
                    dir="ltr"
                    className={`field ${lang === "ar" ? "text-right" : "text-left"}`}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="h-[3.25rem] rounded-full bg-brand text-sm font-medium text-pine-deep shadow-[0_6px_24px_-6px_rgba(18,179,176,0.4)] transition-all hover:bg-brand-hover hover:shadow-[0_8px_28px_-6px_rgba(18,179,176,0.5)] disabled:opacity-40 disabled:shadow-none"
                >
                  {t.confirmAppointment}
                </button>
                <a
                  href={whatsappHref(t.waDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-brand hover:text-brand-hover"
                >
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                  {t.orWhatsapp}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
