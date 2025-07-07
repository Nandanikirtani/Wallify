import React from "react";
import { useState } from "react";

export default function Budget(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const cardColor = "#a47148"; // Same for both modes
  const butColor = props.mode === "light" ? "white" : "black";
  const labelColor = props.mode === "light" ? "#006d77" : "#38a3a5";

  const [income1, setIncome1] = useState("");
  const [extraIncome, setExtraIncome] = useState("");
  const [saving, setSaving] = useState(0);

  const totalIncome = Number(income1) + Number(extraIncome);

  const [income2, setIncome2] = useState("");
  const [extraIncome1, setExtraIncome1] = useState("");

  const totalIncome1 = Number(income2) + Number(extraIncome1);

  function calculateSubtotal() {
    const ids = [
      "rent",
      "phone",
      "electricity",
      "gas",
      "water",
      "cable",
      "waste",
      "repair",
      "supplies",
      "other",
    ];

    let total = 0;
    ids.forEach((id) => {
      const val = parseFloat(document.getElementById(id)?.value) || 0;
      total += val;
    });

    document.getElementById("subtotal").value = total;
    return total;
  }

  function calculateSubtotal1() {
    const ids2 = ["video", "cd", "movie", "concert", "sport", "other1"];
    let totalSum = 0;
    ids2.forEach((id2) => {
      let val = parseFloat(document.getElementById(id2)?.value) || 0;
      totalSum += val;
    });
    document.getElementById("subtotal1").value = totalSum;
    return totalSum;
  }

  function calculateSubtotal2() {
    const ids3 = ["vehicle", "bus", "insurance", "licensing", "fuel", "other2"];
    let totalsum1 = 0;
    ids3.forEach((id3) => {
      let val = parseFloat(document.getElementById(id3)?.value) || 0;
      totalsum1 += val;
    });
    document.getElementById("subtotal2").value = totalsum1;
    return totalsum1;
  }

  function calculateSaving() {
    const totalExpenses =
      calculateSubtotal() +
      calculateSubtotal1() +
      calculateSubtotal2();
    console.log(totalExpenses);
    console.log(totalIncome1);
    const remaining = totalIncome1 - totalExpenses;
    setSaving(remaining >= 0 ? remaining : 0);
  }
  return (
    <>
      <div className="container mt-0">
        <div className="row align-items-center">
          {/* Left Column: Accordion */}
          <div className="col-md-6">
            <div
              className="mb-4"
              style={{ color: textColor, marginTop: "120px" }}
            >
              <h1>How it works?</h1>
            </div>
            <div className="accordion" id="accordionExample">
              {/* Accordion 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Create a Budget
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    Input your income and divide across categories like rent,
                    food, travel, and savings.
                  </div>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Track Expenses
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body">
                    Log your daily expenses and compare with your monthly budget
                    using visual graphs.
                  </div>
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Monitor Investments
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body">
                    Track SIPs, mutual funds, and stocks to monitor portfolio
                    growth in real time.
                  </div>
                </div>
              </div>

              {/* Accordion 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Learn & Grow
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingFour"
                >
                  <div className="accordion-body">
                    Access lessons on budgeting, saving, and investing tailored
                    to your level.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/Budget.png`}
              className="img-fluid"
              alt="Budget illustration"
              style={{
                maxWidth: "100%", // ensures responsiveness
                height: "auto", // maintains aspect ratio
                marginTop: "3rem", // use rem instead of px for responsiveness
              }}
            />
          </div>
        </div>
      </div>
      {/*Budget tracker form */}

      <div className="container ">
        <div className="row align-items-center">
          <div>
            <h2 className="text-center mt-5" style={{ color: textColor }}>
              Wallify your wallet – log your expense below!
            </h2>
          </div>

          <div className="row m-auto gx-2 justify-content-center">
            {/* Projected Monthly Income */}
            <div
              className="col-6 col-lg-auto text-center "
              style={{ color: textColor }}
            >
              <div className="mt-2 ms-1">
                <h5 className="fs-5 text-center mb-3">
              <u>Projected Income</u>
            </h5>

                {/* Income 1 */}
                <div className="input-group" style={{ height: "40px" }}>
                  <label
                    htmlFor="income1"
                    className="form-label d-flex align-items-center px-2 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "100px",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Income 1
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="income1"
                    value={income1}
                    onChange={(e) => setIncome1(e.target.value)}
                    style={{ height: "100%", fontSize: "14px" }}
                  />
                </div>

                {/* Extra Income */}
                <div
                  className="input-group"
                  style={{ height: "40px", marginTop: "0" }}
                >
                  <label
                    htmlFor="extraIncome"
                    className="form-label d-flex align-items-center px-2 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "100px",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Extra
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="extraIncome"
                    value={extraIncome}
                    onChange={(e) => setExtraIncome(e.target.value)}
                    style={{ height: "100%", fontSize: "14px" }}
                  />
                </div>

                {/* Total Income */}
                <div
                  className="input-group"
                  style={{ height: "40px", marginTop: "0" }}
                >
                  <label
                    htmlFor="totalIncome"
                    className="form-label d-flex align-items-center px-2 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "100px",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Total
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="totalIncome"
                    value={totalIncome}
                    readOnly
                    style={{ height: "100%", fontSize: "14px" }}
                  />
                </div>
              </div>
            </div>

            {/* Actual Monthly Income */}
            <div
              className="col-6 col-lg-auto text-center text-start "
              style={{ color: textColor }}
            >
              <div className="mt-2 ms-1">
                <h5 className="fs-5 text-center mb-3">
              <u>Actual Monthly Income</u>
            </h5>

                {/* Income 1 */}
                <div className="input-group" style={{ height: "40px" }}>
                  <label
                    htmlFor="income1Actual"
                    className="form-label d-flex align-items-center px-2 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "100px",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Income 1
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="income1Actual"
                    value={income2}
                    onChange={(e) => setIncome2(e.target.value)}
                    style={{ height: "100%", fontSize: "14px" }}
                  />
                </div>

                {/* Extra Income */}
                <div
                  className="input-group"
                  style={{ height: "40px", marginTop: "0" }}
                >
                  <label
                    htmlFor="extraIncome1"
                    className="form-label d-flex align-items-center px-2 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "100px",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Extra
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="extraIncome1"
                    value={extraIncome1}
                    onChange={(e) => setExtraIncome1(e.target.value)}
                    style={{ height: "100%", fontSize: "14px" }}
                  />
                </div>

                {/* Total Income */}
                <div
                  className="input-group"
                  style={{ height: "40px", marginTop: "0" }}
                >
                  <label
                    htmlFor="totalIncome1"
                    className="form-label d-flex align-items-center px-2 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "100px",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Total
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="totalIncome1"
                    value={totalIncome1}
                    readOnly
                    style={{ height: "100%", fontSize: "14px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-3 gx-3 gy-4 px-2">
        <div
          className="col-12 col-md-6 col-lg-4 mt-3"
          style={{ color: textColor }}
        >
          <div className="px-2">
            <h5 className="fs-5 text-center mb-3">
              <u>Housing</u>
            </h5>
            <div
              className="mb-0 d-flex input-group mt-3"
              style={{ height: "50px" }}
            >
              <label
                htmlFor="rent"
                className="form-label d-flex align-items-center px-3 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Rent
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="rent"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="phone"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Phone
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="phone"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="extra"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Electricity
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="electricity"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="gas"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Gas
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="gas"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="Water"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Water and Sewer
              </label>

              <input
                type="number"
                className="form-control text-center border-dark"
                id="water"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="others"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Others
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="other"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="subtotal"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Subtotal
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="subtotal"
                placeholder=""
                style={{ width: "30px" }}
              />
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-4 mt-3"
          style={{ color: textColor }}
        >
          <div className="px-2">
            <h5 className="fs-5 text-center mb-3">
              <u>Transportation</u>
            </h5>
            <div
              className="mb-0 d-flex input-group mt-3"
              style={{ height: "50px" }}
            >
              <label
                htmlFor="vehicle"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Vehicle
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="vehicle"
                placeholder=""
                onChange={calculateSubtotal2}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="bus"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Bus/taxi fare
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="bus"
                onChange={calculateSubtotal2}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="insurance"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Insurance
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="insurance"
                onChange={calculateSubtotal2}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="licensing"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Licensing
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="licensing"
                onChange={calculateSubtotal2}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="fuel"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Fuel
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="fuel"
                onChange={calculateSubtotal2}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="others"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Others
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="other2"
                onChange={calculateSubtotal2}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="subtotal"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "130px",
                  marginBottom: 0,
                }}
              >
                Subtotal
              </label>
              <input
                type="number"
                className="form-control border border-start-0 rounded-end"
                id="subtotal2"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-4 mt-3"
          style={{ color: textColor }}
        >
          <div className="px-2">
            <h5 className="fs-5 text-center mb-3">
              <u>Entertainment</u>
            </h5>
            <div
              className="mb-0 d-flex input-group mt-3"
              style={{ height: "50px" }}
            >
              <label
                htmlFor="video"
                className="form-label d-flex align-items-center px-3 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Video/DVDs
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="video"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal1}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="cd"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                CDs
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="cd"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal1}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="movies"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Movies
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="movie"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal1}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="concert"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Concerts
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="concert"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal1}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="sport"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Sports
              </label>

              <input
                type="number"
                className="form-control text-center border-dark"
                id="sport"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal1}
              />
            </div>
            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="other"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Others
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="other1"
                placeholder=""
                style={{ width: "30px" }}
                onInput={calculateSubtotal1}
              />
            </div>

            <div className="d-flex input-group" style={{ height: "50px" }}>
              <label
                htmlFor="subtotal"
                className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{
                  color: butColor,
                  backgroundColor: labelColor,
                  width: "150px",
                  marginBottom: 0,
                }}
              >
                Subtotal
              </label>
              <input
                type="number"
                className="form-control text-center border-dark"
                id="subtotal1"
                placeholder=""
                style={{ width: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
  <div className="row justify-content-center" style={{ color: textColor }}>
    <div className="col-12 col-md-8 col-lg-6">
      <div className="mt-5 px-3 py-3 rounded shadow-sm" style={{ maxWidth: "100%", margin: "0 auto" }}>
        <h5 className="fs-4 text-center mb-3">
          <u>Savings</u>
        </h5>

        {/* Savings Input + Label */}
        <div className="input-group" style={{ height: "50px" }}>
          <label
            htmlFor="save"
            className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
            style={{
              color: "white",
              backgroundColor: "#9e2a2b",
              width: "150px",
              marginBottom: 0,
            }}
          >
            Total Savings
          </label>
          <input
            type="number"
            className="form-control border border-start-0 rounded-end"
            id="save"
            value={saving}
            readOnly
            style={{ fontSize: "14px" }}
          />
        </div>

        {/* Button */}
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-success" onClick={calculateSaving}>
            Calculate Saving
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
