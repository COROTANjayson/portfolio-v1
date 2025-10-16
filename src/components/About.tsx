import React from "react";
import { motion, type Variants } from "framer-motion";
import { SectionHeader } from "./general/headers";
import { Section } from "./general/section";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiMysql,
  SiFirebase,
  SiMaterialdesignicons,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiRedis,
  SiGo,
} from "react-icons/si";
import TypingCodeSnippet from "./TypeCodeSnippet";
const About: React.FC = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "SvelteKit", icon: SiSvelte },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Python", icon: SiPython },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "Material UI", icon: SiMaterialdesignicons },
    { name: "Shadcn", icon: SiShadcnui },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS (Tailwind)", icon: SiCss3 },
    { name: "PostgreSQL (Prisma)", icon: SiPrisma },
    { name: "Redis", icon: SiRedis },
    { name: "Go", icon: SiGo },
  ];
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section
      id="about"
      className="py-36 bg-gradient-to-tr from-slate-900 to-slate-800"
    >
      <SectionHeader title="About Me" number={1} />
      <div className="flex flex-col lg:flex-row gap-20 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
         className="flex-1 w-full lg:w-1/2 mx-auto "
        >
          <p className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-slate-100 bg-clip-text text-transparent mb-4">
            Turning curiosity into creation.
          </p>

          <div className="space-y-5 text-slate-300 leading-relaxed text-[15px]">
            <p className="hover:text-slate-100 transition-colors duration-300">
              I’ve always seen myself drawn to{" "}
              <span className="text-cyan-400 font-medium">
                backend development
              </span>
              , learning fundamentals, exploring data structures, and
              understanding how systems work under the hood. But my real journey
              started in <span className="text-sky-400 font-medium">2022</span>{" "}
              when I joined a software engineering bootcamp and discovered web
              development.
            </p>

            <p className="hover:text-slate-100 transition-colors duration-300">
              Connecting the backend with the frontend fascinated me, seeing
              data flow, interactions come alive, and everything just click
              together. That experience pushed me to explore{" "}
              <span className="text-cyan-400 font-medium">
                full-stack development
              </span>{" "}
              with tools like{" "}
              <span className="text-sky-400 font-medium">Node.js</span>,{" "}
              <span className="text-sky-400 font-medium">Next.js</span>, and{" "}
              <span className="text-sky-400 font-medium">SvelteKit</span>.
            </p>

            <p className="hover:text-slate-100 transition-colors duration-300">
              Now, I focus on building things that feel simple, work fast, and
              make sense, systems that not only perform well but also help
              people do more with less effort.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <TypingCodeSnippet />
      </div>
      {/* Skills */}
      <div className="mt-10">
        <motion.h3
          className="text-xl font-semibold text-cyan-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies & Skills
        </motion.h3>
        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map(({ name, icon: Icon }) => (
            <motion.span
              key={name}
              variants={skillVariants}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/30 text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-600/50 hover:border-slate-500/50 transition-colors duration-200 cursor-default"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Icon className="text-lg" />
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
