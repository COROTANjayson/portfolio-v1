import React from "react";
import ResumeButton from "./ResumeButton";
import type { NavigationProps, NavItem } from "./interfaces";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ViewResumePDF from "../ViewPDF";

const DesktopNavigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
}) => {
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

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

  const underlineVariants: Variants = {
    inactive: {
      opacity: 0,
      x: -4,
      y: 4,
      scale: 0.9,
    },
    active: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  const handleNavigate = (sectionId: string) => {
    navigate("/", { replace: false });
    setTimeout(() => {
      scrollToSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }, 50);
  };

  return (
    <motion.div
      className="hidden md:flex space-x-2 relative gap-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          variants={itemVariants}
          onClick={() => handleNavigate(item.id)}
          className={` relative flex items-center py-2 transition-colors duration-300 ease-out group overflow-hidden cursor-pointer ${
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
          <motion.div
            className="w-[2px] h-5 bg-cyan-400 rotate-[35deg] rounded mr-1"
            variants={underlineVariants}
            initial="inactive"
            animate={activeSection === item.id ? "active" : "inactive"}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier (ease)
            }}
          />
          <motion.div
            className="w-[2px] h-5 bg-cyan-400 rotate-[35deg] rounded mr-3"
            variants={underlineVariants}
            initial="inactive"
            animate={activeSection === item.id ? "active" : "inactive"}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier (ease)
            }}
          />
          <motion.span
            className="relative z-10 tracking-wide text-base font"
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

          {/* <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1.5px] bg-cyan-300 rounded-full"
            variants={underlineVariants}
            initial="inactive"
            animate={activeSection === item.id ? "active" : "inactive"}
          /> */}
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
        <ViewResumePDF />
      </motion.div>
    </motion.div>
  );
};

export default DesktopNavigation;
