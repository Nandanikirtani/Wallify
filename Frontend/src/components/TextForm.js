import React, { useEffect } from "react";

export default function TextForm() {
  

  return (
    <div className="container-fluid mt-3 py-5" style={{backgroundColor:"#e2eafc"}}>
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

        {/* Login Form */}
        <div className="col-lg-4 col-md-8">
          <div
            className="p-4 rounded-3 text-white"
            style={{
              backgroundColor: "#4f000b",
            }}
          >
            <h1 className="text-center mb-4">Login</h1>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="inputPassword" />
            </div>

            <p className="my-4 text-center">
              By creating an account, you agree to Wallify's <u>Privacy Policy</u> and <u>Terms of Service</u>.
            </p>

            <button type="button" className="btn btn-warning w-100 mb-3">
              Login
            </button>

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

            <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
              <p className="mb-0 text-white">Don't have an account?</p>
              <a className="text-white text-decoration-underline" href="#">
                Create new account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
