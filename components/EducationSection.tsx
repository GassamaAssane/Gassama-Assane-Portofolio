"use client";

import { motion } from "framer-motion";
import { educationData } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";

export default function EducationSection() {
  return (
    <section id="formation" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-purple-600/5 blur-[140px]" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading title="Parcours Académique" subtitle="Diplômes & Spécialisations" />

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-cyan-500/50 md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.id}
                className={`relative flex flex-col md:flex-row items-start gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-[#0a0a0f] z-10 shadow-xl shadow-indigo-500/50" />

                {/* Contenu */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "md:pr-6 md:text-right" : "md:pl-6"
                  }`}
                >
                  {/* Période */}
                  <span className="inline-block px-4 py-1.5 text-xs font-mono font-bold rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 mb-4 shadow-sm">
                    📅 {edu.period}
                  </span>

                  {/* Carte */}
                  <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 group shadow-2xl">
                    {/* Reflet */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-3xl" />

                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-base text-purple-400 font-semibold">
                        {edu.speciality}
                      </p>
                    </div>

                    <div className="space-y-1 mb-6 text-xs sm:text-sm">
                      <p className="text-cyan-400 font-medium flex items-center gap-2 justify-start md:justify-start">
                        🏛️ <span>{edu.institution}</span>
                      </p>
                      <p className="text-slate-400">
                        📍 <span>{edu.location}</span>
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Tags */}
                    <div
                      className={`flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
