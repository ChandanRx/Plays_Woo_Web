import FadeIn from "./FadeIn";

const values = [
  ["01", "Discover", "Games, players and open slots around you."],
  ["02", "Connect", "Chat with organizers and build local crews."],
  ["03", "Play", "Show up, compete, share the win, repeat."],
];

export default function IntroSection() {
  return (
    <section id="discover" className="border-b border-foreground bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-y-10 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="col-span-12 lg:col-span-8">
          <h2 className="font-display text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.82]">
            Sport is better
            <br />
            when you play
            <br />
            together.
          </h2>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="col-span-12 border-t border-foreground pt-5 lg:col-span-3 lg:col-start-10 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
        >
          <p className="text-sm font-black uppercase leading-tight">
            PlaysWoo connects athletes, hobbyists, weekend players and community
            organizers with games happening around them.
          </p>
        </FadeIn>
        <div className="col-span-12 grid gap-0 border-y border-foreground md:grid-cols-3">
          {values.map(([number, title, copy]) => (
            <FadeIn
              key={title}
              className="border-b border-foreground p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="font-display text-8xl leading-none">{number}</div>
              <h3 className="mt-4 text-sm font-black uppercase">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-brand-muted">
                {copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
