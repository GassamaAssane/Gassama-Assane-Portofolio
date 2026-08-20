import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assane Gassama — Data Scientist , AI Engineer & AgriTech | Portfolio",
  description:
    "Portfolio professionnel d'Assane Gassama, Data Scientist, Data Engineer, Data Analyst et développeur d'applications d'Intelligence Artificielle. Spécialiste en Machine Learning, Deep Learning, NLP et Computer Vision.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "Data Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Python",
    "Sénégal",
    "Assane Gassama",
    "Portfolio",
    "Intelligence Artificielle",
    "AgriTech"
  ],
  authors: [{ name: "Assane Gassama" }],
  creator: "Assane Gassama",
  openGraph: {
    title: "Assane Gassama — Data Scientist AI Engineer & AgriTech",
    description:
      "Portfolio professionnel — Data Science, IA, Machine Learning, Deep Learning, AgriTech",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assane Gassama — Data Scientist, AI Engineer & AgriTech",
    description:
      "Portfolio professionnel — Data Science, IA, Machine Learning, Deep Learning, AgriTech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="min-h-screen bg-[#0a0a0f] text-slate-200 noise-overlay">
        {children}
      </body>
    </html>
  );
}
