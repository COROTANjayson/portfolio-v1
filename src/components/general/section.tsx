import React from "react";
import { cn } from "../../utils/utils";
import { motion } from "framer-motion";

export const Section: React.FC<{
  children: React.ReactNode;
  className: string;
  id: string;
}> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={cn(
        "lg:py-36 bg-gradient-to-tr from-slate-900 to-slate-800",
        className
      )}
    >
      <div className="relative max-w-5xl mx-auto  sm:px-6  px-10  xl:px-0">
        <div className="absolute -top-5 left-5 lg:-left-5 flex items-center gap-1 lg:gap-1.5 rotate-40  ">
          <motion.div
            className="w-[2px] lg:w-[3px] h-5 lg:h-7 bg-cyan-300 "
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="w-[2px] lg:w-[3px] h-8 lg:h-12 bg-cyan-300 "
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        {children}
        <div className="absolute -bottom-10 right-5 lg:-right-5 flex items-center gap-1 lg:gap-1.5 rotate-40  ">
          <motion.div
            className="w-[2px] lg:w-[3px] h-8 lg:h-12 bg-cyan-400 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="w-[2px] lg:w-[3px] h-5 lg:h-7 bg-cyan-400 origin-top "
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};
