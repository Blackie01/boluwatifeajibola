'use client'
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import PageTitle from "@/components/PageTitle"
import ChronologicalDisplay from "@/components/ChronologicalDisplay"
import { educationData, professionalJourneyData, professionalJourneySummary, creativeSummary, oneGoalSummary, onePhilosophySummary } from "@/utils/data"
import SummarySectionDisplay from "@/components/SummarySectionDisplay"
import AwardsSection from "@/components/AwardsSection"
import MembershipsSection from "@/components/MembershipsSection"

export default function About() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32">
        {/* Intro Section */}
        <PageTitle
            title="About"
            subTitle="Researcher • Impact and Public Engagement Professional • Creative Practitioner"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-start"
          >
            <div className="flex items-center gap-6 text-[#a0a0a0]">
              <a href="#" className="hover:text-white transition-colors h-8 w-8 border border-[currentColor] rounded-full flex items-center justify-center" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors h-8 w-8 border border-[currentColor] rounded-full flex items-center justify-center" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors h-8 w-8 border border-[currentColor] rounded-full flex items-center justify-center" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 max-w-2xl text-[18px]"
          >
            <p className="text-[#a0a0a0] leading-relaxed mb-6">
              My work intersects research, impact, public engagement, and creative expression to understand and demonstrate how everyday desires for development and change move between spaces where they are studied and places where they are lived.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-6">
              This forms the basis of the questions I explore across the interconnected worlds of scholarship, creativity, civic action and faith.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Through what I describe as the convergence of RICA – Research, Impact, Creativity, and Activism, I explore, seek to influence, how people experience well-governed living.
            </p>
          </motion.div>
        </div>

        <ChronologicalDisplay title="Education" data={educationData} />

        {/* Professional Journey Section */}
        <SummarySectionDisplay {...professionalJourneySummary} />

        <div id="experience">
          <ChronologicalDisplay title="Experience" data={professionalJourneyData} />
        </div>

        <SummarySectionDisplay {...creativeSummary} imagePosition="right" />
        <SummarySectionDisplay {...oneGoalSummary} imagePosition="left" />
        <SummarySectionDisplay {...onePhilosophySummary} imagePosition="right" />

        {/* Awards and Recognitions */}
        <AwardsSection />

      </div>
      <MembershipsSection />
    </main>
  )
}