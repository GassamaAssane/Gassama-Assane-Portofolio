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
      className={`mb-10 md:mb-14 ${
        align === "center" ? "text-center" : "text-left"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Ligne décorative */}
      <div
        className={`flex items-center gap-4 mb-5 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="block h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
        <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase font-mono">
          {subtitle}
        </span>
        <span className="block h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400" />
      </div>

      {/* Titre principal */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight leading-tight">
        {title}
        <span className="text-cyan-400">.</span>
      </h2>

      {/* Ligne sous le titre */}
      <div
        className={`mt-8 flex ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
      </div>
    </motion.div>
  );
}
