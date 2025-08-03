import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

import { motion, AnimatePresence } from "framer-motion";
// Main Navigation Component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "work", "contact"];
      const scrollPosition = window.scrollY + 100;
      const currentScrollY = window.scrollY;

      // Check if page is scrolled for background effect
      setScrolled(currentScrollY > 50);

      // Hide/show navigation based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-20 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm shadow-xl bg-slate-900/80" : "py-3"
      } ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className=" mx-auto ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-white cursor-pointer hover:text-cyan-400 transition-colors duration-200"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.6,
              delay: 0.1,
            }}
          >
            Portfolio
          </motion.div>
          {/* Desktop Navigation */}
          <DesktopNavigation
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors duration-200"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-6">
              <AnimatePresence mode="wait">
                {!isMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ x: -10, opacity: 0, rotate: -90 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    exit={{ x: 10, opacity: 0, rotate: 90 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      duration: 0.3,
                    }}
                    className="absolute"
                  >
                    <Menu size={24} className="text-slate-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ x: 10, opacity: 0, rotate: 90 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    exit={{ x: -10, opacity: 0, rotate: -90 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      duration: 0.3,
                    }}
                    className="absolute"
                  >
                    <X size={24} className="text-slate-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <MobileNavigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </nav>
  );
};

export default Navigation;
