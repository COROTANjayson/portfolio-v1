import React from "react";
import Footer from "./Footer";
import { ScrollUpButton, Socials } from "./Navigation/Socials";
import Navigation from "./Navigation/Navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-slate-900 ">
      <Navigation />
      <Socials />
      <ScrollUpButton />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
