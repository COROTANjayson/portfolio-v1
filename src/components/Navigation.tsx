import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Types
interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

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

  return (
    <div className="hidden md:flex space-x-1 relative">
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-4 py-2 transition-all duration-500 ease-out group overflow-hidden ${
            activeSection === item.id
              ? "text-white font-medium transform "
              : "text-slate-300 hover:text-white hover:scale-105"
          }`}
          style={{
            transitionDelay:
              activeSection === item.id ? "0ms" : `${index * 50}ms`,
          }}
        >
          <span className="relative z-10  tracking-wide">{item.label}</span>

          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2.5px]  bg-cyan-300 rounded-full transition-all duration-500 ${
              activeSection === item.id ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </button>
      ))}
      <ResumeButton />
    </div>
  );
};

// Mobile Navigation Component
const MobileNavigation: React.FC<
  NavigationProps & {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
  }
> = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems: NavItem[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full transition-all    duration-500 ease-out overflow-hidden ${
        isMenuOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-slate-900/90 border-t border-slate-700/50 shadow-2xl  bg-opacity-90">
        <div className=" px-6 py-6 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className={`relative block w-full text-left py-2.5  transition-all duration-200 overflow-hidden group ${
                activeSection === item.id
                  ? "text-cyan-300 font-medium transform"
                  : "text-slate-300 hover:text-white hover:scale-102"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <span className="relative z-10  tracking-wide">{item.label}</span>

              <div
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full transition-all duration-500 ${
                  activeSection === item.id
                    ? "opacity-100 scale-100 animate-pulse"
                    : "opacity-0 scale-0"
                }`}
              />
            </button>
          ))}
          <div className="flex justify-end">
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeButton: React.FC = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-6 py-2 rounded text-sm font-medium text-cyan-300 border-2 border-cyan-300 transition-all duration-300 ease-in-out group"
      aria-label="View Resume"
    >
      <div className="absolute top-0 left-0 h-0 group-hover:h-full w-full group-hover:bg-cyan-300/70 transition-all duration-500"></div>

      <span className="relative z-10 group-hover:text-slate-900 duration-400">
        Resume
      </span>
    </a>
  );
};

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
          <div className="text-2xl font-bold text-white cursor-pointer hover:text-cyan-400 transition-colors duration-200">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors duration-200"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute transition-all duration-300 text-slate-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 text-slate-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
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
