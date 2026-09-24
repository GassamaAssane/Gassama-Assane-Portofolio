"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-700 w-full max-w-full overflow-x-hidden ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main className="relative z-10 w-full max-w-full overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ToolsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
