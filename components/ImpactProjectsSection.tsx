'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { impactProjectsData } from '@/utils/data';
import AccordionItem from './AccordionItem';

export default function ImpactProjectsSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#0C0C0C] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Title and Subtitle */}
        <div className="w-full md:w-[40%] flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32"
          >
            <h2 
              className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-white uppercase mb-6"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Selected Impact and Engagement Projects: Beyond Leeds
            </h2>
            <div className="h-[2px] w-[80px] bg-[#d4af37] mb-8" />
            
            <p className="text-[#a0a0a0] text-[18px] leading-relaxed font-light">
              My personal research projects have also produced, and continues to produce, significant impact. I describe some of these below.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="w-full md:w-[60%] flex flex-col pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-white/10"
          >
            {impactProjectsData.map((project, idx) => (
              <AccordionItem 
                key={idx}
                item={project}
                isOpen={openId === idx}
                onClick={() => toggleAccordion(idx)}
              />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
