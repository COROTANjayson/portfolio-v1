import { cn } from "../../utils/utils";

export const FloatingOrbs: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-float" />
      <div
        className="absolute top-2 right-3 w-1 h-1 bg-blue-300/40 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-2 left-1/3 w-0.5 h-0.5 bg-purple-300/50 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1 right-1/3 w-1 h-1 bg-cyan-200/30 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
};
