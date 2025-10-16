import React from "react";
import { FiFileText } from "react-icons/fi"; // <-- resume icon

const ResumeButton: React.FC = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center gap-2 ml-3 px-4 py-2 rounded text-sm font-medium text-cyan-300 border-[1.5px] border-cyan-300 transition-all duration-300 ease-in-out group overflow-hidden"
      aria-label="View Resume"
    >
      <div className="absolute top-0 left-0 h-0 group-hover:h-full w-full group-hover:bg-cyan-300/70 transition-all duration-500"></div>
      <span className="relative text-sm z-10 flex items-center gap-2 group-hover:text-slate-900 transition-colors duration-300">
        <FiFileText />
        Resume
      </span>
    </a>
  );
};

export default ResumeButton;
