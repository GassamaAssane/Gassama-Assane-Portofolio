"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/content/data";
import DownloadCvButton from "@/components/ui/DownloadCvButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Détection de la section active
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Conteneur avec 32px (px-8) minimum à gauche et à droite */}
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Initiales */}
            <motion.a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#accueil");
              }}
              className="relative group flex items-center gap-3 shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-base font-bold font-heading text-white shadow-lg">
                AG
              </span>
              <span className="text-sm sm:text-base font-bold font-heading tracking-wide text-white">
                Assane Gassama
              </span>
            </motion.a>

            {/* Navigation Desktop */}
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

            {/* Bouton CV Premium + Menu Mobile */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <DownloadCvButton variant="navbar" />
              </div>

              {/* Burger Menu Mobile */}
              <button
                className="lg:hidden relative w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    className="block w-5 h-0.5 bg-white rounded-full origin-center"
                    animate={
                      isMobileOpen
                        ? { rotate: 45, y: 4 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-white rounded-full"
                    animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-white rounded-full origin-center"
                    animate={
                      isMobileOpen
                        ? { rotate: -45, y: -4 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile Fullscreen */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[#0a0a0f]/98 backdrop-blur-3xl lg:hidden flex flex-col justify-center px-10 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6 my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-2xl font-bold font-heading transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-6"
              >
                <DownloadCvButton variant="hero" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
