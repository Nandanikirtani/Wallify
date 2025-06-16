import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TextForm from "./components/TextForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import Budget from "./components/Budget";

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
    document.body.style.backgroundColor = mode === "light" ? "#e2eafc" : "#2f243a";
  }, [mode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar
            page1="Home"
            page2="Learn"
            page3="Budget"
            page4="Investment"
            page5="Community"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Home mode={mode} />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <TextForm />
        </>
      ),
    },
    {
      path: "/Budget",
      element: (
        <>
          <NavBar
            page1="Home"
            page2="Learn"
            page3="Budget"
            page4="Investment"
            page5="Community"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Budget mode ={mode}/>
        </>
      ),
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
