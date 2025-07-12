import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
