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
      className="flex flex-wrap justify-center gap-2 mb-12"
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
          className={`
            px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-in-out
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            disabled:cursor-not-allowed disabled:opacity-70
            ${
              activeFilter === item.key
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
            }
          `}
        >
          {item.label}
          <span
            className={`
              ml-2 px-2 py-0.5 rounded-full text-xs font-bold
              ${
                activeFilter === item.key
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }
            `}
          >
            {item.count}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};
