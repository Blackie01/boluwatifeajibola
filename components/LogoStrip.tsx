"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

const orgLogos = [
  "/org-logos/university-of-leeds.png",
  "/org-logos/University of York logo.png",
  "/org-logos/London School of Economics LSE.png",
  "/org-logos/Obafemi Awolowo University.png",
  "/org-logos/Economic and Social Research Council ESRC.png",
  "/org-logos/White Rose Doctoral Training Partnership WRDTP.jpg",
  "/org-logos/IFRC.png",
  "/org-logos/ICVA.png",
  "/org-logos/yiaga.png",
  "/org-logos/Taiwan Foundation for Democracy TFD.png",
  "/org-logos/Political Studies Association Early Career Network PSA ECN.webp",
];

// 11 logos.
// We want to slide 2 items at a time.
// LCM of 2 and 11 is 22. So we need to travel 22 items to seamlessly reset.
// That is 11 steps of 2 items.
// We need extra copies at the end so the screen isn't empty when we reach item 22.
// 22 + 6 (visible) = 28 items minimum. 4 copies of orgLogos = 44 items.
const duplicatedLogos = Array(4).fill(orgLogos).flat();

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
    <section className="w-full md:w-[90%] mx-auto bg-[#0C0C0C] py-8 pb-16 relative overflow-hidden">
      {/* Fade edges */}
      {/* <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" /> */}

      <div ref={scope} className="flex items-center w-max">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-[calc(100vw/2)] md:w-[calc(90vw/6)] h-[80px] md:h-[100px] flex-shrink-0 flex items-center justify-center px-4 md:px-6"
          >
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={200}
              height={100}
              className="max-w-full max-h-full object-contain grayscale invert mix-blend-screen opacity-90 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
