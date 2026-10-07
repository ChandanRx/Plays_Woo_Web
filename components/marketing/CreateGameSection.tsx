import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { images } from "@/data/images";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

const fields = [
  ["Sport", "Cricket"],
  ["Date", "Sat 18 Oct"],
  ["Time", "7:00 PM"],
  ["Location", "Ahmedabad"],
  ["Players needed", "3"],
];

export default function CreateGameSection() {
  return (
    <section id="host" className="border-b border-foreground bg-brand-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="col-span-12 lg:col-span-5">
          <p className="mb-4 text-xs font-black uppercase">Host the game</p>
          <h2 className="font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">
            Got a game?
            <br />
            Find the
            <br />
            players.
          </h2>
          <p className="mt-6 max-w-sm text-sm font-black uppercase leading-tight">
            Booked a turf? Need a few more players? Drop a pin, choose your
            sport, set the time and invite people nearby.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="relative col-span-12 lg:col-span-7 lg:pt-12"
        >
          <ImagePlaceholder
            src={images.createGame}
            alt="Create game experience"
            label="Host"
            className="absolute -right-2 top-0 z-0 hidden aspect-square w-40 lg:block"
            tone="coral"
          />
          <div className="relative z-10 border border-foreground bg-background">
            <div className="flex items-center justify-between border-b border-foreground p-4">
              <span className="text-xs font-black uppercase">Create game</span>
              <span className="grid h-9 w-9 place-items-center bg-brand-primary">
                <Plus className="h-5 w-5" />
              </span>
            </div>
            <div className="grid md:grid-cols-5">
              {fields.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-foreground p-4 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="text-xs font-black uppercase text-brand-muted">
                    {label}
                  </div>
                  <div className="mt-4 font-display text-xl lg:text-2xl xl:text-4xl uppercase leading-none break-words">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-0 border-t border-foreground md:grid-cols-[1fr_auto]">
              <p className="p-5 text-sm font-black uppercase leading-tight">
                Your match becomes discoverable to nearby players looking for a
                real game tonight.
              </p>
              <Link
                href="/auth/signup"
                className="group inline-flex items-center justify-center gap-2 border-t border-foreground bg-brand-primary px-6 py-5 text-xs font-black uppercase text-[var(--accent-contrast)] transition hover:bg-brand-primary-dark md:border-l md:border-t-0"
              >
                Create game
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
