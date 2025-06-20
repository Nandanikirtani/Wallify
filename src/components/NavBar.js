import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";

export default function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#5D4493" }}
    >
      <a
        className={`navbar-brand d-flex align-items-center text-white`}
        href="/"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          width="140"
          height="40"
          className="me-2 ms-5"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
          <li className="nav-item ms-3 text-dark text-decoration-none">
            <Link className={`nav-link active text-white`} to="/">
              {props.page1}
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link className={`nav-link active text-white`} to="/learn">
              {props.page2}
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link className={`nav-link active text-white`} to="/Budget">
              {props.page3}
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link className={`nav-link active text-white`} to="/investment">
              {props.page4}
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link className={`nav-link active text-white`} to="/community">
              {props.page5}
            </Link>
          </li>
        </ul>

        <div className="container">
          <Link to="/login">
            <button type="button" className="btn btn-danger float-end">
              Log in
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn btn-light float-end me-1">
              Sign up
            </button>
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="form-check form-switch me-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onChange={props.toggleMode}
            checked={props.mode === "dark"}
          />
          <label
            className={`form-check-label text-white`}
            htmlFor="switchCheckDefault"
          ></label>
        </div>

        {/* Profile Icon */}
        <div className="dropdown me-3">
          <i
            className={`bi bi-person-circle text-white`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              marginRight: "10px",
            }}
          ></i>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  page1: PropTypes.string,
  page2: PropTypes.string,
  page3: PropTypes.string,
  page4: PropTypes.string,
  page5: PropTypes.string,
  page6: PropTypes.string,
  page7: PropTypes.string,
  mode: PropTypes.string.isRequired,
  togglemode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  page1: "Home",
  page2: "About",
  page3: "Services",
  page4: "Portfolio",
  page5: "Blog",
  page6: "Contact",
  page7: "Help",
};
