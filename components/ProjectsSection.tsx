"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, projectCategories } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeProject, setActiveProject] = useState<(typeof projectsData)[0] | null>(null);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projets" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 -right-20 sm:-right-40 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading title="Projets Réalisés" subtitle="Portfolio & Cas d'Usage IA" />

        {/* Filtres par catégorie bien aérés et lisibles */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-14">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 ${selectedCategory === cat
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white shadow-xl shadow-indigo-500/25 hover:from-indigo-500 hover:to-purple-500 scale-105 hover:-translate-y-0.5 border border-indigo-400/30"
                : "bg-white/[0.05] text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-indigo-500/50 hover:-translate-y-0.5 shadow-lg shadow-black/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de projets avec 2 projets par ligne */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="h-full flex flex-col overflow-hidden group cursor-pointer" glow>
                  {/* Visual Header / Banner */}
                  <div
                    className="relative h-44 sm:h-52 w-full bg-slate-900 overflow-hidden"
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10 opacity-80" />

                    {/* Banner stylisé avec icône & gradient */}
                    <div className="w-full h-full bg-gradient-to-br from-indigo-950/80 via-purple-950/60 to-slate-950 flex flex-col items-center justify-center p-6 text-center group-hover:scale-110 transition-transform duration-700">
                      <span className="text-4xl mb-2">🚀</span>
                      <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest bg-black/60 px-4 py-1.5 rounded-full border border-cyan-500/40 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/40 text-indigo-300 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                        ⭐ En vedette
                      </div>
                    )}
                  </div>

                  {/* Body avec padding aéré */}
                  <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
                    <div className="space-y-3">
                      <h3
                        onClick={() => setActiveProject(project)}
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors leading-snug"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Key Metric Stats — Rectangles arrondis bien aérés sans tronquage */}
                      {project.stats && (
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
                          {Object.entries(project.stats).map(([k, v]) => (
                            <div key={k} className="flex flex-col items-center justify-center min-w-0 px-1 py-0.5">
                              <div
                                className="text-xs sm:text-sm font-bold text-cyan-400 font-mono w-full leading-tight"
                                title={v}
                              >
                                {v}
                              </div>
                              <div
                                className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono w-full mt-1 leading-tight"
                                title={k}
                              >
                                {k}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium rounded-xl bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2.5 py-1.5 text-xs font-medium rounded-xl bg-white/[0.04] text-slate-400">
                            +{project.technologies.length - 6}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-2 uppercase tracking-wider transition-colors"
                        >
                          Détails du projet
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        <div className="flex items-center gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors shadow-sm"
                            title="Code source GitHub"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de détail de projet aéré */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-[#0f0f23] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 md:p-12 max-h-[92vh] overflow-y-auto space-y-6 sm:space-y-8"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Fermer"
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  ✕
                </button>

                <div className="space-y-3 pr-10">
                  <span className="inline-block text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                    {activeProject.category}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-bold text-white font-heading leading-tight">
                    {activeProject.title}
                  </h2>
                </div>

                <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
                  {activeProject.longDescription}
                </p>

                {/* Métriques */}
                {activeProject.stats && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-6 p-3.5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
                    {Object.entries(activeProject.stats).map(([k, v]) => (
                      <div key={k} className="min-w-0">
                        <div className="text-sm sm:text-xl font-bold text-cyan-400 font-mono truncate">{v}</div>
                        <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider capitalize font-mono mt-1 truncate">{k}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Technologies & Frameworks :
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {activeProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-xl shadow-indigo-500/25"
                  >
                    Voir le code sur GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
