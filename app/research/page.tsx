'use client'
import React from "react"
import { motion } from "framer-motion"
import PageTitle from "@/components/PageTitle"
import ResearchThemes from "@/components/ResearchThemes"
import MethodsApplied from "@/components/MethodsApplied"
import FeaturedPublications from "@/components/FeaturedPublications"
import OngoingProjects from "@/components/OngoingProjects"
import OtherResearchProjects from "@/components/OtherResearchProjects"
import ResearchConferencePapers from "@/components/ResearchConferencePapers"

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start overflow-x-clip">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
                <PageTitle 
                    title="My research" 
                    subTitle="Academic & Independent Research"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-16">
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
                      My research explores how societies organise agency, respond to crises, and imagine change. Across my work, I am particularly interested in how democracy and development intersect to shape social and political life, especially within global south contexts.
                    </p>
                    <p className="text-[#a0a0a0] leading-relaxed mb-6">
                      My work is organised around the three interconnected themes described below. By working across these areas, my research seeks to contribute to a more nuanced and integrated understanding of how politics, institutions, infrastructures, and publics converge in contemporary societies.
                    </p>
                  </motion.div>
                </div>
            </div>
            <ResearchThemes />
            <MethodsApplied />
            <FeaturedPublications />
            <OngoingProjects />
            <OtherResearchProjects />
            <ResearchConferencePapers />
        </main>
    )
}