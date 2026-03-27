"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Helper for the springing line-by-line reveal
export function RevealTitle({ lines, className, style }: { lines: string[], className?: string, style?: React.CSSProperties }) {
  return (
    <motion.h2
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {lines.map((text, i) => (
        <span key={i} className="block overflow-hidden pb-2">
          <motion.span
            className="block origin-bottom"
            custom={i}
            variants={{
              hidden: { y: "120%", rotate: 2 },
              visible: (custom) => ({
                y: "0%",
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  mass: 0.8,
                  delay: custom * 0.15,
                },
              }),
            }}
          >
            {text}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

const cards = [
  {
    id: 1,
    title: "Academia",
    bg: "#81A6C6",
    text: "My work sits at the nexus of democracy and development, analyzing the forces that shape modern public life. Whether investigating the interrelations of protests and polls or the ethics of digital identity systems, I aim to uncover the mechanisms that drive social change. I combine rigorous academic inquiry with a commitment to ensuring that research translates into tangible policy impact and public engagement.",
  },
  {
    id: 2,
    title: "Collaboration",
    bg: "#DDAED3",
    text: "Collaboration is where theory meets the real world. I partner with NGOs, think tanks, and development agencies to design engagement models that make research resonate with the public and policymakers alike. My work focuses on building strategic pathways for impact, ensuring that data-driven insights lead to tangible improvements in civic life and digital equity.",
  },
  {
    id: 3,
    title: "Creative Arts",
    bg: "#A7AAE1",
    text: "From the stage to the studio, I use music and poetry to interrogate themes of identity, civic responsibility, and shared human experiences. These works are more than performances; they are invitations for the public to engage with the emotions behind the movements.",
  },
  {
    id: 4,
    title: "Speaking Events",
    bg: "#EA7B7B",
    text: "Whether delivering a keynote on the global political landscape or facilitating a masterclass on digital governance, I bring a multidisciplinary lens to every stage. My speaking and events practice focuses on creating immersive experiences that challenge conventional thinking, blending deep academic insight with the rhythmic pulse of creative storytelling.",
  },
];

export default function Expressions() {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current!;
      const scrollAmount = slider.scrollWidth - window.innerWidth;

      // Main horizontal scroll tween
      const scrollTween = gsap.to(slider, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.scrollWidth,
        },
      });

      // Per-card number translation: slides from left to right within the card
      gsap.utils.toArray<HTMLElement>(".card-number").forEach((num) => {
        gsap.fromTo(
          num,
          { xPercent: 10 },
          {
            xPercent: 220,
            ease: "none",
            scrollTrigger: {
              trigger: num.closest(".card-panel") as HTMLElement,
              containerAnimation: scrollTween,
              start: "left center",
              end: "right center",
              scrub: 1,
            },
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-white" data-nav-theme="light">
      <div
        ref={sliderRef}
        className="flex flex-nowrap items-stretch h-screen gap-8 pr-12"
      >
        {/* Title panel — narrower so first card peeks */}
        <div
          className="flex-shrink-0 h-full flex items-center justify-center px-12 md:px-24"
          style={{ width: "55vw" }}
        >
          <RevealTitle
            lines={["What I", "do?"]}
            className="text-5xl md:text-7xl lg:text-[100px] font-bold text-[#0a0a0a] leading-tight"
            style={{ fontFamily: "var(--font-cormorant-unicase), serif" }}
          />
        </div>

        {/* Cards */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="flex-shrink-0 h-full flex items-end pb-[2vh] justify-center card-panel"
            style={{ width: "70vw" }}
          >
            {/* end pb-[2rem] */}
            <div
              className="relative w-full h-[85vh] rounded-[52px] overflow-hidden flex flex-col justify-end p-10 md:p-14"
              style={{ backgroundColor: card.bg }}
            >
              {/* Decorative Background Curves */}
              <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden flex items-center justify-center">
                <svg
                  viewBox="0 0 1000 1000"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  className="absolute min-w-[150%] min-h-[150%] object-cover origin-center opacity-70 mix-blend-overlay"
                  style={{
                    transform: `rotate(${index * 55}deg) scale(${1 + index * 0.15})`,
                  }}
                >
                  <circle cx="500" cy="500" r="300" strokeDasharray="15 15" opacity="0.6" strokeWidth="2" />
                  <circle cx="200" cy="800" r="450" />
                  <circle cx="800" cy="200" r="500" strokeWidth="0.5" />
                  <path d="M-200 500 C 300 100, 700 900, 1200 500" strokeWidth="2.5" />
                  <path d="M500 -200 C 200 300, 800 700, 500 1200" strokeWidth="1" />
                </svg>
              </div>

              {/* Background image — left side, faded into card bg */}
              <div className="absolute -right-[10rem] bottom-0 w-[55%] h-[87.5%] pointer-events-none overflow-hidden" style={{ borderBottomRightRadius: "52px" }}>
                <Image
                  src="/bsharpimage4.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: card.bg, opacity: 0.6 }}
                />
              </div>

              {/* Card number */}
              <span className="card-number absolute top-8 left-10 text-[8rem] md:text-[12rem] font-bold text-white/20 leading-none select-none z-10">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl lg:text-[80px] font-bold text-[#0a0a0a] mb-6 leading-tight">
                  {card.title}
                </h3>
                <p className="text-base md:text-lg  text-[#4a4848] max-w-lg leading-relaxed font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
         <div
          className="flex-shrink-0 h-full flex items-center justify-center px-12 md:px-24"
          style={{ width: "100vw" }}
        >
          <RevealTitle
            lines={["Selected", "Research Works"]}
            className="text-5xl md:text-7xl lg:text-[100px] text-center font-bold text-[#0a0a0a] leading-tight"
            style={{ fontFamily: "var(--font-cormorant-unicase), serif" }}
          />
        </div>
      </div>
    </div>
  );
}
