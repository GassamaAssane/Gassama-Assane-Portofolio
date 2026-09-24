"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/2 -left-32 w-96 h-96 rounded-full bg-cyan-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading title="Certifications" subtitle="Accréditations & Distinctions" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard className="p-6 sm:p-7 h-full flex flex-col justify-between group space-y-4" glow>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl">{cert.badge}</span>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/30">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors leading-snug mb-2.5">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-medium">
                    {cert.issuer} • <span className="text-indigo-400 font-semibold">{cert.platform}</span>
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
