import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/BotFoundPage";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
