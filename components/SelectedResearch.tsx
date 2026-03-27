"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const r = 40; // Exact match to rounded-[40px]

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
      className="bg-white text-black pt-24 px-4 sm:px-8 md:px-12 lg:px-24 w-full relative"
      data-nav-theme="light"
      style={{ paddingBottom:  dropDistance }} // Add extra room for the trailing vertical line
    >
      <div
        ref={gridRef}
        className="max-w-[1400px] w-full mx-auto relative z-10"
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

        <div className="border border-transparent rounded-[40px] overflow-hidden bg-white shadow-sm">
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
                <motion.svg
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  viewBox="0 0 89 111"
                  fill="#68ffad"
                  xmlns="http://www.w3.org/2000/svg"
                  height="400"
                  width="400"
                  strokeWidth="4px"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M77.0898 14.2524C73.3098 12.4324 69.1797 11.9924 64.6997 12.9324C61.5597 13.5924 58.2398 14.9324 54.7498 16.9424C51.3398 18.9224 48.0798 21.3524 44.9998 24.2524C44.6498 24.5624 44.2997 24.8924 43.9597 25.2424C39.7997 29.3224 35.9497 34.2624 32.4097 40.0524C30.9597 42.4224 29.6798 44.8124 28.5598 47.2324C26.8998 50.7924 25.5997 54.4024 24.6497 58.0724C23.3897 62.9624 22.7598 67.9524 22.7598 73.0324C22.7598 80.6824 25.4097 87.4724 30.7097 93.3924C32.0697 94.9124 33.6098 96.3824 35.3298 97.8024C38.5198 100.422 42.3197 102.862 46.7397 105.102C49.2097 106.362 51.8798 107.572 54.7498 108.712C65.4798 92.0424 73.4998 77.6824 78.7898 65.6324C84.0898 53.5924 86.7397 43.7424 86.7397 36.1024C86.7397 24.6324 83.5298 17.3424 77.0898 14.2524ZM54.8098 64.0924L50.5498 71.4424L39.2598 65.0024L44.9597 55.1724L50.5498 58.3724L64.6497 34.0524L65.7998 34.7124L70.3499 37.3024L54.8098 64.0924Z"
                    stroke="#00C159"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70.3499 37.3022L54.8098 64.0923L50.5498 71.4422L39.2598 65.0023L44.9597 55.1723L50.5498 58.3723L64.6497 34.0522L65.7998 34.7122L70.3499 37.3022Z"
                    stroke="#00C159"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M77.0898 14.2524C73.3098 12.4324 69.1797 11.9924 64.6997 12.9324C61.5597 13.5924 58.2398 14.9324 54.7498 16.9424C51.3398 18.9224 48.0798 21.3524 44.9998 24.2524C44.6498 24.5624 44.2997 24.8924 43.9597 25.2424C39.7997 29.3224 35.9497 34.2624 32.4097 40.0524C30.9597 42.4224 29.6798 44.8124 28.5598 47.2324C26.8998 50.7924 25.5997 54.4024 24.6497 58.0724C23.3897 62.9624 22.7598 67.9524 22.7598 73.0324C22.7598 80.6824 25.4097 87.4724 30.7097 93.3924C32.0697 94.9124 33.6098 96.3825 35.3298 97.8025C38.5198 100.422 42.3197 102.862 46.7397 105.102L30.1099 96.7324C28.0299 95.7824 26.0797 94.8025 24.2397 93.7725C18.6197 90.6525 14.1097 87.1924 10.7097 83.3924C5.40972 77.4724 2.75977 70.6824 2.75977 63.0324C2.75977 51.5624 5.97967 40.5724 12.4097 30.0524C18.8397 19.5324 26.2898 11.8324 34.7498 6.94243C43.2198 2.05243 50.6598 1.16245 57.0898 4.25245L57.6797 4.55243L77.0898 14.2524Z"
                    stroke="#00C159"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
            </div>

            {/* Top Right: Text */}
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-8">
                <div className="px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Ongoing
                  </span>
                </div>
              </div>

              <h3
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-cormorant-unicase), serif" }}
              >
                Protests and Polls (PaP)
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg max-w-xl">
                PaP focuses on the #EndSARS protests (2020), the 2023 general
                elections, the pre- and post-2023 elections character of the
                #Obidient movement, and the ongoing overlaps between activism
                and politics in the lead up to the 2027 elections. Across these
                junctures, this project traces how discourse, emotions, and
                symbols travel between the streets and polling sites in Nigeria.
              </p>

              <div className="mb-12">
                <span className="text-[11px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-2 block">
                  Themes
                </span>
                <p className="text-sm font-medium text-gray-800 leading-relaxed max-w-xl">
                  Social movements, elections, political emotions, protest
                  culture, African public sphere
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#0a0a0a] hover:text-gray-500 transition-colors group"
                >
                  <span className="underline decoration-2 underline-offset-4">
                    Explore more
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row">
            {/* Bottom Left: Text */}
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200/80 order-2 md:order-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Published
                  </span>
                </div>
              </div>

              <h3
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-cormorant-unicase), serif" }}
              >
                Digital ID & Future of Humanitarian Assistance
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg max-w-xl">
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
                <span className="text-[11px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-2 block">
                  Themes
                </span>
                <p className="text-sm font-medium text-gray-800 leading-relaxed max-w-xl">
                  Digital governance, humanitarian innovation, technology and
                  development
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#0a0a0a] hover:text-gray-500 transition-colors group"
                >
                  <span className="underline decoration-2 underline-offset-4">
                    Read the report
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Right: Video */}
            <div className="md:w-1/2 p-10 md:p-16 flex items-center justify-center bg-gray-50/30 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative w-full max-w-md aspect-square flex items-center justify-center"
              >
                <motion.svg
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                  width="400"
                  height="400"
                  viewBox="0 0 86 117"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="4px"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M83.54 54.2855C83.54 56.7655 83.18 59.2556 82.45 61.7356C81.73 64.2256 80.65 66.7156 79.21 69.2056L53.23 114.016L33.8401 102.966L27.24 99.2056C25.8 98.3856 24.72 97.1456 24 95.4856C23.28 93.8356 22.9102 91.7655 22.9102 89.2855C22.9102 84.3955 24.38 79.4355 27.3 74.3955C30.22 69.3455 33.8101 65.5955 38.0701 63.1455C40.1601 61.9355 42.0901 61.2755 43.8601 61.1655C45.0701 61.0855 46.2 61.2356 47.25 61.5956C47.75 61.7656 48.2199 61.9756 48.6799 62.2356L53.23 64.8256L57.77 56.9856C59.22 54.4956 60.8201 52.2856 62.5901 50.3556C62.6901 50.2456 62.7901 50.1355 62.8901 50.0355C64.5801 48.2355 66.4101 46.7755 68.3801 45.6455C72.3201 43.3755 75.68 42.8556 78.47 44.1156L79.1501 44.4556C82.0701 46.1256 83.54 49.3955 83.54 54.2855Z"
                    stroke="#A479FF"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M78.4702 44.1156C75.6802 42.8556 72.3204 43.3755 68.3804 45.6455C66.4104 46.7755 64.5804 48.2355 62.8904 50.0355C62.7904 50.1355 62.6903 50.2456 62.5903 50.3556C60.8203 52.2856 59.2203 54.4956 57.7703 56.9856L53.2302 64.8256L48.6802 62.2356C48.2202 61.9756 47.7502 61.7656 47.2502 61.5956L33.3604 54.5956L37.2502 47.8855L42.5103 50.5155C45.4703 52.2055 49.0402 51.8355 53.2302 49.4255C56.9702 47.2555 60.2202 44.0256 62.9802 39.7056C63.3102 39.2056 63.6302 38.6855 63.9402 38.1455C64.1302 37.8055 64.3203 37.4755 64.5103 37.1355L78.4702 44.1156Z"
                    stroke="#A479FF"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M68.3804 23.2855C68.3804 27.7655 67.0903 32.3854 64.5103 37.1354C64.3203 37.4754 64.1302 37.8055 63.9402 38.1455C63.6302 38.6855 63.3102 39.2055 62.9802 39.7055C60.2202 44.0255 56.9702 47.2555 53.2302 49.4255C49.0402 51.8355 45.4703 52.2055 42.5103 50.5155C40.6503 49.4555 39.3702 47.7856 38.6802 45.4956C38.2702 44.1356 38.0703 42.5655 38.0703 40.7855C38.0703 38.9055 38.3002 37.0155 38.7502 35.0855C39.4502 32.0855 40.7103 29.0355 42.5103 25.9255C44.0703 23.2355 45.8002 20.9155 47.7002 18.9755C49.4002 17.2255 51.2402 15.7755 53.2302 14.6455C57.1102 12.3955 60.4603 11.9155 63.2903 13.2255L63.9402 13.5455C66.9002 15.2355 68.3804 18.4755 68.3804 23.2855Z"
                    stroke="#A479FF"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.23 114.016L33.23 104.016L7.23999 89.2056C5.79999 88.3856 4.72 87.1456 4 85.4856C3.28 83.8356 2.91016 81.7656 2.91016 79.2856C2.91016 74.3956 4.38005 69.4355 7.30005 64.3955C10.22 59.3455 13.8101 55.5955 18.0701 53.1455C20.1601 51.9355 22.0901 51.2756 23.8601 51.1656C25.6301 51.0556 27.2399 51.4156 28.6799 52.2356L33.3601 54.5956L47.25 61.5956C46.2 61.2356 45.0701 61.0856 43.8601 61.1656C42.0901 61.2756 40.1601 61.9355 38.0701 63.1455C33.8101 65.5955 30.22 69.3455 27.3 74.3955C24.38 79.4355 22.9102 84.3956 22.9102 89.2856C22.9102 91.7656 23.28 93.8356 24 95.4856C24.72 97.1456 25.8 98.3856 27.24 99.2056L33.8401 102.966L53.23 114.016Z"
                    stroke="#A479FF"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M63.2903 13.2256C60.4603 11.9156 57.1102 12.3955 53.2302 14.6455C51.2402 15.7755 49.4002 17.2256 47.7002 18.9756C45.8002 20.9156 44.0703 23.2356 42.5103 25.9256C40.7103 29.0356 39.4502 32.0856 38.7502 35.0856C38.3002 37.0156 38.0703 38.9055 38.0703 40.7855C38.0703 42.5655 38.2702 44.1356 38.6802 45.4956C39.3702 47.7856 40.6503 49.4555 42.5103 50.5155L37.2502 47.8855L23.1604 40.8356L22.5103 40.5155C19.5503 38.8355 18.0703 35.5855 18.0703 30.7855C18.0703 25.9855 19.5503 21.0256 22.5103 15.9256C25.4703 10.8156 29.0402 7.05552 33.2302 4.64552C37.4102 2.22552 40.9802 1.85555 43.9402 3.54555L63.2903 13.2256Z"
                    stroke="#A479FF"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
