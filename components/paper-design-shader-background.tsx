"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

export function GradientBackground() {
  const [useShader, setUseShader] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    // Desktop gets animated shader. Mobile gets lighter animated CSS fallback.
    setUseShader(!reduceMotion && !isMobile);
  }, []);

  if (!useShader) {
    return (
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
          bg-[#050505]
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            inset-[-35%]
            animate-hero-gradient-drift
            bg-[radial-gradient(circle_at_72%_20%,rgba(186,113,27,0.72),transparent_34%),radial-gradient(circle_at_18%_72%,rgba(91,132,51,0.58),transparent_38%),radial-gradient(circle_at_84%_68%,rgba(128,47,21,0.52),transparent_36%)]
            blur-xl
            will-change-transform
          "
        />
        <div className="absolute inset-0 bg-black/18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.72)_100%)]" />
      </div>
    );
  }

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
        opacity-95
      "
      aria-hidden="true"
    >
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(0, 0%, 0%)"
        softness={0.74}
        intensity={0.48}
        noise={0.08}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.08}
        rotation={0}
        speed={0.75}
        colors={[
          "hsl(38, 90%, 34%)",
          "hsl(82, 35%, 25%)",
          "hsl(18, 65%, 24%)",
        ]}
      />

      <div className="absolute inset-0 bg-black/32" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_48%,rgba(0,0,0,0.84)_100%)]" />
    </div>
  );
}
