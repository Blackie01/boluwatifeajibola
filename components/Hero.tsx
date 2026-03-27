"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";

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
  const [navLight, setNavLight] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [hasEntryPlayed, setHasEntryPlayed] = useState(false);

  // Detect when to flip isNav state based purely on scroll-depth
  useMotionValueEvent(scrollY, "change", (latest) => {
    // When the user has scrolled about 35vh down, the labels are roughly near the top of the viewport.
    // Trigger the seamless layout transition into the fixed nav exactly at this point.
    if (typeof window !== "undefined") {
      setIsNav(latest > window.innerHeight * 0.35);
    }
  });

  // Observe light theme sections to switch nav text colors
  useEffect(() => {
    const lightSections = document.querySelectorAll('[data-nav-theme="light"]');
    if (lightSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyLight = entries.some((e) => e.isIntersecting);
        setNavLight(anyLight);
      },
      {
        rootMargin: "-0px 0px -100% 0px", // Triggers only on the top narrow strip
        threshold: 0,
      }
    );

    lightSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHasEntryPlayed(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <LayoutGroup>
      {/* 
        This section is normally scrolling (relative h-[100vh]). 
        No sticky or manual -y offsets, letting the browser natively handle the scroll.
      */}
      <section className="relative h-[100vh] dark:bg-black bg-[#0a0a0a] w-full overflow-hidden">
        
        {/* Entrance Intro Animations & Hero Grid */}
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
                className="relative flex flex-col items-center justify-start pt-[40vh] border-r border-white/5 last:border-r-0 overflow-hidden"
                variants={{
                  hidden: { y: 150, opacity: 0 }, // Changed starting animation to be a clean fade-up
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1.4, ease: smoothEase },
                  },
                }}
              >
                <div
                  className="relative flex flex-col items-center justify-center w-full px-4 rounded-xl"
                  style={{
                    backgroundColor: isHovered ? "#eef1f5" : "transparent",
                    paddingTop: "1.5rem",
                    paddingBottom: isHovered ? "2rem" : "1.5rem",
                    transition: "background-color 0.4s ease",
                  }}
                  onMouseEnter={() => !isNav && setHoveredId(tile.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Title mapped to layoutId for the seamless Nav transition */}
                  {/* Removing AnimatePresence so it perfectly swaps synchronously with the Nav layoutId without duplicating in the DOM */}
                  {!isNav && (
                    <motion.span
                      layoutId={`title-${tile.id}`}
                      className="relative z-20 whitespace-nowrap cursor-pointer text-2xl sm:text-3xl lg:text-4xl font-bold origin-center"
                      initial={hasEntryPlayed ? false : { filter: "blur(20px)" }}
                      animate={{
                        color: isHovered ? "#0a0a0a" : "#ffffff",
                        filter: "blur(0px)"
                      }}
                      transition={{
                        duration: 0.8,
                        ease: smoothEase,
                      }}
                    >
                      {tile.label}
                    </motion.span>
                  )}

                  {/* Hover Accordion reveal inside the grid */}
                  <AnimatePresence>
                    {isHovered && !isNav && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: smoothEase,
                        }}
                        className="relative w-full text-center z-10 overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
                          className="flex flex-col items-center px-2 pt-6 pb-2"
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
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bouncing Scroll Indicator Loop */}
        <AnimatePresence>
          {!isNav && (
            <motion.div 
              className="absolute bottom-12 left-0 right-0 m-auto w-fit flex flex-col items-center gap-2 pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 2.2 }} // Wait for intro sequence
            >
              <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Scroll</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ====== GLOBAL NAV BAR ====== */}

      {/* Nav center layout target */}
      <div className="fixed top-0 left-0 w-full h-[88px] flex items-center justify-center z-[60] gap-6 md:gap-10 pointer-events-none">
        {isNav && tiles.map((tile) => (
          <motion.span
            key={tile.id}
            layoutId={`title-${tile.id}`}
            className="text-sm md:text-base font-medium transition-colors whitespace-nowrap pointer-events-auto origin-center"
            style={{ color: navLight ? "#0a0a0a" : "#ffffff" }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            {tile.label}
          </motion.span>
        ))}
      </div>

      {/* Boluwatife - slides in from exact left */}
      <AnimatePresence>
        {isNav && (
          <motion.div
            className="fixed top-0 left-6 md:left-12 h-[88px] flex items-center z-50 pointer-events-auto"
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
          >
            <span
              className="font-bold text-xl md:text-2xl cursor-pointer transition-colors duration-300"
              style={{
                color: navLight ? "#0a0a0a" : "#ffffff",
                fontFamily: "var(--font-outfit), sans-serif",
              }}
            >
              Boluwatife
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location - slides in from exact right */}
      <AnimatePresence>
        {isNav && (
          <motion.div
            className="fixed top-0 right-6 md:right-12 h-[88px] flex items-center gap-3 z-50 pointer-events-auto"
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: navLight ? "#0a0a0a" : "#ffffff" }}
              className="transition-colors duration-300"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              className="text-xs md:text-sm font-medium transition-colors duration-300 uppercase tracking-widest hidden md:block"
              style={{ color: navLight ? "#0a0a0a" : "#ffffff" }}
            >
              United Kingdom
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
