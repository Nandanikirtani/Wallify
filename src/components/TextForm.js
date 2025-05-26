import React from "react";
import { useEffect } from "react";

export default function TextForm() {
  useEffect(() => {
    document.body.style.backgroundColor = "#e6dee4";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <div className="" style={{ backgroundColor: "#e6dee4" }}>
        <div
          className="float-start "
          style={{ marginLeft: "150px", color: "#4f000b" }}
        >
          <h1
            className=""
            style={{ marginTop: "200px", fontWeight: "700", fontSize: "50px" }}
          >
            Welcome to Wallify
          </h1>
          <br />
          <h5 className="">
            Track your expenses, plan your budget, and invest smartly <br /> —
            all in one place.
          </h5>
        </div>
        <div
          className="p-4 rounded-3 text-white my-5 float-end "
          style={{
            marginRight: "200px",
            width: "30%",
            backgroundColor: "#4f000b",
            height: "630px",
          }}
        >
          <div className="text-center text-white p-1">
            <h1> Login</h1>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
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
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <p className="my-5 text-center">
            By creating an account, you agree to wallify <u>Privacy Policy</u>{" "}
            and <u>Terms of Service</u>{" "}
          </p>
          <button
            type="button"
            className="btn btn-warning my-1 "
            style={{ width: "405px" }}
          >
            Login
          </button>
          <p style={{ textAlign: "center" }}>
            --------or-------- <br /> Login using
          </p>
          <div className="d-flex justify-content-center gap-3 ">
            <button className="btn btn-light rounded-5 d-flex align-items-center px-3">
              <i className="bi bi-google"></i>
            </button>
            <button className="btn btn-light rounded-5 d-flex align-items-center px-3">
              <i className="bi bi-apple"></i>
            </button>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2 my-3">
            <p className="mb-0 text-white">Don't have an account?</p>
            <a className="text-white text-decoration-underline" href="#">
              Create new account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
