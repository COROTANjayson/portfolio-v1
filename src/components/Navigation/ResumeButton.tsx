import React from "react";

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

export default ResumeButton;
