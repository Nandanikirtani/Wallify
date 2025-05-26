import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TextForm from "./components/TextForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      document.body.style.backgroundColor = "#e6dee4";
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "#e6dee4" : "#2f243a";
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
            page4="Expense"
            page5="Investment"
            page6="Community"
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
