"use client";

import { motion } from "framer-motion";
import { toolsData } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function ToolsSection() {
  return (
    <section id="outils" className="pt-12 pb-20 sm:pt-16 sm:pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-indigo-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading title="Outils & Technologies" subtitle="Stack Technique & Ecosystème" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {toolsData.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <GlassCard className="p-6 sm:p-7 md:p-8 h-full flex flex-col justify-start gap-5" glow>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-5 pb-3 border-b border-white/[0.08] flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                    {categoryGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {categoryGroup.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3.5 py-2 sm:px-4 sm:py-2 text-xs font-semibold rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 hover:text-cyan-300 hover:bg-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
                      >
                        {tool}
                      </motion.span>
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
