import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { cn } from "../../utils/utils";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronUp, Check } from "lucide-react";
import { useEffect, useState } from "react";
import {} from "lucide-react";

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
}> = ({ className }) => {
  const socialList = [
    { href: "https://github.com/COROTANjayson", Icon: IconBrandGithub },
    { href: "https://www.instagram.com/jyzncrtn/", Icon: IconBrandInstagram },
    {
      href: "https://www.linkedin.com/in/jayson-jake-corotan",
      Icon: IconBrandLinkedin,
    },
    {
      href: "https://web.facebook.com/jayson.corotan",
      Icon: IconBrandFacebook,
    },
  ];

  return (
    <motion.div
      className={cn(
        `fixed left-10 xl:left-20 bottom-7 hidden lg:flex lg:flex-col items-center gap-6 z-50`,
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
      {/* <motion.a
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
      </motion.a> */}
      <CopyEmail />
    </motion.div>
  );
};

export const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "scroll-up-btn cursor-pointer fixed right-10 xl:right-10 bottom-10 z-50 p-3 rounded-full",
          "bg-slate-600/60 text-slate-800 shadow-lg hover:shadow-xl",
          "backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden",
          "hover:scale-105 active:scale-95",
          isVisible
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-2"
        )}
        style={{
          transform: `translateY(${isVisible ? 0 : 8}px) scale(${
            isHovered ? 1.25 : 1
          })`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Static chevron - visible by default */}
          <ChevronUp
            size={30}
            className="static-chevron absolute  text-cyan-300 transition-opacity duration-300"
          />

          {/* Animated chevrons - only animate on hover */}
          <ChevronUp
            size={30}
            className="animated-chevron-1 absolute  text-cyan-300"
          />
          <ChevronUp
            size={30}
            className="animated-chevron-2 absolute  text-cyan-300 opacity-70"
          />
          <ChevronUp
            size={30}
            className="animated-chevron-3 absolute  text-cyan-300 opacity-40"
          />
        </div>
      </button>
    </>
  );
};

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("corotanjaysonjake@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.button
        onClick={handleCopy}
        className=" cursor-pointer text-slate-400 text-sm font-semibold tracking-widest hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        variants={itemVariants}
      >
        corotanjaysonjake@gmail.com
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-10 bg-gray-800 text-cyan-300 text-xs font-medium px-2 py-1 rounded shadow-md flex items-center gap-1"
          >
            <Check size={15}/> Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
