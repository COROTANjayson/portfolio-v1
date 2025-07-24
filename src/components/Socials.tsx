import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { cn } from "../utils/utils";

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
    <div
      className={cn(
        ` fixed right-20 bottom-4 hidden lg:flex lg:flex-col items-center gap-6 z-50 transform transition-all duration-700 translate-y-0 opacity-100`,
        className
      )}
    >
      {socialList.map(({ href, Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Icon
            stroke={1.5}
            className="w-7 h-7 text-slate-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:-translate-y-1 group-hover:scale-110 transform"
          />
        </a>
      ))}

      <div className={cn("h-40 w-[2px] bg-slate-400  mt-2", lineClassName)} />
    </div>
  );
};

export const EmailLeftSide: React.FC<{
  className?: string;
  lineClassName?: string;
}> = ({ className, lineClassName }) => {
  return (
    <div
      className={cn(
        `fixed left-20 bottom-4 hidden lg:flex lg:flex-col items-center gap-2 z-50 `,
        className
      )}
    >
      <a
        href={"#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 text-sm font-semibold tracking-widest hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        corotanjaysonjake@gmail.com
      </a>
      <div className={cn("h-40 w-[2px] bg-slate-400 mt-2", lineClassName)} />
    </div>
  );
};
