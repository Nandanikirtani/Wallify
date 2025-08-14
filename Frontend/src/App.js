import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  HashRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import Budget from "./components/Budget";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Investment from "./components/Investment";
import Community from "./components/Community";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function AppContent({ mode, toggleMode }) {
  const location = useLocation(); // get current path
  const navigate = useNavigate();
  const isLoginPage = ["/login", "/signup"].includes(location.pathname);
  const loginFields = [
    {
      label: "Email address",
      type: "email",
      placeholder: "name@example.com",
      id: "loginEmail",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      id: "loginPassword",
    },
  ];

  const signUpFields = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
      id: "signupName",
    },
    {
      label: "Email address",
      type: "email",
      placeholder: "name@example.com",
      id: "signupEmail",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      id: "signupPassword",
    },
  ];

  return (
    <>
      {!isLoginPage && (
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
        <Route
          path="/login"
          element={
            <AuthForm
              title="Login"
              fields={loginFields}
              description="By logging in, you agree to Wallify's Privacy Policy and Terms of Service."
              primaryButtonLabel="Login"
              onSubmit={() => {
                console.log("Login submitted");
                navigate("/"); // simulates a successfull login
              }}
              secondaryText="Don't have an account?"
              secondaryLinkText="Create new account"
              secondaryLinkHref="#/signup"
            />
          }
        />
        <Route
          path="/signup"
          element={
            <AuthForm
              title="Sign Up"
              fields={signUpFields}
              description="By creating an account, you agree to Wallify's Privacy Policy and Terms of Service."
              primaryButtonLabel="Sign Up"
              onSubmit={() => {
                console.log("Signup submitted");
                navigate("/"); // simulates a successfull sign up
              }}
              secondaryText="Already have an account?"
              secondaryLinkText="Login here"
              secondaryLinkHref="#/login"
            />
          }
        />
        <Route path="/learn" element={<Learn mode={mode} />} />
        <Route path="/budget" element={<Budget mode={mode} />} />
        <Route path="/investment" element={<Investment mode={mode} />} />
        <Route path="/community" element={<Community mode={mode} />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "light" ? "#e2eafc" : "#2f243a";
  }, [mode]);

  return (
    <HashRouter>
      <AppContent mode={mode} toggleMode={toggleMode} />
    </HashRouter>
  );
}

export default App;
