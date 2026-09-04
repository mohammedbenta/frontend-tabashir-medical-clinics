"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Splash() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("done");
      return;
    }

    const leave = window.setTimeout(() => setPhase("out"), 650);
    const finish = window.setTimeout(() => setPhase("done"), 1000);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(finish);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`splash ${phase === "out" ? "splash-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="تباشير"
    >
      <div className="splash-mark">
        <Image
          src="/brand/logo.png"
          alt="تباشير TABASHIR"
          width={1024}
          height={462}
          priority
          className="splash-logo h-14 w-auto sm:h-[4.75rem]"
        />
      </div>
    </div>
  );
}
