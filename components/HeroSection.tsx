"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ActionText from "./ActionText";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0C0C0C] flex items-center overflow-hidden">
      
      {/* Background Image Container for the right side */}
      <div className="absolute inset-0 w-full h-full flex justify-end pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full md:w-[60%] lg:w-[45%] h-full translate-x-8 md:translate-x-16 lg:translate-x-24"
        >
          <Image 
            src="/heroImage-nobg.png" 
            alt="Boluwatife Ajibola" 
            fill
            priority
            className="object-contain object-right md:object-cover md:object-right-top origin-right md:origin-top-right"
          />
          {/* Gradient to smoothly blend the left edge of the image into the black background */}
          {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 hidden md:block" /> */}
          {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 block" /> */}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 flex flex-col justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <h1 
            className="text-white text-4xl  font-medium leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Researcher, creative, and public engagement professional
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[#a0a0a0] text-[16px] lg:text-[18px] font-light leading-relaxed max-w-xl mb-10"
          >
            ...exploring how research, impact, art, and civic action intersect to shape public life.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            <ActionText text="Explore my work"/>
            <ActionText text="Work with me"/>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}