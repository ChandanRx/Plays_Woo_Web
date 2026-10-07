import { images } from "@/data/images";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

const stats = [
  ["128", "Followers"],
  ["34", "Games"],
  ["12", "Crews"],
];

export default function ProfileSection() {
  return (
    <section className="border-b border-foreground bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="col-span-12 lg:col-span-7">
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.82]">
            Build your
            <br />
            sports
            <br />
            network.
          </h2>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="col-span-12 border border-foreground bg-brand-surface lg:col-span-5 lg:mt-8"
        >
          <div className="grid grid-cols-[42%_1fr]">
            <ImagePlaceholder
              src={images.profile}
              alt="Arjun Shah profile"
              label="Profile"
              className="aspect-[3/4] border-0 border-r-4"
            />
            <div className="p-5">
              <div className="text-xs font-black uppercase text-brand-muted">
                Profile photo
              </div>
              <h3 className="mt-6 font-display text-6xl uppercase leading-none">
                Arjun
                <br />
                Shah
              </h3>
              <p className="mt-4 text-xs font-black uppercase">
                Cricket / Football
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 border-y border-foreground">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="border-r border-foreground p-4 last:border-r-0"
              >
                <div className="font-display text-5xl leading-none">
                  {value}
                </div>
                <div className="mt-1 text-xs font-black uppercase text-brand-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2">
            <button className="border-r border-foreground bg-brand-primary p-4 text-xs font-black uppercase text-[var(--accent-contrast)] transition hover:bg-brand-primary-dark">
              Follow
            </button>
            <button className="p-4 text-xs font-black uppercase transition hover:bg-foreground hover:text-background">
              Message
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
