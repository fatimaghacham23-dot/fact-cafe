"use client";

import { type ReactNode } from "react";
import { LiquidButton } from "@/components/liquid-glass-button";

type LiquidCtaButtonProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  href: string;
  size?: "default" | "sm" | "lg" | "xl" | "xxl" | "icon";
};

export function LiquidCtaButton({
  ariaLabel,
  children,
  className,
  href,
  size = "xl"
}: LiquidCtaButtonProps) {
  const handleClick = () => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = href;
  };

  return (
    <LiquidButton
      aria-label={ariaLabel}
      className={className}
      onClick={handleClick}
      size={size}
      type="button"
    >
      {children}
    </LiquidButton>
  );
}
