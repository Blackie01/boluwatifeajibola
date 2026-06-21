'use client'
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ChronologicalItem {
  yearRange: string
  role: string
  institution: string
  description: string
}

interface Props {
  title: string
  data: ChronologicalItem[]
}

export default function ChronologicalDisplay({ title, data }: Props) {
  const containerRef = useRef<HTMLElement>(null)
  
  // Track scroll over this section for the line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"]
  })

  // The glowing gold line scaling down
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="w-full py-10 relative">
      <div className="mb-16">
        <h2 
          className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-white"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {title}
        </h2>
        <div className="h-[1px] w-full max-w-[100px] bg-[#2a2a2a] mt-4" />
      </div>

      <div className="relative pl-0 md:pl-8">
        {/* The Base Track (dark gray) */}
        <div className="absolute top-0 bottom-0 left-[23px] md:left-[180px] w-[1px] bg-[#2a2a2a]" />

        {/* The Animated Gold Line (Minimal Accent) */}
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }} 
          className="absolute top-0 bottom-0 left-[23px] md:left-[180px] w-[1px] bg-[#d4af37] z-10" 
        />

        <div className="flex flex-col gap-16 md:gap-20">
          {data?.map((item, index) => {
            return (
              <div key={index} className="relative flex flex-col md:flex-row group items-start">
                
                {/* Year on the left for Desktop, top for Mobile */}
                <div className="md:w-[150px] shrink-0 pt-0.5 pl-16 md:pl-0 mb-4 md:mb-0 text-[#a0a0a0] font-light text-[15px] md:text-right md:pr-12">
                  {item.yearRange}
                </div>

                {/* The Timeline Dot - Starts dark, lights up white */}
                <motion.div 
                  initial={{ borderColor: "#2a2a2a", backgroundColor: "#0C0C0C" }}
                  whileInView={{ borderColor: "#ffffff", backgroundColor: "#ffffff" }}
                  viewport={{ once: false, margin: "10000px 0px -40% 0px" }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-[19px] md:left-[176px] top-1.5 z-20 w-[9px] h-[9px] rounded-full border border-[#2a2a2a] bg-[#0C0C0C]" 
                />

                {/* Content Card on the right */}
                <div className="flex-1 pl-16 md:pl-12">
                  <div className="max-w-2xl">
                    <h3 
                      className="text-[20px] md:text-[24px] font-medium text-white mb-2 tracking-tight leading-snug"
                      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                      {item.role}
                    </h3>
                    <h4 className="text-[14px] text-[#a0a0a0] mb-5 tracking-wide font-medium">
                      {item.institution}
                    </h4>
                    <p className="text-[#a0a0a0] leading-relaxed text-[15px] font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}