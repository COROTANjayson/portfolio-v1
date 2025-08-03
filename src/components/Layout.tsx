import React from "react";
import Footer from "./Footer";
import { EmailLeftSide, Socials } from "./Navigation/Socials";
import Navigation from "./Navigation/Navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-slate-900">
      <Navigation />
      <Socials />
      <EmailLeftSide />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
