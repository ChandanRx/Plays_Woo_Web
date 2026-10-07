import { ArrowRight } from "lucide-react";
import { sports } from "@/data/sports";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

export default function SportsSection() {
  return (
    <section id="sports" className="overflow-hidden border-b border-foreground bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-foreground pb-6">
          <FadeIn>
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.8]">
              Play your
              <br />
              sport.
            </h2>
          </FadeIn>
          <p className="hidden max-w-xs text-right text-xs font-black uppercase leading-tight md:block">
            Six starting points. Infinite local crews.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:overflow-visible">
          {sports.map((item, index) => (
            <FadeIn
              key={item.sport}
              delay={index * 0.04}
              className={`group min-w-[78vw] border border-foreground bg-background transition hover:-translate-y-1 hover:bg-brand-primary sm:min-w-[340px] lg:min-w-0 ${
                index % 3 === 1 ? "lg:mt-16" : ""
              } ${index % 3 === 2 ? "lg:mt-7" : ""}`}
            >
              <ImagePlaceholder
                src={item.image}
                alt={`${item.sport} players`}
                label={item.sport}
                className="aspect-[4/3] border-0 border-b-4"
                tone={index % 2 === 0 ? "lime" : "coral"}
              />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-5xl leading-none">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <ArrowRight className="mt-2 h-5 w-5 transition group-hover:translate-x-1" />
                </div>
                <h3 className="mt-5 font-display text-4xl uppercase leading-none">
                  {item.sport}
                </h3>
                <p className="mt-3 text-xs font-black uppercase leading-tight">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
