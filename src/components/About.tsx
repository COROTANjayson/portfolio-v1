import React from "react";
import { motion, type Variants } from "framer-motion";
import { SectionHeader } from "./general/headers";
import { Section } from "./general/section";

const About: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
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
      {/* Header */}
      <SectionHeader title="About Me" number={1} />

      <div className="flex flex-col-reverse lg:flex-row gap-20 ">
        {/* Content Section */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 "
        >
          <p className="text-lg text-slate-400 mb-6 leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of
            experience building web applications that combine beautiful design
            with robust functionality. I love turning complex problems into
            simple, elegant solutions.
          </p>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or enjoying a good cup of
            coffee while reading about the latest industry trends.
          </p>

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
              {skills.map((skill, _) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  className="px-4 py-2 bg-slate-700/50 border border-slate-600/30 text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-600/50 hover:border-slate-500/50 transition-colors duration-200 cursor-default"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded shadow-xl object-cover h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
