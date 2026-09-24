"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/content/data";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import DownloadCvButton from "@/components/ui/DownloadCvButton";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/assanegassama1999@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "Nouveau message du portfolio",
          message: formState.message
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading title="Contactez-moi" subtitle="Démarrons un Projet Ensemble" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Infos de contact (50% de la largeur) */}
          <div>
            <GlassCard className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between space-y-6 sm:space-y-8" glow>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-6 pb-3 sm:mb-8 sm:pb-4 border-b border-white/[0.08]">
                  Coordonnées
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl sm:text-2xl shrink-0">
                      📧
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-1">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl sm:text-2xl shrink-0">
                      📱
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-1">Téléphone</div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl sm:text-2xl shrink-0">
                      📍
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-1">Localisation</div>
                      <div className="text-sm sm:text-base font-semibold text-white">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Téléchargement du CV */}
              <div className="pt-6 sm:pt-8 border-t border-white/[0.08]">
                <DownloadCvButton variant="contact" />
              </div>
            </GlassCard>
          </div>

          {/* Formulaire de contact (50% de la largeur) */}
          <div>
            <GlassCard className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between" glow>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Nom complet"
                        className="w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                        Votre Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="nom@exemple.com"
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 font-mono">
                      Sujet
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Objet de votre message"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 font-mono">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Bonjour Assane, je souhaiterais échanger avec vous concernant..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-3 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium text-center"
                    >
                      ✅ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium text-center"
                    >
                      ❌ Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.
                    </motion.div>
                  )}
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
