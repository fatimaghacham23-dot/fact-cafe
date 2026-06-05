import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

const businesses = [
  {
    slug: "drip-and-sip",
    packageName: "drip-and-sip-landing",
    brandName: "Drip & Sip",
    markText: "D&S",
    type: "Neighborhood coffee spot",
    description:
      "A warm local coffee spot on the border of Monot and Bechara El Khoury, known for neighborhood energy and very extended daily hours.",
    address: "Monot Street, Bchara El Khoury, Beirut",
    hours: "Open daily from 6:00 AM to 2:00 AM",
    phoneDisplay: "+961 76 765 458",
    contactBody: "WhatsApp: +961 76 765 458",
    primaryHref: "https://wa.me/96176765458",
    primaryCta: "WhatsApp Us",
    socialDisplay: "@dripandsip.lb",
    socialHref: "https://instagram.com/dripandsip.lb",
    heroCopy: "Coffee from early mornings to late Beirut nights.",
    finalCta: "Plan your next coffee stop at Drip & Sip.",
    heroSupport:
      "A warm neighborhood coffee stop between Monot and Bechara El Khoury, built for morning regulars, late-night walks, and easy Beirut meetups.",
    visitTitle: "Visit Drip & Sip in Beirut",
    visitIntro:
      "Drop by for familiar neighborhood energy, long opening hours, and a coffee stop that stays useful from sunrise to deep into the night.",
    socialTitle: "Follow the late-night coffee rhythm",
    socialBody:
      "For quick questions, fresh updates, and what is happening today, reach Drip & Sip through Instagram or WhatsApp.",
    finishTitle: "Warm, local, and ready for Beirut nights.",
    finishBody:
      "Make Drip & Sip your easy stop for morning caffeine, neighborhood catchups, and late coffee plans near Monot.",
    openNote: "Open daily from 6:00 AM.",
    storyBeats: [
      {
        eyebrow: "THE DRIP & SIP EXPERIENCE",
        title: "Neighborhood coffee with long hours.",
        subtitle:
          "From early espresso to late-night cups, Drip & Sip keeps the door open for Beirut routines that do not fit a narrow schedule.",
        start: 0,
        end: 0.2,
        align: "center"
      },
      {
        eyebrow: "MONOT - BECHARA EL KHOURY",
        title: "A familiar stop on the edge of the city.",
        subtitle:
          "Warm service, easy pacing, and a local address make it a natural pause between work, errands, and nights out.",
        start: 0.25,
        end: 0.45,
        align: "left"
      },
      {
        eyebrow: "CONTACT - VISIT - SIP",
        title: "Message first or head straight over.",
        subtitle:
          "Use WhatsApp for quick questions, then find the shop on Monot Street when your next coffee window opens.",
        start: 0.5,
        end: 0.7,
        align: "right"
      },
      {
        eyebrow: "OPEN DAILY",
        title: "Coffee until 2:00 AM.",
        subtitle:
          "Plan an early stop, a late cup, or the coffee run that holds the night together.",
        start: 0.94,
        end: 1,
        align: "center",
        ctaLabel: "Find Us",
        ctaHref: "#visit"
      }
    ],
    heroMorphTexts: ["Coffee", "Monot", "Late"],
    finishMorphTexts: ["daily.", "late.", "local."],
    typewriterItems: [
      "early Monot mornings.",
      "late-night coffee runs.",
      "neighborhood meetups.",
      "Beirut after dark."
    ],
    keywords: [
      "Drip and Sip Beirut",
      "Drip & Sip Monot",
      "coffee Bechara El Khoury",
      "late night coffee Beirut"
    ]
  },
  {
    slug: "standard-beirut",
    packageName: "standard-beirut-landing",
    brandName: "Standard",
    markText: "STD",
    type: "Cafe - Bar - Social lounge",
    description:
      "A Mar Mikhael specialty fixture that works as a quiet remote-work haven by day and a relaxed social lounge by night.",
    address: "Mar Antonios Street, Mar Mikhael, Beirut",
    hours:
      "Monday-Thursday and Sunday: 12:00 PM - 1:00 AM. Friday-Saturday: 12:00 PM - 2:00 AM",
    phoneDisplay: "+961 71 555 727",
    contactBody: "WhatsApp: +961 71 555 727",
    primaryHref: "https://wa.me/96171555727",
    primaryCta: "WhatsApp Us",
    socialDisplay: "@standard.beirut",
    socialHref: "https://instagram.com/standard.beirut",
    heroCopy:
      "A quiet daytime workspace. A relaxed Beirut lounge after dark.",
    finalCta: "From laptop hours to late conversations.",
    heroSupport:
      "A Mar Mikhael cafe-bar for focused afternoons, creative meetings, and unhurried social hours after sunset.",
    visitTitle: "Visit Standard in Mar Mikhael",
    visitIntro:
      "Settle into a daytime work rhythm, then stay as the room shifts into a relaxed neighborhood lounge.",
    socialTitle: "Keep up with Standard",
    socialBody:
      "For current updates, table questions, and the mood of the week, reach Standard through Instagram or WhatsApp.",
    finishTitle: "A workday cafe that knows how to stay out late.",
    finishBody:
      "Bring the laptop by day, come back with friends by night, or let Standard handle both parts of the plan.",
    openNote: "Open from 12:00 PM.",
    storyBeats: [
      {
        eyebrow: "THE STANDARD EXPERIENCE",
        title: "Work by day. Lounge by night.",
        subtitle:
          "Standard balances quiet focus with a softer after-dark pace, giving Mar Mikhael a cafe that can move with the day.",
        start: 0,
        end: 0.2,
        align: "center"
      },
      {
        eyebrow: "MAR MIKHAEL",
        title: "Built for creative pauses.",
        subtitle:
          "Remote work, catchups, and relaxed conversations all fit inside the same polished Beirut rhythm.",
        start: 0.25,
        end: 0.45,
        align: "left"
      },
      {
        eyebrow: "CONTACT - VISIT - SIP",
        title: "From quick messages to long tables.",
        subtitle:
          "Use WhatsApp for questions, then find Standard on Mar Antonios Street when the day needs a better setting.",
        start: 0.5,
        end: 0.7,
        align: "right"
      },
      {
        eyebrow: "OPEN LATE",
        title: "Stay for the second half.",
        subtitle:
          "Evenings run late, with Friday and Saturday service until 2:00 AM.",
        start: 0.94,
        end: 1,
        align: "center",
        ctaLabel: "Find Us",
        ctaHref: "#visit"
      }
    ],
    heroMorphTexts: ["Cafe", "Lounge", "Work"],
    finishMorphTexts: ["day.", "night.", "Beirut."],
    typewriterItems: [
      "laptop hours.",
      "creative breaks.",
      "Mar Mikhael evenings.",
      "quiet conversations."
    ],
    keywords: [
      "Standard Beirut",
      "Standard Mar Mikhael",
      "cafe bar Beirut",
      "remote work cafe Beirut"
    ]
  },
  {
    slug: "diell-coffee",
    packageName: "diell-coffee-landing",
    brandName: "Diell'",
    markText: "Diell'",
    type: "Cozy neighborhood cafe",
    description:
      "A highly aesthetic cafe in Hamra known for cozy seating, homemade desserts, swing seats, and a study-friendly atmosphere.",
    address: "Makdessi Street, Hamra, Beirut",
    hours:
      "Monday-Saturday: 7:00 AM - 12:00 AM. Sunday: 8:00 AM - 12:00 AM",
    phoneDisplay: "+961 1 741 012",
    contactBody:
      "Phone: +961 1 741 012. WhatsApp available through the contact button.",
    primaryHref: "https://wa.me/9618172927",
    phoneHref: "tel:+9611741012",
    primaryCta: "Contact Us",
    socialDisplay: "@diellcoffeeshop",
    socialHref: "https://instagram.com/diellcoffeeshop",
    heroCopy:
      "Hamra's cozy corner for coffee, desserts, and study hours.",
    finalCta:
      "Settle in for coffee, dessert, and a slower Hamra moment.",
    heroSupport:
      "A cozy Hamra cafe for study sessions, homemade desserts, soft seating, and the kind of coffee break that stretches comfortably.",
    visitTitle: "Visit Diell' in Hamra",
    visitIntro:
      "Find a quiet corner, share dessert, or make the cafe your study-friendly pause on Makdessi Street.",
    socialTitle: "See what is fresh at Diell'",
    socialBody:
      "For dessert updates, cozy corners, and quick questions, reach Diell' through Instagram or the contact button.",
    finishTitle: "Coffee, dessert, and a softer Hamra pace.",
    finishBody:
      "Choose Diell' for study hours, homemade sweets, and a cafe moment that feels calm without going quiet.",
    openNote: "Open from 7:00 AM Monday-Saturday.",
    storyBeats: [
      {
        eyebrow: "THE DIELL' EXPERIENCE",
        title: "Cozy seating and study hours.",
        subtitle:
          "Diell' brings together coffee, desserts, and a warm Hamra setting for focused afternoons and soft evening pauses.",
        start: 0,
        end: 0.2,
        align: "center"
      },
      {
        eyebrow: "MAKDESSI STREET",
        title: "Hamra energy, slowed down.",
        subtitle:
          "Swing seats, aesthetic corners, and homemade sweets give the cafe a gentle rhythm for students and regulars.",
        start: 0.25,
        end: 0.45,
        align: "left"
      },
      {
        eyebrow: "CONTACT - VISIT - SIP",
        title: "Come for coffee, stay for dessert.",
        subtitle:
          "Use the contact button for quick questions, then find Diell' on Makdessi Street when Hamra calls.",
        start: 0.5,
        end: 0.7,
        align: "right"
      },
      {
        eyebrow: "OPEN DAILY",
        title: "A calm corner until midnight.",
        subtitle:
          "Weekdays and weekends both leave room for coffee, dessert, and study time.",
        start: 0.94,
        end: 1,
        align: "center",
        ctaLabel: "Find Us",
        ctaHref: "#visit"
      }
    ],
    heroMorphTexts: ["Hamra", "Dessert", "Study"],
    finishMorphTexts: ["coffee.", "dessert.", "slow."],
    typewriterItems: [
      "Hamra study sessions.",
      "homemade desserts.",
      "cozy coffee dates.",
      "slower afternoons."
    ],
    keywords: [
      "Diell coffee Hamra",
      "Diell coffeeshop Beirut",
      "Hamra cafe desserts",
      "study cafe Beirut"
    ]
  },
  {
    slug: "sip-and-go-coffee-house",
    packageName: "sip-and-go-coffee-house-landing",
    brandName: "Sip & Go Coffee House",
    markText: "S&G",
    type: "Practical daytime coffee shop",
    description:
      "A straightforward coffee shop focused on daytime espresso operations for local professionals, commuters, and early risers.",
    address: "VGPF+54F, Beirut District",
    hours: "Monday-Saturday: 8:00 AM - 10:00 PM. Sunday: Closed",
    phoneDisplay: "+961 78 730 678",
    contactBody: "WhatsApp: +961 78 730 678",
    primaryHref: "https://wa.me/96178730678",
    primaryCta: "WhatsApp Us",
    socialDisplay: "Regional tags: #sipandgobeirut",
    socialHref: null,
    heroCopy:
      "Fast coffee for workdays, commutes, and everyday Beirut routines.",
    finalCta: "Your practical stop for daily espresso.",
    heroSupport:
      "A straightforward daytime coffee shop for espresso runs, work breaks, commuter stops, and the routines that need coffee without ceremony.",
    visitTitle: "Visit Sip & Go Coffee House",
    visitIntro:
      "Keep the stop simple: practical hours, direct WhatsApp contact, and a daytime coffee rhythm for local professionals.",
    socialTitle: "Message before your next coffee run",
    socialBody:
      "For quick questions or directions, use WhatsApp or open the map before you head out.",
    finishTitle: "Fast coffee for the useful part of the day.",
    finishBody:
      "Make Sip & Go Coffee House your practical stop for espresso, workday breaks, and reliable daytime coffee.",
    openNote: "Open Monday-Saturday from 8:00 AM.",
    storyBeats: [
      {
        eyebrow: "THE SIP & GO EXPERIENCE",
        title: "Coffee that keeps the day moving.",
        subtitle:
          "Sip & Go Coffee House keeps things direct for commuters, early risers, and professionals who need a reliable espresso stop.",
        start: 0,
        end: 0.2,
        align: "center"
      },
      {
        eyebrow: "BEIRUT DISTRICT",
        title: "A practical stop for daily routines.",
        subtitle:
          "The focus is simple: daytime coffee service, quick contact, and a clean path from craving to cup.",
        start: 0.25,
        end: 0.45,
        align: "left"
      },
      {
        eyebrow: "CONTACT - VISIT - SIP",
        title: "WhatsApp first, coffee next.",
        subtitle:
          "Use the direct WhatsApp link for quick questions, then open the map and keep the coffee run efficient.",
        start: 0.5,
        end: 0.7,
        align: "right"
      },
      {
        eyebrow: "DAYTIME HOURS",
        title: "Espresso through the workday.",
        subtitle:
          "Open Monday through Saturday from 8:00 AM to 10:00 PM for everyday coffee stops.",
        start: 0.94,
        end: 1,
        align: "center",
        ctaLabel: "Find Us",
        ctaHref: "#visit"
      }
    ],
    heroMorphTexts: ["Espresso", "Workday", "Go"],
    finishMorphTexts: ["quick.", "daily.", "done."],
    typewriterItems: [
      "quick espresso.",
      "workday routines.",
      "commuter stops.",
      "daytime coffee runs."
    ],
    keywords: [
      "Sip and Go Coffee House Beirut",
      "Sip & Go Beirut",
      "daytime coffee Beirut",
      "espresso Beirut District"
    ]
  },
  {
    slug: "play-and-sip",
    packageName: "play-and-sip-landing",
    brandName: "Play and sip",
    markText: "P&S",
    type: "Interactive social cafe",
    description:
      "A community-centric cafe open deep into the night, combining custom beverage menus with a social, interactive setting.",
    address: "VFQV+VC4, Beirut District",
    hours: "Open daily from 8:00 AM to 3:00 AM",
    phoneDisplay: "+961 71 239 947",
    contactBody: "WhatsApp: +961 71 239 947",
    primaryHref: "https://wa.me/96171239947",
    primaryCta: "WhatsApp Us",
    socialDisplay: "@playandsip.beirut",
    socialHref: "https://instagram.com/playandsip.beirut",
    heroCopy: "Coffee, games, and social nights until late.",
    finalCta: "Stay late, play longer, sip better.",
    heroSupport:
      "A social Beirut cafe for custom drinks, interactive nights, and late community energy that keeps the table alive.",
    visitTitle: "Visit Play and sip in Beirut",
    visitIntro:
      "Come for custom drinks, stay for the interactive setting, and let the night stretch with friends.",
    socialTitle: "Join the Play and sip rhythm",
    socialBody:
      "For late-night updates, custom drink notes, and quick questions, reach Play and sip through Instagram or WhatsApp.",
    finishTitle: "Coffee, games, and community until 3:00 AM.",
    finishBody:
      "Make Play and sip your social cafe for late plans, custom beverages, and nights that need one more round.",
    openNote: "Open daily from 8:00 AM.",
    storyBeats: [
      {
        eyebrow: "THE PLAY AND SIP EXPERIENCE",
        title: "A social cafe built for late nights.",
        subtitle:
          "Play and sip blends custom drinks with interactive tables, giving Beirut a community cafe that stays awake with the room.",
        start: 0,
        end: 0.2,
        align: "center"
      },
      {
        eyebrow: "BEIRUT DISTRICT",
        title: "Games, drinks, and easy momentum.",
        subtitle:
          "The setting is made for groups, regulars, and nights where coffee turns into a longer social plan.",
        start: 0.25,
        end: 0.45,
        align: "left"
      },
      {
        eyebrow: "CONTACT - VISIT - SIP",
        title: "Bring the group and stay late.",
        subtitle:
          "Use WhatsApp for quick questions, then open the map and let the night find its table.",
        start: 0.5,
        end: 0.7,
        align: "right"
      },
      {
        eyebrow: "OPEN DAILY",
        title: "Nights can run until 3:00 AM.",
        subtitle:
          "Plan a social coffee stop, a game night, or a late community hangout any day of the week.",
        start: 0.94,
        end: 1,
        align: "center",
        ctaLabel: "Find Us",
        ctaHref: "#visit"
      }
    ],
    heroMorphTexts: ["Play", "Sip", "Late"],
    finishMorphTexts: ["late.", "longer.", "together."],
    typewriterItems: [
      "game nights.",
      "custom drinks.",
      "late community tables.",
      "social coffee runs."
    ],
    keywords: [
      "Play and sip Beirut",
      "playandsip Beirut",
      "social cafe Beirut",
      "games cafe Beirut"
    ]
  }
];

const gitignore = `node_modules
.next
out
dist
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.vercel
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
`;

const eslintConfig = `{
  "extends": "next/core-web-vitals"
}
`;

function q(value) {
  return JSON.stringify(value);
}

function pretty(value) {
  return JSON.stringify(value, null, 2);
}

function mapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function metadataTitle(site) {
  return `${site.brandName} | ${site.type} in Beirut`;
}

function metadataDescription(site) {
  return `${site.brandName}: ${site.description}`;
}

function layoutTemplate(site) {
  return `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: ${q(metadataTitle(site))},
  description: ${q(metadataDescription(site))},
  keywords: ${pretty(site.keywords)},
  openGraph: {
    title: ${q(metadataTitle(site))},
    description: ${q(metadataDescription(site))},
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="image" href="/sequence/frame_001.webp" />
        <link rel="preload" as="image" href="/sequence/frame_002.webp" />
        <link rel="preload" as="image" href="/sequence/frame_003.webp" />
        <link rel="preload" as="image" href="/sequence/frame_004.webp" />
        <link rel="preload" as="image" href="/sequence/frame_005.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
`;
}

function pageTemplate(site) {
  const siteData = {
    brandName: site.brandName,
    markText: site.markText,
    type: site.type,
    heroCopy: site.heroCopy,
    heroSupport: site.heroSupport,
    address: site.address,
    hours: site.hours,
    phoneDisplay: site.phoneDisplay,
    contactBody: site.contactBody,
    primaryHref: site.primaryHref,
    phoneHref: site.phoneHref ?? null,
    primaryCta: site.primaryCta,
    mapsHref: mapsUrl(site.address),
    socialDisplay: site.socialDisplay,
    socialHref: site.socialHref,
    socialTitle: site.socialTitle,
    socialBody: site.socialBody,
    visitTitle: site.visitTitle,
    visitIntro: site.visitIntro,
    finishTitle: site.finishTitle,
    finishBody: site.finishBody,
    finalCta: site.finalCta,
    openNote: site.openNote,
    arcText: `${site.brandName.toUpperCase()} - ${site.type.toUpperCase()} - BEIRUT - `,
    videoLabel: "Contact - Visit - Sip",
    videoAriaLabel: `${site.brandName} contact and visit video`
  };

  const visitCards = [
    ["Address", site.address],
    ["Hours", site.hours],
    ["Phone / WhatsApp", site.contactBody],
    ["Social", site.socialDisplay],
    ["Payment", "Pay at the counter when you visit."]
  ];

  return `import type { Metadata } from "next";
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

const site = ${pretty(siteData)} as const;

export const metadata: Metadata = {
  title: ${q(metadataTitle(site))},
  description: ${q(metadataDescription(site))},
  keywords: ${pretty(site.keywords)}
};

const storyBeats: StoryBeat[] = ${pretty(site.storyBeats)};

const heroMorphTexts = ${pretty(site.heroMorphTexts)};
const finishMorphTexts = ${pretty(site.finishMorphTexts)};
const typewriterItems = ${pretty(site.typewriterItems)};
const visitCards = ${pretty(visitCards)} as const;

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
          arcText={site.arcText}
          brandName={site.brandName}
          markText={site.markText}
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
            <FactArcSignature
              arcText={site.arcText}
              brandName={site.brandName}
              markText={site.markText}
              className="relative h-28 w-28 rotate-[-16deg] sm:h-32 sm:w-32"
            />
          </div>
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            {site.type} - Beirut
          </p>
          <div className="relative mx-auto flex w-full flex-col items-center justify-center">
            <div className="relative mx-auto w-full max-w-5xl px-4 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
              <HandDrawnOval />
              <h1
                id="hero-title"
                className="relative z-10 mx-auto max-w-[920px] text-center font-display text-[clamp(3.2rem,11vw,8.5rem)] font-semibold leading-[0.86] tracking-normal text-white"
              >
                {site.brandName}
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
            {site.heroSupport}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <SiteButton
              ariaLabel={"Contact " + site.brandName}
              external
              href={site.primaryHref}
            >
              {site.primaryCta}
            </SiteButton>
            <SiteButton
              ariaLabel={"Find " + site.brandName}
              external
              href={site.mapsHref}
            >
              Find Us
            </SiteButton>
          </div>
          <HeroTypewriterLine
            accent="Beirut"
            items={typewriterItems}
            prefix="Made for"
          />
        </div>
      </section>

      <ScrollSequence
        id="experience"
        ariaLabel={"Scroll-linked " + site.brandName + " brand experience"}
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
                className="font-display text-5xl font-semibold leading-[0.92] tracking-normal text-white/90 sm:text-6xl md:text-7xl"
              >
                {site.visitTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
                {site.visitIntro}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {visitCards.map(([title, body]) => (
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
        id="social"
        aria-labelledby="social-title"
        className="relative px-6 py-20 sm:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-y border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {site.socialDisplay}
            </p>
            <h2
              id="social-title"
              className="font-display text-4xl font-semibold leading-none tracking-normal text-white/90 sm:text-5xl md:text-6xl"
            >
              {site.socialTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              {site.socialBody}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {site.socialHref ? (
              <SiteButton
                ariaLabel={"Open " + site.brandName + " Instagram"}
                external
                href={site.socialHref}
              >
                Open {site.socialDisplay}
              </SiteButton>
            ) : (
              <SiteButton
                ariaLabel={"Contact " + site.brandName}
                external
                href={site.primaryHref}
              >
                {site.primaryCta}
              </SiteButton>
            )}
            <SiteButton
              ariaLabel={"Open map for " + site.brandName}
              external
              href={site.mapsHref}
            >
              Find Us
            </SiteButton>
          </div>
        </div>
      </section>

      <PaymentMethodsVideo
        ariaLabel={site.videoAriaLabel}
        label={site.videoLabel}
      />

      <section
        id="finish"
        aria-labelledby="finish-title"
        className="relative flex px-6 pb-24 pt-12 sm:px-8 md:min-h-screen md:items-center md:pb-32 md:pt-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {site.brandName}
            </p>
            <h2
              id="finish-title"
              className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.92] tracking-normal text-white/90 sm:text-6xl md:text-7xl"
            >
              {site.finishTitle}
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
              {site.finishBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SiteButton
                ariaLabel={"Contact " + site.brandName}
                external
                href={site.primaryHref}
              >
                {site.primaryCta}
              </SiteButton>
              <SiteButton
                ariaLabel={"Find " + site.brandName}
                external
                href={site.mapsHref}
              >
                Find Us
              </SiteButton>
            </div>
            <p className="mt-5 font-body text-sm text-white/40">
              {site.finalCta} {site.openNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

function arcSignatureTemplate() {
  return `"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

function TextArc({ text }: { text: string }) {
  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <div className="absolute inset-0">
      {characters.map((char, index) => {
        const angle = angleStep * index;

        return (
          <span
            key={\`\${char}-\${index}\`}
            className="absolute left-1/2 top-0 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-[9px] md:text-[10px]"
            style={{
              height: "50%",
              marginLeft: "-0.35em",
              transform: \`rotate(\${angle}deg)\`,
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

export function FactArcSignature({
  arcText,
  brandName,
  className,
  markText,
  style
}: {
  arcText: string;
  brandName: string;
  className?: string;
  markText: string;
  style?: CSSProperties;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-label={brandName + " signature mark"}
      className={cn(
        "pointer-events-none flex items-center justify-center opacity-85",
        className
      )}
      style={style}
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
        <TextArc text={arcText} />
      </motion.div>

      <div className="absolute inset-[7%] rounded-full border border-white/10 opacity-50" />

      <div className="relative flex h-[68%] w-[68%] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.035] px-3 text-center shadow-[0_18px_55px_rgba(255,255,255,0.14)] backdrop-blur-md">
        <span className="font-display text-[clamp(0.9rem,2vw,1.55rem)] font-semibold leading-none tracking-normal text-white/90">
          {markText}
        </span>
      </div>
    </motion.div>
  );
}
`;
}

function signatureLogoTemplate() {
  return `"use client";

import { motion } from "framer-motion";

export function FactSignatureLogo({
  brandName = "Coffee",
  markText = "Coffee"
}: {
  brandName?: string;
  markText?: string;
}) {
  return (
    <motion.div
      aria-label={brandName + " signature mark"}
      className="pointer-events-none absolute left-2 top-[19%] z-20 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.035] px-4 text-center opacity-80 shadow-[0_18px_45px_rgba(255,255,255,0.18)] backdrop-blur-md sm:left-4 sm:top-[18%] sm:h-40 sm:w-40 md:left-[max(1.5rem,calc(50%_-_600px))] md:top-[16%] md:h-44 md:w-44 md:opacity-85 lg:left-[max(1.5rem,calc(50%_-_650px))] lg:top-[14%] lg:h-56 lg:w-56 xl:left-[max(1.5rem,calc(50%_-_690px))] xl:top-[12%] xl:h-64 xl:w-64"
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
      <span className="font-display text-2xl font-semibold leading-none tracking-normal text-white/90 md:text-3xl lg:text-4xl">
        {markText}
      </span>
    </motion.div>
  );
}
`;
}

function typewriterTemplate() {
  return `"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";

type HeroTypewriterLineProps = {
  accent: string;
  items: string[];
  prefix: string;
};

export function HeroTypewriterLine({
  accent,
  items,
  prefix
}: HeroTypewriterLineProps) {
  return (
    <motion.div
      className="
        pointer-events-none
        relative
        z-20
        mt-10
        w-full
        max-w-[92vw]
        px-6
        text-center
        text-base
        font-medium
        leading-tight
        tracking-normal
        text-white/55

        md:absolute
        md:bottom-[10%]
        md:left-1/2
        md:mt-0
        md:max-w-[720px]
        md:-translate-x-1/2
        md:[translate:-50%_0]
        md:text-xl

        lg:bottom-[9%]
        lg:text-2xl
      "
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        delay: 1.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <span className="text-white/45">{prefix}</span>
        <span className="text-white/70">{accent}</span>

        <Typewriter
          text={items}
          speed={65}
          waitTime={1600}
          deleteSpeed={35}
          cursorChar="_"
          className="inline-block min-w-[170px] text-left font-body text-white/85 sm:min-w-[210px] md:min-w-[250px]"
          cursorClassName="ml-1 text-white/50"
        />
      </div>
    </motion.div>
  );
}
`;
}

function paymentVideoTemplate() {
  return `export function PaymentMethodsVideo({
  ariaLabel = "Contact and visit video",
  label = "Contact - Visit - Sip"
}: {
  ariaLabel?: string;
  label?: string;
}) {
  return (
    <section
      aria-label={ariaLabel}
      className="
        relative
        left-1/2
        right-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#050505]
      "
    >
      <div
        className="
          relative
          h-[220px]
          w-full
          overflow-hidden
          bg-[#050505]

          sm:h-[260px]
          md:h-[380px]
          lg:h-[460px]
          xl:h-[520px]
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/payment-method-poster.jpg"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source src="/videos/payment-method-loop.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_42%,rgba(0,0,0,0.82)_100%)]" />

        <div
          className="
            pointer-events-none
            absolute
            left-6
            top-6
            rounded-full
            border
            border-white/10
            bg-black/25
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.24em]
            text-white/55
            backdrop-blur-md

            md:left-10
            md:top-10
          "
        >
          {label}
        </div>
      </div>
    </section>
  );
}
`;
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

for (const site of businesses) {
  const projectDir = path.join(rootDir, "business-copies", site.slug);
  mkdirSync(projectDir, { recursive: true });

  const packagePath = path.join(projectDir, "package.json");
  const packageJson = readJson(packagePath);
  packageJson.name = site.packageName;
  packageJson.private = true;
  writeFileSync(packagePath, `${pretty(packageJson)}\n`);

  const lockPath = path.join(projectDir, "package-lock.json");
  const packageLock = readJson(lockPath);
  packageLock.name = site.packageName;
  if (packageLock.packages && packageLock.packages[""]) {
    packageLock.packages[""].name = site.packageName;
  }
  writeFileSync(lockPath, `${pretty(packageLock)}\n`);

  writeFileSync(path.join(projectDir, "app", "layout.tsx"), layoutTemplate(site));
  writeFileSync(path.join(projectDir, "app", "page.tsx"), pageTemplate(site));
  writeFileSync(
    path.join(projectDir, "components", "FactArcSignature.tsx"),
    arcSignatureTemplate()
  );
  writeFileSync(
    path.join(projectDir, "components", "FactSignatureLogo.tsx"),
    signatureLogoTemplate()
  );
  writeFileSync(
    path.join(projectDir, "components", "HeroTypewriterLine.tsx"),
    typewriterTemplate()
  );
  writeFileSync(
    path.join(projectDir, "components", "PaymentMethodsVideo.tsx"),
    paymentVideoTemplate()
  );
  writeFileSync(path.join(projectDir, ".gitignore"), gitignore);
  writeFileSync(path.join(projectDir, ".eslintrc.json"), eslintConfig);
  writeFileSync(
    path.join(projectDir, "README.md"),
    `# ${site.brandName}\n\nIndependent Next.js landing page for ${site.brandName}, using the premium dark/noir coffee template.\n\n## Local commands\n\n\`\`\`bash\nnpm install\nnpm run dev\nnpm run lint\nnpm run typecheck\nnpm run build\n\`\`\`\n\n## Vercel deploy note\n\nImport this folder as its own Vercel project. Use \`npm install\` for installation and \`npm run build\` as the build command. Vercel will produce and serve the Next.js output from \`.next\` during deployment.\n`
  );
}

console.log(`Generated ${businesses.length} independent business copies.`);
