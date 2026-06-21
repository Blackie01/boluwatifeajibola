'use client'
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { awardsData } from "@/utils/data";
import { motion } from "framer-motion";

export default function AwardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = awardsData.filter((_, idx) => idx % 2 === 0);
  const rightColumn = awardsData.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="my-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <h2 
          className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Awards and Recognitions
        </h2>
        <div className="h-[1px] w-[80px] bg-[#2a2a2a] mb-8" />
        <p className="text-[#a0a0a0] text-[18px] leading-relaxed">
          My work has been recognised through several awards, scholarships, and research grants.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
        {/* Left Column */}
        <div className="flex flex-col">
          {leftColumn.map((item, idx) => {
            const actualIndex = idx * 2;
            return (
              <AccordionItem 
                key={item.name} 
                item={item} 
                isOpen={openIndex === actualIndex} 
                onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)} 
              />
            );
          })}
          <div className="border-t border-white/10 w-full" />
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col">
          {rightColumn.map((item, idx) => {
            const actualIndex = idx * 2 + 1;
            return (
              <AccordionItem 
                key={item.name} 
                item={item} 
                isOpen={openIndex === actualIndex} 
                onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)} 
              />
            );
          })}
          <div className="border-t border-white/10 w-full hidden md:block" />
        </div>
      </div>
    </section>
  );
}
