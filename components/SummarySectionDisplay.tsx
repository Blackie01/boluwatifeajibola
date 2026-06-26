'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ActionText from './ActionText';
import EditorialImage from './EditorialImage';

interface SummarySectionDisplayProps {
  title?: string;
  paragraphs: (string | React.ReactNode)[];
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  actionText?: string;
  actionLink?: string;
  aspectRatio?: string;
  theme?: 'dark' | 'light';
  accentTitlePart?: string;
  accentParagraphIndex?: number;
  videoEmbed?: React.ReactNode;
}

export default function SummarySectionDisplay({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "Image",
  imagePosition = 'left',
  actionText,
  actionLink,
  aspectRatio,
  theme = 'dark',
  accentTitlePart,
  accentParagraphIndex,
  videoEmbed
}: SummarySectionDisplayProps) {
  
  const isLandscape = aspectRatio === 'aspect-[16/10]';
  const isLeft = imagePosition === 'left';
  const isRight = imagePosition === 'right';
  const isLight = theme === 'light';

  const titleColor = isLight ? "text-black" : "text-white";
  const lineBg = isLight ? "bg-black/10" : "bg-[#2a2a2a]";
  const textColor = isLight ? "text-[#4a4a4a]" : "text-[#a0a0a0]";

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
      {videoEmbed ? (
        <div className={`w-full relative overflow-hidden rounded-sm ${aspectRatio || 'aspect-[4/5] lg:aspect-[3/4]'}`}>
          {videoEmbed}
        </div>
      ) : imageSrc ? (
        <EditorialImage 
          src={imageSrc} 
          alt={imageAlt} 
          aspectRatio={aspectRatio} 
          className={isLandscape ? (isLeft ? "lg:rounded-l-none border-l-0" : "lg:rounded-r-none border-r-0") : ""}
        />
      ) : null}
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
            className={`text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight ${titleColor} mb-6`}
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {accentTitlePart && title.includes(accentTitlePart) ? (
              <>
                {title.split(accentTitlePart)[0]}
                <span className="text-[#96750b]">{accentTitlePart}</span>
                {title.split(accentTitlePart)[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <div className={`h-[1px] w-[80px] ${lineBg} mb-8`} />
        </>
      )}
      {/* text-[#d4af37] */}
      <div className="flex flex-col gap-6 text-[18px] max-w-2xl">
        {paragraphs.map((paragraph, index) => {
          const isAccent = accentParagraphIndex === index;
          return (
            <div key={index} className={`${isAccent ? 'text-[#fff] text-[18px] font-normal' : textColor} leading-relaxed`}>
              {paragraph}
            </div>
          );
        })}
        {actionText && (
          <div className="mt-4">
            <ActionText text={actionText} href={actionLink} theme={theme} />
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className={`relative ${isLight ? 'py-32' : 'my-32'}`}>
      {isLight && (
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[100vw] bg-white" />
      )}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        {imageContent}
        {textContent}
      </div>
    </section>
  )
}