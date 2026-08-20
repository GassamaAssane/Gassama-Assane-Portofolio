"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const sampleArticles = [
  {
    id: 1,
    title: "Comment déployer un modèle de Computer Vision avec FastAPI & Docker",
    category: "Tutoriel IA",
    date: "Prochainement",
    readTime: "5 min de lecture",
    excerpt:
      "Guide pratique pas à pas sur l'optimisation et la conteneurisation des modèles de deep learning pour une mise en production rapide et scalable.",
  },
  {
    id: 2,
    title: "Introduction aux architectures RAG et agents IA autonomes",
    category: "LLM & RAG",
    date: "Prochainement",
    readTime: "7 min de lecture",
    excerpt:
      "Exploration approfondie des principes du Retrieval-Augmented Generation avec LangChain, ChromaDB et les derniers modèles de langage.",
  },
  {
    id: 3,
    title: "L'IA au service de l'agriculture de précision en Afrique",
    category: "AgriTech",
    date: "Prochainement",
    readTime: "6 min de lecture",
    excerpt:
      "Retour d'expérience concret sur la combinaison de la télédétection satellitaire et du Machine Learning pour le suivi des rendements agricoles.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-indigo-600/5 blur-[140px]" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading title="Blog & Articles" subtitle="Partage de Connaissances & Tech" />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {sampleArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-8 h-full flex flex-col justify-between space-y-6" glow>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/30">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading hover:text-cyan-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    ⏱️ {article.readTime}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                    Bientôt disponible
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
