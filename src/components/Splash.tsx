"use client";

import { useEffect, useRef, useState } from "react";

const SCALE_MS = 1000;
const FADE_MS = 400;

let splashStartedAt = 0;
let splashFinished = false;

export function Splash() {
  const [phase, setPhase] = useState<"show" | "hide" | "done">(splashFinished ? "done" : "show");
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splashFinished) {
      setPhase("done");
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      splashFinished = true;
      setPhase("done");
      return;
    }

    if (!splashStartedAt) splashStartedAt = performance.now();

    const mark = markRef.current;
    let raf = 0;

    const tick = () => {
      const elapsed = performance.now() - splashStartedAt;
      const t = Math.min(1, elapsed / SCALE_MS);
      const eased = 1 - (1 - t) ** 3;
      if (mark) mark.style.transform = `scale(${0.6 + 0.4 * eased})`;

      if (t < 1) {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      setPhase("hide");
      window.setTimeout(() => {
        splashFinished = true;
        setPhase("done");
      }, FADE_MS);
    };

    raf = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(raf);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`splash${phase === "hide" ? " splash-hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="تباشير"
    >
      <div ref={markRef} className="splash-mark">
        <img
          src="/brand/logo.png"
          alt="تباشير TABASHIR"
          width={640}
          height={289}
          fetchPriority="high"
          decoding="async"
          className="splash-logo h-14 w-auto sm:h-[4.75rem]"
        />
      </div>
    </div>
  );
}
