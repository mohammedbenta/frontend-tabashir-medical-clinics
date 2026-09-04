"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useBooking } from "@/components/BookingModal";
import { cn } from "@/lib/cn";

export function BookButton({
  children,
  specialty,
  doctor,
  className,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  specialty?: string;
  doctor?: string;
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        openBooking({ specialty, doctor });
      }}
      className={cn("btn-primary", className)}
      {...props}
    >
      {children}
    </button>
  );
}
