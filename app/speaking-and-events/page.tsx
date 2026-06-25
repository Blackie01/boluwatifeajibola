"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EditorialImage from "@/components/EditorialImage";
import FeaturedSpeakingEngagements from "@/components/FeaturedSpeakingEngagements";
import FutureInvitationsSection from "@/components/FutureInvitationsSection";

export default function SpeakingAndEvents() {
  return (
    <main className="min-h-screen bg-[#0C0C0C]">
      {/* Full Screen Hero Section */}
      <section className="relative w-full h-[100svh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bsharp-events-hero.jpg"
            alt="Events Hero"
            fill
            className="object-cover object-[center_25%]"
            priority
            quality={100}
          />
          {/* Optional subtle gradient to ensure the background isn't too overpowering if needed, but keeping it mostly clear */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* The Text Overlay positioned at the bottom */}
        <div className="absolute inset-0 w-full h-full flex items-end justify-between p-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col md:flex-row md:items-end justify-between gap-0 md:gap-0"
          >
            {/* Left side text */}
            <div className="text-left mb-0 md:mb-0">
              <p className="text-[#a0a0a0] mb-1 md:mb-2 font-light tracking-wide uppercase text-xs md:text-sm">Speaking & Events</p>
              <h1 
                className="text-[30px] text-[#a0a0a0] font-light leading-[1.2] tracking-wide"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Ideas need <br className="hidden md:block" />a stage
              </h1>
            </div>

            {/* Right side text */}
            <div className="text-left md:text-right">
              <h1 
                className="text-[30px] text-[#a0a0a0] font-light leading-[1.2] tracking-wide"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                and the right person <br className="hidden md:block" />to hold the room
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Novel Section: Speaking Philosophy & Collage */}
      <div className="relative z-10 bg-[#0C0C0C]">
        
        {/* Editorial Text Section */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-24 md:pt-40 pb-24 md:pb-32">
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* P1: Giant Pull Quote Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl"
            >
              <h2 
                className="text-3xl md:text-5xl lg:text-[50px] leading-[1.2] font-medium text-white/70 tracking-tight"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                My work in speaking and events brings together <span className="text-[#666] font-light">research, public engagement, creativity, facilitation,</span> and performance.
              </h2>
            </motion.div>

            {/* P2 & P3: Offset Two-Column Context */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 md:col-start-2 lg:col-start-3"
              >
                <div className="w-8 h-[1px] bg-white/20 mb-6" />
                <p className="text-[#888888] text-lg lg:text-xl font-light leading-relaxed">
                  Across academic, civic, student-led, professional, cultural, and social spaces, I have spoken, moderated, organised, hosted, facilitated, and performed.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 lg:col-span-4"
              >
                <div className="w-8 h-[1px] bg-white/20 mb-6 hidden md:block" />
                <p className="text-[#888888] text-lg lg:text-xl font-light leading-relaxed" >
                  My speaking and event work is shaped by experience across research, public engagement, leadership, music, spoken word, and creative performance.
                </p>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Full Bleed Collage Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          {/* Fixed aspect ratio to show the full height of the image without cropping */}
          <EditorialImage
            src="/bsharp-collage-1b.png"
            alt="Speaking and Events Experience Collage"
            aspectRatio="aspect-[4257/2355]"
            className="border-0 rounded-none w-full"
          />
        </motion.div>

        {/* P4: Closing Emphasize */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-24 pb-40 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[70%] lg:max-w-3xl text-right"
          >
            <p 
              className="text-3xl font-outfit md:text-4xl lg:text-[44px] text-white font-light leading-tight"
            >
              "I am especially interested in events where complex issues need to be made accessible and where audiences need to be carried along."
            </p>
          </motion.div>
        </div>
        
      </div>

      <div className="bg-white w-full relative z-10">
        <FeaturedSpeakingEngagements theme="light" />
      </div>

      {/* Full Bleed Collage Image 2 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10 bg-[#0C0C0C]"
      >
        <EditorialImage
          src="/bsharp-collage-2.png"
          alt="Speaking and Events Additional Collage"
          aspectRatio="aspect-[4170/2080]"
          className="border-0 rounded-none w-full"
        />
      </motion.div>

      {/* MC BSharp Section */}
      <section className="bg-[#0C0C0C] relative z-10 w-full pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Title & Text */}
            <div className="flex-1 flex flex-col gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 
                  className="text-5xl font-outfit md:text-7xl lg:text-[80px] text-white mb-6 tracking-tight" 
                >
                  MC BSharp
                </h2>
                <p 
                  className="text-2xl lg:text-[20px] text-[#b0b0b0] font-light leading-snug" 
                >
                  Hosting with energy, intelligence, and presence
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-12 h-[1px] bg-white/20 mb-10" />
                <p className="text-[#888888] text-lg lg:text-xl font-light leading-relaxed mb-6" >
                  As MC BSharp, I bring warmth, humour, and creative energy to events.
                </p>
                <p className="text-[#888888] text-lg lg:text-xl font-light leading-relaxed" >
                  I have MC-ed a wide range of events, including conferences, parties, social gatherings, academic events, civic programmes, youth events, and celebratory occasions. My approach to compering is grounded in preparation, audience awareness, timing, and the ability to keep an event flowing without losing its character.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Categories Menu */}
            <div className="flex-1 flex flex-col justify-center lg:pt-16">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs md:text-sm tracking-widest text-[#666] uppercase mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Available for the following categories of events:
                </p>
                <ul className="flex flex-col">
                  {[
                    "Social & Family Celebrations",
                    "Community, Cultural & Faith-Based Events",
                    "Corporate, Academic & Professional Events",
                    "Creative & Public Events"
                  ].map((item, idx) => (
                    <li key={idx} className="border-b border-white/10 group flex items-center py-8 hover:border-white/40 transition-colors duration-500">
                      <span 
                        className="text-[#a0a0a0] text-xl md:text-2xl lg:text-[25px] font-light group-hover:text-white group-hover:pl-4 transition-all duration-500" 
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* MC BSharp Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10 bg-[#0C0C0C]"
      >
        <EditorialImage
          src="/mc-bsharp-banner.png"
          alt="MC BSharp Banner"
          aspectRatio="aspect-[1050/600]"
          className="border-0 rounded-none w-full"
        />
      </motion.div>

      <FutureInvitationsSection />
    </main>
  );
}
