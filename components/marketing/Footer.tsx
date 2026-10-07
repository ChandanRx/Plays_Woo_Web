import Link from "next/link";

const links = ["Discover", "Sports", "Community", "About", "Contact", "Privacy", "Terms"];
const socials = ["Instagram", "X", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 border-b border-foreground pb-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Link
              href="/"
              className="font-display text-[clamp(5rem,12vw,12rem)] uppercase leading-[0.78]"
            >
              Plays Woo
            </Link>
            <p className="mt-5 text-sm font-black uppercase leading-tight">
              Find your game.
              <br />
              Find your people.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-xs font-black uppercase transition hover:translate-x-1"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {socials.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs font-black uppercase transition hover:translate-x-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-5 text-xs font-black uppercase">
          <span>Copyright 2026 Plays Woo</span>
          <span>Play local. Play together.</span>
        </div>
      </div>
    </footer>
  );
}
