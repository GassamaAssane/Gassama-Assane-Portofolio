"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/content/data";
import DownloadCvButton from "@/components/ui/DownloadCvButton";

const sectionIcons: Record<string, string> = {
  "#accueil": "🏠",
  "#apropos": "👤",
  "#formation": "🎓",
  "#competences": "🧠",
  "#experiences": "💼",
  "#projets": "🚀",
  "#certifications": "🏅",
  "#contact": "✉️",
};

const quickDockItems = [
  { label: "Accueil", href: "#accueil", icon: "🏠" },
  { label: "Profil", href: "#apropos", icon: "👤" },
  { label: "Projets", href: "#projets", icon: "🚀" },
  { label: "Exp", href: "#experiences", icon: "💼" },
  { label: "Contact", href: "#contact", icon: "✉️" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Détection de la section active
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll d'arrière-plan quand le menu mobile plein écran est ouvert
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Barre de navigation principale (Desktop & Mobile Top Header) */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl py-2.5 sm:py-3"
            : "bg-[#0a0a0f]/90 sm:bg-[#0a0a0f]/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-b border-white/[0.08] lg:border-transparent py-2.5 sm:py-3 lg:py-6"
        }`}
      >
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo / Identité */}
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#accueil");
              }}
              className="relative group flex items-center gap-2.5 sm:gap-3 shrink-0"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500/25 to-purple-500/25 border border-indigo-400/40 flex items-center justify-center text-sm sm:text-base font-bold font-heading text-white shadow-lg">
                AG
              </span>
              <span className="text-sm sm:text-base font-bold font-heading tracking-wide text-white">
                Assane Gassama
              </span>
            </a>

            {/* Navigation Desktop (préservée à l'identique pour ordinateur) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 bg-white/[0.03] p-2 rounded-2xl border border-white/[0.06] backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-xs xl:text-sm font-medium transition-all duration-300 rounded-xl ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white font-semibold bg-white/[0.08]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Actions à droite : Bouton CV sur Desktop + Bouton MENU Mobile ultra-visible */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <DownloadCvButton variant="navbar" />
              </div>

              {/* Bouton Menu Mobile explicite et haute visibilité */}
              <button
                className="lg:hidden relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-indigo-600/30 via-purple-600/25 to-cyan-600/30 border border-indigo-400/40 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:border-cyan-400 active:scale-95 transition-all cursor-pointer"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
              >
                <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
                  <motion.span
                    className="block w-4 h-0.5 bg-cyan-300 rounded-full origin-center"
                    animate={isMobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block w-4 h-0.5 bg-cyan-300 rounded-full"
                    animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                  <motion.span
                    className="block w-4 h-0.5 bg-cyan-300 rounded-full origin-center"
                    animate={isMobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <span className="text-xs font-bold font-heading tracking-wider uppercase text-cyan-200">
                  {isMobileOpen ? "Fermer" : "Menu"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile Fullscreen (Tiroir complet de navigation) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[150] bg-[#0a0a0f]/98 backdrop-blur-3xl lg:hidden flex flex-col justify-between overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header intérieur du menu */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#0c0c18]/90 sticky top-0 z-10 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-indigo-400/40 flex items-center justify-center text-sm font-bold text-white shadow-md">
                  AG
                </span>
                <div>
                  <div className="text-sm font-bold text-white font-heading">Assane Gassama</div>
                  <div className="text-[10px] text-cyan-400 font-mono">Navigation Portfolio</div>
                </div>
              </div>

              <button
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white text-xs font-semibold transition-all cursor-pointer"
                aria-label="Fermer le menu"
              >
                <span>✕</span>
                <span>Fermer</span>
              </button>
            </div>

            {/* Liste complète des sections */}
            <div className="flex-1 px-5 py-6 space-y-2 max-w-md mx-auto w-full">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3 px-2">
                Sections du Portfolio
              </div>

              <div className="space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600/25 via-purple-600/20 to-cyan-600/25 border border-cyan-500/40 text-white shadow-lg shadow-indigo-500/10 font-bold"
                          : "bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-slate-300 font-medium"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{sectionIcons[link.href] || "📌"}</span>
                        <span className="text-base font-heading">{link.label}</span>
                      </div>
                      {isActive ? (
                        <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                          Actuel
                        </span>
                      ) : (
                        <span className="text-slate-500 text-xs">→</span>
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Accès rapide CV dans le menu */}
              <div className="pt-6 mt-4 border-t border-white/[0.08] space-y-3">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono px-2">
                  Curriculum Vitae
                </div>
                <DownloadCvButton variant="contact" />
              </div>
            </div>

            {/* Footer du menu mobile */}
            <div className="px-5 py-3.5 border-t border-white/[0.08] bg-[#080810] flex items-center justify-between text-xs text-slate-400">
              <span>Dakar, Sénégal</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-cyan-400 hover:underline font-mono truncate max-w-[200px]"
              >
                {personalInfo.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barre de navigation rapide flottante en bas d'écran (Mobile Dock) */}
      <nav
        aria-label="Navigation rapide mobile"
        className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[90] w-[calc(100%-2rem)] max-w-md pointer-events-auto"
      >
        <div className="bg-[#0e0e1a]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(99,102,241,0.2)] flex items-center justify-around">
          {quickDockItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "text-cyan-300 font-bold bg-white/[0.08] scale-105"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-[10px] font-mono font-medium tracking-tight mt-0.5">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Bouton pour ouvrir tout le menu */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
              isMobileOpen
                ? "text-cyan-300 font-bold bg-indigo-500/20"
                : "text-indigo-400 hover:text-indigo-300"
            }`}
          >
            <span className="text-base">☰</span>
            <span className="text-[10px] font-mono font-bold tracking-tight mt-0.5">
              Menu
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
