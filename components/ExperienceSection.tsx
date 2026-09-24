"use client";

import { motion } from "framer-motion";
import { experiencesData } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function ExperienceSection() {
  return (
    <section id="experiences" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/3 -right-16 sm:-right-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading title="Expériences Professionnelles" subtitle="Missions & Impacts Métier" />

        <div className="relative border-l-2 border-indigo-500/30 ml-3 sm:ml-6 space-y-12 sm:space-y-16">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-5 sm:pl-10"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[11px] top-7 sm:top-8 w-5 h-5 rounded-full bg-[#0a0a0f] border-2 border-indigo-400 shadow-xl shadow-indigo-500/50 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              </div>

              <GlassCard className="p-5 sm:p-8 md:p-10 w-full" glow>
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading leading-tight">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-base text-indigo-400 font-semibold mt-2.5">
                      <span className="text-cyan-300 font-bold">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 font-normal">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
                    <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300 bg-cyan-500/10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-cyan-500/30 shadow-sm">
                      📅 {exp.period}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-purple-300 bg-purple-500/10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-purple-500/30 shadow-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                  {exp.description}
                </p>

                {/* Missions List en grille */}
                <div className="mb-6 sm:mb-8 space-y-3.5 sm:space-y-4">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Missions Principales & Réalisations :
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {exp.missions.map((mission, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-base text-slate-300 leading-relaxed hover:border-indigo-500/30 transition-colors"
                      >
                        <span className="text-cyan-400 text-sm sm:text-base shrink-0 mt-0.5">⚡</span>
                        <span>{mission}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3.5 pt-6 border-t border-white/[0.08]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                    Environnement technique :
                  </span>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:text-white hover:border-indigo-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

