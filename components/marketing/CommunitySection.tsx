import { images } from "@/data/images";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

const posts = [
  { text: "Great game tonight.", image: images.community },
  { text: "Need 2 players for Saturday.", image: images.football },
  { text: "Final score: 92-87.", image: images.basketball },
  { text: "Anyone up for football tomorrow?", image: images.profile },
];

export default function CommunitySection() {
  return (
    <section id="community" className="border-b border-foreground bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-20 sm:px-6 lg:py-28">
        <FadeIn className="col-span-12 border-b border-foreground pb-8 lg:col-span-7 lg:border-b-0 lg:pb-0">
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.82] tracking-wide">
            More than
            <br />
            a game
          </h2>
          <p className="mt-6 max-w-md text-sm font-black uppercase leading-tight">
            Share match photos, post updates, trade videos, publish results,
            follow players and celebrate local wins.
          </p>
        </FadeIn>

        <div className="col-span-12 grid gap-4 lg:col-span-5">
          {posts.map((post, index) => (
            <FadeIn
              key={post.text}
              delay={index * 0.05}
              className={`border border-foreground bg-brand-surface ${
                index % 2 ? "lg:-ml-10" : ""
              }`}
            >
              <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr]">
                <ImagePlaceholder
                  src={post.image}
                  alt="Community post"
                  label="Post"
                  className="h-full w-full object-cover border-0 border-r-4"
                  tone={index % 2 ? "coral" : "lime"}
                />
                <div className="p-4 flex flex-col justify-center">
                  <div className="text-xs font-black uppercase text-brand-muted">
                    PlaysWoo community / fictional
                  </div>
                  <p className="mt-2 font-display text-xl sm:text-2xl uppercase leading-none">
                    {post.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
