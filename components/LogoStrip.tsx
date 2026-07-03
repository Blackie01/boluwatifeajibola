"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

const orgLogos = [
  "/org-logos/Obafemi Awolowo University.png",
  "/org-logos/London School of Economics LSE.png",
  "/org-logos/Political Studies Association Early Career Network PSA ECN.webp",
  "/org-logos/Economic and Social Research Council ESRC.png",
  "/org-logos/Governance and Local Development Institute GLD.svg",
  "/org-logos/Commonwealth Commission UK.png",
  "/org-logos/White Rose Doctoral Training Partnership WRDTP.jpg",
  "/org-logos/Southern Political Science Association SPSA.jpg",
  "/org-logos/Taiwan Foundation for Democracy TFD.png",
  "/org-logos/Independent National Electoral Commission INEC.jpg",
  "/org-logos/French Institute for Research in Africa IFRA.png",
  "/org-logos/University of York logo.png",
  "/org-logos/university-of-leeds.png"
];

// 11 logos. Duplicate to 22 for the base set, so it's divisible by 2.
const baseLogos = [...orgLogos, ...orgLogos];
// Duplicate again to 44 for seamless looping.
const duplicatedLogos = [...baseLogos, ...baseLogos];

export default function LogoStrip() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;
    const runAnimation = async () => {
      while (isMounted) {
        // 11 steps. Each step moves 2 items.
        for (let i = 1; i <= 11; i++) {
          await new Promise((r) => setTimeout(r, 2500)); // Pause for 2.5s
          if (!isMounted) return;
          // 44 items total. Moving 2 items = (2 / 44) * 100%
          await animate(
            scope.current,
            { x: `-${((i * 2) / 44) * 100}%` },
            { duration: 0.8, ease: "easeInOut" },
          );
        }
        if (!isMounted) return;
        // Instantly reset to 0%
        await animate(scope.current, { x: "0%" }, { duration: 0 });
      }
    };
    runAnimation();
    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <section className="w-full bg-[#0C0C0C] py-8 pb-16 relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      <div ref={scope} className="flex items-center w-max">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-[120px] md:w-[160px] h-[50px] md:h-[60px] flex-shrink-0 flex items-center justify-center px-4 md:px-6"
          >
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={120}
              height={60}
              className="max-w-full max-h-full object-contain grayscale invert mix-blend-screen opacity-90 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
