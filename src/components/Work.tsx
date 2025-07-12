import { ExternalLink, Github } from "lucide-react";
import React from "react";
const Work: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
