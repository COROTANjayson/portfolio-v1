import React from "react";
import { cn } from "../../utils/utils";

export const Section: React.FC<{
  children: React.ReactNode;
  className: string;
  id: string;
}> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={cn(
        "py-36 bg-gradient-to-tr from-slate-900 to-slate-800",
        className
      )}
    >
      <div className="max-w-5xl mx-auto  sm:px-6  px-10 lg:px-40 xl:px-0">
        {children}
      </div>
    </section>
  );
};
