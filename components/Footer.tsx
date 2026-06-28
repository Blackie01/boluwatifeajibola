"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ActionText from "./ActionText";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Creative Practice", href: "/creative-practice" },
  { name: "Research & Development", href: "/research-and-development" },
  { name: "Impact & Engagement", href: "/impact-and-engagement" },
  { name: "Speaking & Events", href: "/speaking-and-events" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/boluajibola/" },
  { name: "Twitter / X", href: "https://x.com/_boluajibola?s=11" },
  { name: "Instagram", href: "https://www.instagram.com/_boluajibola/" },
];

const pageContentMap: Record<
  string,
  { title: string; subtitle: string; actionCopy: string; actionLink: string }
> = {
  "/": {
    title: "Let’s work together ",
    subtitle:
      "Interested in collaboration, research engagement, speaking or creative projects? Get in touch with Bolu Ajibola.",
    actionCopy: "Get in touch",
    actionLink: "/contact",
  },
  "/about": {
    title: "Let's Connect",
    subtitle:
      "Interested in my background or exploring potential synergies? Let's talk.",
    actionCopy: "Say hello",
    actionLink: "/contact",
  },
  "/research": {
    title: "Partner On Research",
    subtitle:
      "Looking to collaborate on rigorous, impact-driven research and policy analysis?",
    actionCopy: "Discuss a project",
    actionLink: "/contact",
  },
  "/research-and-development": {
    title: "Partner On Research",
    subtitle:
      "Looking to collaborate on rigorous, impact-driven research and policy analysis?",
    actionCopy: "Discuss a project",
    actionLink: "/contact",
  },
  "/publications": {
    title: "Commission A Piece",
    subtitle:
      "Interested in rigorous analysis, a comprehensive report, or written commentary?",
    actionCopy: "Request a piece",
    actionLink: "/contact",
  },
  "/impact-and-engagement": {
    title: "Drive Real Impact",
    subtitle:
      "Interested in collaboration, impact strategy, stakeholder engagement, policy engagement, training, or knowledge mobilisation?",
    actionCopy: "Start a conversation",
    actionLink: "/contact",
  },
  "/speaking-and-events": {
    title: "Book Me",
    subtitle:
      "Need a speaker or MC who brings energy, intelligence, and presence to your event?",
    actionCopy: "Send an invite",
    actionLink: "/contact",
  },
  "/creative-practice": {
    title: "Create Together",
    subtitle:
      "Looking to weave storytelling, poetry, or music into your next project?",
    actionCopy: "Start a project",
    actionLink: "/contact",
  },
  "/creative-practice/poems": {
    title: "Commission A Poem",
    subtitle:
      "Interested in a bespoke poem, spoken word performance, or creative collaboration?",
    actionCopy: "Commission a piece",
    actionLink: "/contact",
  },
};

export default function Footer() {
  const pathname = usePathname() || "/";
  const content = pageContentMap[pathname] || pageContentMap["/"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full bg-white text-[#0a0a0a] py-20 px-6 md:px-12 lg:px-24 border-t border-[#0a0a0a]/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight uppercase mb-8"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              {content.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-12 max-w-2xl font-light">
              {content.subtitle}
            </p>

            <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-20">
              <div
                className="text-2xl md:text-3xl font-light"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <ActionText
                  text={content.actionCopy}
                  href={content.actionLink}
                  theme="light"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="w-full bg-[#0C0C0C] text-white pt-24 pb-8 px-6 md:px-12 lg:px-24 border-t border-white/10 relative z-50 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
            <div className="flex flex-col gap-6 max-w-sm">
              <Link href="/" className="inline-block">
                <h3
                  className="text-2xl md:text-3xl font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Bolu Ajibola
                </h3>
              </Link>
              <p className="text-[#a0a0a0] font-light leading-relaxed">
                Researcher, creative, and public intellectual exploring power,
                systems, and governance across academic and civic spaces.
              </p>
              <a
                href="mailto:hello@boluajibola.com"
                className="text-white hover:text-[#d4af37] transition-colors duration-300 font-light text-lg w-max"
              >
                hello@boluajibola.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 w-full md:w-auto">
              {/* Links Column */}
              <div className="flex flex-col gap-4">
                <h4
                  className="text-xs uppercase tracking-widest text-[#666] mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Explore
                </h4>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Socials Column */}
              <div className="flex flex-col gap-4">
                <h4
                  className="text-xs uppercase tracking-widest text-[#666] mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Connect
                </h4>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-12 w-full overflow-hidden">
            {/* Big Typography */}
            <div className="w-full flex justify-center items-center pointer-events-none">
              <span
                className="text-[14vw] md:text-[11vw] lg:text-[10vw] leading-[0.8] font-bold text-white/5 uppercase select-none "
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Bolu Ajibola
              </span>
            </div>

            {/* Copyright & Back to Top */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
              <p className="text-[#666] text-sm font-light text-center sm:text-left">
                © {new Date().getFullYear()} Bolu Ajibola. All rights reserved.
              </p>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Back to Top
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
