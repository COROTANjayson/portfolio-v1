export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  categories: string[]; // e.g., ["team project"] or ["personal"]
  role: "frontend" | "backend" | "full-stack";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pulong",
    description:
      "An internal management application for Wela School Systems (LVRO), designed to streamline organizational processes, enhance team alignment, and optimize decision-making workflows.",
    technologies: ["Sveltekit", "PostgreSQL(Prisma)", "Typescript"],
    image: "./pulong.png",
    categories: ["work project", "personal project"],
    role: "full-stack",
  },

  {
    id: 2,
    title: "Image Edits",
    description:
      "A real estate photo editing website developed with SEO-driven structure, fast rendering, and optimized metadata for higher discoverability.",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Shadcn"],
    image: "./imageedits.png",
    live: "https://www.imageedits.com/en-US",
    categories: ["work project", "personal project"],
    role: "frontend",
  },
  {
    id: 3,
    title: "Virtual Lens",
    description:
      "A real estate image editing website featuring SEO-focused design, optimized performance, and structured data for better search ranking.",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Shadcn"],
    image: "./virtuallens.png",
    live: "https://virtuallens.com.au/",
    categories: ["work project", "personal project"],
    role: "frontend",
  },
  {
    id: 4,
    title: "Plateful",
    description:
      "A POS system developed for restaurant operations featuring dynamic table management, order synchronization, and modular architecture.",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "./plateful.png",
    // github: "#",
    // live: "#",
    categories: ["work project", "team project"],
    role: "backend",
  },
  {
    id: 5,
    title: "Homure",
    description:
      "A property listing website designed to simplify the buying process through accurate listings and seamless transactions.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "./homure.png",
    github: "#",
    live: "#",
    categories: ["team project", "in-progress"],
    role: "frontend",
  },
  {
    id: 6,
    title: "SummarAIze",
    description:
      "AI-powered application that allows users to upload PDF documents and generate concise summaries through an interactive chat interface.",
    technologies: ["Next.js", "OpenAi", "PostgreSQL(Prisma)", "tRPC"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["personal project"],
    role: "full-stack",
  },
];
