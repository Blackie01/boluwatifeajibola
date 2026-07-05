"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import ActionText from "./ActionText";

const phrases = [
  "Researcher of Development - Democracy Nexus",
  "Social Change Researcher",
  "Research Impact Specialist",
  "£20M+ Research Funding Supported",
  "ESRC WRDTP Scholar",
  "LSE Firoz & Najma Lalji Scholar",
  "Award-Winning Creative",
  "Speaker & Facilitator"
];

function RevealText() {
  const [index, setIndex] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      while (isMounted) {
        // Reveal text from left to right
        animate(".text-overlay", { clipPath: "inset(0% 0% 0% 0%)" }, { duration: 1.2, ease: "easeInOut" });
        await animate(".caret-bar", { left: "100%" }, { duration: 1.2, ease: "easeInOut" });
        
        // Pause to read
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        if (!isMounted) break;
        
        // Hide text from right to left
        animate(".text-overlay", { clipPath: "inset(0% 100% 0% 0%)" }, { duration: 0.8, ease: "easeInOut" });
        await animate(".caret-bar", { left: "0%" }, { duration: 0.8, ease: "easeInOut" });
        
        if (!isMounted) break;
        
        // Next phrase
        setIndex((prev) => (prev + 1) % phrases.length);
        
        // Small pause before revealing the next word
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <span ref={scope} className="relative inline-block pr-[4px]">
      {/* Invisible placeholder to establish dimensions properly including wrap if any */}
      <span className="opacity-0">{phrases[index]}</span>
      
      {/* Animated overlay with actual text */}
      <motion.span
        className="text-overlay absolute top-0 left-0 w-full h-full text-white"
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
      >
        {phrases[index]}
      </motion.span>

      {/* The Reveal Bar */}
      <motion.span
        className="caret-bar absolute top-1/2 -translate-y-1/2 w-[3px] md:w-[4px] bg-white"
        initial={{ left: "0%" }}
        style={{ height: "calc(100% + 12px)" }}
      />
    </span>
  );
}



export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] bg-[#0C0C0C] flex items-center overflow-hidden">
      
      {/* Background Image Container for the right side */}
      <div className="absolute inset-0 w-full h-full flex justify-end pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full md:w-[60%] lg:w-[45%] h-full translate-x-[15%] md:translate-x-16 lg:translate-x-24 scale-[1.4] md:scale-100 origin-[75%_35%] md:origin-center"
        >
          <Image 
            src="/heroImage-nobg.png" 
            alt="Boluwatife Ajibola" 
            fill
            priority
            className="object-contain object-right md:object-cover md:object-right-top"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 md:pb-16 flex flex-col justify-end md:justify-center min-h-[100svh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-2xl lg:max-w-3xl text-left"
        >
          {/* 
          <h1 
            className="text-white text-[28px] md:text-5xl font-medium leading-[1.1] tracking-tight mb-3 md:mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Researcher, Creative, and Research & Development (R&D) Professional  
          </h1>
          */}
          
          <h1 
            className="text-white text-[28px] md:text-5xl font-medium leading-[1.1] tracking-tight mb-3 md:mb-6 min-h-[68px] md:min-h-[110px] flex flex-col justify-end"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            <div>
              <RevealText />
            </div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-light leading-[1.3] md:leading-relaxed max-w-[85%] md:max-w-xl mb-6 md:mb-10"
          >
            ...bridging research, strategy and creativity to help societies and organisations reimagine what is possible.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 md:gap-8"
          >
            <ActionText text="Explore my work" href="/research"/>
            <ActionText text="Work with me" href="/contact"/>
          </motion.div>
        </motion.div>


      </div>

    </section>
  );
}