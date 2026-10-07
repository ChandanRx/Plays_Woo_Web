import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

export default function FinalCta() {
  return (
    <section className="overflow-hidden border-b border-foreground bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-12 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="relative col-span-12 bg-brand-primary p-6 sm:p-10">
          <div className="relative z-10 max-w-4xl">
            <h2 className="font-display text-[clamp(5rem,14vw,14rem)] uppercase leading-[0.78]">
              Ready
              <br />
              to play?
            </h2>
            <p className="mt-6 max-w-sm text-sm font-black uppercase leading-tight">
              Your next game could be five minutes away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#discover"
                className="group inline-flex items-center gap-2 border border-foreground bg-background px-5 py-3 text-xs font-black uppercase transition hover:-translate-y-0.5"
              >
                Find a game
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/auth/signup"
                className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-xs font-black uppercase text-background transition hover:-translate-y-0.5"
              >
                Join Plays Woo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <ImagePlaceholder
            src={images.hero}
            alt="Sports community celebration"
            label="Next"
            className="mt-10 aspect-[5/3] border-foreground lg:absolute lg:-right-8 lg:bottom-8 lg:mt-0 lg:w-[36%]"
            tone="dark"
          />
        </FadeIn>
      </div>
    </section>
  );
}
