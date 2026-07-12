"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ActionText from "./ActionText";
import BallotBoxSVG from "./BallotBoxSVG";
import ProtectiveShieldSVG from "./ProtectiveShieldSVG";
import FistSVG from "./FistSVG";

export default function SelectedResearch() {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  // Measure dynamic grid dimensions precisely for the SVG border trace
  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Triggers slightly before the section hits top, ends slightly after
    offset: ["start center", "end 30%"],
  });

  // Smooth out the drawing trace
  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const dropDistance = 150; // Distance the line goes down past the grid

  // Mathematical paths for left and right river flows drawing the border
  const r = 2; // Exact match to rounded-[20px]

  // Left path traces from top-center, around left side, to bottom-center, then straight down
  const leftPath = `
    M ${dims.w / 2} 0
    L ${r} 0
    A ${r} ${r} 0 0 0 0 ${r}
    L 0 ${dims.h - r}
    A ${r} ${r} 0 0 0 ${r} ${dims.h}
    L ${dims.w / 2} ${dims.h}
    L ${dims.w / 2} ${dims.h + dropDistance}
  `;

  // Right path traces from top-center, around right side, to bottom-center, then straight down
  const rightPath = `
    M ${dims.w / 2} 0
    L ${dims.w - r} 0
    A ${r} ${r} 0 0 1 ${dims.w} ${r}
    L ${dims.w} ${dims.h - r}
    A ${r} ${r} 0 0 1 ${dims.w - r} ${dims.h}
    L ${dims.w / 2} ${dims.h}
    L ${dims.w / 2} ${dims.h + dropDistance}
  `;

  return (
    <section
      ref={containerRef}
      className="bg-white text-black pt-32 px-4 sm:px-8 md:px-12 lg:px-24 w-full relative"
      data-nav-theme="light"
      style={{ paddingBottom:  dropDistance }} // Add extra room for the trailing vertical line
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight uppercase font-bold mb-6 font-outfit">
            Selected Research
          </h2>
          <div className="h-[2px] w-[80px] bg-gray-200 mb-6"></div>
        </motion.div>
      </div>

      <div
        ref={gridRef}
        className="max-w-7xl w-full mx-auto relative z-10"
      >
        {/* Dynamic SVG absolute overlay drawing the animated borders exactly matching grid shape */}
        {dims.w > 0 && (
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: dims.w,
              height: dims.h + dropDistance,
              overflow: "visible",
            }}
          >
            {/* The base faint border */}
            <rect
              x="0"
              y="0"
              width={dims.w}
              height={dims.h}
              rx={r}
              fill="none"
              stroke="#e5e7eb" // gray-200
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
            {/* Left flowing animated border */}
            <motion.path
              d={leftPath}
              fill="none"
              stroke="#000"
              strokeWidth="2"
              style={{ pathLength: pathDraw }}
            />
            {/* Right flowing animated border */}
            <motion.path
              d={rightPath}
              fill="none"
              stroke="#000"
              strokeWidth="2"
              style={{ pathLength: pathDraw }}
            />
          </svg>
        )}

        <div className="border border-transparent rounded-[20px] overflow-hidden bg-white shadow-sm">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row border-b border-gray-200/80">
            {/* Top Left: Video */}
            <div className="md:w-1/2 p-10 md:p-16 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200/80 bg-gray-50/30">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative w-full max-w-md aspect-square flex items-center justify-center"
              >
                <BallotBoxSVG />
              </motion.div>
            </div>

            {/* Top Right: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Ongoing
                  </span>
                </div>
              </div>

              <h3
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6 tracking-tight text-[#0a0a0a] leading-tight"
              >
                Protests and Polls (PaP)
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-base max-w-xl">
                My ongoing doctoral research, with the conceptual anchor ‘Protests and Polls’ (PaP), explores how protest movements and electoral politics shape each other. PaP focuses on the #EndSARS protests (2020), the 2023 general elections, the pre- and post-2023 elections character of the #Obidient movement, and the ongoing overlaps between activism and politics in the lead up to the 2027 elections. Across these junctures, this project traces how discourse, emotions, and symbols travel between the streets and polling sites in Nigeria.  
              </p>

              <div className="mb-12">
                <span className="text-[14px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-2 block">
                  Themes
                </span>
                <p className="text-base font-medium text-gray-800 leading-relaxed max-w-xl">
                  Social movements, elections, political emotions, protest
                  culture, African public sphere
                </p>
              </div>

              <div>
                <ActionText
                  href="/protests-and-polls"
                  text="Explore more"
                  theme="light"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row border-b border-gray-200/80">
            {/* Bottom Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200/80 order-2 md:order-1"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Published
                  </span>
                </div>
              </div>

              <h3
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6 tracking-tight text-[#0a0a0a] leading-tight"
              >
                Digital ID & Future of Humanitarian Assistance
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-base max-w-xl">
                As a research consultant commissioned by Caribou Digital, UK, on
                a project of the International Federation of Red Cross and Red
                Crescent Societies (IFRC), I contributed to the early
                development of the IFRC’s digital identity strategy. The project
                explored the mechanisms through which digital identity systems
                could improve humanitarian service delivery while prioritising
                and protecting the rights, privacy, and dignity of vulnerable
                peoples.
              </p>

              <div className="mb-12">
                <span className="text-[14px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-2 block">
                  Themes
                </span>
                <p className="text-base font-medium text-gray-800 leading-relaxed max-w-xl">
                  Digital governance, humanitarian innovation, technology and
                  development
                </p>
              </div>

              <div>
                <ActionText
                  href="https://solferinoacademy.com/wp-content/uploads/2021/09/Report-Initiating-the-co-development-of-IFRCs-Digital-ID-strategy1.pdf"
                  text="Read the report"
                  theme="light"
                  target="_blank"
                />
              </div>
            </motion.div>

            {/* Bottom Right: Video */}
            <div className="md:w-1/2 p-10 md:p-16 flex items-center justify-center bg-gray-50/30 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative w-full max-w-md aspect-square flex items-center justify-center"
              >
                <ProtectiveShieldSVG />
              </motion.div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row">
            {/* Bottom Left: Video/Placeholder */}
            <div className="md:w-1/2 p-10 md:p-16 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200/80 bg-gray-50/30">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative w-full max-w-md aspect-square flex items-center justify-center"
              >
                <FistSVG />
              </motion.div>
            </div>

            {/* Bottom Right: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Creative
                  </span>
                </div>
              </div>

              <h3
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6 tracking-tight text-[#0a0a0a] leading-tight"
              >
                Lab: Interlocking Art and Activism
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-base max-w-xl">
                Beyond academic research, I use different art forms such as poetry, spoken word, and music to translate ideas into stories and experiences that resonate with different publics. While some of these works draw inspiration from themes such as social change, democracy, hope and civic responsibility, others are rooted in deep reflections on faith and the future.
              </p>

              <div>
                <ActionText
                  text="Explore my art"
                  href="/creative-practice"
                  theme="light"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
