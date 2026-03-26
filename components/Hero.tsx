"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import About from "./About";

const tiles = [
  {
    id: 1,
    label: "Research",
    text: "I research democracy and development.",
    buttonText: "Stop peeking, explore",
  },
  {
    id: 2,
    label: "Impact",
    text: "I impact policy and public discuss.",
    buttonText: "Find out how",
  },
  {
    id: 3,
    label: "Creativity",
    text: "Music and poetry are my thing.",
    buttonText: "Hop in",
  },
  {
    id: 4,
    label: "Activism",
    text: "I push for social and civic changes.",
    buttonText: "Learn more",
  },
];

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { scrollY } = useScroll();
  const [isNav, setIsNav] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [hasEntryPlayed, setHasEntryPlayed] = useState(false);
  const stickPointRef = useRef(300);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // pt-[40vh] minus half of nav height (h-20 = 80px, half = 40px)
      stickPointRef.current = Math.max(window.innerHeight * 0.4 - 40, 10);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsNav(latest >= stickPointRef.current);
  });

  // Scroll-driven vertical offset: titles rise from 40vh toward top
  const titleY = useTransform(scrollY, (latest) => {
    const sp = stickPointRef.current;
    return -Math.min(latest, sp);
  });

  useEffect(() => {
    const t = setTimeout(() => setHasEntryPlayed(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <LayoutGroup>
      <section className="relative h-[200vh] dark:bg-black bg-[#0a0a0a]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {/* ====== HERO GRID ====== */}
          <motion.div
            className="absolute inset-0 grid grid-cols-4 z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {tiles.map((tile) => {
              const isHovered = !isNav && hoveredId === tile.id;
              return (
                <motion.div
                  key={tile.id}
                  className="relative flex flex-col items-center justify-start pt-[40vh] bg-[#0a0a0a] text-white overflow-hidden"
                  variants={{
                    hidden: { y: -250, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1.4, ease: smoothEase },
                    },
                  }}
                  animate={{ opacity: isNav ? 0 : 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Scroll-driven offset wrapper */}
                  <motion.div
                    style={{ y: hasEntryPlayed && !isNav ? titleY : 0 }}
                  >
                    {/* Accordion wrapper */}
                    <motion.div
                      className="relative flex flex-col items-center justify-center w-full overflow-hidden rounded-md px-4"
                      animate={{
                        backgroundColor: isHovered
                          ? "#eef1f5"
                          : "rgba(238,241,245,0)",
                        paddingTop: "1.5rem",
                        paddingBottom: isHovered ? "2rem" : "1.5rem",
                      }}
                      transition={{
                        duration: 0.5,
                        ease: smoothEase,
                        backgroundColor: { duration: 0.15 },
                      }}
                      onMouseEnter={() => !isNav && setHoveredId(tile.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* Title - shared layoutId for hero↔nav transition */}
                      {!isNav && (
                        <motion.span
                          layoutId={`title-${tile.id}`}
                          className="relative z-20 whitespace-nowrap cursor-pointer text-2xl sm:text-3xl lg:text-4xl font-bold"
                          initial={hasEntryPlayed ? false : undefined}
                          variants={{
                            hidden: { filter: "blur(20px)" },
                            visible: { filter: "blur(0px)" },
                          }}
                          animate={{
                            color: isHovered ? "#0a0a0a" : "#ffffff",
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6,
                            ease: smoothEase,
                          }}
                        >
                          {tile.label}
                        </motion.span>
                      )}

                      {/* Accordion reveal */}
                      <AnimatePresence>
                        {isHovered && !isNav && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{
                              duration: 0.8,
                              ease: smoothEase,
                            }}
                            className="relative w-full text-center z-10"
                          >
                            <motion.div
                              initial={{ y: 80, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 40, opacity: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 12,
                                mass: 1,
                                delay: 0.18,
                                opacity: {
                                  duration: 0.6,
                                  ease: smoothEase,
                                  delay: 0.18,
                                },
                              }}
                              className="flex flex-col items-center px-4 pt-6"
                            >
                              <p className="text-sm md:text-base lg:text-lg font-medium mb-6 leading-relaxed text-[#0a0a0a]">
                                {tile.text}
                              </p>
                              <button className="px-6 py-2.5 bg-[#0a0a0a] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform shadow-lg cursor-pointer">
                                {tile.buttonText}
                              </button>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ====== NAV BAR ====== */}

          {/* Nav background */}
          <AnimatePresence>
            {isNav && (
              <motion.div
                className="fixed top-0 left-0 w-full h-20 bg-transparent z-40 border-b border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>

          {/* Nav center titles (same layoutId = visible transition from hero) */}
          {isNav && (
            <div className="fixed top-0 left-0 w-full h-20 flex items-center justify-center z-50 gap-6 md:gap-10">
              {tiles.map((tile) => (
                <motion.span
                  key={tile.id}
                  layoutId={`title-${tile.id}`}
                  className="text-white text-sm md:text-base font-medium cursor-pointer hover:text-gray-300 transition-colors whitespace-nowrap"
                  transition={{ duration: 0.6, ease: smoothEase }}
                >
                  {tile.label}
                </motion.span>
              ))}
            </div>
          )}

          {/* Boluwatife - slides in from left */}
          <AnimatePresence>
            {isNav && (
              <motion.div
                className="fixed top-0 left-6 md:left-12 h-20 flex items-center z-50"
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <span
                  className="text-white font-bold text-xl md:text-2xl cursor-pointer"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  Boluwatife
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Location - slides in from right */}
          <AnimatePresence>
            {isNav && (
              <motion.div
                className="fixed top-0 right-6 md:right-12 h-20 flex items-center gap-3 z-50"
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 120 }}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm md:text-base font-medium text-white">
                  United Kingdom
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <About />
      </section>
    </LayoutGroup>
  );
}
