import React from "react";
import { useState } from "react";

export default function Investment(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const butColor = props.mode === "light" ? "white" : "black";

  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturnRate, setAnnualReturnRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

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
  return (
    <div
      className="container "
      style={{ color: textColor, marginTop: "100px" }}
    >
      <ul
  className="nav nav-pills mb-3 justify-content-center"
  id="investment-tabs"
  role="tablist"
>
  <li className="nav-item" role="presentation">
    <button
      className="nav-link active m-1 text-white"
      style={{ backgroundColor: "#dc3545" }}
      id="stocks-tab"
      data-bs-toggle="pill"
      data-bs-target="#stocks"
      type="button"
      role="tab"
    >
      Challenges
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button
      className="nav-link m-1 text-white"
      style={{ backgroundColor: "#dc3545" }}
      id="mutual-tab"
      data-bs-toggle="pill"
      data-bs-target="#mutual"
      type="button"
      role="tab"
    >
      Invest
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button
      className="nav-link m-1 text-white"
      style={{ backgroundColor: "#dc3545" }}
      id="tools-tab"
      data-bs-toggle="pill"
      data-bs-target="#bonds"
      type="button"
      role="tab"
    >
      Tools
    </button>
  </li>
</ul>


      <div className="tab-content text-center" id="investment-tabs-content">
        <div
          className="tab-pane fade show active mt-5"
          id="stocks"
          role="tabpanel"
        >
          <h4>Turn Saving into a Game</h4>
          <p>
            <i>Every challenge gets you closer to your financial freedom.</i>
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-0">
                <div
                  className="card-header"
                  style={{ backgroundColor: cardColor, color: butColor }}
                >
                  <h4> ₹100 Weekly Savings Challenge</h4>
                </div>
                <div className="card-body text-start">
                  <p> Save ₹100 every week for 3 months</p>
                  <h6>Amount Saved</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar text-bg-success"
                      style={{ width: "25%" }}
                    >
                      25%
                    </div>
                  </div>
                  <p className="mt-3">Keep saving more </p>
                </div>
                <div
                  className="card-footer"
                  style={{ backgroundColor: cardColor, color: butColor }}
                >
                  ₹1,200 saved in 12 weeks
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-0">
                <div
                  className="card-header"
                  style={{ backgroundColor: cardColor, color: butColor }}
                >
                  <h4>No-Spend Weekend Challenge</h4>
                </div>
                <div className="card-body text-start">
                  <p> Spend ₹0 on non-essentials over the weekend</p>
                  <h6>Amount Saved</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar text-bg-success"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                  <p className="mt-3">Keep saving more </p>
                </div>
                <div
                  className="card-footer"
                  style={{ backgroundColor: cardColor, color: butColor }}
                >
                  Helps break impulse spending
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-0">
                <div
                  className="card-header"
                  style={{ backgroundColor: cardColor, color: butColor }}
                >
                  <h4>30-Day ₹10 Increment Challenge</h4>
                </div>
                <div className="card-body text-start">
                  <p>Save ₹10 more than the previous day for 30 days</p>
                  <h6>Amount Saved</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar text-bg-success"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>
                  <p className="mt-3">Keep saving more </p>
                </div>
                <div
                  className="card-footer"
                  style={{ backgroundColor: cardColor, color: butColor }}
                >
                  ₹4,650 in 30 days
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="mutual" role="tabpanel">
          <h4 className="mt-5">Grow Your Money Through Smart Investments</h4>
          <p>Money sitting idle loses value — investing helps it grow!</p>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            {/* Mutual Funds */}
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
                  Mutual Funds
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Professionally managed funds; good for beginners
                </div>
              </div>
            </div>

            {/* SIP */}
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
                  SIP (Systematic Investment Plan)
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Invest fixed amounts monthly in mutual funds
                </div>
              </div>
            </div>

            {/* Fixed Deposits */}
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
                  Fixed Deposits (FDs)
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">Low-risk, fixed return</div>
              </div>
            </div>

            {/* PPF */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Public Provident Fund (PPF)
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Government-backed long-term savings scheme with tax benefits
                </div>
              </div>
            </div>

            {/* Gold */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Gold (Digital/Physical)
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A safe hedge against inflation; invest via digital gold or
                  gold ETFs
                </div>
              </div>
            </div>

            {/* NPS */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  National Pension Scheme (NPS)
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Retirement-focused investment with tax benefits and steady
                  growth
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-5 align-items-center justify-content-center">
            <h4 className="mb-0">Grow your wallet</h4>
            <a
              href="https://groww.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-success ms-4">Start Now</button>
            </a>
          </div>
        </div>

        <div className="tab-pane fade" id="bonds" role="tabpanel">
          <h3 className="mt-5">Calculate your Smart Investments</h3>
          <div className="m-4 row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 m-3 border border-primary p-3">
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
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-3 border border-primary p-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
