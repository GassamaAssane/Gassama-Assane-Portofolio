"use client";

import { motion } from "framer-motion";

interface DownloadCvButtonProps {
  variant?: "navbar" | "contact" | "hero";
  className?: string;
}

export default function DownloadCvButton({
  variant = "navbar",
  className = "",
}: DownloadCvButtonProps) {
  if (variant === "navbar") {
    return (
      <motion.a
        href="/cv/CV_Fr_Assane_Gassama.pdf"
        download
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className={`relative group inline-flex items-center gap-3 p-[1.5px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all duration-500 ${className}`}
      >
        {/* Border animé en gradient rotatif */}
        <span className="absolute inset-0 bg-[conic-gradient(from_0deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />

        {/* Noyau intérieur glassmorphism */}
        <span className="relative z-10 flex items-center gap-2.5 px-5 py-2.5 rounded-[14px] bg-[#0c0c16]/90 backdrop-blur-xl group-hover:bg-[#0c0c16]/75 transition-all duration-300">
          {/* Icône animée */}
          <span className="relative flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
            <svg
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </span>

          <span className="text-xs xl:text-sm font-bold font-heading text-white tracking-wide">
            Mon CV <span className="text-cyan-400 font-mono text-[11px] font-semibold">(PDF)</span>
          </span>

          {/* Sparkle effet lumineux */}
          <span className="absolute right-2 top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000" />
        </span>
      </motion.a>
    );
  }

  if (variant === "hero") {
    return (
      <motion.a
        href="/cv/CV_Fr_Assane_Gassama.pdf"
        download
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`relative group inline-flex items-center gap-3.5 p-[2px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_45px_rgba(6,182,212,0.5)] transition-all duration-500 ${className}`}
      >
        <span className="absolute inset-0 bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#06b6d4,#3b82f6)] animate-[spin_5s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite]" />

        <span className="relative z-10 flex items-center gap-3 px-7 py-3.5 rounded-[14px] bg-[#0a0a14]/90 backdrop-blur-2xl group-hover:bg-[#0a0a14]/80 transition-all duration-300">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-indigo-400/40 text-cyan-300 shadow-md">
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </span>

          <span className="text-sm font-bold font-heading text-white tracking-wide">
            Télécharger mon CV
          </span>

          <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            PDF
          </span>
        </span>
      </motion.a>
    );
  }

  // Variant contact (large banner style)
  return (
    <motion.a
      href="/cv/CV_Fr_Assane_Gassama.pdf"
      download
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group w-full inline-flex items-center justify-center p-[2px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_50px_rgba(6,182,212,0.45)] transition-all duration-500 ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 group-hover:animate-gradient" />

      <span className="relative z-10 w-full flex items-center justify-center gap-3 px-8 py-4 rounded-[14px] bg-[#0c0c18]/90 backdrop-blur-xl group-hover:bg-[#0c0c18]/75 transition-all duration-300">
        <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-cyan-300">
          <svg
            className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>

        <span className="text-sm sm:text-base font-bold font-heading text-white tracking-wide">
          Télécharger le CV complet <span className="text-cyan-400 font-mono text-xs">(PDF)</span>
        </span>
      </span>
    </motion.a>
  );
}
