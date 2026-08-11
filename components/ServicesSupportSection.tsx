"use client";

import React from "react";
import { motion } from "framer-motion";

interface SupportCard {
  number: string;
  tag: string;
  title: string;
  body: string;
  targetId: string;
}

const supportCards: SupportCard[] = [
  {
    number: "01",
    tag: "RESEARCH & IMPACT",
    title: "Research Development & Impact Support",
    body: "For researchers, research teams and organisations developing proposals, partnerships, impact plans and public engagement strategies.",
    targetId: "research-impact",
  },
  {
    number: "02",
    tag: "CREATIVE & CIVIC",
    title: "Creative & Civic Communication",
    body: "For organisations, campaigns and communities seeking creative ways to communicate ideas, inspire audiences and engage publics.",
    targetId: "creative-communication",
  },
  {
    number: "03",
    tag: "FACILITATION & EVENTS",
    title: "Speaking, Facilitation & Events",
    body: "For conferences, workshops, panels, civic forums, celebrations and events that need energy and substance.",
    targetId: "speaking-events",
  },
];

export default function ServicesSupportSection() {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -90; // account for top fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-medium tracking-tight text-[#0a0a0a] mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Choose the support you need
          </h2>
          <div className="h-[2px] w-[80px] bg-[#0a0a0a]" />
        </motion.div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {supportCards.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => handleScrollTo(card.targetId)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleScrollTo(card.targetId);
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative w-full rounded-none bg-[#fcfcfc] border border-black/10 hover:border-black/40 p-7 lg:p-8 flex flex-col justify-start overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-xl hover:shadow-black/5 min-h-[140px] md:min-h-[160px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              {/* Card Main Area */}
              <div className="flex flex-col justify-start relative w-full">
                {/* Title Area (Definite height so dividing line lies on the exact same plane across all cards) */}
                <div className="w-full min-h-[64px] md:min-h-[72px] flex items-start mb-4">
                  <h3
                    className="text-xl md:text-2xl font-medium tracking-tight text-[#0a0a0a] leading-tight"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Mobile View Body Text (Always visible on mobile) */}
                <p className="block md:hidden text-sm text-[#444] font-light leading-relaxed pt-4 border-t border-black/10">
                  {card.body}
                </p>

                {/* Desktop View Body Text & Border (Border sits on exact same plane for all cards, appears only on hover) */}
                <div className="hidden md:block border-t border-black/15 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <p className="pt-4 text-sm lg:text-[15px] text-[#333] font-light leading-relaxed text-right opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

