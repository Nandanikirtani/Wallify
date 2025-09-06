import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Investment(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const butColor = props.mode === "light" ? "white" : "black";

  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturnRate, setAnnualReturnRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const [active, setActive] = useState("challenges");

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturnRate) / 12 / 100;
    const n = parseFloat(years) * 12;

    if (P > 0 && r > 0 && n > 0) {
      const maturity = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      setResult(maturity.toFixed(2));
    } else {
      setResult("Please enter valid numbers");
    }
  };

  const [depositAmount, setDepositAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [durationYears, setDurationYears] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    const principal = parseFloat(depositAmount);
    const rateDecimal = parseFloat(annualRate) / 100;
    const time = parseFloat(durationYears);
    const frequency = parseInt(compoundFrequency);

    if (principal > 0 && rateDecimal > 0 && time > 0 && frequency > 0) {
      const total =
        principal * Math.pow(1 + rateDecimal / frequency, frequency * time);
      setMaturityAmount(total.toFixed(2));
    } else {
      setMaturityAmount("Please enter valid values");
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="container mb-5" style={{ color: textColor, marginTop: "100px" }}>
      {/* Tabs */}
      <ul className="nav nav-pills mb-3 justify-content-center" id="investment-tabs">
        <li className="nav-item">
          <button
            className={`nav-link m-1 ${active === "challenges" ? "active" : ""}`}
            style={{ backgroundColor: "#dc3545", color: "white" }}
            onClick={() => setActive("challenges")}
          >
            Challenges
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link m-1 ${active === "invest" ? "active" : ""}`}
            style={{ backgroundColor: "#dc3545", color: "white" }}
            onClick={() => setActive("invest")}
          >
            Invest
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link m-1 ${active === "tools" ? "active" : ""}`}
            style={{ backgroundColor: "#dc3545", color: "white" }}
            onClick={() => setActive("tools")}
          >
            Tools
          </button>
        </li>
      </ul>

      <AnimatePresence mode="wait">
        {active === "challenges" && (
          <motion.div
            key="challenges"
            className="tab-pane fade show active mt-5"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h4>Turn Saving into a Game</h4>
            <p><i>Every challenge gets you closer to your financial freedom.</i></p>
            <div className="row g-4 justify-content-center">
              {[
                {
                  title: "₹100 Weekly Savings Challenge",
                  desc: "Save ₹100 every week for 3 months",
                  progress: 25,
                  footer: "₹1,200 saved in 12 weeks",
                },
                {
                  title: "No-Spend Weekend Challenge",
                  desc: "Spend ₹0 on non-essentials over the weekend",
                  progress: 50,
                  footer: "Helps break impulse spending",
                },
                {
                  title: "30-Day ₹10 Increment Challenge",
                  desc: "Save ₹10 more than the previous day for 30 days",
                  progress: 75,
                  footer: "₹4,650 in 30 days",
                },
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  className="col-12 col-md-6 col-lg-4"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                >
                  <div className="card p-0">
                    <div className="card-header" style={{ backgroundColor: cardColor, color: butColor }}>
                      <h4>{challenge.title}</h4>
                    </div>
                    <div className="card-body text-start">
                      <p>{challenge.desc}</p>
                      <h6>Amount Saved</h6>
                      <div className="progress" role="progressbar">
                        <motion.div
                          className="progress-bar text-bg-success"
                          style={{ width: "0%" }}
                          animate={{ width: `${challenge.progress}%` }}
                          transition={{ duration: 1.5 }}
                        >
                          {challenge.progress}%
                        </motion.div>
                      </div>
                      <p className="mt-3">Keep saving more</p>
                    </div>
                    <div className="card-footer" style={{ backgroundColor: cardColor, color: butColor }}>
                      {challenge.footer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {active === "invest" && (
          <motion.div
            key="invest"
            className="tab-pane fade mt-5"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h4>Grow Your Money Through Smart Investments</h4>
            <p>Money sitting idle loses value — investing helps it grow!</p>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              {[
                { title: "Mutual Funds", body: "Professionally managed funds; good for beginners" },
                { title: "SIP (Systematic Investment Plan)", body: "Invest fixed amounts monthly in mutual funds" },
                { title: "Fixed Deposits (FDs)", body: "Low-risk, fixed return" },
                { title: "Public Provident Fund (PPF)", body: "Government-backed long-term savings scheme with tax benefits" },
                { title: "Gold (Digital/Physical)", body: "A safe hedge against inflation; invest via digital gold or gold ETFs" },
                { title: "National Pension Scheme (NPS)", body: "Retirement-focused investment with tax benefits and steady growth" },
              ].map((item, i) => (
                <div key={i} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${i}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${i}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${i}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex mt-5 align-items-center justify-content-center">
              <h4 className="mb-0">Grow your wallet</h4>
              <motion.a
                href="https://groww.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="ms-4"
              >
                <button className="btn btn-success">Start Now</button>
              </motion.a>
            </div>
          </motion.div>
        )}

        {active === "tools" && (
          <motion.div
            key="tools"
            className="tab-pane fade mt-5"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="text-center">Calculate your Smart Investments</h3>
            <div className="m-4 row g-4 justify-content-center">
              <motion.div
                className="col-12 col-md-6 col-lg-4 m-3 border border-primary p-3"
                whileHover={{ scale: 1.02 }}
              >
                <h4>SIP Calculator</h4>
                <div className="mb-3 text-start">
                  <label>Monthly Investment (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label>Annual Return Rate (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={annualReturnRate}
                    onChange={(e) => setAnnualReturnRate(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label>Investment Duration (Years)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={calculateSIP}>
                  Calculate
                </button>
                {result && (
                  <div className="mt-4">
                    <h4>Maturity Amount: ₹{result}</h4>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="col-12 col-md-6 col-lg-4 m-3 border border-primary p-4"
                whileHover={{ scale: 1.02 }}
              >
                <h4>FD Return Estimator</h4>
                <div className="mb-3 text-start">
                  <label>Deposit Amount (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label>Annual Interest Rate (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(e.target.value)}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label>Duration (Years)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={durationYears}
                    onChange={(e) => setDurationYears(e.target.value)}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label>Compounding Frequency</label>
                  <select
                    className="form-control"
                    value={compoundFrequency}
                    onChange={(e) => setCompoundFrequency(e.target.value)}
                  >
                    <option value={1}>Annually</option>
                    <option value={2}>Half-Yearly</option>
                    <option value={4}>Quarterly</option>
                    <option value={12}>Monthly</option>
                  </select>
                </div>

                <button className="btn btn-success" onClick={calculateMaturity}>
                  Estimate Returns
                </button>
                {maturityAmount && (
                  <div className="mt-4">
                    <h4>Maturity Amount: ₹{maturityAmount}</h4>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
