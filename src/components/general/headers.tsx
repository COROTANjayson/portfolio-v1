import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/utils";

export const SectionHeader: React.FC<{
  title: string;
  className?: string;
}> = ({ title, className }) => {
  return (
    <motion.div
      className={cn(
        "relative flex gap-4 items-end  mb-16 font-semibold text-5xl md:text-7xl   w-full ",
        className
      )}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* <div className="flex items-center gap-1 lg:gap-1.5 rotate-45 -mt-10 lg:-mt-15 -mr-7">
        <motion.div
          className="w-[2px] lg:w-[3px] h-3 lg:h-5 bg-cyan-400 origin-top "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="w-[1.5px] lg:w-[3px] h-6 lg:h-8 bg-cyan-400 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div> */}
      <span className="text-2xl text-fuchsia-300">01.</span>
      <h2 className="tracking-wide text-slate-300">{title}</h2>
      {/* 
      <div className="flex items-center gap-1.5 rotate-45 -mb-20 -ml-5">
        <motion.div
          className="w-[2.5px] h-10 lg:h-8 bg-cyan-400 "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="w-[3px] h-6 lg:h-4 bg-cyan-400 origin-top "
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div> */}
    </motion.div>
  );
};
