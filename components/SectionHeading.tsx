"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-14 sm:mb-16 md:mb-20 ${
        align === "center" ? "text-center" : "text-left"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Ligne décorative */}
      <div
        className={`flex items-center gap-2.5 sm:gap-4 mb-3.5 sm:mb-5 max-w-full px-2 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="block h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-cyan-400 shrink-0" />
        <span className="text-cyan-400 text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.35em] uppercase font-mono text-center truncate sm:overflow-visible">
          {subtitle}
        </span>
        <span className="block h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-cyan-400 shrink-0" />
      </div>

      {/* Titre principal */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
        {title}
        <span className="text-cyan-400">.</span>
      </h2>

      {/* Ligne sous le titre */}
      <div
        className={`mt-4 sm:mt-6 flex ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <div className="h-1 sm:h-1.5 w-16 sm:w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
      </div>
    </motion.div>
  );
}
