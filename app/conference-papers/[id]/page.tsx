"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { researchPapersData } from "@/utils/researchPapers";
import { useParams } from "next/navigation";

export default function ConferencePaperPage() {
  const params = useParams();
  const id = params?.id as string;

  // Find the paper
  let paper = null;
  let paperYear = "";

  if (id) {
    for (const group of researchPapersData) {
      const found = group.papers.find((p) => p.id.toString() === id);
      if (found) {
        paper = found;
        paperYear = group.year;
        break;
      }
    }
  }

  if (!paper) {
    return (
      <main className="min-h-screen bg-[#0C0C0C] text-white pt-48 flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-3xl mb-4 font-medium"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Paper not found
          </h1>
          <Link
            href="/conference-papers"
            className="text-[#d4af37] underline hover:text-white transition-colors duration-300"
          >
            Back to papers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white pt-48 pb-32 px-6 md:px-12 flex flex-col justify-start overflow-clip">
      <div className="max-w-4xl mx-auto w-full">
        <Link
          href="/conference-papers"
          className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors duration-300 mb-12 group"
        >
          <svg
            className="transform transition-transform duration-300 group-hover:-translate-x-1"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to papers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 text-[#d4af37] mb-6 font-medium tracking-wider text-sm uppercase">
            <span>{paperYear}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>{paper.location}</span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-white mb-8"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {paper.title}
          </h1>

          <div className="text-base text-[#a0a0a0] mb-16 border-b border-white/10 pb-12 font-light">
            Presented at the{" "}
            <span className="text-gray-200">{paper.conferenceName}</span>
          </div>
        </motion.div>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#A0A0A0] font-light">
          {paper.abstractParagraphs?.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.6,
                delay: 0.2 + idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {paper.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 group"
            >
              Find publication online
              <svg
                className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </main>
  );
}
