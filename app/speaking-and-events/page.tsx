"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EditorialImage from "@/components/EditorialImage";
import FeaturedSpeakingEngagements from "@/components/FeaturedSpeakingEngagements";
import FutureInvitationsSection from "@/components/FutureInvitationsSection";
import SummarySectionDisplay from "@/components/SummarySectionDisplay";

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
            className="w-full"
          >
            {/* Mobile Text (joined) */}
            <div className="block md:hidden text-left mb-2">
              <p className="text-[#fff]/60 font-bold uppercase text-[28px] leading-[1.1] tracking-tight">
                Speaking & Events
              </p>
              <h1
                className="text-base text-[#a0a0a0] font-light leading-[1.3] tracking-wide mt-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Ideas need a stage and the right person to hold the room
              </h1>
            </div>

            {/* Desktop Text (split) */}
            <div className="hidden md:flex w-full items-end justify-between">
              {/* Left side text */}
              <div className="text-left">
                <p className="text-[#fff]/60 mb-2 font-bold uppercase text-[50px] leading-[60px] tracking-tight">
                  Speaking &
                </p>
                <h1
                  className="text-[30px] text-[#a0a0a0] font-light leading-[1.2] tracking-wide"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Ideas need <br />a stage
                </h1>
              </div>

              {/* Right side text */}
              <div className="text-right">
                <p className="text-[#fff]/60 mb-2 font-bold uppercase text-[50px] leading-[60px] tracking-tight">
                  Events
                </p>
                <h1
                  className="text-[30px] text-[#a0a0a0] font-light leading-[1.2] tracking-wide"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  and the right person <br />
                  to hold the room
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Novel Section: Speaking Philosophy */}
      <div className="relative z-10 bg-white">
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
                className="text-2xl md:text-3xl lg:text-[40px] leading-[1.2] font-medium text-[#0a0a0a] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                My work in speaking and events brings together{" "}
                <span className="text-[#666] font-light">
                  research, public engagement, creativity, facilitation,
                </span>{" "}
                and performance.
              </h2>
            </motion.div>

            {/* P2 & P3: Offset Two-Column Context */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="md:col-span-5 md:col-start-2 lg:col-start-3"
              >
                <div className="w-8 h-[1px] bg-[#0a0a0a]/20 mb-6" />
                <p className="text-[#666666] text-base font-light leading-relaxed">
                  Across academic, civic, student-led, professional, cultural,
                  and social spaces, I have spoken, moderated, organised,
                  hosted, facilitated, and performed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="md:col-span-5 lg:col-span-4"
              >
                <div className="w-8 h-[1px] bg-[#0a0a0a]/20 mb-6 hidden md:block" />
                <p className="text-[#666666] text-base font-light leading-relaxed">
                  My speaking and event work is shaped by experience across
                  research, public engagement, leadership, music, spoken word,
                  and creative performance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Collage and Closing Emphasize */}
      <div className="relative z-10 bg-[#0C0C0C] pt-16 md:pt-24">
        {/* Contained Collage Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 relative"
        >
          {/* Fixed aspect ratio to show the full height of the images without cropping */}
          <div className="w-full aspect-[4257/2355] flex flex-row gap-2 md:gap-4">
            <div className="w-[65%] h-full">
              <EditorialImage
                src="/speak/speak-1.jpeg"
                alt="Speaking and Events 1"
                aspectRatio="h-full"
                className="border-0 rounded-none w-full"
              />
            </div>
            <div className="w-[35%] h-full">
              <EditorialImage
                src="/speak/speak-2.jpeg"
                alt="Speaking and Events 2"
                aspectRatio="h-full"
                className="border-0 rounded-none w-full"
              />
            </div>
          </div>
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
            <p className="text-2xl md:text-3xl lg:text-[40px] font-outfit text-white font-light leading-tight">
              I am especially interested in events where complex issues need to
              be made accessible and where audiences need to be carried along.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white w-full relative z-10">
        <FeaturedSpeakingEngagements theme="light" />
      </div>

      {/* MC BSharp Section */}
      <div className="bg-[#0C0C0C] relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <SummarySectionDisplay
            title="MC BSharp"
            theme="dark"
            imageSrc="/mc-bsharp-banner.png"
            imageAlt="MC BSharp Banner"
            aspectRatio="aspect-[16/10]"
            imagePosition="left"
            paragraphs={[
              <span
                key="subtitle"
                className="block text-2xl lg:text-[20px] text-[#b0b0b0] font-light leading-snug pb-4"
              >
                Hosting with energy, intelligence, and presence
              </span>,
              "As MC BSharp, I bring warmth, humour, and creative energy to events.",
              "I have MC-ed a wide range of events, including conferences, parties, social gatherings, academic events, civic programmes, youth events, and celebratory occasions. My approach to compering is grounded in preparation, audience awareness, timing, and the ability to keep an event flowing without losing its character.",
            ]}
          />
        </div>
      </div>

      {/* Standalone Event Categories List */}
      <section className="bg-[#0C0C0C] w-full pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <p
              className="text-xs md:text-sm tracking-widest text-[#666] uppercase mb-8"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Available for the following categories of events:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-0">
              {[
                "Social & Family Celebrations",
                "Community, Cultural & Faith-Based Events",
                "Corporate, Academic & Professional Events",
                "Creative & Public Events",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="border-b border-white/10 group flex items-center py-6 hover:border-white/40 transition-colors duration-500"
                >
                  <span
                    className="text-[#a0a0a0] text-xl lg:text-2xl font-light group-hover:text-white transition-all duration-500"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <FutureInvitationsSection />
    </main>
  );
}
