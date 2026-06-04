"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";

export function HeroTypewriterLine() {
  return (
    <motion.div
      className="
        pointer-events-none
        absolute
        bottom-[12%]
        left-1/2
        z-20
        w-full
        max-w-[92vw]
        -translate-x-1/2
        px-6
        text-center
        text-base
        font-body
        font-medium
        leading-tight
        tracking-tight
        text-white/55

        sm:bottom-[13%]
        sm:text-lg

        md:bottom-[10%]
        md:max-w-[720px]
        md:text-xl

        lg:bottom-[9%]
        lg:text-2xl
      "
      initial={{ opacity: 0, x: "-50%", y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: "-50%", y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        delay: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <span className="text-white/45">Made for</span>
        <span className="text-xl leading-none md:text-2xl">🌞</span>

        <Typewriter
          text={[
            "specialty coffee.",
            "quiet mornings.",
            "weekend orders.",
            "Kuwait coffee lovers.",
          ]}
          speed={65}
          waitTime={1600}
          deleteSpeed={35}
          cursorChar="_"
          className="inline-block min-w-[150px] text-left font-body text-white/85 sm:min-w-[180px] md:min-w-[220px]"
          cursorClassName="ml-1 text-white/50"
        />
      </div>
    </motion.div>
  );
}
