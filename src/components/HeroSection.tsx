import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-900  to-slate-800 flex justify-center w-full overflow-hidden"
    >
      <motion.div
        className="max-w-4xl w-full mt-32 md:mt-48 px-6 lg:px-12 2xl:px-0 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
      >
        <div className="mb-12">
          <motion.p
            className="text-lg text-cyan-300  md:text-2xl lg:text-3xl font-medium tracking-wider"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 mb-6 leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            Jayson Corotan
            <motion.span
              className="text-cyan-300"
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold  tracking-wide bg-gradient-to-r from-slate-300 to-cyan-300 bg-clip-text text-transparent">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.9,
            }}
          >
            Passionate about creating beautiful, functional web applications
            that solve real-world problems and deliver exceptional user
            experiences.
          </motion.p>
        </div>

        <motion.button
          className="group relative overflow-hidden text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-cyan-300 transition-all duration-300 backdrop-blur-sm"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 1.2,
          }}
        >
          <div className="absolute top-0 left-0 h-0 group-hover:h-full w-full group-hover:bg-cyan-300/70 transition-all duration-500"></div>

          <span className="relative z-10 text-cyan-300 group-hover:text-slate-900 transition-colors duration-300 flex items-center gap-2">
            Get in Touch
            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MoveRight />
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan-300/50 rounded-full flex justify-center"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-300 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
