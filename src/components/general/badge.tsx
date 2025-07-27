import React from "react";
import { cn } from "../../utils/utils";

export const Badge: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-medium  text-blue-300 border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300",
        className
      )}
    >
      {title}
    </div>
  );
};
