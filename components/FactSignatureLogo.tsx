"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FactSignatureLogo() {
  return (
    <motion.div
      className="pointer-events-none absolute left-2 top-[19%] z-20 h-36 w-36 overflow-hidden rounded-full opacity-80 sm:left-4 sm:top-[18%] sm:h-40 sm:w-40 md:left-[max(1.5rem,calc(50%_-_600px))] md:top-[16%] md:h-44 md:w-44 md:opacity-85 lg:left-[max(1.5rem,calc(50%_-_650px))] lg:top-[14%] lg:h-56 lg:w-56 xl:left-[max(1.5rem,calc(50%_-_690px))] xl:top-[12%] xl:h-64 xl:w-64"
      initial={{
        opacity: 0,
        scale: 0.55,
        rotate: -42,
        x: -60,
        y: 24,
        filter: "blur(16px)"
      }}
      animate={{
        opacity: 0.82,
        scale: 1,
        rotate: -18,
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
      <Image
        src="/fact-signature.png"
        alt="FACT Speciality Coffee signature"
        fill
        priority
        sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 768px) 176px, (min-width: 640px) 160px, 144px"
        className="rounded-full object-contain drop-shadow-[0_18px_45px_rgba(255,255,255,0.18)]"
      />
    </motion.div>
  );
}
