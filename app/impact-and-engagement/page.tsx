"use client";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import PrinciplesSection from "@/components/PrinciplesSection";
import ResearchImpactPoster from "@/components/ResearchImpactPoster";
import WorkInvolvesSection from "@/components/WorkInvolvesSection";
import ImpactProjectsSection from "@/components/ImpactProjectsSection";
import SummarySectionDisplay from "@/components/SummarySectionDisplay";
import ImpactCTA from "@/components/ImpactCTA";
import { 
  policyEngagementSummary, 
  publicEngagementSummary, 
  reachCollaborationSummary, 
  lookingAheadSummary 
} from "@/utils/data";
import ActionText from "@/components/ActionText";

export default function ImpactAndEngagement() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start overflow-clip">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32">
        {/* Intro Section */}
        <PageTitle
          title="Impact, Engagement & Policy"
          subTitle="The journey of my research beyond the institutions where they are produced"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12 md:mt-0 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-start"
          >
            <div className="flex items-center gap-6 text-[#a0a0a0]">
              <a
                href="https://www.linkedin.com/in/boluajibola/"
                className="hover:text-white transition-colors h-8 w-8 border border-[currentColor] rounded-full flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/_boluajibola?s=11"
                className="hover:text-white transition-colors h-8 w-8 border border-[currentColor] rounded-full flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_boluajibola/"
                className="hover:text-white transition-colors h-8 w-8 border border-[currentColor] rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 max-w-2xl text-base"
          >
            <p className="text-[#a0a0a0] leading-relaxed mb-6 font-light">
              Throughout my career, I have been interested in generating
              knowledge, as well as understanding how that knowledge can
              influence policy, improve practice, shape public conversations,
              and contribute to meaningful social change.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-6 font-light">
              This sits within my broader work in research and development (R&D).
            </p>
            <ActionText text="Explore my R&D work" href="/research-and-development"/>
          </motion.div>
        </div>

        <PrinciplesSection />
      </div>

      <ResearchImpactPoster />
      <WorkInvolvesSection />
      <ImpactProjectsSection />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <SummarySectionDisplay {...policyEngagementSummary} imagePosition="left" />
        <SummarySectionDisplay {...publicEngagementSummary} imagePosition="right" />
        <SummarySectionDisplay {...reachCollaborationSummary} imagePosition="left" />
        <SummarySectionDisplay {...lookingAheadSummary} imagePosition="right" />
      </div>

      {/* <ImpactCTA /> */}
    </main>
  );
}
