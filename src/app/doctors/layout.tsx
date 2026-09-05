import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأطباء",
  description: "تعرّف على الفريق الطبي في عيادات تباشير: أطباء متخصصون في ستة أقسام طبية تحت سقف واحد في جدة.",
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
