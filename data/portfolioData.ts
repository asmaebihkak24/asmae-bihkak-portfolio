import { Project, ExperienceItem, SkillCategory, FocusColumn, ProgressionStep, Certification, Activity, CVCardItem } from './types';

export const PERSONAL_INFO = {
  name: "ASMAE BIHKAK",
  titleSub: "DATA SCIENCE & AI ENGINEERING",
  role: "Data Science & AI Engineering Student",
  institution: "ENSA Fès",
  location: "Fès · Morocco",
  headline: "Building intelligent solutions with Data, Machine Learning & AI.",
  heroSubtitle: "Final-year Data Science & Artificial Intelligence engineering student at ENSA Fès, passionate about transforming complex data and models into practical, shipped applications.",
  aboutText: "I’m a final-year Data Science & Artificial Intelligence engineering student at ENSA Fès. I enjoy turning real-world problems into practical intelligent systems — from data preparation and machine learning models to AI-powered backend applications.",
  
  processSteps: [
    { step: "01", name: "Understand", desc: "Formulate domain problems, clean telemetry datasets, and define model evaluation criteria." },
    { step: "02", name: "Build", desc: "Design ML architectures, vector index schemas, and scalable FastAPI backend services." },
    { step: "03", name: "Validate", desc: "Rigorous cross-validation, mismatch guards, and response schema verification." },
    { step: "04", name: "Ship", desc: "Deploy via containerized microservices, Streamlit web apps, and REST APIs." }
  ],

  // Real contact details
  email: "asmaebihkak4600@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/asmae-bihkak-542365323/",
  githubUrl: "https://github.com/asmaebihkak24",
  profileImagePath: "/images/profile.jpg",
  flyrankVerificationNote: "FlyRank Graduate · Verification link to be added",
};

export const FOCUS_COLUMNS: FocusColumn[] = [
  {
    number: "01",
    title: "DATA SCIENCE",
    items: ["Data Analysis", "Big Data", "Data Visualization"]
  },
  {
    number: "02",
    title: "ARTIFICIAL INTELLIGENCE",
    items: ["AI Applications", "Computer Vision", "Intelligent Systems"]
  },
  {
    number: "03",
    title: "MACHINE LEARNING",
    items: ["Predictive Modeling", "Deep Learning", "Model Development"]
  },
  {
    number: "04",
    title: "BACKEND ENGINEERING",
    items: ["APIs", "Databases", "Docker", "Authentication"]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ai-image-understanding",
    number: "01",
    title: "AI Image Understanding & Content Matching Engine",
    category: "AI ENGINEERING · COMPUTER VISION · SEMANTIC MATCHING",
    shortDescription: "An AI-powered system designed to understand an image library and identify semantically relevant images for editorial content.",
    fullDescription: "Built an AI-powered backend system that analyzes image content, extracts structured visual metadata using Groq AI, generates high-dimensional vector embeddings, and performs semantic similarity matching over PostgreSQL with pgvector.",
    technologies: ["GROQ", "FASTAPI", "POSTGRESQL", "PGVECTOR", "DOCKER"],
    isFeatured: true,
    highlights: [
      "Image content analysis & multi-label visual context extraction",
      "Structured metadata extraction with strict JSON validation schemas",
      "Automated AI response validation and mismatch guard filters",
      "High-dimensional vector embeddings generation",
      "Semantic similarity search with pgvector indexing in PostgreSQL",
      "Low-confidence fallback handling and relevance score sorting"
    ],
    pipelineStages: [
      { id: "1", title: "IMAGE", description: "Raw visual asset input ingestion", badge: "Input" },
      { id: "2", title: "ANALYSIS", description: "Groq Vision LMM context extraction", badge: "Inference" },
      { id: "3", title: "METADATA", description: "Validated JSON schema serialization", badge: "Parsing" },
      { id: "4", title: "EMBEDDINGS", description: "High-dimensional vector generation", badge: "Vectors" },
      { id: "5", title: "MATCHING", description: "pgvector similarity search", badge: "Query" }
    ],
    githubUrl: "https://github.com/asmaebihkak24"
  },
  {
    id: "ev-battery-charging",
    number: "02",
    title: "EV Battery Charging Optimization",
    category: "MACHINE LEARNING · DEEP LEARNING · ENERGY",
    shortDescription: "An AI-based web application that predicts future battery behavior and recommends an optimal charging current by balancing charging speed, thermal safety, and battery health.",
    fullDescription: "An AI-based web application that predicts future battery behavior and recommends an optimal charging current by balancing charging speed, thermal safety, and battery health.",
    technologies: ["PYTHON", "TENSORFLOW", "KERAS", "LSTM", "FASTAPI", "JAVASCRIPT", "CHART.JS"],
    isFeatured: true,
    highlights: [
      "Battery telemetry preprocessing and time-series data preparation",
      "LSTM model for predicting future SOC, SOH, and temperature variation",
      "Candidate charging-current evaluation using the predictive model",
      "Optimization objective balancing charging speed, thermal safety, and SOH preservation",
      "FastAPI backend connected to an interactive JavaScript dashboard"
    ],
    howItWorks: [
      "The user provides the current battery state: SOC, SOH, and temperature.",
      "The system evaluates candidate charging currents using the trained LSTM model.",
      "The model predicts the battery's future SOC, SOH, and temperature response.",
      "A cost function evaluates the trade-off between charging speed, thermal safety, and battery degradation.",
      "The system automatically recommends the optimal charging current I*."
    ],
    keyOutcome: "The resulting system transforms battery telemetry and predictive modeling into an automated charging recommendation, aiming to reduce thermal stress and preserve battery health while maintaining efficient charging."
  },

  {
    id: "diabetes-prediction",
    number: "03",
    title: "Diabetes Prediction",
    category: "MACHINE LEARNING · HEALTHCARE",
    shortDescription: "A machine learning project for diabetes risk prediction using clinical data, combining data preprocessing, class balancing, multiple classification algorithms, and an interactive Streamlit interface.",
    fullDescription: "A machine learning project for diabetes risk prediction using clinical data, combining data preprocessing, class balancing, multiple classification algorithms, and an interactive Streamlit interface.",
    technologies: [
      "PYTHON", "PANDAS", "NUMPY", "SCIKIT-LEARN", "SMOTE",
      "KNN", "DECISION TREE", "RANDOM FOREST", "LOGISTIC REGRESSION", "STREAMLIT"
    ],
    isFeatured: true,
    highlights: [
      "Data cleaning and preparation of the clinical dataset",
      "Handling class imbalance using SMOTE",
      "Application and comparison of four classification algorithms: KNN, Decision Tree, Random Forest, and Logistic Regression",
      "Model evaluation and comparison to identify the best-performing approach",
      "Selection of Random Forest as the final model",
      "Streamlit interface for patient data input, prediction visualization, and personalized PDF report generation"
    ],
    howItWorks: [
      "Clinical data is loaded and cleaned: missing values handled, features scaled and prepared.",
      "Class imbalance in the dataset is addressed using SMOTE to ensure balanced model training.",
      "Four classifiers are trained independently: KNN, Decision Tree, Random Forest, and Logistic Regression.",
      "Models are evaluated and compared — Random Forest is selected as the best-performing approach.",
      "The Streamlit interface accepts patient clinical data and outputs a diabetes risk prediction.",
      "A personalized PDF report is generated summarizing the prediction and input data."
    ],
    keyOutcome: "This project demonstrates a complete supervised ML workflow — from raw clinical data through preprocessing, class balancing, multi-model comparison, and final model selection — delivered through an interactive prediction interface with PDF report export."
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: "pcg-heart-disease",
    number: "04",
    title: "PCG Heart Disease Detection",
    category: "DEEP LEARNING · SIGNAL PROCESSING · HEALTHCARE",
    shortDescription: "Phonocardiogram (PCG) acoustic signal processing and deep neural network classification for cardiac arrhythmia detection.",
    technologies: ["PYTHON", "LIBROSA", "TENSORFLOW", "CNN"],
    githubUrl: "https://github.com/asmaebihkak24"
  },
  {
    id: "nasa-web-logs",
    number: "05",
    title: "NASA Web Log Analysis",
    category: "BIG DATA · DATA ENGINEERING",
    shortDescription: "Large-scale HTTP web server log processing, traffic pattern analytics, and anomaly detection using Apache PySpark.",
    technologies: ["PYSPARK", "APACHE SPARK", "PYTHON", "SQL"],
    githubUrl: "https://github.com/asmaebihkak24"
  },
  {
    id: "music-genre-classification",
    number: "06",
    title: "Music Genre Classification",
    category: "MACHINE LEARNING · AUDIO ANALYSIS",
    shortDescription: "Audio feature extraction (MFCCs, Spectral Centroid, Chroma) and ML models for automated audio genre classification.",
    technologies: ["SCIKIT-LEARN", "LIBROSA", "NUMPY", "MATPLOTLIB"],
    githubUrl: "https://github.com/asmaebihkak24"
  },
  {
    id: "polite-scraper",
    number: "07",
    title: "The Polite Scraper",
    category: "BACKEND · DATA SCRAPING",
    shortDescription: "Ethical, rate-limited web scraper with robots.txt parser, exponential retry logic, and structured JSON output.",
    technologies: ["PYTHON", "BEAUTIFULSOUP", "REQUESTS"],
    githubUrl: "https://github.com/asmaebihkak24"
  },
  {
    id: "backend-crud-api",
    number: "08",
    title: "Backend / CRUD API",
    category: "BACKEND ENGINEERING",
    shortDescription: "Modular REST API architecture with request validation, structured error handling, middleware, and database ORM integration.",
    technologies: ["NODE.JS", "EXPRESS.JS", "POSTGRESQL", "REST API"],
    githubUrl: "https://github.com/asmaebihkak24"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "capgemini",
    company: "CAPGEMINI ENGINEERING",
    role: "AI Engineering Intern",
    projectName: "INTELLIGENT EV CHARGING OPTIMIZER",
    pfaSubtitle: "Projet de Fin d'Année (PFA) — « Optimisation intelligente de la recharge des véhicules électriques basée sur l'intelligence artificielle »",
    description: "AI-based web application for intelligent EV battery charging optimization using a multi-input LSTM model (TensorFlow/Keras), battery telemetry, SOC/SOH prediction and charging current optimization.",
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "Keras", "LSTM", "FastAPI", "JavaScript", "Chart.js"],
    highlights: [
      "Multi-input LSTM model with 6 battery variables + candidate charging current",
      "Predicts future SOC, SOH and DeltaT",
      "Automatic charging mode selection: Slow / Normal / Fast / Stop",
      "Cost function to select the optimal charging current I*",
      "FastAPI backend + interactive web dashboard"
    ]
  },
  {
    id: "flyrank",
    company: "FLYRANK",
    role: "Backend & AI Engineering",
    projectName: "AI Image Understanding & Content Matching Engine",
    description: "Built an AI-powered backend system that analyzes image content and performs semantic matching between images and editorial content.",
    technologies: ["Python", "FastAPI", "Groq", "PostgreSQL", "pgvector", "SQLAlchemy", "Embeddings", "Docker"],
    providerNote: "AI Provider: GROQ LMM Vision Engine",
    highlights: [
      "Multimodal image visual analysis using Groq AI LMM models",
      "Structured metadata extraction with strict validation schemas",
      "AI response validation and confidence check pipelines",
      "Text and image vector embeddings generation",
      "Semantic matching with PostgreSQL & pgvector",
      "Relevance score ranking and mismatch guard",
      "Low-confidence query routing and exception handling"
    ]
  },
  {
    id: "chu-hassan-ii",
    company: "CHU HASSAN II",
    role: "AI & Data Science Intern",
    projectName: "Diabetes Prediction",
    description: "Developed a machine learning solution for diabetes prediction from clinical data, covering data preprocessing, class imbalance handling, model comparison, and an interactive Streamlit application.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "SMOTE", "KNN", "Decision Tree", "Random Forest", "Logistic Regression", "Streamlit"],
    highlights: [
      "Cleaned and prepared a clinical diabetes dataset for machine learning",
      "Addressed class imbalance using SMOTE",
      "Trained and compared four classification models: KNN, Decision Tree, Random Forest, and Logistic Regression",
      "Selected Random Forest as the best-performing model based on evaluation results",
      "Developed an interactive Streamlit application for data input and prediction",
      "Generated personalized PDF reports presenting the prediction results"
    ]
  }
];

export const BACKEND_JOURNEY: ProgressionStep[] = [
  {
    step: "01",
    title: "CRUD API",
    subtitle: "Foundations of server-side programming",
    focus: [
      "REST API design conventions",
      "CRUD operations implementation",
      "Request / response cycle handling",
      "Clean modular API directory structure"
    ],
    technologies: ["Node.js", "Express.js", "REST API"]
  },
  {
    step: "02",
    title: "DATABASE",
    subtitle: "Persistence layer & relational schema design",
    focus: [
      "Database connection pooling & drivers",
      "ACID data persistence & schema migrations",
      "Complex SQL joins & indexing strategies",
      "Backend ↔ Database integration via ORMs"
    ],
    technologies: ["PostgreSQL", "SQLAlchemy", "SQL"]
  },
  {
    step: "03",
    title: "DOCKER",
    subtitle: "Reproducible runtime environments",
    focus: [
      "Writing efficient multi-stage Dockerfiles",
      "Docker Compose orchestration (App + DB)",
      "Environment configuration management",
      "Isolated and reproducible build environments"
    ],
    technologies: ["Docker", "Docker Compose", "Linux"]
  },
  {
    step: "04",
    title: "AUTHENTICATION",
    subtitle: "Secure state management & route guards",
    focus: [
      "Authentication flow (JWT tokens / Hashing)",
      "Protected middleware route guards",
      "Password encryption with bcrypt",
      "Authorization concepts & role-based access"
    ],
    technologies: ["JWT", "Security", "Middleware"]
  },
  {
    step: "05",
    title: "POLITE SCRAPER",
    subtitle: "Automated data collection pipelines",
    focus: [
      "Web scraping & HTML DOM parsing",
      "Respectful crawling (Rate limiting & robots.txt)",
      "Robust exception handling & retries",
      "Structured data extraction into clean datasets"
    ],
    technologies: ["Python", "BeautifulSoup", "Requests"]
  },
  {
    step: "06",
    title: "AI IMAGE ENGINE",
    subtitle: "Advanced AI-powered backend system",
    focus: [
      "Multimodal Groq AI vision context analysis",
      "Strict structured metadata validation schemas",
      "High-dimensional vector embedding generation",
      "pgvector vector search & mismatch guard"
    ],
    technologies: ["Groq", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
    isAdvanced: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "DATA SCIENCE",
    skills: [
      { name: "Python", tag: "Python", isPrimary: true },
      { name: "Pandas", tag: "Pandas", isPrimary: true },
      { name: "NumPy", tag: "NumPy", isPrimary: true },
      { name: "Scikit-learn", tag: "Scikit-learn", isPrimary: true },
      { name: "PySpark", tag: "PySpark" },
      { name: "Apache Spark", tag: "Apache Spark" }
    ]
  },
  {
    category: "AI & MACHINE LEARNING",
    skills: [
      { name: "TensorFlow", tag: "TensorFlow", isPrimary: true },
      { name: "Keras", tag: "Keras" },
      { name: "LSTM", tag: "LSTM", isPrimary: true },
      { name: "CNN", tag: "CNN" },
      { name: "Computer Vision", tag: "Computer Vision", isPrimary: true },
      { name: "Embeddings", tag: "Embeddings", isPrimary: true }
    ]
  },
  {
    category: "AI ENGINEERING",
    skills: [
      { name: "Groq", tag: "Groq", isPrimary: true },
      { name: "FastAPI", tag: "FastAPI", isPrimary: true },
      { name: "AI-powered applications", tag: "AI Applications", isPrimary: true }
    ]
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", tag: "Node.js" },
      { name: "Express.js", tag: "Express.js" },
      { name: "REST APIs", tag: "REST APIs", isPrimary: true },
      { name: "Authentication", tag: "Authentication" }
    ]
  },
  {
    category: "DATABASES",
    skills: [
      { name: "PostgreSQL", tag: "PostgreSQL", isPrimary: true },
      { name: "pgvector", tag: "pgvector", isPrimary: true },
      { name: "MySQL", tag: "MySQL" },
      { name: "MongoDB", tag: "MongoDB" }
    ]
  },
  {
    category: "DEVOPS",
    skills: [
      { name: "Docker", tag: "Docker", isPrimary: true },
      { name: "Git", tag: "Git", isPrimary: true },
      { name: "GitHub", tag: "GitHub" }
    ]
  },
  {
    category: "VISUALIZATION",
    skills: [
      { name: "Power BI", tag: "Power BI" },
      { name: "Streamlit", tag: "Streamlit", isPrimary: true },
      { name: "Matplotlib", tag: "Matplotlib" }
    ]
  }
];

export const CV_CARDS: CVCardItem[] = [
  {
    id: "cv-fr",
    title: "CV — FRANÇAIS",
    subtitle: "French Curriculum Vitae",
    description: "Mon parcours académique, mes expériences et mes projets.",
    viewUrl: "/cv/CV-Francais.pdf",
    downloadUrl: "/cv/CV-Francais.pdf",
    downloadFileName: "CV-Francais.pdf",
    lang: "FR"
  },
  {
    id: "cv-en",
    title: "CV — ENGLISH",
    subtitle: "English Curriculum Vitae",
    description: "My academic background, experience and projects.",
    viewUrl: "/cv/CV (4).pdf",
    downloadUrl: "/cv/CV (4).pdf",
    downloadFileName: "CV (4).pdf",
    lang: "EN"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "UML: The Most Complete Guide with Real-Life Examples",
    issuer: "Udemy",
    badgeTag: "UML",
    certificateUrl: "https://www.udemy.com/certificate/UC-dd594f67-c4da-4f54-a734-538ff18d32ab/"
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    badgeTag: "AWS",
    certificateUrl: "https://www.credly.com/badges/eca288f4-af77-4241-ac0c-ebaf24d15de4/linked_in_profile"
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity / AWS",
    badgeTag: "AWS AI",
    certificateUrl: "https://www.udacity.com/certificate/e/e279e3d6-3f03-11f0-bbee-43921fb09aed"
  },
  {
    title: "Introduction to Apache Kafka",
    issuer: "DataCamp",
    badgeTag: "BIG DATA",
    certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a3ae73be590845fb01718bfa0653473ab4163ce9"
  },
  {
    title: "Data Manipulation with pandas",
    issuer: "DataCamp",
    badgeTag: "DATACAMP",
    certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a69e19de31754eb8fbd2fc370ef13152f45a40d9"
  },
  {
    title: "Machine Learning with K-Nearest Neighbors",
    issuer: "365 Data Science",
    badgeTag: "ML",
    certificateUrl: "https://learn.365datascience.com/certificates/CC-A4BF7F6010/"
  },
  {
    title: "Database Fundamentals",
    issuer: "KodeKloud",
    badgeTag: "DATABASE",
    certificateUrl: "https://learn.kodekloud.com/learn/certificate/b626b8d1-cf56-42ac-b54b-acb65880d9d8"
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle",
    badgeTag: "ORACLE"
  },
  {
    title: "Database Design",
    issuer: "Oracle",
    badgeTag: "ORACLE"
  },
  {
    title: "AI Fluency: Framework and Foundations",
    issuer: "AI Fluency",
    badgeTag: "AI FLUENCY",
    certificateUrl: "https://verify.skilljar.com/c/funfrrq7mjys"
  }
];



export const ACTIVITIES: Activity[] = [
  { title: "Data Nexus Club Member", role: "Active Member & Contributor", organization: "ENSA Fès" },
  { title: "Microsoft Tech Day Participant", role: "Technical Attendee", organization: "Microsoft Tech Network" },
  { title: "ICAIM 2025 Organizing Committee", role: "Committee Member", organization: "International Conference on AI & Materials" },
  { title: "The Great Debaters Club Member", role: "Club Member", organization: "ENSA Fès" },
  { title: "All-Star Debate Organizing Committee Member", role: "Organizing Committee Member", organization: "The All-Star Debate" }
];
