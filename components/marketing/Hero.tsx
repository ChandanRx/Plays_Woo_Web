import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative overflow-visible border-b border-brand-border bg-background">
      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-[clamp(3rem,6vw,6rem)] pt-4 sm:px-6 lg:pt-8">
        {/* Adjusted padding here to push content up */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 pt-4 pb-8 lg:pt-8 lg:pb-12 xl:pb-16">
          <FadeIn className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[clamp(5rem,10.2vw,11rem)] uppercase leading-[0.84] text-foreground max-[420px]:text-[clamp(3.5rem,15vw,5.8rem)] break-words">
              Find
              <br />
              Your Next
              <br />
              Game.
            </h1>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="col-span-12 flex flex-col justify-center border-t border-brand-border pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <p className="max-w-md text-[clamp(1rem,1.4vw,1.35rem)] font-black uppercase leading-[1.08] text-balance">
              Discover nearby games, meet local players, and build your sports
              community.
            </p>
            <div className="mt-2 h-3 w-36 bg-brand-primary" />
            <div className="mt-2 flex flex-wrap gap-4">
              <Link
                href="#discover"
                className="group inline-flex items-center gap-2 border border-brand-primary bg-brand-primary px-6 py-4 text-xs font-black uppercase text-[var(--accent-contrast)] transition hover:-translate-y-0.5 hover:bg-brand-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Find a game
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="#host"
                className="inline-flex items-center border border-brand-border px-6 py-4 text-xs font-black uppercase transition hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Host a game
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative mt-auto">
          <div className="absolute -left-4 -top-4 z-10 h-20 w-20 bg-brand-primary sm:h-28 sm:w-28 lg:-left-8 lg:-top-8" />
          <ImagePlaceholder
            src={images.hero}
            alt="Players gathering for a local sports game"
            label="Sport visual"
            className="relative z-20 h-[clamp(24rem,40vw,38rem)] border-brand-primary"
          />
          <div className="absolute bottom-0 right-0 z-30 grid min-w-56 grid-cols-2 border border-brand-border bg-background text-xs font-black uppercase">
            <span className="border-r border-brand-border p-4">7:00 PM</span>
            <span className="p-4">2.4 KM</span>
            <span className="col-span-2 border-t border-brand-border bg-brand-primary p-4 text-[var(--accent-contrast)]">
              Game spots opening now
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
