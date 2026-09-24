"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CvViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvViewerModal({ isOpen, onClose }: CvViewerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[92vh] bg-[#0c0c18] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Barre d'en-tête de la visionneuse */}
            <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-white/10 bg-[#0a0a14]/90 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-cyan-300 text-lg">
                  📄
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                    Curriculum Vitae — Assane Gassama
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
                    Data Scientist • AI Engineer • AgriTech
                  </p>
                </div>
              </div>

              {/* Actions & Fermeture */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="/cv/CV_Fr_Assane_Gassama.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-semibold transition-all"
                  title="Ouvrir dans un nouvel onglet"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Nouvel onglet</span>
                </a>

                <a
                  href="/cv/CV_Fr_Assane_Gassama.pdf"
                  download
                  className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="hidden sm:inline">Télécharger</span>
                </a>

                <button
                  onClick={onClose}
                  aria-label="Fermer"
                  className="w-9 h-9 rounded-xl bg-white/[0.08] text-white flex items-center justify-center hover:bg-white/20 transition-colors ml-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Corps visionneuse : Iframe PDF interactive avec fallback */}
            <div className="flex-1 w-full h-full bg-[#121220] relative">
              <iframe
                src="/cv/CV_Fr_Assane_Gassama.pdf#toolbar=1"
                className="w-full h-full border-0"
                title="Visualisation du CV d'Assane Gassama"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
