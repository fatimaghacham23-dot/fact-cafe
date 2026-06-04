"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LiquidCtaButton } from "@/components/LiquidCtaButton";

export type StoryBeat = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  start: number;
  end: number;
  align?: "left" | "center" | "right";
  ctaLabel?: string;
  ctaHref?: string;
};

type FitMode = "contain" | "cover";

type ScrollSequenceProps = {
  ariaLabel?: string;
  beats: StoryBeat[];
  frameCount?: number;
  fitMode?: FitMode;
  getFrameSrc?: (index: number) => string;
  id?: string;
};

const FRAME_COUNT = 60;
const FIT_MODE: FitMode = "cover";
const MIN_READY_FRAMES = 8;
const TARGET_FPS = 120;
const POSITION_EPSILON = 1 / TARGET_FPS;
const FRAME_PLAYBACK_END = 0.92;
const PHONE_BREAKPOINT = 640;
const MOBILE_CUP_SCALE = 0.9;
const MOBILE_CUP_SHIFT_X = -12;
const STABLE_VH_PROPERTY = "--stable-vh";

const defaultGetFrameSrc = (index: number) =>
  `/sequence/frame_${String(index + 1).padStart(3, "0")}.jpg`;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function getFramePosition(progress: number, frameCount: number) {
  return clamp(progress / FRAME_PLAYBACK_END) * (frameCount - 1);
}

function getStableViewportHeight() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(STABLE_VH_PROPERTY)
    .trim();
  const parsedValue = Number.parseFloat(value);

  return value.endsWith("px") && Number.isFinite(parsedValue) && parsedValue > 0
    ? parsedValue
    : window.innerHeight;
}

function drawImage(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  fitMode: FitMode
) {
  if (image.naturalWidth === 0 || image.naturalHeight === 0) {
    return;
  }

  const width = canvas.width;
  const height = canvas.height;
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = width / height;
  const scale =
    fitMode === "cover"
      ? canvasRatio > imageRatio
        ? width / image.naturalWidth
        : height / image.naturalHeight
      : canvasRatio > imageRatio
        ? height / image.naturalHeight
        : width / image.naturalWidth;

  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;
  const isMobile = window.innerWidth < PHONE_BREAKPOINT;
  const mobileCupScale = isMobile ? MOBILE_CUP_SCALE : 1;
  const cssWidth = parseFloat(canvas.style.width) || window.innerWidth;
  const pixelRatio = canvas.width / Math.max(1, cssWidth);
  const mobileShiftX = isMobile ? MOBILE_CUP_SHIFT_X * pixelRatio : 0;
  const finalDrawWidth = drawWidth * mobileCupScale;
  const finalDrawHeight = drawHeight * mobileCupScale;
  const finalX = x + (drawWidth - finalDrawWidth) / 2 + mobileShiftX;
  const finalY = y + (drawHeight - finalDrawHeight) / 2;

  context.drawImage(image, finalX, finalY, finalDrawWidth, finalDrawHeight);
}

function drawFrame(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  fitMode: FitMode,
  nextImage?: HTMLImageElement,
  nextOpacity = 0
) {
  const context = canvas.getContext("2d", { alpha: false });

  if (!context || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "medium";
  drawImage(context, canvas, image, fitMode);

  if (
    nextImage &&
    nextImage.complete &&
    nextImage.naturalWidth > 0 &&
    nextImage.naturalHeight > 0 &&
    nextOpacity > 0
  ) {
    context.globalAlpha = nextOpacity;
    drawImage(context, canvas, nextImage, fitMode);
    context.globalAlpha = 1;
  }
}

function BeatOverlay({
  beat,
  progress,
  reducedMotion
}: {
  beat: StoryBeat;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const beatDuration = Math.max(0.001, beat.end - beat.start);
  const fadeDistance = Math.min(0.1, beatDuration * 0.4);
  const holdAtEnd = beat.end >= 1;
  const fadeInEnd = beat.start + fadeDistance;
  const fadeOutStart = beat.end - fadeDistance;
  const opacity = useTransform(
    progress,
    holdAtEnd
      ? [beat.start, fadeInEnd, beat.end]
      : [beat.start, fadeInEnd, fadeOutStart, beat.end],
    holdAtEnd ? [0, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    holdAtEnd
      ? [beat.start, fadeInEnd, beat.end]
      : [beat.start, fadeInEnd, fadeOutStart, beat.end],
    reducedMotion
      ? holdAtEnd
        ? [0, 0, 0]
        : [0, 0, 0, 0]
      : holdAtEnd
        ? [20, 0, 0]
        : [20, 0, 0, -20]
  );

  const alignment =
    beat.align === "left"
      ? "items-center text-center md:items-start md:text-left"
      : beat.align === "right"
        ? "items-center text-center md:items-end md:text-right"
        : "items-center text-center";

  const placement =
    beat.align === "left"
      ? "md:justify-start"
      : beat.align === "right"
        ? "md:justify-end"
        : "justify-center";

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 flex ${placement} px-6 sm:px-8`}
      style={{ opacity, y }}
    >
      <div
        className={`flex h-full w-full max-w-6xl flex-col justify-center ${alignment}`}
      >
        <div className="max-w-[42rem] drop-shadow-[0_8px_30px_rgba(0,0,0,0.75)]">
          {beat.eyebrow ? (
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {beat.eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.88] text-white/90 sm:text-6xl md:text-7xl lg:text-8xl">
            {beat.title}
          </h2>
          <p className="mt-6 max-w-xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
            {beat.subtitle}
          </p>
          {beat.ctaHref && beat.ctaLabel ? (
            <LiquidCtaButton
              href={beat.ctaHref}
              size="xl"
              className="pointer-events-auto relative z-30 mt-8 rounded-full px-8 py-4 font-body text-sm font-semibold text-white/90 backdrop-blur-md"
            >
              {beat.ctaLabel}
            </LiquidCtaButton>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function SceneTwoVisualLayers({
  reducedMotion,
  sceneEnd,
  sceneStart,
  scrollYProgress
}: {
  reducedMotion: boolean;
  sceneEnd: number;
  sceneStart: number;
  scrollYProgress: MotionValue<number>;
}) {
  const sceneDuration = sceneEnd - sceneStart;
  const at = (ratio: number) => sceneStart + sceneDuration * ratio;
  const layerOpacity = useTransform(
    scrollYProgress,
    [sceneStart, at(0.25), at(0.86), sceneEnd],
    reducedMotion ? [0, 0.16, 0.16, 0] : [0, 0.42, 0.42, 0]
  );
  const matchaX = useTransform(
    scrollYProgress,
    [sceneStart, at(0.48)],
    reducedMotion ? [0, 0] : [-180, 0]
  );
  const espressoX = useTransform(
    scrollYProgress,
    [at(0.1), at(0.58)],
    reducedMotion ? [0, 0] : [180, 0]
  );
  const iceY = useTransform(
    scrollYProgress,
    [at(0.2), at(0.68)],
    reducedMotion ? [0, 0] : [-160, 0]
  );
  const baseY = useTransform(
    scrollYProgress,
    [at(0.3), at(0.78)],
    reducedMotion ? [0, 0] : [160, 0]
  );
  const blur = useTransform(
    scrollYProgress,
    [sceneStart, at(0.48), sceneEnd],
    reducedMotion ? ["blur(8px)", "blur(8px)", "blur(8px)"] : ["blur(18px)", "blur(4px)", "blur(10px)"]
  );

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      style={{ opacity: layerOpacity }}
    >
      <div className="absolute inset-0 opacity-40 md:opacity-55">
        <motion.div
          className="pointer-events-none absolute left-[-12%] top-[48%] h-[18vh] w-[72vw] -rotate-6 rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(145,180,74,0.42), rgba(63,92,34,0.18) 45%, transparent 72%)",
            filter: blur,
            x: matchaX
          }}
        />
        <motion.div
          className="pointer-events-none absolute right-[-14%] top-[38%] h-[14vh] w-[64vw] rotate-6 rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(130,69,25,0.5), rgba(75,35,12,0.22) 48%, transparent 72%)",
            filter: blur,
            x: espressoX
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[8%] h-[28vh] w-[78vw] -translate-x-1/2 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 25% 40%, rgba(255,255,255,0.28), transparent 12%), radial-gradient(circle at 55% 25%, rgba(255,255,255,0.22), transparent 10%), radial-gradient(circle at 78% 55%, rgba(255,255,255,0.2), transparent 11%)",
            filter: blur,
            y: iceY
          }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-[8%] left-1/2 h-[20vh] w-[78vw] -translate-x-1/2 rotate-2 rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,135,54,0.42), rgba(41,70,32,0.2) 48%, transparent 76%)",
            filter: blur,
            y: baseY
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ScrollSequence({
  ariaLabel = "Scroll-linked product animation",
  beats,
  frameCount = FRAME_COUNT,
  fitMode = FIT_MODE,
  getFrameSrc = defaultGetFrameSrc,
  id
}: ScrollSequenceProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<Array<HTMLImageElement | undefined>>([]);
  const currentPositionRef = useRef(-1);
  const pendingPositionRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastViewportWidthRef = useRef(0);
  const orientationResizeTimeoutRef = useRef<number | null>(null);
  const mountedRef = useRef(false);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 360,
    damping: 42,
    mass: 0.35,
    restDelta: 0.0001
  });

  const progress = reducedMotion ? scrollYProgress : smoothProgress;
  const isReady = firstFrameReady && loadedFrames >= Math.min(MIN_READY_FRAMES, frameCount);
  const loadProgress = Math.round((loadedFrames / frameCount) * 100);
  const sceneTwoBeat = beats[1];

  const frameSources = useMemo(
    () => Array.from({ length: frameCount }, (_, index) => getFrameSrc(index)),
    [frameCount, getFrameSrc]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;
    let lastWidth = window.innerWidth;
    let orientationTimeout: number | null = null;

    const setStableVh = () => {
      root.style.setProperty(STABLE_VH_PROPERTY, `${window.innerHeight}px`);
    };

    setStableVh();

    const handleResize = () => {
      const nextWidth = window.innerWidth;

      if (nextWidth !== lastWidth) {
        lastWidth = nextWidth;
        setStableVh();
      }
    };

    const handleOrientationChange = () => {
      if (orientationTimeout !== null) {
        window.clearTimeout(orientationTimeout);
      }

      orientationTimeout = window.setTimeout(() => {
        lastWidth = window.innerWidth;
        setStableVh();
        orientationTimeout = null;
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);

      if (orientationTimeout !== null) {
        window.clearTimeout(orientationTimeout);
      }
    };
  }, []);

  const render = useCallback(
    (position: number, force = false) => {
      const canvas = canvasRef.current;
      const nextPosition = clamp(position, 0, frameCount - 1);
      const lowerIndex = Math.floor(nextPosition);
      const frame = framesRef.current[lowerIndex];

      if (!canvas || !frame || !frame.complete) {
        return;
      }

      if (
        !force &&
        Math.abs(currentPositionRef.current - nextPosition) < POSITION_EPSILON
      ) {
        return;
      }

      pendingPositionRef.current = nextPosition;

      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(() => {
        const framePosition = pendingPositionRef.current;
        const baseIndex = Math.floor(framePosition);
        const blend = framePosition - baseIndex;
        const baseFrame = framesRef.current[baseIndex];
        const nextFrame = framesRef.current[Math.min(frameCount - 1, baseIndex + 1)];

        if (baseFrame?.complete) {
          drawFrame(canvas, baseFrame, fitMode, nextFrame, blend);
          currentPositionRef.current = framePosition;
        }

        rafRef.current = null;
      });
    },
    [fitMode, frameCount]
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = window.innerWidth;
    const height = getStableViewportHeight();
    const nextWidth = Math.round(width * pixelRatio);
    const nextHeight = Math.round(height * pixelRatio);

    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    const position = Math.max(0, currentPositionRef.current);
    render(position, true);
  }, [render]);

  useEffect(() => {
    mountedRef.current = true;
    framesRef.current = new Array(frameCount);
    currentPositionRef.current = -1;
    pendingPositionRef.current = 0;
    setLoadedFrames(0);
    setFirstFrameReady(false);

    const firstFrame = new Image();
    firstFrame.decoding = "async";
    firstFrame.src = frameSources[0];
    framesRef.current[0] = firstFrame;

    firstFrame.onload = () => {
      if (!mountedRef.current) {
        return;
      }

      setLoadedFrames((count) => Math.max(count, 1));
      setFirstFrameReady(true);
      render(0, true);
    };

    const remainingFrames = frameSources.slice(1).map((src, offset) => {
      const image = new Image();
      const index = offset + 1;
      image.decoding = "async";
      image.src = src;
      framesRef.current[index] = image;

      image.onload = () => {
        if (!mountedRef.current) {
          return;
        }

        setLoadedFrames((count) => count + 1);
      };

      return image;
    });

    resizeCanvas();
    lastViewportWidthRef.current = window.innerWidth;

    const handleResize = () => {
      const nextWidth = window.innerWidth;
      const isHeightOnlyResize = nextWidth === lastViewportWidthRef.current;
      const isLikelyMobile =
        nextWidth < PHONE_BREAKPOINT ||
        window.matchMedia("(pointer: coarse)").matches;

      if (isLikelyMobile && isHeightOnlyResize) {
        return;
      }

      lastViewportWidthRef.current = nextWidth;
      resizeCanvas();
    };

    const handleOrientationChange = () => {
      if (orientationResizeTimeoutRef.current !== null) {
        window.clearTimeout(orientationResizeTimeoutRef.current);
      }

      orientationResizeTimeoutRef.current = window.setTimeout(() => {
        lastViewportWidthRef.current = window.innerWidth;
        resizeCanvas();
        orientationResizeTimeoutRef.current = null;
      }, 350);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      mountedRef.current = false;
      firstFrame.onload = null;
      remainingFrames.forEach((image) => {
        image.onload = null;
      });
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);

      if (orientationResizeTimeoutRef.current !== null) {
        window.clearTimeout(orientationResizeTimeoutRef.current);
      }

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [frameCount, frameSources, render, resizeCanvas]);

  useMotionValueEvent(progress, "change", (latest) => {
    if (!isReady) {
      return;
    }

    const index = getFramePosition(latest, frameCount);

    render(index);
  });

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const index = getFramePosition(progress.get(), frameCount);

    render(index, true);
  }, [frameCount, isReady, progress, render]);

  return (
    <section
      id={id}
      ref={wrapperRef}
      aria-label={ariaLabel}
      className="relative bg-[#050505]"
      style={{ height: "calc(var(--stable-vh) * 4)" }}
    >
      <div className="relative sticky top-0 h-[var(--stable-vh)] w-full overflow-hidden bg-[#050505]">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={`absolute inset-0 z-0 h-[var(--stable-vh)] w-screen bg-[#050505] transition-opacity duration-700 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {sceneTwoBeat ? (
          <SceneTwoVisualLayers
            reducedMotion={Boolean(reducedMotion)}
            sceneEnd={sceneTwoBeat.end}
            sceneStart={sceneTwoBeat.start}
            scrollYProgress={scrollYProgress}
          />
        ) : null}

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[24vh] sm:h-36"
          style={{
            background:
              "linear-gradient(to bottom, #050505 0%, rgba(5, 5, 5, 0.78) 28%, rgba(5, 5, 5, 0) 100%)"
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[24vh] sm:h-36"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5, 5, 5, 0.78) 28%, rgba(5, 5, 5, 0) 100%)"
          }}
        />

        {!isReady ? (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050505] px-6 text-center">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                Loading experience
              </p>
              <p className="mt-4 font-body text-sm tabular-nums text-white/60">
                {Math.min(loadProgress, 100)}%
              </p>
            </div>
          </div>
        ) : null}

        {beats.map((beat) => (
          <BeatOverlay
            key={`${beat.title}-${beat.start}`}
            beat={beat}
            progress={progress}
            reducedMotion={Boolean(reducedMotion)}
          />
        ))}
      </div>
    </section>
  );
}
