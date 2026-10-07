import FadeIn from "./FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "I moved to a new city and found a weekend football crew within a week. PlaysWoo made it effortless.",
    name: "Arjun M.",
    role: "Football, Bangalore",
  },
  {
    quote:
      "Organizing badminton games used to mean a dozen group chats. Now it's all in one place.",
    name: "Priya S.",
    role: "Badminton, Pune",
  },
  {
    quote:
      "The map view is great — I can see exactly what's happening nearby and jump in last minute.",
    name: "Daniel K.",
    role: "Cricket, Mumbai",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Community
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join 1,000+ local players already organizing games
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <figure className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-brand-border bg-brand-card p-8">
                <blockquote className="text-base leading-7 text-foreground/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-brand-muted">{testimonial.role}</div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
