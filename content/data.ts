// =============================================================================
// Données centralisées du portfolio — Assane Gassama
// Modifiez ce fichier pour personnaliser tout le contenu du portfolio
// =============================================================================

// --- Informations personnelles ---
export const personalInfo = {
  firstName: "Assane",
  lastName: "Gassama",
  fullName: "Assane Gassama",
  initials: "AG",
  title: "Data Scientist, AI Engineer & AgriTech",
  subtitle: "Data Engineer · Data Analyst · Agronome",
  email: "assanegassama1999@gmail.com",
  phone: "+221 78 608 92 86 / 76 924 94 86",
  location: "Yeumbeul, Keur Massar, Dakar, Sénégal",
  website: "https://assanegassama.dev",
  // Remplacez par vos vrais liens
  social: {
    github: "https://github.com/GassamaAssane",
    linkedin: "https://www.linkedin.com/in/assane-gassama-a46979238/",
    kaggle: "https://www.kaggle.com/assanegassama",
  },
  // Texte de la hero section
  heroTaglines: [
    "Data Scientist",
    "AI Engineer",
    "Data Engineer",
    "Data Analyst",
    "Digital agriculture technician"
  ],
  heroCTA: {
    primary: { text: "Voir mes projets", href: "#projets" },
    secondary: { text: "Me contacter", href: "#contact" },
  },
};

// --- À propos ---
export const aboutData = {
  paragraphs: [
    "Passionné par la science des données et l'intelligence artificielle, je transforme des données brutes en solutions concrètes et innovantes. Mon parcours unique, alliant agronomie et technologies numériques, me permet d'aborder les problèmes avec une perspective pluridisciplinaire.",
    "Diplômé d'un Master en Sciences des Données et Applications (spécialité Ingénierie des Données et Intelligence Artificielle) de l'UIDT de Thiès, je maîtrise l'ensemble de la chaîne de valeur de la donnée — de la collecte à la mise en production de modèles d'IA.",
    "Je conçois des pipelines de données robustes, développe des modèles de Machine Learning et Deep Learning performants, et crée des applications intelligentes qui répondent à des besoins métier réels.",
  ],
  stats: [
    { label: "Projets réalisés", value: 15, suffix: "+" },
    { label: "Années d'expérience", value: 3, suffix: "+" },
    { label: "Certifications", value: 6, suffix: "" },
    { label: "Technologies maîtrisées", value: 25, suffix: "+" },
  ],
};

// --- Parcours académique ---
export const educationData = [
  {
    id: 1,
    degree: "Master en Sciences des Données et Applications",
    speciality: "Ingénierie des Données et Intelligence Artificielle (IDIA)",
    institution: "Université Iba Der Thiam de Thiès (UIDT)",
    location: "Thiès, Sénégal",
    period: "2022 — 2025",
    description:
      "Formation approfondie en Data Science, Machine Learning, Deep Learning, Computer Vision, Big Data, etc. Projet de fin d'études sur la simulation de données bancaires applicables au Sénégal en utilisant les agents IA (LLM).",
    highlights: [
      "Data Science & Machine Learning",
      "Deep Learning & LLM",
      "Big Data",
      "Ingénierie des données",
      "Analyse de données",
      "Base de données"
    ],
  },
  {
    id: 2,
    degree: "Licence en AgroTIC",
    speciality: "Application des TIC à l'Agriculture",
    institution: "Université du Sine Saloum El Hadji Ibrahima Niass de Kaolack (USSEIN)",
    location: "Kaolack, Sénégal",
    period: "2019 — 2022",
    description:
      "Formation interdisciplinaire combinant agronomie, IA, télédétection et technologies de l'information appliquées à l'agriculture. Acquisition de compétences en systèmes embarqués, programmation et analyse de données agricoles. Projet de fin d'études : Création d’un prototype robot agricole multifonctionnels (Semi, Labour et Arrosage)",
    highlights: [
      "Agronomie & SIG",
      "Manipulation de drone",
      "Télédétection & Cartographie",
      "Programmation & Bases de données",
      "Technologies appliquées à l'agriculture",
    ],
  },
];

// --- Compétences techniques ---
export const skillsData = [
  {
    category: "Langages de programmation",
    icon: "code",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
      { name: "Arduino", level: 80 },
    ],
  },
  {
    category: "Data Science & ML",
    icon: "brain",
    skills: [
      { name: "Scikit-Learn", level: 90 },
      { name: "TensorFlow / Keras", level: 85 },
      { name: "PyTorch", level: 70 },
      { name: "Pandas / NumPy", level: 95 },
    ],
  },
  {
    category: "Deep Learning & IA",
    icon: "cpu",
    skills: [
      { name: "Generative AI (LLMs, RAG)", level: 80 },
      { name: "Computer Vision (CNN)", level: 70 },
      { name: "Hugging Face", level: 50 },
    ],
  },
  {
    category: "Data Engineering",
    icon: "database",
    skills: [
      { name: "Apache Spark / PySpark", level: 80 },
      { name: "ETL / ELT ", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB / NoSQL", level: 75 },
    ],
  },
  {
    category: "Visualisation & BI",
    icon: "chart",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Plotly / Matplotlib / Seaborn", level: 90 },
      { name: "Streamlit / Dash", level: 85 },
    ],
  },
  {
    category: "Agronomie & Agriculture Numérique",
    icon: "leaf",
    skills: [
      { name: "Itinéraires techniques maraîchers", level: 85 },
      { name: "Calcul des besoins en intrants (NPK)", level: 80 },
      { name: "Gestion d'exploitation & Irrigation", level: 80 },
      { name: "Pilotage de drone & Télédétection", level: 75 },
      { name: "Compostage", level: 75 },
    ],
  },
];

// --- Outils & Technologies ---
export const toolsData = [
  {
    category: "Langages",
    tools: ["Python", "SQL", "R", "Arduino"],
  },
  {
    category: "Frameworks ML/DL",
    tools: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "Keras",
      "Hugging Face",
      "LangChain",
    ],
  },
  {
    category: "Data Engineering",
    tools: ["Apache Spark", "PySpark", "Pandas", "NumPy"],
  },
  {
    category: "Bases de données",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL"],
  },
  {
    category: "Visualisation",
    tools: ["Power BI", "Plotly", "Streamlit", "Matplotlib"],
  },
  {
    category: "Agronomie & SIG",
    tools: ["IoT", "ArcGIS", "Google Earth Engine", "Drone", "Télédétection"],
  },
  {
    category: "LLMs & IA Générative",
    tools: ["Gemini", "GPT", "CrewAI", "Deepseek", "Llama", "Mistral", "Nomic"],
  },
  {
    category: "Bureautique",
    tools: ["Word", "Excel", "PowerPoint"],
  },
];

// --- Expériences professionnelles ---
export const experiencesData = [
  {
    id: 1,
    title: "Data Analyst — Projet Parlons Cyber",
    company: "Kubuk Conseil",
    location: "Dakar, Sénégal",
    period: "Mai 2026 — Présent",
    type: "Mission",
    description:
      "Chargé de la collecte, gestion et exploitation des données de la campagne \"Parlons Cyber\". Analyse et reporting pour optimiser l'impact de la campagne.",
    missions: [
      "Collecte et structuration des données de la campagne Parlons Cyber",
      "Gestion et nettoyage des jeux de données pour garantir la qualité",
      "Exploitation et analyse des données pour extraire des insights actionnables",
      "Production de rapports et visualisations pour les parties prenantes",
    ],
    technologies: [
      "Kobotoolbox",
      "Power BI",
      "Excel",
      "Word"
    ],
  },
  {
    id: 2,
    title: "Stagiaire Data & IA — Département Marketing Grand Public",
    company: "SONATEL Sénégal",
    location: "Dakar, Sénégal",
    period: "Juin — Déc. 2025",
    type: "Stage",
    description:
      "Responsable du projet de mise en place d'un système multi-agents IA (LLM) pour le requêtage SQL en langage naturel et l'automatisation de l'analyse des données métier.",
    missions: [
      "Apprentissage et compréhension des données métier du département Marketing Grand Public",
      "Mise en place d'une interface utilisateur et d'un RAG pour la recherche des tables contenant les informations métier",
      "Création d'agents IA (Gemini, GPT) pour transformer les questions métiers en requêtes SQL via le RAG",
      "Connexion à la base de données et exécution automatique des requêtes pour tirer les informations métier",
      "Création de Dashboards automatiques des résultats des questions métier",
      "Construction d'un agent d'analyse des données et de recommandations stratégiques pour les décideurs",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Gemini",
      "GPT",
      "RAG",
      "SQL",
      "MySQL",
      "LangChain",
    ],
  },
  {
    id: 3,
    title: "Stagiaire — Département Objets Connectés (IoT)",
    company: "Fab-lab DEFAR Sci",
    location: "Sénégal",
    period: "Août — Sept. 2021",
    type: "Stage",
    description:
      "Stage au département objets connectés (IoT) du Fab-lab DEFAR Sci. Conception et prototypage de systèmes embarqués : sécurité, portes automatiques, robots.",
    missions: [
      "Conception de systèmes de sécurité automatisés avec Arduino",
      "Développement de prototypes de portes automatiques",
      "Programmation de robots et systèmes embarqués",
      "Intégration de capteurs IoT pour la collecte de données",
    ],
    technologies: [
      "Arduino",
      "IoT",
      "Capteurs",
      "Systèmes embarqués",
    ],
  },
];

// --- Projets ---
export const projectsData = [
  {
    id: 1,
    title: "Simulation de Données Bancaires Sénégalaises",
    category: "Generative AI",
    description:
      "Mise en place d'un système d'agents IA qui génère des transactions bancaires réalistes applicables au contexte sénégalais, en utilisant CrewAI et des LLMs.",
    longDescription:
      "Projet de fin d'études utilisant un système multi-agents IA pour simuler des données bancaires réalistes adaptées au Sénégal. Les agents, orchestrés via CrewAI, exploitent Gemini, Llama et Mistral pour générer des transactions bancaires fidèles au contexte local. Les données générées sont publiées en open-source sur Kaggle.",
    technologies: ["Python", "Streamlit", "CrewAI", "Groq", "Gemini", "Llama", "Mistral"],
    github: "https://www.kaggle.com/datasets/assanegassama/donnes-bancaires-sngalaises",
    demo: "https://www.kaggle.com/datasets/assanegassama/donnes-bancaires-sngalaises",
    image: "/images/projects/bank-simulation.jpg",
    featured: true,
    stats: { agents: "Multi", llms: "3", dataset: "Kaggle" },
  },
  {
    id: 2,
    title: "Insight Narrator — Multi-Agent IA",
    category: "Generative AI",
    description:
      "Système multi-agents IA pour questionner vos données en langue naturelle au lieu d'écrire des requêtes SQL. Automatisation complète de la consultance data.",
    longDescription:
      "Application permettant d'interroger une base de données en posant des questions en langage naturel. Le système transforme automatiquement la question en requête SQL, exécute la requête, crée un Dashboard des résultats et fournit des recommandations stratégiques pour les décideurs.",
    technologies: ["Python", "Streamlit", "LangChain", "Gemini API", "GPT API", "SQL", "RAG", "MySQL"],
    github: "https://github.com/GassamaAssane/blank-app",
    demo: "#",
    image: "/images/projects/insight-narrator.jpg",
    featured: true,
    stats: { requêtes: "Auto", dashboard: "Auto", analyse: "IA" },
  },
  {
    id: 3,
    title: "RAG PDF Document — Chat Local",
    category: "Generative AI",
    description:
      "Système pour discuter avec vos documents PDF comme ChatGPT, entièrement en local sans connexion internet. Utilise Deepseek et Nomic pour l'embedding.",
    longDescription:
      "Application RAG locale permettant de dialoguer avec vos documents PDF sans aucune connexion internet. Le système utilise Deepseek comme modèle de langage et Nomic-embed-text pour l'embedding des documents, garantissant confidentialité totale des données.",
    technologies: ["Python", "Streamlit", "Deepseek", "Nomic-embed-text", "RAG"],
    github: "https://github.com/GassamaAssane/Ollama_Rag-with-Streamlit",
    demo: "#",
    image: "/images/projects/rag-pdf.jpg",
    featured: true,
    stats: { mode: "Local", internet: "Non", privacy: "100%" },
  },
  {
    id: 4,
    title: "Robot Agricole Multifonctionnel",
    category: "IoT & Robotique",
    description:
      "Création d'un prototype de robot agricole capable de réaliser le labour, la semi et l'arrosage de manière autonome, basé sur Arduino.",
    longDescription:
      "Projet de fin d'études de Licence AgroTIC : conception et réalisation d'un robot agricole multifonctionnel programmé avec Arduino. Le robot intègre trois fonctionnalités clés — le labour, la semi et l'arrosage — permettant d'automatiser les tâches agricoles répétitives.",
    technologies: ["Arduino", "Capteurs", "Electronique", "IoT", "MIT App Inventor"],
    github: "https://github.com/GassamaAssane",
    demo: "#",
    image: "/images/projects/robot-agri.jpg",
    featured: true,
    stats: { fonctions: "3", plateforme: "Arduino", type: "Prototype" },
  },
];

// Catégories de projets pour le filtre
export const projectCategories = [
  "Tous",
  "Generative AI",
  "IoT & Robotique",
];

// --- Certifications ---
export const certificationsData = [
  {
    id: 1,
    name: "AI Fundamentals",
    issuer: "Google",
    platform: "Coursera",
    date: "2026",
    link: "https://coursera.org/verify/23PICLX6GHY4",
    pdf: "/certificates/google-ai-fundamentals.pdf",
    image: "/certificates/google-ai-fundamentals.png",
    badge: "🤖",
    featured: true,
  },
  {
    id: 2,
    name: "Elements of AI",
    issuer: "University of Helsinki",
    platform: "University of Helsinki",
    date: "2024",
    link: "https://www.elementsofai.com/",
    badge: "🧠",
  },
  {
    id: 3,
    name: "Working with Big Data",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    date: "2024",
    link: "https://coursera.org/verify/",
    badge: "📊",
  },
  {
    id: 4,
    name: "Save time with Microsoft Excel by using ChatGPT",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    date: "2024",
    link: "https://coursera.org/verify/",
    badge: "🤖",
  },
  {
    id: 5,
    name: "Application of Data Analysis in Business with R Programming",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    date: "2024",
    link: "https://coursera.org/verify/",
    badge: "📈",
  },
  {
    id: 6,
    name: "Data Analyst",
    issuer: "Force N",
    platform: "Force N",
    date: "2024",
    link: "#",
    badge: "🏅",
  },
  {
    id: 7,
    name: "Artificial Intelligence",
    issuer: "Force N",
    platform: "Force N",
    date: "2024",
    link: "#",
    badge: "🏅",
  },
];

// --- Publications / Recherches ---
export const publicationsData = [
  {
    id: 1,
    title:
      "Application du Deep Learning pour la détection précoce des maladies des cultures au Sénégal",
    type: "Mémoire de Master",
    journal: "UIDT — Département Sciences des Données",
    year: "2024",
    abstract:
      "Étude approfondie sur l'utilisation des réseaux de neurones convolutifs pour la classification automatique des maladies foliaires à partir d'images drone et smartphone.",
    link: "#",
  },
  {
    id: 2,
    title:
      "Analyse prédictive des rendements agricoles par intégration de données multi-sources",
    type: "Article de recherche",
    journal: "Conférence AgroTIC Afrique",
    year: "2023",
    abstract:
      "Proposition d'un framework de Machine Learning combinant données satellitaires, météorologiques et pédologiques pour la prédiction des rendements des cultures céréalières.",
    link: "#",
  },
];

// --- Navigation ---
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Formation", href: "#formation" },
  { label: "Compétences", href: "#competences" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projets" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
