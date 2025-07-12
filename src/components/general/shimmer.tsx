import { cn } from "../../utils/utils";

export const ShimmerEffect: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer",
        className
      )}
    />
  );
};
