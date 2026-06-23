"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import ResearchThemes from "@/components/ResearchThemes";
import MethodsApplied from "@/components/MethodsApplied";
import FeaturedPublications from "@/components/FeaturedPublications";
import OngoingProjects from "@/components/OngoingProjects";
import OtherResearchProjects from "@/components/OtherResearchProjects";
import ResearchConferencePapers from "@/components/ResearchConferencePapers";

export default function ResearchPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let current = "";
      // Trigger when section reaches the middle of the screen
      const triggerPoint = window.innerHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    // Call once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className={`min-h-screen text-white pt-60 flex flex-col justify-start overflow-x-clip relative`}>
      <div className={`hidden md:block fixed right-0 top-[30vh] z-50 p-6 pr-8`}>
        <h3 className={`${activeSection === "" ? "text-white" : "text-black"} text-right text-xs tracking-wider uppercase mb-8 transition-colors duration-300`}>
          On this page
        </h3>
        <nav className="flex flex-col gap-5">
          {[
            { id: "researchThemes", label: "Research" },
            { id: "methodsApplied", label: "Methods" },
            { id: "featuredPublications", label: "Publications" },
            { id: "ongoingProjects", label: "Projects" },
            { id: "otherResearchProjects", label: "Other Projects" },
            { id: "researchConferencePapers", label: "Papers" },
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer text-right justify-end transition-all duration-300 flex items-center gap-4 group ${
                activeSection === item.id 
                  ? "text-[#96750b]" 
                  : activeSection === "" 
                    ? "text-[#a0a0a0] hover:text-[#d4af37]" 
                    : "text-[#666666] hover:text-[#96750b]"
              }`}
            >
              {/* <span
                        className={`text-sm ${activeSection === item.id ? "opacity-100 text-[#d4af37]" : "opacity-50 group-hover:text-[#d4af37]"}`}
                      >
                        {index + 1}.
                      </span> */}
              <span className="text-[15px]">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

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
              <a
                href="#"
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
                href="#"
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
                href="#"
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
            <p className="text-[#a0a0a0] leading-relaxed mb-6">
              My research explores how societies organise agency, respond to
              crises, and imagine change. Across my work, I am particularly
              interested in how democracy and development intersect to shape
              social and political life, especially within global south
              contexts.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-6">
              My work is organised around the three interconnected themes
              described below. By working across these areas, my research seeks
              to contribute to a more nuanced and integrated understanding of
              how politics, institutions, infrastructures, and publics converge
              in contemporary societies.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-black w-full relative z-10  pt-12 md:pt-24 mt-24 pb-24">
        <div id="researchThemes">
          <ResearchThemes theme="light" />
        </div>
        <div id="methodsApplied">
          <MethodsApplied theme="light" />
        </div>
        <div id="featuredPublications">
          <FeaturedPublications theme="light" />
        </div>
        <div id="ongoingProjects">
          <OngoingProjects theme="light" />
        </div>
        <div id="otherResearchProjects">
          <OtherResearchProjects theme="light" />
        </div>
        <div id="researchConferencePapers">
          <ResearchConferencePapers theme="light" />
        </div>
      </div>
    </main>
  );
}
