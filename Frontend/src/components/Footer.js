import React from "react";

export default function Footer() {
  return (
    <footer className="text-white mt-5" style={{ backgroundColor: "#09343D" }}>
      <div className="container py-5">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-12 col-md-4 mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Logo"
              width="140"
              height="40"
              className="mb-3"
            />
            <p style={{ fontSize: "16px", maxWidth: "300px" }}>
              From setting budgets to tracking goals, Wallify empowers you
              to make confident financial decisions every day.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-6 col-md-2 mb-4">
            <h5 className="mb-3">Product</h5>
            <ul className="list-unstyled">
              <li><a className="text-white text-decoration-none" href="#">Home</a></li>
              <li><a className="text-white text-decoration-none" href="#">About Us</a></li>
              <li><a className="text-white text-decoration-none" href="#">Learn</a></li>
              <li><a className="text-white text-decoration-none" href="#">Budget</a></li>
              <li><a className="text-white text-decoration-none" href="#">Investment</a></li>
              <li><a className="text-white text-decoration-none" href="#">Community</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-6 col-md-2 mb-4">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a className="text-white text-decoration-none" href="#">Blog</a></li>
              <li><a className="text-white text-decoration-none" href="#">FAQs</a></li>
              <li><a className="text-white text-decoration-none" href="#">Help Center</a></li>
              <li><a className="text-white text-decoration-none" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3">Connect</h5>
            <ul className="list-unstyled">
              <li><a className="text-white text-decoration-none" href="#">Contact Us</a></li>
              <li><a className="text-white text-decoration-none" href="#">Join Community</a></li>
              <li><a className="text-white text-decoration-none" href="#">Careers</a></li>
              <li><a className="text-white text-decoration-none" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mt-3 mb-0">
          © 2025 Wallify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
