"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  styles?: string;
  textClassName?: string;
  activeColor?: string;
  inactiveColor?: string;
};

export default function LightUpText({
  text,
  styles = "",
  textClassName = "text-4xl md:text-5xl lg:text-6xl leading-tight sticky top-[20vh]",
  activeColor = "#ffffff",
  inactiveColor = "#323435",
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.querySelectorAll(".about-word");

    // Build a timeline with staggered word lighting
    const tl = gsap.timeline();
    tl.fromTo(
      words,
      { color: inactiveColor },
      {
        color: activeColor,
        stagger: 0.1, // each word's light-up is offset within the timeline
        ease: "none",
      },
    );

    // Scrub the entire timeline against scroll progress
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%", // when section top hits 70% from viewport top
      end: "bottom 80%", // when section bottom hits 80% from viewport top
      scrub: 1,
      animation: tl,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [activeColor, inactiveColor]);

  const words = text.split(" ");

  return (
    <div
      ref={sectionRef}
      className={`relative ${styles}`}
    >
      <h1
        ref={textRef}
        className={textClassName}
      >
        {words.map((word, i) => (
          <span key={i} className="about-word" style={{ color: inactiveColor }}>
            {word}{" "}
          </span>
        ))}
      </h1>
    </div>
  );
}
