'use client'
import React from 'react';
import { motion } from 'framer-motion';
import EditorialImage from './EditorialImage';

const skills = [
  "Research strategy and development",
  "Grant proposal review and strengthening",
  "Funding opportunity mapping",
  "Bid development support",
  "Research project scoping",
  "Partnership and stakeholder planning",
  "Impact and engagement integration",
  "Research communication and positioning",
  "Monitoring, evidence, and learning processes",
  "Capacity building and training for researchers"
];

export default function TransferableValue() {
  return (
    <section className="bg-[#0C0C0C] text-white py-32 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full h-full min-h-[400px]"
          >
            <div className="relative w-full h-full">
              <EditorialImage 
                src="/bsharp-transferable-value.jpeg"
                alt="Transferable value"
                aspectRatio="h-full"
              />
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-[#d4af37]/30 -z-10 hidden md:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-[#d4af37]/30 -z-10 hidden md:block" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 
                className="text-[32px] md:text-[48px] leading-[1.1] font-medium tracking-tight mb-8 text-white uppercase"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Transferable value
              </h2>
              <div className="h-[1px] w-[80px] bg-[#d4af37] mb-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-[#a0a0a0] text-base font-light leading-relaxed mb-16"
            >
              <p>
                The skills I bring to Research and Development are transferable across sectors, disciplines, and countries.
              </p>
              <p>
                Universities, research institutes, think tanks, charities, NGOs, public bodies, funders, and private-sector organisations all face similar challenges: how to develop strong ideas, build effective partnerships, secure resources, demonstrate value, and deliver work that matters.
              </p>
              <p className="pb-4">
                My experience enables me to support organisations with:
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 h-full content-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.05), ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="flex items-center gap-4 py-4 border-t border-white/10 group-hover:border-[#d4af37]/50 transition-colors duration-300 h-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] opacity-50 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    <span className="text-gray-300 font-light group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
              {/* Close the bottom border of the last row */}
              <div className="border-t border-white/10 w-full hidden md:block" />
              <div className="border-t border-white/10 w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
