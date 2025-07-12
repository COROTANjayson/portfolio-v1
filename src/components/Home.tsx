import React from "react";

import Hero from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";

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
