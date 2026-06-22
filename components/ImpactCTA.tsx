'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ActionText from './ActionText';

export default function ImpactCTA() {
  return (
    <section className="w-full bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-tight font-medium text-[#0a0a0a] mb-12"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Interested in collaboration, impact strategy, stakeholder engagement, policy engagement, training, or knowledge mobilisation?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16 text-[18px] md:text-[20px]"
        >
          <ActionText text="Work With Me" href="#" theme="light" />
          <ActionText text="Start a Conversation" href="#" theme="light" />
        </motion.div>
      </div>
    </section>
  );
}
