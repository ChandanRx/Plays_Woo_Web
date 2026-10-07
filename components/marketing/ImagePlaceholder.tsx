import Image from "next/image";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  tone?: "lime" | "coral" | "dark";
};

const toneStyles = {
  lime: "border-brand-primary bg-[var(--visual-bg)]",
  coral: "border-brand-primary bg-[var(--visual-bg)]",
  dark: "border-foreground bg-foreground text-background",
};

export default function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  tone = "lime",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={`relative overflow-hidden border-4 ${toneStyles[tone]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} placeholder`}
          className="relative flex h-full min-h-52 w-full flex-col justify-between overflow-hidden p-4"
        >
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-[-10%] top-[14%] h-[2px] w-[120%] rotate-[-12deg] bg-foreground/30" />
            <div className="absolute left-[-10%] top-[48%] h-[2px] w-[120%] rotate-[10deg] bg-foreground/20" />
            <div className="absolute left-1/4 top-0 h-full w-[2px] rotate-[18deg] bg-foreground/20" />
            <div className="absolute right-1/4 top-0 h-full w-[2px] rotate-[-18deg] bg-foreground/20" />
            <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full border-2 border-foreground/25" />
            <div className="absolute right-10 top-10 h-14 w-14 border-2 border-foreground/25" />
            <div className="absolute left-[52%] top-[42%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-primary" />
          </div>
          <div className="relative z-10 flex items-start justify-between gap-4 text-xs font-black uppercase">
            <span>Image / sport visual</span>
            <span className="text-right text-brand-muted">Ready for Unsplash URL</span>
          </div>
          <div className="relative z-10 flex items-end justify-between gap-4">
            <span className="max-w-40 text-xs font-black uppercase leading-none text-brand-muted">
              Object-fit cover / fixed editorial frame
            </span>
            <span className="text-right font-display text-4xl uppercase leading-none">
              {label}
            </span>
          </div>
        </div>
      )}
    </figure>
  );
}
