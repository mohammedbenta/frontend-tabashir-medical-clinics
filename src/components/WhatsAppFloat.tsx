"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/Logo";
import { useBooking } from "@/components/BookingModal";
import { telHref, whatsappHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function sectionOnScreen(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const box = el.getBoundingClientRect();
  return box.top < window.innerHeight * 0.72 && box.bottom > 120;
}

export function WhatsAppFloat() {
  const { isOpen } = useBooking();
  const { t } = useI18n();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const update = () => {
      setHidden(sectionOnScreen("home") || sectionOnScreen("booking"));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (isOpen || hidden) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <a
        href={telHref}
        className={cn(
          "phone-float inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white",
          "shadow-[0_8px_28px_-6px_rgba(18,179,176,0.6)] transition-transform hover:scale-105",
        )}
        aria-label={t.phoneFloat}
      >
        <PhoneIcon className="phone-ring h-7 w-7" />
      </a>
      <a
        href={whatsappHref(t.waDefault)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white",
          "shadow-[0_8px_28px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105",
        )}
        aria-label={t.waFloat}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
