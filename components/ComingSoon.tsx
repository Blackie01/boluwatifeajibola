"use client";
import React, { useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Thursday 17 December 2026, 12:00 UK time (GMT = UTC in December).
const LAUNCH_AT = Date.parse("2026-12-17T12:00:00Z");
const LAUNCH_LABEL = "Thursday, 17 December · 12:00 GMT";

const EASE = [0.16, 1, 0.3, 1] as const;

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/boluajibola/" },
  // { name: "X", href: "https://x.com/_boluajibola" },
  // { name: "Instagram", href: "https://www.instagram.com/_boluajibola/" },
];

/* ---------------------------- clock (per second) --------------------------- */

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 250);
  return () => window.clearInterval(id);
}
const getNowSeconds = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null;

function useNowSeconds() {
  return useSyncExternalStore(subscribe, getNowSeconds, getServerNow);
}

/* ------------------------------ rolling digits ----------------------------- */

function RollingDigit({ value }: { value: string }) {
  const reduce = useReducedMotion();

  return (
    <span
      className="relative inline-block h-[1.15em] w-[0.6em] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.span
          key={value}
          initial={reduce ? { opacity: 0 } : { y: "-90%", opacity: 0, filter: "blur(6px)" }}
          animate={reduce ? { opacity: 1 } : { y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={reduce ? { opacity: 0 } : { y: "90%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const [tens, ones] = String(value).padStart(2, "0").slice(-2).split("");
  return (
    <div className="flex flex-col items-start">
      <div className="flex leading-none text-white text-[44px] sm:text-[56px] lg:text-[72px] font-light tracking-tight">
        <RollingDigit value={tens} />
        <RollingDigit value={ones} />
      </div>
      <span className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#a0a0a0]">
        {label}
      </span>
    </div>
  );
}

function Countdown({ remaining }: { remaining: number | null }) {
  const r = Math.max(0, remaining ?? 0);
  const units = [
    { label: "Days", value: Math.floor(r / 86400) },
    { label: "Hours", value: Math.floor((r % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((r % 3600) / 60) },
    { label: "Seconds", value: r % 60 },
  ];

  return (
    <div
      role="timer"
      aria-label={`Countdown to launch on ${LAUNCH_LABEL}`}
      className="transition-opacity duration-700"
      style={{
        fontFamily: "var(--font-outfit), sans-serif",
        opacity: remaining === null ? 0 : 1,
      }}
    >
      <div aria-hidden="true" className="flex items-stretch gap-4 sm:gap-6 lg:gap-8">
        {units.map((unit, i) => (
          <React.Fragment key={unit.label}>
            {i > 0 && <span className="w-[1px] self-stretch bg-[#2a2a2a]" />}
            <CountdownUnit value={unit.value} label={unit.label} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- headline -------------------------------- */

function Headline({ ghost = false }: { ghost?: boolean }) {
  const Tag = ghost ? "div" : "h1";
  return (
    <motion.div
      aria-hidden={ghost || undefined}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
      className="pointer-events-none absolute inset-x-0 top-[50%] -translate-y-1/2 flex justify-center px-6 md:px-12"
    >
      <Tag
        className="text-center whitespace-nowrap font-medium leading-[0.85] tracking-[-0.045em] text-[24vw] md:text-[clamp(96px,13.5vw,240px)]"
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          ...(ghost
            ? { color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.22)" }
            : {
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.72) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }),
        }}
      >
        <span className="block md:inline">Coming</span>{" "}
        <span className="block md:inline">Soon</span>
      </Tag>
    </motion.div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function ComingSoon() {
  const now = useNowSeconds();
  const remaining = now === null ? null : Math.floor(LAUNCH_AT / 1000) - now;
  const isLive = remaining !== null && remaining <= 0;

  // Once the clock hits zero, check back every minute so visitors land on the
  // real site as soon as it's switched on.
  useEffect(() => {
    if (!isLive) return;
    const id = window.setInterval(() => window.location.reload(), 60_000);
    return () => window.clearInterval(id);
  }, [isLive]);

  return (
    <main className="relative w-full h-[100svh] min-h-[620px] bg-[#0C0C0C] overflow-hidden">
      {/* Soft light behind the portrait */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[55vw] aspect-square rounded-full bg-white/[0.05] blur-[120px]" />

      {/* Layer 1: solid headline, sits behind the portrait */}
      <div className="absolute inset-0 z-10">
        <Headline />
      </div>

      {/* Layer 2: portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[12%] md:top-[6%] z-20 origin-bottom"
      >
        <Image
          src="/heroImage-nobg.png"
          alt="Bolu Ajibola"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="(max-width: 768px) 160vw, 80vw"
          className="object-cover md:object-contain object-bottom"
        />
      </motion.div>

      {/* Layer 3: outlined headline over the portrait */}
      <div className="absolute inset-0 z-30">
        <Headline ghost />
      </div>

      {/* Fade the bottom so the details stay readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] md:h-[35%] z-30 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-transparent" />

      {/* Top bar */}
      <header className="absolute top-0 inset-x-0 z-40 pt-6 px-6 md:px-12 flex justify-between items-center">
        <div className="mt-2 relative w-[180px] h-[40px] md:w-[250px] md:h-[50px]">
          <Image
            src="/logo-black-bg-preview-2.png"
            alt="Bolu Ajibola"
            fill
            loading="eager"
            sizes="250px"
            className="object-contain object-left"
          />
        </div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          aria-label="Social links"
          className="hidden sm:flex items-center gap-6 text-sm text-[#a0a0a0]"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      </header>

      {/* Bottom details */}
      <div className="absolute bottom-0 inset-x-0 z-40 px-6 md:px-12 pb-8 md:pb-12 flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.8 }}
          className="flex items-center gap-3 text-lg text-[#a0a0a0] whitespace-nowrap"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          {isLive ? (
            "Launching now"
          ) : (
            <>
              <span className="sm:hidden">Launching 17 Dec · 12:00 GMT</span>
              <span className="hidden sm:inline">Launching {LAUNCH_LABEL}</span>
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
          className="flex flex-col gap-5 md:gap-6 items-start"
        >
          <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.5] max-w-sm [@media(max-height:720px)_and_(max-width:767px)]:hidden">
            {isLive
              ? "We're going live — the full site will appear here in a moment."
              : "A new home for my research, creative practice and public engagement. The full site goes live on launch day."}
          </p>
          <Countdown remaining={remaining} />
        </motion.div>
      </div>
    </main>
  );
}
