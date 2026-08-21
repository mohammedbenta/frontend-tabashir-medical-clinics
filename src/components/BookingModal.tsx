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
import { doctors, specialties } from "@/data/content";
import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Logo";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type Preset = { specialty?: string; doctor?: string };

const BookingContext = createContext<{
  openBooking: (preset?: Preset) => void;
  closeBooking: () => void;
  isOpen: boolean;
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
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLAnchorElement>('a[href="#booking"]');
      if (!trigger) return;
      event.preventDefault();
      openBooking({
        specialty: trigger.dataset.specialty,
        doctor: trigger.dataset.doctor,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openBooking]);

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
    <BookingContext.Provider value={{ openBooking, closeBooking, isOpen: open }}>
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
  const doctorOptions = filteredDoctors;

  const step = !specialty ? 1 : !doctor ? 2 : !date ? 3 : !time ? 4 : 5;
  const canSubmit = Boolean(
    specialty && doctor && date && time && name.trim() && phone.replace(/\s/g, "").length >= 9,
  );
  const selectedDoctor = doctorOptions.find((d) => d.id === doctor);
  const selectedSpecialty = specialties.find((s) => s.id === specialty);

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
        className="absolute inset-0 bg-pine-deep/60 backdrop-blur-[3px]"
        aria-label={t.closeDialog}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative z-10 flex max-h-[92svh] w-full max-w-[34rem] flex-col overflow-hidden rounded-t-[1.6rem] bg-paper shadow-[0_30px_80px_-24px_rgba(8,41,40,0.45)] sm:rounded-[1.6rem]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
          <div>
            <p className="eyebrow">{t.bookingEyebrow}</p>
            <h2 id="booking-title" className="mt-1 text-xl font-normal text-pine">
              {t.bookingTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-lg text-pine hover:border-brand"
            aria-label={t.close}
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 md:px-6 md:py-6">
          {!submitted && (
            <ol className="mb-6 grid grid-cols-4 gap-2">
              {[t.stepSpecialty, t.stepDoctor, t.stepDate, t.stepConfirm].map((label, i) => (
                <li key={label} className="text-center">
                  <span
                    className={cn(
                      "mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem]",
                      step > i
                        ? "bg-brand text-pine-deep"
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
              <p className="eyebrow">{t.received}</p>
              <h3 className="mt-3 text-2xl font-normal text-pine">{t.receivedTitle}</h3>
              <p className="mt-3 leading-8 text-ink-soft">
                {name} · {phone}
                <br />
                {selectedSpecialty?.name[lang]} · {selectedDoctor?.name[lang]}
                <br />
                {date} — {time}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref(
                    t.waConfirm(
                      selectedSpecialty?.name[lang] ?? "",
                      selectedDoctor?.name[lang] ?? "",
                      date,
                      time,
                      name,
                      phone,
                    ),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.confirmWhatsapp}
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="h-11 rounded-full border border-line px-5 text-sm text-pine hover:border-brand"
                >
                  {t.anotherBooking}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={confirm} className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-ink-soft">{t.stepSpecialty}</span>
                <select
                  value={specialty}
                  onChange={(e) => {
                    setSpecialty(e.target.value);
                    setDoctor("");
                  }}
                  className="field"
                >
                  <option value="">{t.chooseSpecialty}</option>
                  {specialties.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name[lang]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-ink-soft">{t.stepDoctor}</span>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  disabled={!specialty}
                  className="field disabled:opacity-50"
                >
                  <option value="">
                    {specialty ? t.chooseDoctor : t.chooseSpecialtyFirst}
                  </option>
                  {doctorOptions.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name[lang]} — {d.title[lang]}
                    </option>
                  ))}
                </select>
              </label>

              <div>
                <p className="mb-2 text-sm text-ink-soft">{t.date}</p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {days.map((d) => (
                    <button
                      key={d.iso}
                      type="button"
                      disabled={d.closed}
                      onClick={() => setDate(d.iso)}
                      className={cn(
                        "min-w-[5.4rem] rounded-2xl border px-3 py-2.5 text-center text-xs transition-colors",
                        d.closed && "cursor-not-allowed opacity-40",
                        date === d.iso
                          ? "border-brand bg-brand text-pine-deep"
                          : "border-line bg-cream text-ink hover:border-brand/40",
                      )}
                    >
                      {d.label}
                      {d.closed && <span className="mt-1 block">{t.closed}</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm text-ink-soft">{t.time}</p>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {times.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      disabled={!date}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "h-10 rounded-xl border text-sm transition-colors disabled:opacity-40",
                        time === slot
                          ? "border-brand bg-brand text-pine-deep"
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
                  <span className="mb-2 block text-sm text-ink-soft">{t.patientName}</span>
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
                  <span className="mb-2 block text-sm text-ink-soft">{t.patientPhone}</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    autoComplete="tel"
                    dir="ltr"
                    className="field text-start"
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="h-12 rounded-full bg-brand text-sm font-medium text-pine-deep transition-colors hover:bg-brand-hover disabled:opacity-40"
                >
                  {t.confirmAppointment}
                </button>
                <a
                  href={whatsappHref(t.waDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-brand hover:text-brand-hover"
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
