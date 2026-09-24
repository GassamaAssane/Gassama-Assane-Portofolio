"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";

export default function AboutSection() {
  return (
    <section id="apropos" className="section-padding relative overflow-hidden">
      {/* Orbe décoratif */}
      <div className="absolute top-1/2 -right-20 sm:-right-40 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-indigo-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading title="À propos de moi" subtitle="Parcours & Philosophie" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Texte à gauche (7 colonnes sur 12) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {aboutData.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-sm sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Accent visuel / Citation bien aérée */}
            <motion.div
              className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="h-12 sm:h-14 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 shrink-0" />
              <p className="text-white font-medium italic text-sm sm:text-xl font-heading leading-snug text-left">
                &ldquo;Transformer des masses de données brutes en décisions éclairées et à fort impact.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Statistiques & Domaines clés à droite (5 colonnes sur 12) */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-8 mt-4 lg:mt-0">
            {/* Carte des statistiques */}
            <GlassCard className="p-6 sm:p-10" glow>
              <div className="grid grid-cols-2 gap-5 sm:gap-10">
                {aboutData.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Domaines clés */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono block">
                Domaines clés :
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Python",
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "SQL & Big Data",
                  "Power BI",
                  "LLMs & RAG",
                  "AgriTech",
                  "IoT",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 text-xs font-medium rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

