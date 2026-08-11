"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ActionText from "./ActionText";

const helpWithItems = [
  "Public lectures",
  "Workshop facilitation",
  "Panel moderation",
  "Event hosting and compering",
  "Research impact training",
  "Public engagement and media visibility workshops",
  "Youth and civic leadership sessions",
];

const goodFitItems = [
  "Higher Education Institutions and research centres",
  "Conferences and workshops",
  "Civic forums and youth programmes",
  "Public lectures and panels",
  "Cultural events and celebrations",
  "Faith-based/community gatherings",
  "Organisations needing an engaging facilitator or host",
];

interface ScrollPillProps {
  item: string;
  index: number;
}

function ScrollPill({ item, index }: ScrollPillProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress for this individual pill: starts as it enters viewport bottom (92%), settles at middle (50%)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 50%"],
  });

  // Staggered vertical translation: creates extra distance between pills until settling in middle of screen
  const yOffset = 50 + (index % 4) * 20;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);

  // Smooth delayed opacity transition based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.4, 1]);

  // Subtle scaling effect settling into final position
  const scale = useTransform(scrollYProgress, [0, 1], [0.90, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="inline-flex items-center p-4 md:px-5 md:py-4 rounded-none border border-black/15 bg-white hover:border-black/40 hover:bg-black/[0.02] transition-colors shadow-sm group"
    >
      <span className="text-base text-[#1a1a1a] font-normal leading-snug">
        {item}
      </span>
    </motion.div>
  );
}

export default function SpeakingEventsSection() {
  return (
    <section id="speaking-events" className="w-full bg-[#fbfbfb] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Title, Callout, Description & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 md:lg:top-32 flex flex-col justify-between gap-8 self-start z-20 pb-12">
            <div className="flex flex-col gap-6">
              {/* Section Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] sm:text-[40px] md:text-[44px] leading-[1.15] font-medium tracking-tight text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Speaking, Facilitation & Events
              </motion.h2>

              <div className="h-[2px] w-[80px] bg-[#0a0a0a]" />

              {/* Callout / Subtitle */}
              <div className="p-5 rounded-none bg-black/[0.03] border-l-2 border-black/80 flex flex-col gap-1.5">
                <p className="text-sm md:text-[15px] font-medium text-[#222] leading-relaxed">
                  For events that need energy and substance.
                </p>
              </div>

              {/* Body Description */}
              <p className="text-base text-[#444] font-light leading-relaxed">
                I speak, facilitate, moderate and host events across academic, civic, cultural, social and professional spaces. As MC BSharp, I am available for conferences, celebrations, panels, parties, receptions and community events.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-black/10">
              <div className="text-base md:text-lg font-medium">
                <ActionText
                  text="Invite me to speak or host"
                  href="/contact"
                  theme="light"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Row-by-Row Stacking Pills */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Group 1: I Can Help With */}
            <div className="flex flex-col">
              {/* Group Sub-Header */}
              <div className="pb-4 mb-6 border-b border-black/10 flex items-center justify-between">
                <h3
                  className="text-lg md:text-xl font-medium uppercase tracking-wider text-black"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  I can help with
                </h3>
              
              </div>

              {/* Pills stacked vertically arranging row by row with scroll control */}
              <div className="flex flex-wrap gap-3.5">
                {helpWithItems.map((item, idx) => (
                  <ScrollPill key={item} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* Group 2: Good Fit For */}
            <div className="flex flex-col">
              {/* Group Sub-Header */}
              <div className="pb-4 mb-6 border-b border-black/10 flex items-center justify-between">
                <h3
                  className="text-lg md:text-xl font-medium uppercase tracking-wider text-black"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  Good fit for
                </h3>
              </div>

              {/* Pills stacked vertically arranging row by row with scroll control */}
              <div className="flex flex-wrap gap-3.5">
                {goodFitItems.map((item, idx) => (
                  <ScrollPill key={item + idx} item={item} index={idx} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
