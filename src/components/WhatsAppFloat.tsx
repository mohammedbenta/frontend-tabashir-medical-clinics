"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/Logo";
import { useBooking } from "@/components/BookingModal";
import { whatsappHref } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function WhatsAppFloat() {
  const { isOpen } = useBooking();
  const { t } = useI18n();
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const section = document.getElementById("doctors");
    if (!section) return;

    const update = () => {
      setReached(section.getBoundingClientRect().top <= window.innerHeight * 0.72);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (isOpen || !reached) return null;

  return (
    <a
      href={whatsappHref(t.waDefault)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white",
        "shadow-[0_16px_40px_-12px_rgba(37,211,102,0.75)] transition-transform hover:scale-105",
      )}
      aria-label={t.waFloat}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
