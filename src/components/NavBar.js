import React from "react";
import PropTypes from "prop-types";
 // Adjust the path based on your project structure

export default function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#5D4493", color: "white" }}
    >
      <a className="navbar-brand d-flex align-items-center text-white" href="/">
        <img src= "/logo.png" alt="Logo" width="140" height="40" className="me-2 ms-5" />
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

      {/* Collapsible Content */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Nav Links from Props */}
        <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
          {[props.page1, props.page2, props.page3, props.page4, props.page5, props.page6, props.page7].map(
            (page, index) => (
              <li className="nav-item ms-3" key={index}>
                <a className="nav-link active text-white" aria-current="page" href="#">
                  {page}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Search Bar with Icon */}
        <form className="me-3" role="search">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </form>

        {/* Profile Icon Dropdown */}
        <div className="dropdown">
          <i
            className="bi bi-person-circle text-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ fontSize: "1.8rem", cursor: "pointer" , marginRight: "10px" }}
          ></i>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
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
