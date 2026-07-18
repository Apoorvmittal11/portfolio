// Single source of truth for all resume-derived content.
// IMPORTANT: Every field here is grounded in Apoorv_Resume.pdf (or explicitly
// provided by Apoorv). Do not add unverified claims — only edit this file to
// update copy, never invent data elsewhere in the app.

export const personal = {
  name: 'Apoorv Mittal',
  initials: 'AM',
  tagline: 'Computer Science Undergraduate @ DTU',
  headline: 'Building full-stack, AI-powered applications.',
  summary:
    "I'm a Computer Science undergraduate at Delhi Technological University, building full-stack applications with React and Spring Boot, and integrating AI capabilities like Retrieval-Augmented Generation and LLMs into real products.",
  location: 'New Delhi, India',
  email: 'apoorvmittal1110@gmail.com',
  links: {
    github: 'https://github.com/Apoorvmittal11',
    linkedin: 'https://linkedin.com/in/apoorvmittall',
    leetcode: 'https://leetcode.com/u/Apoorvmittal',
  },
  resumeFile: '/Apoorv_Resume.pdf',
  interests: ['Travelling', 'Listening to Music', 'Playing Indoor/Outdoor Games'],
} as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Live demo / GitHub repo links intentionally omitted — not yet provided.
// Add `demoUrl` / `githubUrl` to any project below once links are available.
// Images are stock photos (Unsplash) chosen to represent each project's theme —
// swap `image` for an actual product screenshot whenever one is available.
export const projects: Project[] = [
  {
    id: 'enterprise-rag-system',
    title: 'Enterprise RAG System',
    description:
      'A full-stack application that allows users to securely upload massive PDF documents and query them in natural language. The system uses vector search to retrieve only the relevant paragraphs and feeds them to an LLM to formulate an answer.',
    features: [
      'Asynchronous data ingestion pipeline with an overlapping chunking strategy',
      'PostgreSQL with pgvector for efficient mathematical similarity searches',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Java Spring Boot 3.x', 'LangChain4j', 'PostgreSQL', 'pgvector'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Macro shot of an illuminated circuit board representing data infrastructure',
  },
  {
    id: 'ai-powered-mock-interview',
    title: 'AI Powered Mock Interview',
    description:
      'A highly interactive platform where users can upload their resume, provide a target job description, and undergo a dynamic, AI-driven mock interview.',
    features: [
      "Integrated the browser's native Web Speech API for a microphone feature — speak answers instead of typing",
      'AI instantly grades responses and provides a scorecard',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Java Spring Boot 3.x', 'LangChain4j', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Laptop screen showing a video call grid, representing a mock interview session',
  },
  {
    id: 'nutridel',
    title: 'Nutridel',
    description:
      "A food delivery platform that acts as a personal nutritionist. It doesn't just list food — it understands the nutritional content of every menu item and recommends meals based on a user's specific biological data and goals using an LLM.",
    features: [
      "Context-aware AI chatbot using Retrieval-Augmented Generation (RAG) and vector embeddings to recommend optimal menu items based on a user's remaining daily calorie budget",
    ],
    tech: ['React.js', 'Tailwind CSS', 'Java Spring Boot 3.x', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Colorful bowl of healthy salad, representing a nutrition-focused food platform',
  },
];

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  duration: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Teaching Assistant',
    organization: 'Coding Ninjas',
    location: 'New Delhi, IN',
    duration: 'October 2023 – December 2023',
    points: [
      'Mentored and guided over 50 students in mastering Java programming and Data Structures & Algorithms, designing and assigning complex problems for monthly assessments to strengthen their coding skills.',
      "Provided guidance and constructive feedback that led to improvement in students' assessment performance and overall skill development.",
    ],
  },
];

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  score: string;
  duration: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Delhi Technological University',
    location: 'New Delhi, IN',
    degree: 'B.Tech, Computer Science',
    score: '9.18 CGPA',
    duration: '2023 – 2027',
  },
  {
    institution: 'Lawrence Public School',
    location: 'New Delhi, IN',
    degree: 'Senior Secondary Education, Science Major',
    score: '94.4%',
    duration: 'March 2022',
  },
  {
    institution: 'Lawrence Public School',
    location: 'New Delhi, IN',
    degree: 'Class 10th',
    score: '95.2%',
    duration: 'March 2020',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  duration: string;
}

export const certifications: Certification[] = [
  {
    title: 'Data Structures in Java',
    issuer: 'Coding Ninjas',
    duration: 'July 2023 – Nov 2023',
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Java', 'C++', 'Python', 'JavaScript'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React.js', 'Spring Boot', 'LangChain4j', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'pgvector'],
  },
  {
    name: 'Concepts',
    skills: ['Data Structures & Algorithms', 'Retrieval-Augmented Generation (RAG)', 'LLM Integration', 'Problem Solving'],
  },
  {
    name: 'Development Tools',
    skills: ['Visual Studio Code', 'IntelliJ IDEA'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;
