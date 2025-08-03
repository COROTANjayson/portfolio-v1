import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// Types
interface MenuItem {
  key: string;
  label: string;
  count: number;
}

// FilterMenu Component

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07, // Controls the pop-up sequence timing
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  // hover: {
  //   scale: 1.05,
  //   transition: { duration: 0.2, ease: "easeInOut" },
  // },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

// const decorativeLineVariants: Variants = {
//   rest: {
//     scaleY: 1,
//     opacity: 0.7,
//     transition: { duration: 0.3, ease: "easeInOut" }
//   },
//   hover: {
//     scaleY: 1.3,
//     opacity: 1,
//     transition: { duration: 0.3, ease: "easeInOut" }
//   }
// };

const countVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const FilterMenu: React.FC<{
  menuItems: MenuItem[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  isTransitioning: boolean;
}> = ({ menuItems, activeFilter, onFilterChange, isTransitioning }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap justify-end  gap-7 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {menuItems.map((item) => (
        <motion.button
          key={item.key}
          onClick={() => onFilterChange(item.key)}
          disabled={isTransitioning}
          variants={itemVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className={`
           cursor-pointer flex gap-3 font-medium text-lg transition-all duration-300 ease-in-out group
           relative group
            ${
              activeFilter === item.key
                ? "text-slate-100 shadow-lg"
                : "text-slate-300/70 hover:text-cyan-200"
            }
            ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {/* Enhanced decorative lines with hover animation */}
          <div className="flex gap-1">
            <motion.div
              // variants={decorativeLineVariants}
              className={`w-[2px] h-full rotate-40 transition-all duration-300 group-hover:scale-[1.3]  ${
                activeFilter === item.key
                  ? "bg-cyan-300/80 scale-[1.3]"
                  : "bg-slate-300/70 group-hover:bg-cyan-200/80"
              }`}
            />
            <motion.div
              // variants={decorativeLineVariants}
              className={`w-[2px] h-full rotate-40 transition-all duration-300  group-hover:scale-[1.3] ${
                activeFilter === item.key
                  ? "bg-cyan-300/80 scale-[1.3]"
                  : "bg-slate-300/70 group-hover:bg-cyan-200/80"
              }`}
            />
          </div>

          <div className="flex items-start relative">
            {/* Label with subtle glow effect on hover */}
            <span className="relative">
              {item.label}
              {/* Subtle glow effect */}
              <span
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeFilter === item.key
                    ? "opacity-20"
                    : "opacity-0 group-hover:opacity-10"
                } text-cyan-300 blur-sm pointer-events-none`}
              >
                {item.label}
              </span>
            </span>

            {/* Enhanced count badge with hover animation */}
            <motion.span
              variants={countVariants}
              className={`
               px-2 py-0.5 rounded-full text-sm font-bold ml-1 
               transition-all duration-300 ease-in-out
              ${
                activeFilter === item.key
                  ? "text-purple-300 bg-purple-300/10 shadow-sm shadow-purple-300/20"
                  : "text-slate-300/70 group-hover:text-purple-200 group-hover:bg-purple-200/5"
              }
            `}
            >
              {item.count}
            </motion.span>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};
