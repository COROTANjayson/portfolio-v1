import {
  ExternalLink,
  Github,
  User,
  Code,
  Database,
  Globe,
} from "lucide-react";
import React from "react";
import { type Project } from "../../utils/constants";

// ProjectCard Component
export const ProjectCard: React.FC<{
  project: Project;
  cardRef: (el: HTMLDivElement | null) => void;
}> = ({ project, cardRef }) => (
  <div
    key={project.id}
    ref={cardRef}
    className="group bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded shadow-xl overflow-hidden  hover:border-slate-600/80 transition-all"
  >
    <div className="relative overflow-hidden rounded-t">
      <div className="w-full h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-top object-cover transition-transform duration-300 ease-out group-hover:scale-103"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
        <CategoryBadges categories={project.categories} />
      </div>
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="flex justify-between items-end">
          <div>
            <ProjectLinks github={project.github} live={project.live} />
          </div>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-2">
      <h3 className="text-xl font-bold text-slate-100  transition-colors duration-300 leading-tight ">
        {project.title}
      </h3>
      <div>
        <RoleDisplay role={project.role} />
      </div>
      <p className="text-slate-300 mb- leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
        {project.description}
      </p>
      <TechnologyTags technologies={project.technologies} />
    </div>
  </div>
);

// RoleDisplay Component (for card body)
const RoleDisplay: React.FC<{ role: Project["role"] }> = ({ role }) => {
  const getRoleConfig = (role: string) => {
    switch (role) {
      case "frontend":
        return {
          icon: Globe,
          label: "Frontend Developer",
          className: "text-green-400 ",
          iconClass: "text-green-400",
        };
      case "backend":
        return {
          icon: Database,
          label: "Backend Developer",
          className: "text-purple-400 ",
          iconClass: "text-purple-400",
        };
      case "full-stack":
        return {
          icon: Code,
          label: "Full Stack Developer",
          className: "text-blue-400 ",
          iconClass: "text-blue-400",
        };
      default:
        return {
          icon: User,
          label: role,
          className: "text-slate-400 ",
          iconClass: "text-slate-400",
        };
    }
  };

  const config = getRoleConfig(role);
  const IconComponent = config.icon;

  return (
    <div
      className={`
      inline-flex items-center gap-2 rounded 
      ${config.className}
      transition-all duration-300 
    `}
    >
      <IconComponent size={14} className={config.iconClass} />
      <span className="font-medium text-sm">{config.label}</span>
    </div>
  );
};

const CategoryBadges: React.FC<{ categories: string[] }> = ({ categories }) => (
  <div className="flex flex-wrap gap-1.5">
    {categories.map((category) => (
      <span
        key={category}
        className="px-2.5 py-1 rounded-full text-xs font-medium capitalize bg-slate-700/80 text-slate-200 border border-slate-600/50 backdrop-blur-sm shadow-md"
      >
        {category === "personal-web" ? "Personal" : category.replace("-", " ")}
      </span>
    ))}
  </div>
);

// TechnologyTags Component
const TechnologyTags: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {technologies.slice(0, 6).map((tech, techIndex) => (
      <span
        key={techIndex}
        className="px-3 py-1.5 bg-gradient-to-r from-slate-700/60 to-slate-600/60 text-slate-200 rounded text-xs font-medium 
                   transition-all duration-300 cursor-default border border-slate-600/40 backdrop-blur-sm "
      >
        {tech}
      </span>
    ))}
    {technologies.length > 6 && (
      <span className="px-3 py-1.5 bg-slate-700/40 text-slate-400 rounded text-xs font-medium border border-slate-600/30 backdrop-blur-sm">
        +{technologies.length - 6} more
      </span>
    )}
  </div>
);

// ProjectLinks Component
const ProjectLinks: React.FC<{ github?: string; live?: string }> = ({
  github,
  live,
}) => (
  <div className="flex space-x-3">
    {github && (
      <a
        href={github}
        className="flex items-center text-slate-300 hover:text-white transition-all group/link
                 bg-slate-800/80 hover:bg-slate-700/80 px-3 py-2 rounded backdrop-blur-sm border border-slate-600/50
                 hover:border-slate-500 shadow-lg hover:shadow-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github
          size={14}
          className="mr-1.5 transition-transform duration-300 group-hover/link:scale-110"
        />
        <span className="font-medium text-sm">Code</span>
      </a>
    )}
    {live && (
      <a
        href={live}
        className="flex items-center text-blue-300 hover:text-blue-200 group/link
                 bg-blue-600/20 hover:bg-blue-600/30 px-3 py-2 rounded backdrop-blur-sm border border-blue-500/30
                 hover:border-blue-400/50 shadow-lg hover:shadow-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink
          size={14}
          className="mr-1.5 transition-transform duration-300 "
        />
        <span className="font-medium text-sm">Live</span>
      </a>
    )}
  </div>
);

export default ProjectCard;
