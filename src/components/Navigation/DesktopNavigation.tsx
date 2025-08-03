import React from "react";
import ResumeButton from "./ResumeButton";
import type { NavigationProps, NavItem } from "./interfaces";
import { motion, type Variants } from "framer-motion";
// Desktop Navigation Component
const DesktopNavigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
}) => {
  const navItems: NavItem[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  // Container animation for the navigation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Individual nav item animation
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 1,
      },
    },
  };

  // Active state animation for the underline
  const underlineVariants: Variants = {
    inactive: {
      width: 0,
      opacity: 0,
      scale: 0.8,
    },
    active: {
      width: "100%",
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="hidden md:flex space-x-1 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          variants={itemVariants}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-4 py-2 transition-colors duration-300 ease-out group overflow-hidden ${
            activeSection === item.id
              ? "text-white font-medium"
              : "text-slate-300 hover:text-white"
          }`}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 600, damping: 15 },
          }}
        >
          <motion.span
            className="relative z-10 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1 + 0.4,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {item.label}
          </motion.span>

          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2.5px] bg-cyan-300 rounded-full"
            variants={underlineVariants}
            initial="inactive"
            animate={activeSection === item.id ? "active" : "inactive"}
          />
        </motion.button>
      ))}

      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: navItems.length * 0.1 + 0.3,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <ResumeButton />
      </motion.div>
    </motion.div>
  );
};

export default DesktopNavigation;
