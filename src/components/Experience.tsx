import React, { useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { SectionHeader } from "./general/headers";
import { Section } from "./general/section";
import { cn } from "../utils/utils";

// Mock component so you can see the structure

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center", // Modern tech company logo
      description:
        "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%. Architected microservices infrastructure and implemented CI/CD pipelines that reduced deployment time by 60%.",
      techStack: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "PostgreSQL",
        "Redis",
        "GraphQL",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center", // Creative agency logo
      description:
        "Built responsive websites and web applications for clients across various industries. Specialized in React, TypeScript, and modern CSS frameworks. Delivered 25+ client projects on time and under budget, maintaining a 98% client satisfaction rate.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Figma",
        "SCSS",
        "JavaScript",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop&crop=center", // Startup logo
      description:
        "Contributed to product development using JavaScript, HTML, and CSS. Collaborated with designers to implement pixel-perfect user interfaces. Participated in agile development processes and code reviews, gaining foundational experience in software development best practices.",
      techStack: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "jQuery",
        "Bootstrap",
        "Git",
        "PHP",
        "MySQL",
      ],
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
        <SectionHeader title="Professional Experience" number={2} className=" text-4xl" />
        <motion.div className="space-y-6" variants={containerVariants}>
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
                    className="w-full text-left p-8 rounded"
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.998 }}
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-300 font-semibold text-lg">
                              {exp.company}
                            </p>
                          </div>
                          <div className="lg:text-right">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-slate-200 border border-slate-600/40 backdrop-blur-sm">
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
                <div className="relative bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-100 rounded overflow-hidden">
                  <div className="p-6 space-y-6">
                    {/* Logo beside Description and Tech Stack */}
                    <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                      {/* <div className=" flex items-center justify-center ">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border ">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </div> */}

                      {/* Content (Description + Tech Stack) */}
                      <div className="flex-1 space-y-6">
                        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                          {exp.description}
                        </p>

                        {/* Tech Stack Section */}
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
