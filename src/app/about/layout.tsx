import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تباشير مجمع طبي خاص في جدة: ستة أقسام متخصصة، وخبرة طبية موثوقة، وتجربة تضعك أولاً.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
