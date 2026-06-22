'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ActionText from './ActionText';
import EditorialImage from './EditorialImage';

interface SummarySectionDisplayProps {
  title?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  actionText?: string;
  actionLink?: string;
  aspectRatio?: string;
}

export default function SummarySectionDisplay({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "Image",
  imagePosition = 'left',
  actionText,
  actionLink,
  aspectRatio
}: SummarySectionDisplayProps) {
  
  const isLandscape = aspectRatio === 'aspect-[16/10]';
  const isLeft = imagePosition === 'left';
  const isRight = imagePosition === 'right';

  const flushLeftClasses = 
    "-mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] " +
    "lg:mx-0 lg:-ml-12 xl:ml-[calc(40rem-50vw-3rem)] " +
    "lg:w-[calc(100%+3rem)] xl:w-[calc(100%+50vw-40rem+3rem)] max-w-none";

  const flushRightClasses = 
    "-mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] " +
    "lg:mx-0 lg:-mr-12 xl:mr-[calc(40rem-50vw-3rem)] " +
    "lg:w-[calc(100%+3rem)] xl:w-[calc(100%+50vw-40rem+3rem)] max-w-none";

  const landscapeClasses = isLandscape 
    ? (isLeft ? flushLeftClasses : flushRightClasses)
    : "";

  const imageContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`lg:col-span-5 relative ${isRight ? 'lg:order-last' : ''} ${landscapeClasses}`}
    >
      <EditorialImage 
        src={imageSrc} 
        alt={imageAlt} 
        aspectRatio={aspectRatio} 
        className={isLandscape ? (isLeft ? "lg:rounded-l-none border-l-0" : "lg:rounded-r-none border-r-0") : ""}
      />
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