import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/utils";

export const SectionHeader: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "flex items-center gap-5 mb-16 text-3xl font-bold text-slate-300",
        className
      )}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      <motion.div
        className="h-[2px] bg-gradient-to-r from-cyan-400/60"
        initial={{ width: 0 }}
        whileInView={{ width: "12rem" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};
