import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../api/api"; // your axios instance

export default function AuthForm({ showSocialLogin = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  // State for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isLoginPage) {
        const res = await API.post("/user/login", { email, password });
        alert("Logged in successfully!");
      } else {
        const username = email.split("@")[0];
        const res = await API.post("/user/register", {
          username,
          fullName,
          email,
          password,
          role: "user",
        });
        alert("Registered successfully!");
        navigate("/login"); // go to login after signup
      }
      navigate("/"); // go to home after login
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="container-fluid mt-3 py-5" style={{ backgroundColor: "#e2eafc" }}>
      <div className="row justify-content-center align-items-center">
        {/* Left Text Column */}
        <div className="col-lg-6 col-md-10 text-center text-lg-start px-5 mb-5 mb-lg-0">
          <h1 className="fw-bold" style={{ color: "#4f000b", fontSize: "50px" }}>
            Welcome to Wallify
          </h1>
          <h5 className="mt-4" style={{ color: "#4f000b" }}>
            Track your expenses, plan your budget, and invest smartly <br />— all in one place.
          </h5>
        </div>

        {/* Auth Form */}
        <div className="col-lg-4 col-md-8">
          <div className="p-4 rounded-3 text-white" style={{ backgroundColor: "#4f000b" }}>
            <h1 className="text-center mb-4">{isLoginPage ? "Login" : "Sign Up"}</h1>

            {/* Signup: Full Name */}
            {!isLoginPage && (
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-warning w-100 mb-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Please wait..." : isLoginPage ? "Login" : "Sign Up"}
            </button>

            {showSocialLogin && (
              <>
                <p className="text-center">--------or--------</p>
                <p className="text-center mb-3">Login using</p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-light rounded-5 px-3">
                    <i className="bi bi-google"></i>
                  </button>
                  <button className="btn btn-light rounded-5 px-3">
                    <i className="bi bi-apple"></i>
                  </button>
                </div>
              </>
            )}

            <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
              {isLoginPage ? (
                <>
                  <p className="mb-0 text-white">Don't have an account?</p>
                  <a className="text-white text-decoration-underline" href="#/signup">Create new account</a>
                </>
              ) : (
                <>
                  <p className="mb-0 text-white">Already have an account?</p>
                  <a className="text-white text-decoration-underline" href="#/login">Login here</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
