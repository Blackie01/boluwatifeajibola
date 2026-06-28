"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ActionText from "./ActionText";

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
          <h1 
            className="text-white text-[28px] md:text-5xl font-medium leading-[1.1] tracking-tight mb-3 md:mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Researcher, Creative, and Public Engagement Professional
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-light leading-[1.3] md:leading-relaxed max-w-[85%] md:max-w-xl mb-6 md:mb-10"
          >
            ...exploring how research, impact, art, and civic action intersect to shape public life.
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