"use client";

import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/content/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07070b] border-t border-white/[0.06] pt-12 pb-24 sm:pt-16 sm:pb-12 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8 sm:mb-12">
          {/* Col 1: Brand info */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-2xl font-bold font-heading bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.fullName}
            </span>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Data Scientist, AI Engineer & Agronome. Passionné par l&apos;impact de la data science et des technologies d&apos;IA pour l&apos;innovation et le développement.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                🐱
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href={personalInfo.social.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="Kaggle"
              >
                📊
              </a>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sections & Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Explorer
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.fullName}. Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span>Retour en haut</span>
            <span className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
