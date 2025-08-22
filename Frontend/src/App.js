import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import Budget from "./components/Budget";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Investment from "./components/Investment";
import Community from "./components/Community";
import UserDashboard from "./components/UserDashboard";

import UserProvider from "./context/UserContextProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import UserProvider from "./context/UserContextProvider";

function AppContent({ mode, toggleMode }) {
  const location = useLocation();
  const hideNavFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
    <UserProvider>
      {!hideNavFooter && (
        <NavBar
          page1="Home"
          page2="Learn"
          page3="Budget"
          page4="Investment"
          page5="Community"
          mode={mode}
          toggleMode={toggleMode}
        />
      )}

      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/learn" element={<Learn mode={mode} />} />
        <Route path="/budget" element={<Budget mode={mode} />} />
        <Route path="/investment" element={<Investment mode={mode} />} />
        <Route path="/community" element={<Community mode={mode} />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>

      {!hideNavFooter && <Footer />}
      </UserProvider>
    </>
  );
}

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "light" ? "#e2eafc" : "#2f243a";
  }, [mode]);

  return (
    <HashRouter>
      <UserProvider>
        <AppContent mode={mode} toggleMode={toggleMode} />
      </UserProvider>
    </HashRouter>
  );
}

export default App;
