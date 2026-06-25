'use client'
import React from "react";
import { motion } from "framer-motion";
import ActionText from "@/components/ActionText";

const themes = [
  "Social movements and democratic change",
  "Elections, youth participation, and civic responsibility",
  "Protest, technology, and digital activism",
  "Research impact and knowledge mobilisation",
  "Public engagement and media visibility",
  "Governance, leadership, and development in Africa",
  "Creativity, storytelling, and public communication",
  "Art, activism, and democratic imagination",
  "Celebration, community, and meaningful gathering"
];

export default function FutureInvitationsSection() {
  return (
    <section className="w-full bg-white text-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <h2 
            className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight uppercase mb-8"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Selected Themes for Future Invitations
          </h2>
          <div className="h-[2px] w-[80px] bg-[#0a0a0a] mb-10" />
          <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
            I welcome invitations to speak, facilitate, host, moderate, or perform at events on themes including:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-16 mb-40">
          {themes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="border-t border-[#0a0a0a]/20 pt-6 group cursor-default"
            >
              <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#333333] group-hover:text-[#0a0a0a] transition-colors duration-300">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Work With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-24 border-t border-[#0a0a0a]/10"
        >
          <h2 
            className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight uppercase mb-12"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Work With Me
          </h2>
          
          <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-20">
            <div className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-outfit)' }}>
              <ActionText text="Invite me to speak" href="mailto:hello@boluajibola.com" theme="light" />
            </div>
            <div className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-outfit)' }}>
              <ActionText text="Book MC BSharp" href="mailto:hello@boluajibola.com" theme="light" />
            </div>
            <div className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-outfit)' }}>
              <ActionText text="Discuss an event" href="mailto:hello@boluajibola.com" theme="light" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
