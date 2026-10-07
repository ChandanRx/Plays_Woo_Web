import FadeIn from "./FadeIn";

const messages = [
  ["Player", "Hey, is there still one spot available?"],
  ["Organizer", "Yes! Game starts at 7 PM."],
  ["Player", "Perfect. See you there."],
];

export default function ChatSection() {
  return (
    <section className="border-b border-foreground bg-brand-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="col-span-12 lg:col-span-6">
          <h2 className="font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">
            Talk.
            <br />
            Coordinate.
            <br />
            Play.
          </h2>
          <p className="mt-6 max-w-sm text-sm font-black uppercase leading-tight">
            Message organizers, confirm timings, ask questions and secure your
            spot.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="col-span-12 border border-foreground bg-background lg:col-span-6 lg:mt-16"
        >
          <div className="border-b border-foreground bg-brand-primary p-4 text-xs font-black uppercase">
            Match chat / Satellite turf
          </div>
          <div className="space-y-4 p-4 sm:p-6">
            {messages.map(([sender, text], index) => (
              <div
                key={text}
                className={`max-w-[85%] border border-foreground p-4 ${
                  sender === "Organizer"
                    ? "ml-auto bg-foreground text-background"
                    : "bg-brand-surface"
                }`}
              >
                <div className="text-xs font-black uppercase opacity-70">
                  {sender}
                </div>
                <p className="mt-2 text-lg font-black uppercase leading-tight">
                  {text}
                </p>
                <div className="mt-3 text-xs font-black uppercase opacity-60">
                  0{index + 1} / confirmed
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
