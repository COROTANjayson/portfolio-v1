import React from "react";

import Hero from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
// import Contact from "./Contact";
import Work from "./WorkComponents/Work";
import Contact from "./Contact/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
