"use client";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  subTitle: string;
  theme?: "dark" | "light";
}

export default function PageTitle({ title, subTitle, theme = "dark" }: Props) {
  const isLight = theme === "light";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24"
    >
      <h1
        className={`text-[48px] md:text-[60px] leading-[60px] tracking-tight mb-4 ${
          isLight ? "text-[#0a0a0a]" : "text-white"
        }`}
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {title}
      </h1>

      <div
        className={`h-[1px] w-full max-w-2xl mb-4 ${
          isLight ? "bg-black/10" : "bg-[#2a2a2a]"
        }`}
      />

      <p
        className={`text-[15px] font-light tracking-wide ${
          isLight ? "text-[#666]" : "text-[#a0a0a0]"
        }`}
      >
        {subTitle}
      </p>
    </motion.div>
  );
}
