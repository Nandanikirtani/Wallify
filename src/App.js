import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TextForm from "./components/TextForm";
import Budget from "./components/Budget";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Investment from "./components/Investment";
import Community from "./components/Community";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2f243a";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#cbf3f0";
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "light" ? "#e2eafc" : "#2f243a";
  }, [mode]);

  return (
    <HashRouter>
      <NavBar
        page1="Home"
        page2="Learn"
        page3="Budget"
        page4="Investment"
        page5="Community"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/login" element={<TextForm />} />
        <Route path="/learn" element={<Learn mode={mode} />} />
        <Route path="/budget" element={<Budget mode={mode} />} />
        <Route path="/investment" element={<Investment mode={mode} />} />
        <Route path="/community" element={<Community mode={mode} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
