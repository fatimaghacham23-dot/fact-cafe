"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ARC_TEXT = "FACT • SPECIALITY COFFEE • KUWAIT • ";

function TextArc({ text }: { text: string }) {
  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <div className="absolute inset-0">
      {characters.map((char, index) => {
        const angle = angleStep * index;

        return (
          <span
            key={`${char}-${index}`}
            className="absolute left-1/2 top-0 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-[9px] md:text-[10px]"
            style={{
              height: "50%",
              marginLeft: "-0.35em",
              transform: `rotate(${angle}deg)`,
              transformOrigin: "bottom center"
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

export function FactArcSignature() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-2 top-[19%] z-20 flex h-32 w-32 items-center justify-center opacity-80 sm:left-4 sm:top-[18%] sm:h-36 sm:w-36 md:left-[max(1.5rem,calc(50%_-_600px))] md:top-[16%] md:h-40 md:w-40 md:opacity-85 lg:left-[max(1.5rem,calc(50%_-_650px))] lg:top-[14%] lg:h-48 lg:w-48 xl:left-[max(1.5rem,calc(50%_-_690px))] xl:top-[12%] xl:h-52 xl:w-52"
      initial={{
        opacity: 0,
        scale: 0.55,
        rotate: -38,
        x: -42,
        y: 22,
        filter: "blur(16px)"
      }}
      animate={{
        opacity: 0.86,
        scale: 1,
        rotate: -16,
        x: 0,
        y: 0,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 1.45,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full opacity-80"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "linear"
        }}
      >
        <TextArc text={ARC_TEXT} />
      </motion.div>

      <div className="absolute inset-[7%] rounded-full border border-white/10 opacity-50" />

      <div className="relative h-[68%] w-[68%] overflow-hidden rounded-full shadow-[0_18px_55px_rgba(255,255,255,0.14)]">
        <Image
          src="/fact-signature.png"
          alt="FACT Speciality Coffee signature"
          fill
          priority
          sizes="(min-width: 1280px) 142px, (min-width: 1024px) 130px, (min-width: 768px) 109px, (min-width: 640px) 98px, 87px"
          className="rounded-full object-contain"
        />
      </div>
    </motion.div>
  );
}
