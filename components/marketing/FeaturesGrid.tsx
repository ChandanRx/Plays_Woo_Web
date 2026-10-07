import { MapPin, MessageCircle, Trophy, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const FEATURES = [
  {
    icon: MapPin,
    title: "Location-Based Matching",
    description: "Everything is tailored to your city and neighborhood.",
  },
  {
    icon: MessageCircle,
    title: "Instant Messaging",
    description: "Coordinate match times and venues instantly.",
  },
  {
    icon: Trophy,
    title: "Multi-Sport Support",
    description: "Not just one sport — find players for whatever you play.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Community",
    description: "Built-in reporting and community guidelines.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Key Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Unlock Success with{" "}
            <span className="text-brand-primary">Actionable</span> Game Finding
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Everything you need to spend less time organizing and more time
            playing.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-card p-6 transition-all hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-[var(--accent-contrast)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-brand-muted">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
