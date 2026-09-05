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
      <circle cx="9.2" cy="5.6" r="2.15" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.2 7.8v6.8M6.4 11.2h5.6M6.8 20.2L9.2 14.6l2.4 5.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.4" cy="10.6" r="1.65" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16.4 12.4v4.6M14.8 14.8h3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  "plastic-surgery": (
    <>
      <path
        d="M14.8 3.8l5.4 5.4-9.6 9.6H5.2v-5.4L14.8 3.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 6.2l4.6 4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  ent: (
    <>
      <path
        d="M8.6 8.4c0-2.8 2.2-5 5.2-5 3.2 0 5.4 2.4 5.4 5.6 0 4.8-3.2 6.6-3.2 9.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.8 9c.2-1.6 1.4-2.6 2.8-2.6 1.6 0 2.8 1.2 2.8 2.8 0 2-1.4 2.8-2.2 3.6-.8.8-1 1.5-1 2.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
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
