import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type Project } from "../..//utils/constants";
import { FilterMenu } from "./FilterMenu";
import { ProjectCard } from "./ProjectCard";
import { Section } from "../general/section";
import { SectionHeader } from "../general/headers";

// Types
interface MenuItem {
  key: string;
  label: string;
  count: number;
}

// Main Work Component
const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const isInView = useInView(gridRef, { once: true });
  const getProjectsByCategory = (category: string): Project[] =>
    category === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(category));

  const menuItems: MenuItem[] = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "team project",
      label: "Team Project",
      count: getProjectsByCategory("team project").length,
    },
    {
      key: "personal",
      label: "Personal Project",
      count: getProjectsByCategory("personal").length,
    },
  ];

  const currentProjects = getProjectsByCategory(activeFilter);

  const getCardPosition = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const gridRect = gridRef.current?.getBoundingClientRect();
    return gridRect
      ? { x: rect.left - gridRect.left, y: rect.top - gridRect.top }
      : { x: 0, y: 0 };
  };

  const animateCards = (newFilter: string) => {
    if (!gridRef.current) return;

    const currentPositions: { [key: number]: { x: number; y: number } } = {};
    currentProjects.forEach((project) => {
      const element = cardRefs.current[project.id];
      if (element) currentPositions[project.id] = getCardPosition(element);
    });

    const newProjects = getProjectsByCategory(newFilter);
    const currentIds = currentProjects.map((p) => p.id);
    const newIds = newProjects.map((p) => p.id);
    const toRemove = currentIds.filter((id) => !newIds.includes(id));
    const toKeep = currentIds.filter((id) => newIds.includes(id));
    const toAdd = newIds.filter((id) => !currentIds.includes(id));

    toRemove.forEach((id) => {
      const element = cardRefs.current[id];
      if (element) {
        element.style.transition = "opacity 0.25s ease-out";
        element.style.opacity = "0";
      }
    });

    setTimeout(() => {
      setActiveFilter(newFilter);
      gridRef.current?.offsetHeight;

      requestAnimationFrame(() => {
        toKeep.forEach((id) => {
          const element = cardRefs.current[id];
          const oldPos = currentPositions[id];
          if (element && oldPos) {
            const newPos = getCardPosition(element);
            const deltaX = oldPos.x - newPos.x;
            const deltaY = oldPos.y - newPos.y;
            if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
              element.style.transition = "none";
              element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
              element.offsetHeight;
              element.style.transition =
                "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
              element.style.transform = "translate(0, 0)";
            } else {
              element.style.opacity = "1";
            }
          }
        });

        toAdd.forEach((id) => {
          const element = cardRefs.current[id];
          if (element) {
            element.style.opacity = "0";
            element.style.transition = "none";
            setTimeout(() => {
              element.style.transition = "opacity 0.3s ease-out";
              element.style.opacity = "1";
            }, 150);
          }
        });

        setTimeout(() => {
          setIsTransitioning(false);
          Object.values(cardRefs.current).forEach((el) => {
            if (el) {
              el.style.transition = "";
              el.style.transform = "";
            }
          });
        }, 450);
      });
    }, 250);
  };

  const handleFilterChange = (newFilter: string) => {
    if (newFilter === activeFilter || isTransitioning) return;
    setIsTransitioning(true);
    animateCards(newFilter);
  };

  return (
    <Section
      id="work"
      className="py-36  bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <SectionHeader title="Professional Experience" className=" " />

        {/* FILTER MENU */}

        <FilterMenu
          menuItems={menuItems}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          isTransitioning={isTransitioning}
        />

        {/* PROJECTS GRID */}
        <motion.div
          ref={gridRef}
          className="grid md:grid-cols-2  gap-8 min-h-[400px] relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              cardRef={(el) => (cardRefs.current[project.id] = el)}
            />
          ))}
        </motion.div>

        {/* NO PROJECTS FOUND */}
        {currentProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Work;
