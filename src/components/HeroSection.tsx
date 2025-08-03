import { Socials } from "./Navigation/Socials";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex  justify-center w-full"
    >
      <div className="max-w-6xl  w-full mt-48 md:mt-60  px-10 lg:px-40 2xl:px-0">
        <div className="mb-8">
          <p className="text-lg tracking-widest text-cyan-300 mb-6">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 mb-6">
            Jayson Jake Corotan.
          </h1>
          <p className="text-2xl md:text-5xl font-bold text-slate-300 mb-8 tracking-wide">
            Full Stack Developer
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mb-8 ">
            Passionate about creating beautiful, functional web applications
            that solve real-world problems.
          </p>
        </div>
        <div>
          <button className=" cursor-pointer group relative  text-slate-900 px-10 py-3 rounded font-semibold border border-cyan-300 transition-colors duration-300">
            <div className="absolute top-0 left-0 h-0 group-hover:h-full w-full group-hover:bg-cyan-300/70 transition-all duration-500"></div>

            <span className="relative z-10 text-cyan-300 group-hover:text-slate-900 duration-400">
              Get in Touch
            </span>
          </button>
        </div>

        <Socials
          className="absolute lg:hidden bottom-16 left-6 flex flex-row-reverse"
          lineClassName="hidden md:block w-40 h-[2px]"
        />
      </div>
    </section>
  );
};

export default Hero;
