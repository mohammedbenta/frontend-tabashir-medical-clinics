import { cn } from "@/lib/cn";

const icons = {
  "general-medicine": (
    <path
      d="M12 4.5v15M4.5 12h15"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  dermatology: (
    <path
      d="M12 4c3.2 2.2 5 5.2 5 8.2A5 5 0 0 1 7 12.2C7 9.2 8.8 6.2 12 4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  dental: (
    <path
      d="M8 5.5c1.2 0 2 .8 4 .8s2.8-.8 4-.8c2.2 0 3.5 2 3.5 4.4 0 4.2-2.3 9.4-3.7 9.4-1.1 0-1.6-2.2-3.8-2.2s-2.7 2.2-3.8 2.2c-1.4 0-3.7-5.2-3.7-9.4C4.5 7.5 5.8 5.5 8 5.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  women: (
    <>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 11.2v8.3M9 16.2h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  "plastic-surgery": (
    <path
      d="M8 7.5c2-2.2 6-2.2 8 0 1.4 1.5 1.6 3.6.4 5.3L12 19 7.6 12.8C6.4 11.1 6.6 9 8 7.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  ent: (
    <path
      d="M8 8.5c0-2.4 1.8-4 4-4s4 1.6 4 4c0 2.2-1.4 3.3-2.4 4.2-.7.6-1.1 1.2-1.1 2v1.8M12 19.2v.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
} as const;

export function DepartmentIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const glyph = icons[id as keyof typeof icons] ?? icons["general-medicine"];

  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="none" aria-hidden>
      {glyph}
    </svg>
  );
}
