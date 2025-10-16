import { useState, useEffect } from "react";

const TypingCodeSnippet = () => {
  const [displayedLines, setDisplayedLines] = useState([] as any);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const codeLines = [
    {
      raw: "const developer = {",
      indent: 0,
      segments: [
        { text: "const", color: "text-purple-400" },
        { text: " developer = {", color: "text-slate-300" },
      ],
    },
    {
      raw: 'name: "JaysonJake Corotan",',
      indent: 1,
      segments: [
        { text: "name", color: "text-cyan-400" },
        { text: ": ", color: "text-slate-300" },
        { text: '"JaysonJake Corotan"', color: "text-amber-300" },
        { text: ",", color: "text-slate-300" },
      ],
    },
    {
      raw: 'role: "Full-Stack Developer",',
      indent: 1,
      segments: [
        { text: "role", color: "text-cyan-400" },
        { text: ": ", color: "text-slate-300" },
        { text: '"Full-Stack Developer"', color: "text-emerald-400" },
        { text: ",", color: "text-slate-300" },
      ],
    },
    {
      raw: 'location: "Butuan, PH",',
      indent: 1,
      segments: [
        { text: "location", color: "text-cyan-400" },
        { text: ": ", color: "text-slate-300" },
        { text: '"Butuan, PH"', color: "text-amber-300" },
        { text: ",", color: "text-slate-300" },
      ],
    },
    {
      raw: "skills: {",
      indent: 1,
      segments: [
        { text: "skills", color: "text-cyan-400" },
        { text: ": {", color: "text-slate-300" },
      ],
    },
    {
      raw: 'frontend: ["Next.js", "React", "TypeScript"],',
      indent: 2,
      segments: [
        { text: "frontend", color: "text-cyan-400" },
        { text: ": [", color: "text-slate-300" },
        { text: '"Next.js"', color: "text-amber-300" },
        { text: ", ", color: "text-slate-300" },
        { text: '"React"', color: "text-amber-300" },
        { text: ", ", color: "text-slate-300" },
        { text: '"TypeScript"', color: "text-amber-300" },
        { text: "],", color: "text-slate-300" },
      ],
    },
    {
      raw: 'backend: ["Node.js", "PostgreSQL", "MongoDB"],',
      indent: 2,
      segments: [
        { text: "backend", color: "text-cyan-400" },
        { text: ": [", color: "text-slate-300" },
        { text: '"Node.js"', color: "text-amber-300" },
        { text: ", ", color: "text-slate-300" },
        { text: '"PostgreSQL"', color: "text-amber-300" },
        { text: ", ", color: "text-slate-300" },
        { text: '"MongoDB"', color: "text-amber-300" },
        { text: "],", color: "text-slate-300" },
      ],
    },
    {
      raw: "},",
      indent: 1,
      segments: [{ text: "},", color: "text-slate-300" }],
    },
    {
      raw: 'passion: "crafting seamless digital experiences",',
      indent: 1,
      segments: [
        { text: "passion", color: "text-cyan-400" },
        { text: ": ", color: "text-slate-300" },
        {
          text: '"crafting seamless digital experiences"',
          color: "text-pink-400",
        },
        { text: ",", color: "text-slate-300" },
      ],
    },
    {
      raw: 'status: "available for opportunities"',
      indent: 1,
      segments: [
        { text: "status", color: "text-cyan-400" },
        { text: ": ", color: "text-slate-300" },
        { text: '"available for opportunities"', color: "text-green-400" },
      ],
    },
    {
      raw: "};",
      indent: 0,
      segments: [{ text: "};", color: "text-slate-300" }],
    },
  ];

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = codeLines[currentLineIndex].raw;

    if (currentChar < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentLine]);
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLineIndex]);

  const renderColoredLine = (lineText: string | any[], segments: any[]) => {
    let charCount = 0;

    return segments.map((segment, i) => {
      const segmentStart = charCount;
      const segmentEnd = charCount + segment.text.length;
      charCount = segmentEnd;

      const visiblePart = lineText.slice(segmentStart, segmentEnd);

      return (
        <span key={i} className={segment.color}>
          {visiblePart}
        </span>
      );
    });
  };

  return (
    <div className="flex-1 w-full lg:w-1/2">
      {/* Terminal Header */}
      <div className="bg-slate-800 rounded-t-xl border-b border-slate-700 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-400 text-sm ml-3 font-medium">
          developer.js
        </span>
      </div>

      {/* Code Editor */}
      <div className="bg-slate-900/90 backdrop-blur-sm rounded-b-xl shadow-2xl border border-slate-700 border-t-0 p-6 font-mono text-sm leading-relaxed">
        <div className="space-y-1">
          {/* Completed lines */}
          {displayedLines.map((line: string | any[], i: number) => (
            <div key={i} className="flex">
              <span className="text-slate-600 select-none mr-4 text-right w-6">
                {i + 1}
              </span>
              <div style={{ marginLeft: `${codeLines[i].indent * 1.5}rem` }}>
                {renderColoredLine(line, codeLines[i].segments)}
              </div>
            </div>
          ))}

          {/* Current typing line */}
          {!isComplete && currentLineIndex < codeLines.length && (
            <div className="flex">
              <span className="text-slate-600 select-none mr-4 text-right w-6">
                {displayedLines.length + 1}
              </span>
              <div
                style={{
                  marginLeft: `${codeLines[currentLineIndex].indent * 1.5}rem`,
                }}
              >
                {renderColoredLine(
                  codeLines[currentLineIndex].raw.slice(0, currentChar),
                  codeLines[currentLineIndex].segments
                )}
                <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
              </div>
            </div>
          )}
        </div>

        {/* Status Indicator */}
        {isComplete && (
          <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-3 text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ready to collaborate</span>
            </div>
            <span className="text-slate-600">|</span>
            <span>Last updated: Oct 2025</span>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="mt-8 flex justify-center gap-4 text-slate-600 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
          <span>Variables</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500/50" />
          <span>Strings</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-pink-500/50" />
          <span>Values</span>
        </div>
      </div>
    </div>
  );
};

export default TypingCodeSnippet;
