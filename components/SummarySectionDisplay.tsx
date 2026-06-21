'use client'
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import ActionText from "./ActionText"

interface SummarySectionDisplayProps {
  title?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  actionText?: string;
  actionLink?: string;
}

export default function SummarySectionDisplay({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "Image",
  imagePosition = 'left',
  actionText,
  actionLink
}: SummarySectionDisplayProps) {
  
  const imageContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`lg:col-span-5 relative ${imagePosition === 'right' ? 'lg:order-last' : ''}`}
    >
      {/* Sleek editorial container: grayscale with color on hover to match the dark aesthetic */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group border border-[#2a2a2a]">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
          priority
        />
        {/* Subtle accent corner */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );

  const textContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-7"
    >
      {title && (
        <>
          <h2 
            className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {title}
          </h2>
          <div className="h-[1px] w-[80px] bg-[#2a2a2a] mb-8" />
        </>
      )}
      
      <div className="flex flex-col gap-6 text-[18px] max-w-2xl">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-[#a0a0a0] leading-relaxed">
            {paragraph}
          </p>
        ))}
        {actionText && (
          <div className="mt-4">
            <ActionText text={actionText} href={actionLink} />
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 my-32 items-center">
      {imageContent}
      {textContent}
    </div>
  )
}