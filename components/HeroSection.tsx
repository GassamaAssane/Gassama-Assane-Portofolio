"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/content/data";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import DownloadCvButton from "@/components/ui/DownloadCvButton";

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Effet machine à écrire
  useEffect(() => {
    const tagline = personalInfo.heroTaglines[currentTagline];
    const speed = isDeleting ? 30 : 70;

    if (!isDeleting && displayText === tagline) {
      setTimeout(() => setIsDeleting(true), 2200);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % personalInfo.heroTaglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? tagline.substring(0, displayText.length - 1)
          : tagline.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline]);

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-36 flex items-center overflow-hidden"
    >
      <ParticlesBackground />

      {/* Orbes de lumière décoratifs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-600/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/5 blur-[160px]" />

      {/* Conteneur principal avec marge minimale de 32px (px-8 sm:px-12 lg:px-16) à gauche et à droite */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Colonne texte (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Disponible pour de nouvelles opportunités
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-[1.15] tracking-tight break-words">
                <span className="text-white block">Bonjour, je suis</span>
                <span className="gradient-text block mt-1">{personalInfo.fullName}</span>
              </h1>
            </motion.div>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-1 pb-2"
            >
              <div className="flex items-center gap-3 text-lg sm:text-2xl md:text-3xl text-slate-200 font-heading font-semibold">
                <span className="text-cyan-400 font-mono text-xl shrink-0">{">"}</span>
                <span className="break-all sm:break-normal">{displayText}</span>
                <span className="w-0.5 h-7 sm:h-8 bg-cyan-400 animate-pulse shrink-0" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
            >
              Je transforme les données complexes en{" "}
              <span className="text-indigo-400 font-semibold">insights stratégiques</span> et
              développe des{" "}
              <span className="text-purple-400 font-semibold">applications d&apos;IA sur-mesure</span> qui
              résolvent des défis concrets. Autrement dit, Grâce à une maîtrise des outils analytiques et
              des techniques d’apprentissage automatique nous développons des solutions innovantes adaptées
              à divers secteurs (agriculture, finance, industrie, etc.).
            </motion.p>

            {/* Badges spécialités */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["Machine Learning", "Deep Learning", "LLM", "Computer Vision", "Data Engineering", "AgriTech"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:bg-white/[0.08] hover:border-indigo-500/40 hover:text-white transition-all duration-300"
                  >
                    {badge}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs avec le nouveau bouton Télécharger CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap items-center gap-5 pt-4"
            >
              <a
                href={personalInfo.heroCTA.primary.href}
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1"
              >
                {personalInfo.heroCTA.primary.text}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Nouveau Bouton CV Téléchargement Ultra-Futuriste */}
              <DownloadCvButton variant="hero" />
            </motion.div>

            {/* Liens sociaux */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-5 pt-6"
            >
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono shrink-0">
                Suivez-moi
              </span>
              <span className="h-px w-10 bg-slate-800 shrink-0" />
              <div className="flex items-center gap-3">
                {[
                  {
                    name: "GitHub",
                    href: personalInfo.social.github,
                    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    name: "LinkedIn",
                    href: personalInfo.social.linkedin,
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                  {
                    name: "Kaggle",
                    href: personalInfo.social.kaggle,
                    path: "M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.238-.036.27l-6.814 6.87 7.07 8.09c.09.117.09.224 0 .317v.004z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-cyan-500/40 hover:scale-105 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne image (5 cols) */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative my-4">
              {/* Cercle décoratif animé */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl animate-pulse-glow" />

              {/* Cercle de bordure avec gradient */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-2xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0f]">
                  <Image
                    src="/images/Profile.png"
                    alt="Assane Gassama — Data Scientist & AI Engineer"
                    width={450}
                    height={450}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Badges flottants autour de la photo */}
              <motion.div
                className="absolute -top-2 -right-2 px-4 py-2 rounded-xl bg-[#0f0f23]/80 border border-indigo-500/40 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-bold text-indigo-300 font-mono">🧠 AI / Deep Learning</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 px-4 py-2 rounded-xl bg-[#0f0f23]/80 border border-cyan-500/40 backdrop-blur-md shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xs font-bold text-cyan-300 font-mono">📊 Data Engineering</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl bg-[#0f0f23]/80 border border-purple-500/40 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-xs font-bold text-purple-300 font-mono">🌿 AgroTIC</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-cyan-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
