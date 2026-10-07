import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

const markers = [
  { sport: "Cricket", distance: "2.4 KM away", left: "18%", top: "38%" },
  { sport: "Football", distance: "1.1 KM away", left: "60%", top: "24%" },
  { sport: "Badminton", distance: "800 M away", left: "70%", top: "66%" },
];

export default function MapSection() {
  return (
    <section className="border-b border-foreground bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="col-span-12 lg:col-span-5">
          <h2 className="font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">
            See where
            <br />
            the game is.
          </h2>
          <p className="mt-6 max-w-sm text-sm font-black uppercase leading-tight">
            Find games, players and sports happening around you.
          </p>
          <Link
            href="/features"
            className="group mt-8 inline-flex items-center gap-2 border border-brand-primary bg-brand-primary px-5 py-3 text-xs font-black uppercase text-[var(--accent-contrast)] transition hover:bg-brand-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            Explore nearby
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="relative col-span-12 min-h-[520px] overflow-hidden border border-foreground bg-brand-card lg:col-span-7"
        >
          <div className="absolute inset-0 bg-[#e5e3df]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, opacity: 0.6, filter: 'grayscale(0.8) contrast(1.2)' }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Ahmedabad&t=&z=12&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <div className="absolute inset-10 border border-foreground/25 pointer-events-none" />
            <div className="absolute inset-20 border border-foreground/20 pointer-events-none" />
          </div>
          {markers.map((marker) => (
            <div
              key={marker.sport}
              className="absolute z-10 w-40 border border-brand-border bg-background text-xs font-black uppercase"
              style={{
                left: marker.left,
                top: marker.top,
                boxShadow: "8px 8px 0 var(--accent)",
              }}
            >
              <div className="flex items-center gap-2 border-b border-foreground p-2">
                <span className="grid h-7 w-7 place-items-center bg-brand-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                {marker.sport}
              </div>
              <div className="p-2 text-brand-muted">{marker.distance}</div>
            </div>
          ))}
          <div className="absolute bottom-5 left-5 right-5 z-10 grid grid-cols-3 border border-foreground bg-background text-center text-xs font-black uppercase">
            <span className="border-r border-foreground p-3">24 games</span>
            <span className="border-r border-foreground p-3">81 players</span>
            <span className="p-3">5 KM scan</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
