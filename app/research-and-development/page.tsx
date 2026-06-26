'use client'
import React from "react"
import PageTitle from "@/components/PageTitle"
import { motion } from "framer-motion"
import ResearchImpactPoster from "@/components/ResearchImpactPoster"
import AreasOfExpertise from "@/components/AreasOfExpertise"
import MethodsApplied from "@/components/MethodsApplied"
import TransferableValue from "@/components/TransferableValue"
import ResearchFuturesPoster from "@/components/ResearchFuturesPoster"

export default function ResearchAndDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start overflow-clip">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
                <PageTitle
                    title="Research & Development (R&D)"
                    subTitle="Driving research strategy, collaborations, and funding success"
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
                    className="lg:col-span-8 max-w-2xl text-[18px]"
                  >
                    <p className="text-[#a0a0a0] leading-relaxed mb-6 font-light">
                      My work in Research and Development focuses on shaping ideas, identifying opportunities, building collaborations, strengthening proposals, understanding funder priorities, and positioning research for success.
                    </p>
                  </motion.div>
                </div>
            </div>

            <ResearchImpactPoster 
                title="Research Support & Strategy"
                imageSrc="/bsharp-research-and-dev.jpeg"
                imageAlt="Research and Development"
                paragraphs={[
                    "As part of the research and development team at the University of Leeds, I support the systems, strategies, relationships, and processes that help researchers develop ambitious projects, respond to funding opportunities, build partnerships, and increase the quality and competitiveness of research proposals.",
                    "This has also involved contributing to processes around research planning, grant capture, funding intelligence, REF-related preparation, impact literacy, monitoring systems, research communications, and stakeholder engagement.",
                    "Across my research and development work, I have supported the capture of £20M+ in research funding, providing context to my broader experience in grant capture, proposal development, and research support.",
                    "This experience is strengthened by my wider background as a researcher and consultant on projects involving universities, humanitarian organisations, international NGOs, development actors, and civic institutions."
                ]}
                stickerImageSrc=""
            />
            
            <AreasOfExpertise />
            
            <div className="w-full bg-white pb-32">
                <MethodsApplied 
                    theme="light"
                    columns={1}
                    title="My distinctive approach"
                    description="My approach to Research and Development is shaped by three things. This combination allows me to support research development in a way that is strategic and attentive to both scholarly quality and real-world relevance."
                    items={[
                        { title: "My understanding of the intellectual life of research." },
                        { title: "My understanding of institutional systems and processes" },
                        { title: "My understanding of public value" }
                    ]}
                />
            </div>

            <TransferableValue />
            
            <ResearchFuturesPoster />
        </main>
    )
}