import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const Navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
 const handleLogout = async (e) => {
  e.preventDefault();
  try {
    await axios.post(
      "http://localhost:5000/api/v1/user/logout",
      {},
      { withCredentials: true }
    );

    // Clear local storage
    localStorage.removeItem("user");

    // Reset context
    setUser(null);

    // Optionally reload or navigate to login/home
    Navigate("/");
    window.location.reload();
  } catch (err) {
    console.log("Logout failed", err);
  }
};

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { user } = React.useContext(UserContext);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#5D4493" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center text-white"
          href="/"
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            width="140"
            height="40"
            className="me-2"
          />
        </a>

        <button
          className="navbar-toggler border-0" // removes border
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{ boxShadow: "none" }} // removes focus shadow
        >
          {isMenuOpen ? (
            <i className="bi bi-x-lg text-white fs-2"></i> // white cross icon
          ) : (
            <i className="bi bi-list text-white fs-2"></i> // white hamburger icon
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-2">
              <Link className="nav-link text-white" to="/">
                {props.page1}
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link text-white" to="/learn">
                {props.page2}
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link text-white" to="/Budget">
                {props.page3}
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link text-white" to="/investment">
                {props.page4}
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link text-white" to="/community">
                {props.page5}
              </Link>
            </li>
          </ul>

          {/* Right Buttons and Icons */}
          {user ? (
            <span className="text-white p-2">Welcome, {user.username}</span>
          ) : (
            <div className="d-lg-flex p-2 align-items-center ms-auto flex-column flex-lg-row gap-2">
              <Link to="/login">
                <button type="button" className="btn btn-danger">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-light">
                  Sign up
                </button>
              </Link>
            </div>
          )}
          {/* Toggle Dark Mode */}
          {/* <div className="form-check form-switch text-white mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onChange={props.toggleMode}
                checked={props.mode === "dark"}
              />
            </div> */}

           {user ? (
          <div className="dropdown">
            <i
              className="bi bi-person-circle text-white"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            ></i>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="/profile">
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
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
           ):(
            null
           )
          }
        </div>
      </div>
            
      {/* </div> */}
    </nav>
  );
}

NavBar.propTypes = {
  page1: PropTypes.string,
  page2: PropTypes.string,
  page3: PropTypes.string,
  page4: PropTypes.string,
  page5: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  page1: "Home",
  page2: "About",
  page3: "Services",
  page4: "Portfolio",
  page5: "Blog",
};
