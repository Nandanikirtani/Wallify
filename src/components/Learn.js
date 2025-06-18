import React from "react";
import { useState, useEffect } from "react";

export default function Learn(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const butColor = props.mode === "light" ? "white" : "black";

  const [modules, setmodule] = useState([]);
  const [badge, setbadge] = useState([]);
  const totalModules = 2;
  const progress = Math.round((modules.length / totalModules) * 100);
  function handleModuleComplete(moduleName) {
    setmodule((prev) =>
      prev.includes(moduleName) ? prev : [...prev, moduleName]
    );
  }
  function badgesEarned(newBadge) {
    setbadge((prev) => (prev.includes(newBadge) ? prev : [...prev, newBadge]));
  }
  const badgeImages = {
    Unstoppable: "/Unstoppable.webp",
    Achiever: "/Winbadge.webp",
  };

  return (
    <div className="container" style={{ marginTop: "100px", color: textColor }}>
      <h1 className="text-center">Wallify Learning Hub</h1>
      <p className="text-center mt-1" style={{ color: cardColor }}>
        Master Your Money, One Lesson at a Time
      </p>
      <div className="d-flex">
        <div className="col-7">
          <div className="row m-3">
            <div className="card p-0">
              <div
                className="card-header "
                style={{ backgroundColor: "#02939c", color: "white" }}
              >
                <h4 className="m-0 p-2">Budgeting Basics</h4>
              </div>
              <div className="card-body">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What is Budgeting and Why is it Important?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        A plan to manage your income and expenses, helping you
                        save and avoid debt.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How to Start Budgeting?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Track income, list expenses, and follow the 50/30/20
                        rule — needs, wants, and savings.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Budgeting Mistakes to Avoid
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Skipping savings, ignoring small expenses, and not
                        updating your budget regularly.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleModuleComplete("Budgeting Basics");
                    badgesEarned("Unstoppable");
                  }}
                  disabled={modules.includes("Budgeting Basics")}
                >
                  {modules.includes("Budgeting Basics")
                    ? "Completed"
                    : "Mark as Complete"}
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5 m-3">
            <div className="card p-0">
              <div
                className="card-header "
                style={{ backgroundColor: "#02939c", color: "white" }}
              >
                <h4 className="m-0 p-2">Saving Smart</h4>
              </div>
              <div className="card-body">
                {/* Saving Smart Accordion */}
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushSaving"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-savingOne"
                        aria-expanded="false"
                        aria-controls="flush-savingOne"
                      >
                        Why is Smart Saving Important?
                      </button>
                    </h2>
                    <div
                      id="flush-savingOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushSaving"
                    >
                      <div className="accordion-body">
                        Smart saving helps you build financial security, prepare
                        for emergencies, and reach long-term goals like buying a
                        home or retiring comfortably.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-savingTwo"
                        aria-expanded="false"
                        aria-controls="flush-savingTwo"
                      >
                        Best Practices for Saving Smart
                      </button>
                    </h2>
                    <div
                      id="flush-savingTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushSaving"
                    >
                      <div className="accordion-body">
                        Automate your savings, set clear goals, track your
                        spending, and review your progress monthly to stay on
                        track.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleModuleComplete("Smart Saver");
                    badgesEarned("Achiever");
                  }}
                  disabled={modules.includes("Smart Saver")}
                >
                  {modules.includes("Smart Saver")
                    ? "Completed"
                    : "Mark as Complete"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-5 ms-5 m-3">
          <div className="card p-0" style={{ height: "500px" }}>
            <div
              className="card-header text-center"
              style={{ backgroundColor: "#ba181b", color: "white" }}
            >
              <h4 className="p-2">Your Progress</h4>
            </div>
            <div className="card-body">
              <div
                class="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: `${progress}%` }}>
                  {progress}%
                </div>
              </div>
              <p className="mt-3 fw-semibold">
                {progress === 0 && "Let's get started!"}
                {progress > 0 &&
                  progress < 100 &&
                  "You're doing great — keep it up!"}
                {progress === 100 &&
                  "🎉 Congratulations! All modules completed!"}
              </p>

              <h6 className="mt-4 mb-3 text-decoration-underline">
                Modules Completed
              </h6>
              <ul className="ps-3">
                {modules.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <h5>Badges: </h5>
              <ul className="ps-3 d-flex gap-3 list-unstyled">
                {badge.map((badgeName, index) => (
                  <li key={index}>
                    <img
                      src={badgeImages[badgeName]}
                      alt={badgeName}
                      width="40"
                      height="40"
                      title={badgeName}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center">
          Secure Your Future with Government Schemes
        </h2>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-3 m-3">
            <div className="card p-0" style={{ height: "350px" }}>
              <div
                className="card-header"
                style={{
                  backgroundColor: cardColor,
                  color: butColor,
                  height: "70px",
                }}
              >
                <h5>Mahila Samman Savings Certificate (MSSC)</h5>
              </div>
              <div className="card-body">
                For: Girl children under 10 years
                <ul className="mt-3">
                  <li>Available for women/girls only</li>
                  <li>Interest rate of 7.5% per annum</li>
                  <li>Maximum investment: ₹2 lakhs</li>
                  <li>Maturity period: 2 years</li>
                </ul>
                <h6>
                  <i>
                    Goal: Encourage short-term savings by women with attractive
                    returns
                  </i>
                </h6>
              </div>
              <a
                href="https://www.myscheme.gov.in/schemes/mssc"
                target="_blank"
                className="mb-5 ms-4 link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-3 m-3">
            <div className="card p-0" style={{ height: "350px" }}>
              <div
                className="card-header"
                style={{
                  backgroundColor: cardColor,
                  color: butColor,
                  height: "70px",
                }}
              >
                <h5>Pradhan Mantri Mudra Yojana (PMMY)</h5>
              </div>
              <div className="card-body">
                <ul>
                  <li>Types of loans: Shishu (up to ₹50K), Kishor, Tarun</li>
                  <li>For: Small/micro women entrepreneurs</li>
                </ul>
                <h6>
                  <i>
                    Goal: Encourage self-employment by easing access to credit
                    without collateral
                  </i>
                </h6>
              </div>
              <a
                href="https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme"
                target="_blank"
                className="mb-5 ms-4 link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-3 m-3">
            <div className="card p-0" style={{ height: "350px" }}>
              <div
                className="card-header align-items-center"
                style={{
                  backgroundColor: cardColor,
                  color: butColor,
                  height: "70px",
                }}
              >
                <h5>Stand-Up India Scheme</h5>
              </div>
              <div className="card-body">
                Women and SC/ST entrepreneurs
                <ul>
                  <li>Loans from ₹10 lakhs to ₹1 crore</li>
                  <li>
                    For starting new businesses in manufacturing, trading, or
                    services
                  </li>
                  <li>Requires no collateral</li>
                </ul>
                <h6>
                  <i>Goal: Promote women-led entrepreneurship</i>
                </h6>
              </div>
              <a
                href="https://www.standupmitra.in/home/suischemes" target="_blank"
                className="mb-5 ms-4 link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-3 m-3">
            <div className="card p-0" style={{ height: "350px" }}>
              <div
                className="card-header"
                style={{
                  backgroundColor: cardColor,
                  color: butColor,
                  height: "70px",
                }}
              >
                <h5>Sukanya Samriddhi Yojana (SSY)</h5>
              </div>
              <div className="card-body">
                For: Girl children under 10 years
                <ul>
                  <li>Interest rate: ~8.2% (subject to revision quarterly)</li>
                  <li>Tax-free under Section 80C</li>
                  <li>Maturity when girl turns 21</li>
                </ul>
                <h6>
                  <i>Goal: Secure future education/marriage costs</i>
                </h6>
              </div>
              <a
                href="https://www.nsiindia.gov.in/(S(brtmnrak02avxg453d1k2xjp))/InternalPage.aspx?Id_Pk=89" target="_blank"
                className=" mb-5 ms-4 link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
