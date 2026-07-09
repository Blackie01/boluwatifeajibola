"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "10+", text: "research projects delivered" },
  { number: "10+", text: "countries engaged across research and collaboration" },
  { number: "20+", text: "research impact projects supported" },
  { number: "£20M+", text: "in research funding supported" },
  { number: "£200K+", text: "in scholarships and grants secured" },
  { number: "20+", text: "creative compositions" }
];

export default function StatsMarquee() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Triple the array to ensure a seamless infinite loop since the item count is small
  const marqueeItems = [...stats, ...stats, ...stats];

  return (
    <section className="w-full bg-[#0C0C0C] text-white py-32 relative overflow-hidden" data-nav-theme="dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-10 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-2/3"
        >
          <h2 
            className="text-[32px] md:text-[40px] uppercase font-medium text-white mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Let's talk <span className="text-[#D4AF37]">numbers</span>
          </h2>
          <p className="text-[#a0a0a0] text-[18px] md:text-[20px] leading-relaxed font-light">
            A snapshot of impact, reach, and value delivered across projects and continents.
          </p>
        </motion.div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden relative flex py-8">
        {/* Soft edge gradients for seamless fade out over the black background */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center">
          {marqueeItems.map((item, index) => (
            <div 
              key={`${index}`}
              className="relative shrink-0 flex items-center h-[130px] md:h-[160px] mr-6 md:mr-8 group"
            >
              {/* Invisible spacer establishes natural unexpanded width based on content + padding */}
              <div className="invisible px-6 md:px-10 flex items-center justify-center">
                <span className="font-outfit font-bold text-3xl md:text-5xl tracking-tight">
                  {item.number}
                </span>
              </div>

              {/* Expanding Hover Card */}
              <div 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                data-active={activeIndex === index}
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[90%] flex flex-row items-center bg-[#151515] hover:bg-[#1a1a1a] data-[active=true]:bg-[#1a1a1a] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)] data-[active=true]:shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/5 hover:border-white/10 data-[active=true]:border-white/10 transition-all duration-500 rounded-sm cursor-pointer hover:z-50 data-[active=true]:z-50 overflow-hidden w-full hover:w-[320px] data-[active=true]:w-[320px] md:hover:w-[450px] md:data-[active=true]:w-[450px] group"
              >
                
                {/* Number Section */}
                <div className="px-6 md:px-10 shrink-0 flex items-center justify-center transition-all duration-500 h-full">
                  <span className="font-outfit font-bold text-3xl md:text-5xl text-white tracking-tight text-center group-hover:text-[#D4AF37] group-data-[active=true]:text-[#D4AF37] transition-colors duration-500 whitespace-nowrap">
                    {item.number}
                  </span>
                </div>
                
                {/* Expandable Text Content */}
                <div className="opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 delay-100 flex-1 ml-2 md:ml-4 min-w-[140px] md:min-w-[200px]">
                  <p className="text-[13px] md:text-[15px] text-gray-400 font-light leading-relaxed opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 delay-200 pr-6 md:pr-8">
                    {item.text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
