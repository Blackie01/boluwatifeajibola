'use client'
import React from "react";
import { motion } from "framer-motion";
import ActionText from "@/components/ActionText";

const themes = [
  "Creative performances for academic, civic, cultural, and faith-based events",
  "Spoken word and poetry for conferences, campaigns, ceremonies, and public programmes",
  "Music and lyrical composition around themes of hope, resilience, faith, and social change",
  "Creative advocacy and civic education campaigns",
  "Event hosting, moderation, and facilitation",
  "Research-informed creative outputs for institutions, NGOs, universities, and social movements"
];

export default function CreativeCollaborationsSection() {
  return (
    <section className="w-full bg-[#0C0C0C] text-white py-32 px-6 md:px-12 lg:px-24">
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
            What I Bring to Creative Collaborations
          </h2>
          <div className="h-[2px] w-[80px] bg-white/20 mb-10" />
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            My creative practice is useful across many kinds of spaces. I can support:
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
              className="border-t border-white/20 pt-6 group cursor-default"
            >
              <h3 className="text-lg md:text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
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
          className="pt-24 border-t border-white/10"
        >
          <h2 
            className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight uppercase mb-8"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Work With Me
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
            Let’s work together. Feel free to get in touch.
          </p>
          
          <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-20">
            <div className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-outfit)' }}>
              <ActionText text="Get in touch" href="mailto:hello@boluajibola.com" theme="dark" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
