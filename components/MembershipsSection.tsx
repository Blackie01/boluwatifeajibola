'use client'
import React from "react";
import { motion } from "framer-motion";
import { membershipsData } from "@/utils/data";

export default function MembershipsSection() {
  return (
    <section className="w-full bg-white text-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 
            className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight uppercase mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Professional Association Memberships
          </h2>
          <div className="h-[2px] w-[80px] bg-[#0a0a0a]" />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-16">
          {membershipsData.map((item, idx) => (
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
      </div>
    </section>
  );
}
