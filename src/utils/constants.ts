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
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React frontend and Node.js backend",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "full-stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "frontend",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization",
    technologies: ["React", "Chart.js", "Weather API", "CSS3"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "frontend",
  },
  {
    id: 4,
    title: "RESTful API Service",
    description: "Scalable REST API with authentication and data validation",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "backend",
  },
  {
    id: 5,
    title: "Microservices Architecture",
    description: "Distributed system with Docker containerization",
    technologies: ["Docker", "Kubernetes", "Redis", "RabbitMQ"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "backend",
  },
  {
    id: 6,
    title: "Personal Blog",
    description: "Modern blog website with dark mode and responsive design",
    technologies: ["Next.js", "Markdown", "Vercel", "CSS Modules"],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7a6?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["personal"],
    role: "frontend",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "Interactive portfolio with smooth animations",
    technologies: ["React", "Framer Motion", "Three.js", "GSAP"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["personal"],
    role: "frontend",
  },
  {
    id: 8,
    title: "Social Media Dashboard",
    description: "Full-stack social media analytics platform",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "full-stack",
  },
  {
    id: 9,
    title: "React Component Library",
    description: "Reusable UI components with Storybook documentation",
    technologies: ["React", "TypeScript", "Storybook", "Rollup"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["personal"],
    role: "frontend",
  },
  {
    id: 10,
    title: "Mobile App Backend",
    description: "Scalable backend service for mobile applications",
    technologies: ["Node.js", "GraphQL", "MongoDB", "Redis"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    github: "#",
    live: "#",
    categories: ["team project"],
    role: "backend",
  },
];
