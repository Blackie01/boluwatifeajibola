'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ActionText from './ActionText';

export default function OngoingProjects() {
  return (
    <section className="w-full pt-24 md:pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16"
      >
        <h2 
          className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tight uppercase"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Ongoing projects
        </h2>
      </motion.div>

      <div className="w-full border-b border-white/20">
        <div className="border-t border-white/20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative"
          >
            {/* Index Column */}
            <div className="w-full md:w-[10%] text-sm text-[#a0a0a0] font-outfit md:sticky md:top-32 self-start">
              (01)
            </div>

            {/* Title Column */}
            <div className="w-full md:w-[30%] md:sticky md:top-32 self-start">
              <h3 className="text-sm md:text-base text-white/80 font-medium tracking-wide uppercase leading-relaxed">
                Protests and Polls: A Nigerian Paradigm of Social Movements and Elections Interrelations
              </h3>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-[60%] text-base leading-relaxed text-[#d1d1d1] font-light flex flex-col gap-6 items-start">
              <p>
                My doctoral research, Protests and Polls (PaP), explores the reciprocal relations between two forms of political mobilisation – social movements and elections. PaP’s attempt at interrogating the interpenetration of movement and election rhythms takes issue with existing approaches that draw boundaries between both realms of contention and those that systematise the influence of one upon the other. It essentialises key aspects of the interactional dynamics between movements and elections that have been overlooked by existing scholarship. Hence, its focus on elements that mediate the interrelations – in their symbolic, discursive, and emotional forms. It explores Nigeria’s 2020 #EndSARS movement, the pre-and post-election character of the Obidient movement, and the 2023 general elections cycle to theorise a much-needed African perspective on the relationship between movement and (electoral) politics.
              </p>
              <div className="mt-4">
                <ActionText text="Read more" href="/protests-and-polls" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
