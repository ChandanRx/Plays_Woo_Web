import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import FadeIn from "@/components/marketing/FadeIn";
import FinalCta from "@/components/marketing/FinalCta";

export const metadata: Metadata = {
  title: "About — PlaysWoo",
  description:
    "Learn about PlaysWoo's mission to help local players find games, build community, and get moving.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-surface to-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <FadeIn>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Our mission
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-muted">
                PlaysWoo exists to make it effortless to find people to play
                with. No more empty group chats or games that fall apart from
                lack of players — just real games, with real people, near you.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
            <FadeIn>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand-border bg-brand-surface p-8">
                <h2 className="text-xl font-semibold text-foreground">
                  The story
                </h2>
                <p className="text-base leading-7 text-brand-muted">
                  PlaysWoo started with a simple problem: our founders moved to
                  a new city and couldn&apos;t find anyone to play with. Group
                  chats fell apart, Facebook groups went stale, and finding a
                  pickup game felt harder than it should be. So we built the
                  platform we wished existed — one place to discover games,
                  connect with players, and actually show up and play.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand-border bg-brand-surface p-8">
                <h2 className="text-xl font-semibold text-foreground">
                  What we believe
                </h2>
                <p className="text-base leading-7 text-brand-muted">
                  Sport brings people together. We believe everyone should
                  have an easy way to find their next game, regardless of
                  which sport they play or how long they&apos;ve lived in a
                  city. Community, safety, and consistency are at the core of
                  everything we build.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
