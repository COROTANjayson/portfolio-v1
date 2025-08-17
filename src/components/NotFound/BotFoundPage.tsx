import { Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center w-full overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-200/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          staggerChildren: 0.2,
        }}
      >
        {/* Glowing 404 Number */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300 mb-4"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          <motion.div
            className="absolute inset-0 text-8xl md:text-9xl font-black text-cyan-300/20 blur-sm"
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Enhanced Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        >
          <motion.button
            onClick={handleGoHome}
            className="cursor-pointer relative inline-flex items-center  px-6 py-4 rounded text-sm font-medium text-slate-900 border-2 border-cyan-300 transition-all duration-300 ease-in-out group"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute top-0 left-0 group-hover:h-0 h-full w-full bg-cyan-300/80 transition-all duration-500"></div>

            <span className="flex gap-2 relative z-10  group-hover:text-cyan-300 duration-400">
              <Home className="w-5 h-5  text-xl group-hover:text-cyan-300 transition-colors duration-300" />
              Go Home
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFound;
