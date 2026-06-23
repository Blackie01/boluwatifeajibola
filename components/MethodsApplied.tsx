'use client'
import React from 'react';
import { motion } from 'framer-motion';

const methods = [
  {
    title: "Ethnographic and Qualitative Research",
    desc: "Interviews, participant observation, digital ethnography, and biographic methods."
  },
  {
    title: "Textual, Visual, and Creative Analysis",
    desc: "Protest artefacts, media content, and digital and creative materials."
  },
  {
    title: "Mixed Methods and Data Analysis",
    desc: "Quantitative and mixed-method approaches, using tools such as SPSS, STATA, and Excel."
  },
  {
    title: "Fieldwork and Applied Research",
    desc: ""
  }
];

export default function MethodsApplied({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const isLight = theme === "light";
  return (
    <section className="max-w-7xl mx-auto w-full px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <h2 
            className={`text-3xl md:text-5xl font-medium ${isLight ? "text-black" : "text-white"} mb-8 leading-tight tracking-tight`}
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Methods applied
          </h2>
          <p className={`${isLight ? "text-[#444444]" : "text-[#a0a0a0]"} text-[18px] leading-relaxed font-light`}>
            My research combines ethnographic, qualitative, and mixed-method approaches to examine how political, social, and institutional dynamics unfold in real-world contexts. My methodological approach is guided by an interest in lived experience, political meaning-making, and the role of discourse, emotion and symbols in bridging and shaping contentious experiences.
          </p>
        </motion.div>

        {/* Methods Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-default"
            >
              {/* Animated Top Border */}
              <div className={`h-[1px] w-full ${isLight ? "bg-black/10" : "bg-white/20"} mb-6 relative overflow-hidden`}>
                 <div className={`absolute top-0 left-0 h-full w-full ${isLight ? "bg-[#96750b]" : "bg-[#d4af37]"} -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`} />
              </div>
              
              <h3 className={`text-xl font-medium ${isLight ? "text-black" : "text-white"} mb-3 group-hover:${isLight ? "text-[#96750b]" : "text-[#d4af37]"} transition-colors duration-500`}>
                {method.title}
              </h3>
              
              {method.desc && (
                <p className={`${isLight ? "text-[#666666]" : "text-[#808080]"} leading-relaxed font-light`}>
                  {method.desc}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
