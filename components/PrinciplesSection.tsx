'use client'
import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    num: "01",
    title: "Bridging knowledge and action",
    desc: "Ensuring that research findings and insights are translated into forms that can inform decision-making and support positive change."
  },
  {
    num: "02",
    title: "Building meaningful partnerships",
    desc: "I am committed to fostering productive relationships between researchers, policymakers, practitioners, industry partners, and communities."
  },
  {
    num: "03",
    title: "Demonstrating and evidencing value",
    desc: "I am committed to helping organisations understand and demonstrate the significance of their work."
  }
];

export default function PrinciplesSection() {
  return (
    <section className="py-24 border-t border-white/10 relative mt-8">
      <div className="max-w-2xl mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl leading-tight md:leading-snug font-medium text-white"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Three principles shape my approach to impact, engagement, and policy.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 relative">
        {principles.map((p, idx) => (
          <motion.div 
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative group cursor-default"
          >
            <div className="mb-6 relative">
                {/* Large Background Number */}
                <span 
                    className="text-[120px] lg:text-[160px] font-bold leading-none text-white/[0.03] absolute -top-16 lg:-top-20 -left-6 z-0 select-none group-hover:text-white/[0.06] transition-colors duration-700" 
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  {p.num}
                </span>
                
                {/* Accent Line */}
                <div className="h-[2px] w-12 bg-[#d4af37] mb-8 relative z-10 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                
                <h3 className="text-xl md:text-2xl font-medium text-gray-200 relative z-10 leading-snug">
                  {p.title}
                </h3>
            </div>
            
            <p className="text-[#a0a0a0] text-base leading-relaxed font-light relative z-10">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
