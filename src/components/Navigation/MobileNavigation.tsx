import React from "react";
import ResumeButton from "./ResumeButton";
import type { NavigationProps, NavItem } from "./interfaces";

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

export default MobileNavigation;
