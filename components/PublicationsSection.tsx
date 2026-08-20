"use client";

import { motion } from "framer-motion";
import { publicationsData } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function PublicationsSection() {
  return (
    <section id="publications" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading title="Publications & Recherches" subtitle="Travaux Académiques & Recherche" />

        <div className="space-y-8 lg:space-y-10">
          {publicationsData.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard className="p-8 sm:p-10" glow>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">📄</span>
                    <div>
                      <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/30">
                        {pub.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-3 leading-snug">
                        {pub.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.08] w-fit">
                    {pub.year}
                  </span>
                </div>

                <p className="text-sm font-semibold text-cyan-400 mb-4">
                  🏛️ {pub.journal}
                </p>

                <p className="text-base text-slate-300 leading-relaxed">
                  {pub.abstract}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
