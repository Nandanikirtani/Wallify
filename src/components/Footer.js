import React from "react";

export default function Footer() {
  return (
    <div className="mb-0" style={{ marginTop: "100px" }}>
      <div
        className="text-white mt-5"
        style={{
          backgroundColor: "#09343D",
          backgroundSize: "cover",
          minHeight:"400px"
        }}
      >
        <div className="container text-white py-5">
          <div className="">
            <div className="row ">
              {/* Logo and Description */}
              <div className="col-12 col-md-4 mb-4">
                <img
                  src="/logo.png"
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

              {/* Section 1 */}
              <div className="col-12 col-md-2 mb-4">
                <h5 className="mb-3 ">Product</h5>
                <div className="d-flex flex-column gap-1">
                  <a className="text-white text-decoration-none" href="">
                    Home
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    About Us
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Learn
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Budget
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Investment
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Community
                  </a>
                </div>
              </div>

              {/* Section 2 */}
              <div className="col-12 col-md-2 mb-4">
                <h5 className="mb-3">Resources</h5>
                <div className="d-flex flex-column gap-1">
                  <a className="text-white text-decoration-none" href="">
                    Blog
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    FAQs
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Help Center
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* Section 3 */}
              <div className="col-12 col-md-2 mb-4">
                <h5 className="mb-3">Connect</h5>
                <div className="d-flex flex-column gap-1">
                  <a className="text-white text-decoration-none" href="">
                    Contact Us
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Join Community
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    Careers
                  </a>
                  <a className="text-white text-decoration-none" href="">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <p className="mb-5 mt-1 text-center">
          © 2025 Wallify. All rights reserved
        </p>
      </div>
    </div>
  );
}
