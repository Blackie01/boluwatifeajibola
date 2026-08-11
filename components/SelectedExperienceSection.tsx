"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  number: string;
  highlight?: string;
  text: string;
}

const experienceItems: ExperienceItem[] = [
  {
    number: "01",
    highlight: "£20M+",
    text: "Supported in research funding activity",
  },
  {
    number: "02",
    text: "Facilitated research impact and media engagement workshops",
  },
  {
    number: "03",
    highlight: "6+",
    text: "Industry research projects undertaken",
  },
  {
    number: "04",
    text: "Presented and moderated at academic and civic events",
  },
  {
    number: "05",
    highlight: "25+",
    text: "Delivered spoken word and creative performances across events",
  },
  {
    number: "06",
    text: "Worked in creative civic communications",
  },
];

export default function SelectedExperienceSection() {
  return (
    <section className="w-full bg-[#fbfbfb] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-medium tracking-tight text-[#0a0a0a] mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Selected experience includes
          </h2>
          <div className="h-[2px] w-[80px] bg-[#0a0a0a]" />
        </motion.div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {experienceItems.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative w-full rounded-none bg-white border border-black/10 hover:border-black/40 p-8 lg:p-9 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-xl hover:shadow-black/5 "
            >
              {/* Card Header Tag (Number alone in Outfit font) */}
              {/* <div className="flex items-center justify-between w-full mb-6 pb-3 border-b border-black/10">
                <span
                  className="text-sm font-medium text-[#666] tracking-wider"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  {item.number}
                </span>
              </div> */}

              {/* Card Body Content */}
              <div className="flex-1 flex flex-col justify-end gap-3">
                {item.highlight && (
                  <div
                    className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0a0a]"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {item.highlight}
                  </div>
                )}
                <p className="text-base md:text-[17px] text-[#222] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

