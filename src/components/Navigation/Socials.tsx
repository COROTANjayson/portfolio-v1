import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { cn } from "../../utils/utils";
import { motion, type Variants } from "framer-motion";

// Individual social icon animation
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 3,
    },
  },
};

// Line animation
const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.8,
      delay: 1,
    },
  },
};

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1,
    },
  },
};

export const Socials: React.FC<{
  className?: string;
  lineClassName?: string;
}> = ({ className, lineClassName }) => {
  const socialList = [
    { href: "https://github.com/", Icon: IconBrandGithub },
    { href: "https://instagram.com/", Icon: IconBrandInstagram },
    { href: "https://linkedin.com/", Icon: IconBrandLinkedin },
    { href: "https://facebook.com/", Icon: IconBrandFacebook },
  ];

  return (
    <motion.div
      className={cn(
        `fixed right-10 xl:right-20 bottom-4 hidden lg:flex lg:flex-col items-center gap-6 z-50`,
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialList.map(({ href, Icon }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          variants={itemVariants}
        >
          <Icon
            stroke={1.5}
            className="w-7 h-7 text-slate-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:-translate-y-1 group-hover:scale-110 transform"
          />
        </motion.a>
      ))}

      <motion.div
        className={cn("h-40 w-[2px] bg-slate-400 mt-2", lineClassName)}
        variants={lineVariants}
        style={{ originY: 0 }}
      />
    </motion.div>
  );
};

export const EmailLeftSide: React.FC<{
  className?: string;
  lineClassName?: string;
}> = ({ className, lineClassName }) => {
  return (
    <motion.div
      className={cn(
        `fixed left-10 xl:left-20 bottom-4 hidden lg:flex lg:flex-col items-center gap-2 z-50`,
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href={"#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 text-sm font-semibold tracking-widest hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        variants={itemVariants}
      >
        corotanjaysonjake@gmail.com
      </motion.a>

      <motion.div
        className={cn("h-40 w-[2px] bg-slate-400 mt-2", lineClassName)}
        variants={lineVariants}
        style={{ originY: 0 }}
      />
    </motion.div>
  );
};
