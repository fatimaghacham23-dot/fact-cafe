import type { Metadata } from "next";
import ScrollSequence, { type StoryBeat } from "@/components/ScrollSequence";
import { FactArcSignature } from "@/components/FactArcSignature";
import { FluidNav } from "@/components/FluidNav";
import { HeroTypewriterLine } from "@/components/HeroTypewriterLine";
import { LiquidGlassPanel } from "@/components/LiquidGlassPanel";
import { PaymentMethodsVideo } from "@/components/PaymentMethodsVideo";
import { SiteButton } from "@/components/SiteButton";
import { GradientBackground } from "@/components/paper-design-shader-background";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { HandDrawnOval } from "@/components/ui/hand-writing-text";

const instagramUrl = "https://instagram.com/fact.kwt";

export const metadata: Metadata = {
  title: "FACT SPECIALITY COFFEE Kuwait",
  description:
    "FACT SPECIALITY COFFEE is a cozy specialty coffee spot on 79 St, Kuwait, open daily with extended weekend hours.",
  keywords: [
    "FACT coffee Kuwait",
    "speciality coffee Kuwait",
    "coffee 79 St Kuwait",
    "FACT KWT",
    "cozy coffee Kuwait"
  ]
};

const storyBeats: StoryBeat[] = [
  {
    eyebrow: "THE FACT EXPERIENCE",
    title: "Cozy coffee, fast rituals.",
    subtitle:
      "From morning espresso to late weekend cups, FACT keeps the experience simple, premium, and easy to enjoy.",
    start: 0,
    end: 0.2,
    align: "center"
  },
  {
    eyebrow: "79 ST, KUWAIT",
    title: "Built for everyday stops.",
    subtitle:
      "Drop in for cozy meetups, focused afternoons, and quick premium coffee service in a clean boutique cafe atmosphere.",
    start: 0.25,
    end: 0.45,
    align: "left"
  },
  {
    eyebrow: "MODERN AND EASY",
    title: "Tap, pay, carry on.",
    subtitle:
      "NFC, credit cards, and debit cards are accepted, with free street and lot parking available.",
    start: 0.5,
    end: 0.7,
    align: "right"
  },
  {
    eyebrow: "OPEN DAILY",
    title: "Late weekend pours.",
    subtitle:
      "Visit from 8:00 AM, with service until 10:00 PM Sunday to Wednesday and 11:00 PM on Thursday and Friday.",
    start: 0.94,
    end: 1,
    align: "center",
    ctaLabel: "Find us",
    ctaHref: "#visit"
  }
];

const heroMorphTexts = ["Coffee", "Kuwait", "Boutique"];
const finishMorphTexts = ["daily.", "weekends.", "coffee."];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] font-body text-white">
      <FluidNav />
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="relative min-h-[var(--stable-vh)] overflow-hidden bg-[#050505]"
      >
        <GradientBackground />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        <FactArcSignature
          className="
            absolute
            top-[20%]
            z-20
            hidden
            h-48
            w-48
            md:flex
            lg:h-56
            lg:w-56
            xl:h-60
            xl:w-60
          "
          style={{ left: "max(2rem, calc(50% - 720px))" }}
        />
        <div className="relative z-10 mx-auto flex min-h-[var(--stable-vh)] w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:px-8 md:py-24">
          <div className="relative z-20 mb-8 flex w-full justify-start px-5 pt-20 md:hidden">
            <FactArcSignature className="relative h-28 w-28 rotate-[-16deg] sm:h-32 sm:w-32" />
          </div>
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            SPECIALITY COFFEE · KUWAIT
          </p>
          <div className="relative mx-auto flex w-full flex-col items-center justify-center">
            <div className="relative mx-auto w-fit px-12 py-8 md:px-20 md:py-10 lg:px-24 lg:py-12">
              <HandDrawnOval />
              <h1
                id="hero-title"
                className="relative z-10 text-center font-display text-6xl font-semibold leading-none tracking-tight text-white md:text-8xl lg:text-9xl"
              >
                FACT.
              </h1>
            </div>
            <div
              aria-hidden="true"
              className="relative z-10 h-[4.75rem] w-full max-w-5xl sm:h-[5.75rem] md:h-[7rem] lg:h-[8.5rem]"
            >
              <GooeyText
                texts={heroMorphTexts}
                morphTime={1}
                cooldownTime={0.35}
                className="flex h-full items-center justify-center font-display font-semibold"
                textClassName="text-6xl font-semibold leading-[0.86] text-white/90 sm:text-7xl md:text-8xl lg:text-9xl"
              />
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
            A cozy specialty coffee experience on 79 St - crafted for slow
            mornings, focused afternoons, and late weekend pours.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <SiteButton
              ariaLabel="Open FACT SPECIALITY COFFEE menu on Instagram"
              external
              href={instagramUrl}
            >
              View Menu
            </SiteButton>
            <SiteButton href="#visit">
              Find Us
            </SiteButton>
          </div>
        </div>
        <HeroTypewriterLine />
      </section>

      <ScrollSequence
        id="experience"
        ariaLabel="Scroll-linked FACT SPECIALITY COFFEE brand experience"
        beats={storyBeats}
      />

      <section
        id="visit"
        aria-labelledby="visit-title"
        className="relative px-6 py-24 sm:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            Visit
          </p>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <h2
                id="visit-title"
                className="font-display text-5xl font-semibold leading-[0.92] text-white/90 sm:text-6xl md:text-7xl"
              >
                Visit FACT in Kuwait
              </h2>
              <p className="mt-6 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
                Located on 79 St, FACT SPECIALITY COFFEE is built for everyday
                coffee stops, cozy meetups, and quick premium service.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Address", "79 St, 83240, Kuwait"],
                [
                  "Hours",
                  "8:00 AM - 10:00 PM. Thursday & Friday until 11:00 PM"
                ],
                ["Payments", "NFC, credit, and debit cards accepted"],
                ["Parking", "Free street and lot parking available"]
              ].map(([title, body]) => (
                <LiquidGlassPanel
                  key={title}
                  className="rounded-[2rem] px-5 py-5 md:px-6 md:py-6"
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                    {title}
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/75">
                    {body}
                  </p>
                </LiquidGlassPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="instagram"
        aria-labelledby="instagram-title"
        className="relative px-6 py-20 sm:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-y border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              @fact.kwt
            </p>
            <h2
              id="instagram-title"
              className="font-display text-4xl font-semibold leading-none text-white/90 sm:text-5xl md:text-6xl"
            >
              Order or ask through Instagram
            </h2>
            <p className="mt-5 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              For today&apos;s menu, availability, and custom requests, reach FACT
              directly on Instagram.
            </p>
          </div>
          <SiteButton
            ariaLabel="Open FACT SPECIALITY COFFEE Instagram"
            external
            href={instagramUrl}
          >
            Open @fact.kwt
          </SiteButton>
        </div>
      </section>

      <PaymentMethodsVideo />

      <section
        id="finish"
        aria-labelledby="finish-title"
        className="relative flex px-6 pt-12 pb-24 sm:px-8 md:min-h-screen md:items-center md:pt-24 md:pb-32"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              FACT SPECIALITY COFFEE
            </p>
            <h2
              id="finish-title"
              className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.92] text-white/90 sm:text-6xl md:text-7xl"
            >
              Cozy, precise, and crafted for Kuwait.
            </h2>
            <div
              aria-hidden="true"
              className="block w-full max-w-full translate-x-0 translate-y-0 overflow-visible pt-1 text-left md:translate-x-28 md:-translate-y-2 lg:translate-x-36"
            >
              <GooeyText
                texts={finishMorphTexts}
                morphTime={1}
                cooldownTime={0.35}
                className="relative block h-[clamp(3.2rem,19vw,5rem)] w-full max-w-full overflow-visible font-display font-semibold leading-none text-white md:h-[5.5rem]"
                textClassName="left-0 top-0 text-left text-[clamp(3rem,18vw,4.8rem)] font-semibold leading-none text-white/90 md:text-7xl"
              />
            </div>
          </div>
          <div className="md:pb-3">
            <p className="text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              Visit FACT SPECIALITY COFFEE on 79 St for a premium coffee stop
              with cozy energy, modern payments, and late weekend hours.
            </p>
            <div className="mt-8">
              <SiteButton
                ariaLabel="Visit FACT SPECIALITY COFFEE on Instagram"
                external
                href={instagramUrl}
              >
                Visit Instagram
              </SiteButton>
            </div>
            <p className="mt-5 font-body text-sm text-white/40">
              Open daily from 8:00 AM.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
