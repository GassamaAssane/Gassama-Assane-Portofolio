"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CvViewerModal from "@/components/ui/CvViewerModal";

interface DownloadCvButtonProps {
  variant?: "navbar" | "contact" | "hero";
  className?: string;
}

export default function DownloadCvButton({
  variant = "navbar",
  className = "",
}: DownloadCvButtonProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Variante Navbar : Bouton compact avec modal de prévisualisation et téléchargement
  if (variant === "navbar") {
    return (
      <>
        <div className={`flex items-center gap-2 ${className}`}>
          {/* Bouton Visualiser CV (sans téléchargement forcé) */}
          <motion.button
            onClick={() => setIsViewerOpen(true)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="relative group inline-flex items-center gap-2 p-[1.5px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all duration-500 cursor-pointer"
            title="Visualiser le CV directement sans le télécharger"
          >
            <span className="absolute inset-0 bg-[conic-gradient(from_0deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
            <span className="relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-[14px] bg-[#0c0c16]/90 backdrop-blur-xl group-hover:bg-[#0c0c16]/75 transition-all duration-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-indigo-500/20 text-cyan-300">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              <span className="text-xs xl:text-sm font-bold font-heading text-white tracking-wide">
                Voir le CV
              </span>
            </span>
          </motion.button>

          {/* Bouton Télécharger (compact) */}
          <motion.a
            href="/cv/CV_Fr_Assane_Gassama.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
            title="Télécharger le fichier PDF du CV"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.a>
        </div>

        {/* Modal de visualisation */}
        <CvViewerModal isOpen={isViewerOpen} onClose={() => setIsViewerOpen(false)} />
      </>
    );
  }

  // Variante Hero : Propose explicitement "Visualiser mon CV" ET "Télécharger"
  if (variant === "hero") {
    return (
      <>
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto ${className}`}>
          {/* Bouton 1 : Visualiser mon CV (sans téléchargement forcé) */}
          <motion.button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative group inline-flex items-center justify-center gap-3 p-[2px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_45px_rgba(6,182,212,0.5)] transition-all duration-500 w-full sm:w-auto cursor-pointer"
          >
            <span className="absolute inset-0 bg-[conic-gradient(from_0deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)] animate-[spin_5s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite]" />
            <span className="relative z-10 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-[14px] bg-[#0a0a14]/90 backdrop-blur-2xl group-hover:bg-[#0a0a14]/80 transition-all duration-300">
              <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              <span className="text-sm font-bold font-heading text-white tracking-wide">
                Visualiser le CV
              </span>
            </span>
          </motion.button>

          {/* Bouton 2 : Télécharger le CV */}
          <motion.a
            href="/cv/CV_Fr_Assane_Gassama.pdf"
            download
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all duration-300 w-full sm:w-auto text-sm font-bold font-heading shadow-md"
            title="Télécharger le fichier PDF du CV"
          >
            <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Télécharger</span>
            <span className="text-[10px] font-mono text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              PDF
            </span>
          </motion.a>
        </div>

        {/* Modal de visualisation */}
        <CvViewerModal isOpen={isViewerOpen} onClose={() => setIsViewerOpen(false)} />
      </>
    );
  }

  // Variante Contact : Deux boutons bien espacés (Visualiser + Télécharger)
  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full ${className}`}>
        {/* Bouton 1 : Visualiser sans télécharger */}
        <motion.button
          type="button"
          onClick={() => setIsViewerOpen(true)}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group w-full inline-flex items-center justify-center p-[2px] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.45)] transition-all duration-500 cursor-pointer"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />
          <span className="relative z-10 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[14px] bg-[#0c0c18]/90 backdrop-blur-xl group-hover:bg-[#0c0c18]/75 transition-all duration-300">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm font-bold font-heading text-white tracking-wide">
              Visualiser le CV
            </span>
          </span>
        </motion.button>

        {/* Bouton 2 : Télécharger */}
        <motion.a
          href="/cv/CV_Fr_Assane_Gassama.pdf"
          download
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all duration-300 text-sm font-bold font-heading shadow-md"
        >
          <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Télécharger le CV</span>
        </motion.a>
      </div>

      {/* Modal de visualisation */}
      <CvViewerModal isOpen={isViewerOpen} onClose={() => setIsViewerOpen(false)} />
    </>
  );
}
