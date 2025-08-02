import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { type Project } from "../..//utils/constants";

// ProjectCard Component (not using Framer Motion here)
export const ProjectCard: React.FC<{
  project: Project;
  cardRef: (el: HTMLDivElement | null) => void;
}> = ({ project, cardRef }) => (
  <div
    key={project.id}
    ref={cardRef}
    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl duration-300 ease-out transform hover:-translate-y-2"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
        <CategoryBadges categories={project.categories} />
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      <TechnologyTags technologies={project.technologies} />
      <ProjectLinks github={project.github} live={project.live} />
    </div>
  </div>
);

// CategoryBadges Component
const CategoryBadges: React.FC<{ categories: string[] }> = ({ categories }) => (
  <div className="flex flex-wrap gap-1">
    {categories.map((category) => (
      <span
        key={category}
        className={`
          px-2 py-1 rounded-full text-xs font-medium text-white
          ${
            category === "fullstack"
              ? "bg-purple-500"
              : category === "backend"
              ? "bg-green-500"
              : category === "frontend"
              ? "bg-blue-500"
              : "bg-pink-500"
          }
        `}
      >
        {category === "personal-web" ? "Personal" : category}
      </span>
    ))}
  </div>
);

// TechnologyTags Component
const TechnologyTags: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {technologies.map((tech, techIndex) => (
      <span
        key={techIndex}
        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300 cursor-default"
      >
        {tech}
      </span>
    ))}
  </div>
);

// ProjectLinks Component
const ProjectLinks: React.FC<{ github: string; live: string }> = ({
  github,
  live,
}) => (
  <div className="flex space-x-4">
    <a
      href={github}
      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group/link"
    >
      <Github
        size={16}
        className="mr-2 transition-transform duration-300 group-hover/link:scale-110"
      />
      <span className="font-medium">Code</span>
    </a>
    <a
      href={live}
      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group/link"
    >
      <ExternalLink
        size={16}
        className="mr-2 transition-transform duration-300 group-hover/link:scale-110"
      />
      <span className="font-medium">Live Demo</span>
    </a>
  </div>
);
