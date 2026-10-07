import FadeIn from "./FadeIn";

const steps = [
  ["01", "Join", "Create your profile and choose your sports."],
  ["02", "Discover", "Find games and players nearby."],
  ["03", "Connect", "Chat with organizers and players."],
  ["04", "Play", "Show up and play."],
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-b border-foreground bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn>
          <h2 className="mb-10 font-display text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.82]">
            How
            <br />
            Plays Woo
            <br />
            works.
          </h2>
        </FadeIn>
        <div className="border-t border-foreground">
          {steps.map(([number, title, copy], index) => (
            <FadeIn
              key={title}
              delay={index * 0.04}
              className="grid gap-4 border-b border-foreground py-6 md:grid-cols-[180px_1fr_1fr]"
            >
              <div className="font-display text-8xl leading-none">{number}</div>
              <h3 className="font-display text-6xl uppercase leading-none">
                {title}
              </h3>
              <p className="max-w-sm self-center text-sm font-black uppercase leading-tight">
                {copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
