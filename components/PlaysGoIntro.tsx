"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["800", "900"] });

let hasPlayed = false;

export default function PlaysGoIntro() {
  const [isVisible, setIsVisible] = useState(!hasPlayed);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      hasPlayed = true;
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        hasPlayed = true;
        setIsVisible(false);
        document.body.style.overflow = "";
      }
    });

    // We can use GSAP's timeline to perfectly sequence everything
    tl.set(container.current, { y: "0%" })
      .to({}, { duration: 0.8 }) // initial pause
      .fromTo(
        ".letter",
        { opacity: 0, y: 50, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power3.out",
        }
      )
      .fromTo(
        ".brand-line",
        { width: 0 },
        { width: "clamp(120px, 15vw, 180px)", duration: 0.6, ease: "power3.out" },
        "-=0.6" // overlapping start
      )
      .to({}, { duration: 0.6 }) // hold text briefly
      .to(container.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power3.inOut" // Smoother sweep up
      });

    return () => {
      document.body.style.overflow = "";
    };
  }, { scope: container, dependencies: [isVisible] });

  if (!isVisible) return null;

  const word1 = "PLAYS".split("");
  const word2 = "WOO".split("");

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-primary pointer-events-none text-white overflow-hidden"
    >
      <div className="flex flex-col items-center px-4 w-full">
        {/* Made text wrap and scale down more generously for responsive screens */}
        <div className={`flex flex-wrap justify-center gap-x-4 gap-y-2 uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,10vw,12rem)] text-white ${inter.className}`}>
          
          <div className="flex">
            {word1.map((letter, i) => (
              <span key={`w1-${i}`} className="letter inline-block" style={{ opacity: 0 }}>
                {letter}
              </span>
            ))}
          </div>

          <div className="flex">
            {word2.map((letter, i) => (
              <span key={`w2-${i}`} className="letter inline-block" style={{ opacity: 0 }}>
                {letter}
              </span>
            ))}
          </div>

        </div>
        
        <div
          className="brand-line mt-6 h-2 bg-white lg:h-3"
          style={{ width: 0 }}
        />
      </div>

      <div
        className="absolute top-full w-[120%] h-[15vh] bg-brand-primary -ml-[10%]"
        style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}
      />
    </div>
  );
}
