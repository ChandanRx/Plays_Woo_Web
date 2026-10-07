import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import FadeIn from "@/components/marketing/FadeIn";
import FinalCta from "@/components/marketing/FinalCta";

export const metadata: Metadata = {
  title: "Features — PlaysWoo",
  description:
    "Explore how PlaysWoo helps you find local games, chat with players, and organize matches across every sport you play.",
};

const FEATURE_SECTIONS = [
  {
    title: "Interactive Maps",
    tag: "Discover",
    description:
      "See every open game near you on a live map. Filter by sport, skill level, and time so you only see matches worth joining.",
    bullets: [
      "Real-time pins for games happening nearby",
      "Filter by sport, distance, and skill level",
      "Save your favorite venues for quick access",
    ],
  },
  {
    title: "Real-Time Chat",
    tag: "Connect",
    description:
      "Coordinate directly with other players. Confirm the venue, lock in the time, and sort out the details without leaving the app.",
    bullets: [
      "One-on-one and group match chats",
      "Instant notifications when someone joins your game",
      "Share location pins directly in chat",
    ],
  },
  {
    title: "Multi-Sport Profiles",
    tag: "Play",
    description:
      "Cricket on weekends, badminton on weeknights. Set up a profile for every sport you play and get matched with the right players.",
    bullets: [
      "Track skill level per sport",
      "Get recommended games based on your profile",
      "Build a history of games played and people met",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-surface to-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Everything you need to find your next game
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-muted">
                PlaysWoo brings maps, chat, and multi-sport profiles together so
                you can spend less time organizing and more time playing.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6">
            {FEATURE_SECTIONS.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <div
                  className={`flex flex-col gap-10 lg:flex-row lg:items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-semibold text-brand-primary-dark">
                      {feature.tag}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                      {feature.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-brand-muted">
                      {feature.description}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {feature.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-video w-full rounded-2xl border border-brand-border bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
