'use client'
import React from "react"
import { motion } from "framer-motion"
import PageTitle from "@/components/PageTitle"
import ActionText from "@/components/ActionText"
import ParticleDustEntity from "@/components/ParticleDustEntity"
import ServicesSupportSection from "@/components/ServicesSupportSection"
import ResearchImpactSection from "@/components/ResearchImpactSection"
import CreativeCommunicationSection from "@/components/CreativeCommunicationSection"
import SpeakingEventsSection from "@/components/SpeakingEventsSection"
import HowWeWorkTogetherSection from "@/components/HowWeWorkTogetherSection"
import SelectedExperienceSection from "@/components/SelectedExperienceSection"

export default function WorkWithMe() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32">
        {/* Section 1: Page Title Header */}
        <PageTitle
          title="How I Can Help"
          subTitle=""
        />

        {/* Section 2: Core Value Proposition & Digital Noise Particle Entity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 ">
            
            {/* Left Column: Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl text-white font-light leading-[1.3] tracking-tight"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  I am committed to helping researchers, organisations and civic actors develop ideas, secure opportunities, engage publics and create meaningful change.
                </h2>

                <p className="text-[#a0a0a0] text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  From research development and impact strategy to creative communication, speaking and facilitation, we can work together to bring your ideas and vision to life.
                </p>
              </div>

              {/* ActionText CTA */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-6">
                <div>
                  <ActionText text="Start a conversation" href="/contact" theme="dark" />
                </div>
              </div>
            </div>

            {/* Right Column: Animated Flowing Particle Dust Entity */}
            <div className="lg:col-span-5 flex items-center lg:-mt-32 justify-center w-full h-full relative min-h-[400px]">
              <ParticleDustEntity />
            </div>

          </div>
        </motion.div>
      </div>

      {/* Section 3: White Background - Choose the support you need */}
      <ServicesSupportSection />

      {/* Section 4: Research Development & Impact Support (Sticky Column & Card Stacking) */}
      <ResearchImpactSection />

      {/* Section 5: Creative & Civic Communication (Sticky Column & Card Stacking) */}
      <CreativeCommunicationSection />

      {/* Section 6: Speaking, Facilitation & Events (Sticky Column & Card Stacking) */}
      <SpeakingEventsSection />

      {/* Section 7: How We Can Work Together (Horizontal Step Process with Scroll Gold Line) */}
      <HowWeWorkTogetherSection />

      {/* Section 8: Selected Experience (White Background Architectural Bento Grid) */}
      <SelectedExperienceSection />
    </main>
  )
}