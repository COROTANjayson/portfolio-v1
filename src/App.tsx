import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
