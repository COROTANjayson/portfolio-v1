import React, { useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { SectionHeader } from "./general/headers";
import { Section } from "./general/section";
import { cn } from "../utils/utils";
const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Backend Developer",
      company: "Seven 365 Pte Ltd.",
      period: "July 2024 - Present",
      description:
        "Refactored and optimized the backend using Express.js, TypeScript, and MongoDB with Redis caching to enhance performance and maintainability. Developed new APIs and modules for a Restaurant POS Mobile App, collaborating with the frontend team and leading key backend improvements..",
      techStack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "Express",
        "Typescipt",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "Full stack Developer (Part-time)",
      company: "Image Edits",
      period: "July 2024 - May 2025",
      description:
        "Designed and implemented scalable Node.js microservices using tRPC and PostgreSQL (Prisma) in a Monorepo setup, reducing API latency. Enhanced dashboard UX with Next.js, Tailwind, and Shadcn, improving user engagement, and boosted SEO for Image Edit and VirtualLens through optimized rendering and metadata.",
      techStack: [
        "React",
        "Next.js",
        "Shadcn, Tailwind CSS",
        "tRPC",
        "PostgreSQL(Prisma)",
        "Express.js",
        "Node.js",
        "Monorepo",
      ],
    },
    {
      title: "Web Developer",
      company: "Wela School Systems, Cagayan de Oro City",
      period: "December 2022- July 2024",
      description:
        "Built and maintained full-stack systems to meet client and management requirements. Integrated APIs like Google Classroom, Asana, and NeoLMS to extend functionality and automate workflows. Developed the Pulong task tracking system and a custom Asana reporting tool, enhancing project visibility and team productivity.",
      techStack: [
        "Sveltekit",
        "React.js",
        "Express",
        "GraphQL",
        "MySQL",
        "Python",
        "Typescript",
        "MySQL",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company: "Lemondrop Technologies",
      period: "September 2022- November 2022",
      description:
        "Trained in JavaScript, TypeScript, and React (Next.js) to build interactive web apps with Material UI. Learned Node.js and AWS DynamoDB integration for dynamic RESTful APIs, and delivered functional prototypes showcasing full-stack development proficiency.",
      techStack: [
        "React (Next.js)",
        "Material UI",
        "AWS DynamoDB",
        "Typescript",
      ],
    },
    {
      title: "Backend Developer Intern & Part-time",
      company: "Hozzby Digital Solutions, Cagayan de Oro city",
      period: "March 2022 - September 2022",
      description:
        "Supported backend development with Go, GraphQL, and MongoDB by fixing API issues and optimizing server performance. Collaborated with frontend developers to enhance API functionality and gained hands-on experience in scalable backend design within an agile environment.",
      techStack: ["Go", "MongoDB", "GraphQL", "Node.js"],
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      id="experience"
      className="py-36  bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SectionHeader
          title="Professional Experience"
          number={2}
          className=" text-4xl"
        />
        <motion.div className="px-14 "  variants={containerVariants}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              {/* Button Card */}
              <div className="group relative">
                {/* Glow effect */}

                <div
                  className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded   opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    index === openIndex && "opacity-100 "
                  )}
                ></div>

                <div className="relative bg-slate-800/60 backdrop-blur-xl rounded border border-slate-700/30 overflow-hidden shadow-2xl  transition-all duration-300">
                  <motion.button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 rounded"
                  
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-300 font-semibold text-sm lg:text-base">
                              {exp.company}
                            </p>
                          </div>
                          <div className="lg:text-right">
                            <span className="inline-flex items-center px-4 py-2  text-sm font-medium  text-slate-200  ">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0 mt-2"
                      >
                        <div className="p-2 rounded-full bg-slate-700/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: {
                    duration: 0.2,
                    delay: openIndex === index ? 0.1 : 0,
                  },
                }}
                className="overflow-hidden"
              >
                <div className="mb-3 relative bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-100 rounded overflow-hidden">
                  <div className="p-6 space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                      <div className="flex-1 space-y-6">
                        <p className="text-slate-300 leading-relaxed text-sm lg:text-base ">
                          {exp.description}
                        </p>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="inline-flex items-center bg-slate-300/10 px-3 py-1.5 rounded-xl text-xs font-medium text-blue-300 border border-blue-500/30 backdrop-blur-sm     transition-all duration-300 "
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Experience;
