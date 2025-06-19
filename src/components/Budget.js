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

  function calculateSubtotal3() {
    const ids4 = ["personal", "student", "emi", "credit", "other3"];
    let totalsum2 = 0;
    ids4.forEach((id4) => {
      let val = parseFloat(document.getElementById(id4)?.value) || 0;
      totalsum2 += val;
    });
    document.getElementById("subtotal3").value = totalsum2;
    return totalsum2;
  }

  function calculateSaving() {
    const totalExpenses =
      calculateSubtotal() +
      calculateSubtotal1() +
      calculateSubtotal2() +
      calculateSubtotal3();
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
                width: "550px",
                marginTop: "150px",
                marginRight: "-50px",
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
          <div className="col-4 " style={{ color: textColor }}>
            <div
              className=""
              style={{ marginTop: "-150px", marginLeft: "50px" }}
            >
              <h5 className="fs-4 ">
                <u>Projected Monthly Income</u>
              </h5>
              <div className="">
                <div
                  className="mb-0 d-flex input-group mt-3"
                  style={{ maxWidth: "300px", height: "50px" }}
                >
                  <label
                    htmlFor="income1"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Income 1
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="income1"
                    placeholder="Monthly Income"
                    value={income1}
                    onChange={(e) => setIncome1(e.target.value)}
                  />
                </div>
                <div
                  className="d-flex input-group"
                  style={{ maxWidth: "300px", height: "50px" }}
                >
                  <label
                    htmlFor="extra"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Extra Income
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="extraIncome"
                    placeholder="Income"
                    value={extraIncome}
                    onChange={(e) => setExtraIncome(e.target.value)}
                  />
                </div>
                <div
                  className="d-flex input-group"
                  style={{ maxWidth: "300px", height: "50px" }}
                >
                  <label
                    htmlFor="extra"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Total Income
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="extra"
                    value={totalIncome}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 mt-5" style={{ color: textColor }}>
            <div className="" style={{}}>
              <h5 className="fs-4 text-center">
                <u>Transportation</u>
              </h5>
              <div className="">
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
          </div>

          <div className="col-4 mt-5" style={{ color: textColor }}>
            <div
              className=""
              style={{ marginTop: "-50px", marginLeft: "50px" }}
            >
              <h5 className="fs-4 text-center">
                <u>Loans</u>
              </h5>
              <div className="">
                <div
                  className="mb-0 d-flex input-group mt-3"
                  style={{ height: "50px" }}
                >
                  <label
                    htmlFor="personal"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Personal
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="personal"
                    placeholder=""
                    onChange={calculateSubtotal3}
                  />
                </div>
                <div className="d-flex input-group" style={{ height: "50px" }}>
                  <label
                    htmlFor="student"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Student
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="student"
                    onChange={calculateSubtotal3}
                  />
                </div>
                <div className="d-flex input-group" style={{ height: "50px" }}>
                  <label
                    htmlFor="emi"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    EMIs
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="emi"
                    onChange={calculateSubtotal3}
                  />
                </div>
                <div className="d-flex input-group" style={{ height: "50px" }}>
                  <label
                    htmlFor="credit"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Credit Card
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="credit"
                    onChange={calculateSubtotal3}
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
                    id="other3"
                    onChange={calculateSubtotal3}
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
                    id="subtotal3"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 " style={{ color: textColor }}>
            <div
              className=""
              style={{ marginTop: "-150px", marginLeft: "50px" }}
            >
              <h5 className="fs-4">
                <u>Actual Monthly Income</u>
              </h5>
              <div className="mb-3">
                <div
                  className="mb-0 d-flex input-group mt-3 "
                  style={{ maxWidth: "300px", height: "50px" }}
                >
                  <label
                    htmlFor="income1"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Income 1
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="income1"
                    placeholder="Monthly Income"
                    value={income2}
                    onChange={(e) => setIncome2(e.target.value)}
                  />
                </div>
                <div
                  className="d-flex input-group"
                  style={{ maxWidth: "300px", height: "50px" }}
                >
                  <label
                    htmlFor="extra"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Extra Income
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="extraIncome"
                    placeholder="Income"
                    value={extraIncome1}
                    onChange={(e) => setExtraIncome1(e.target.value)}
                  />
                </div>
                <div
                  className="d-flex input-group"
                  style={{ maxWidth: "300px", height: "50px" }}
                >
                  <label
                    htmlFor="extra"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "130px",
                      marginBottom: 0,
                    }}
                  >
                    Total Income
                  </label>
                  <input
                    type="number"
                    className="form-control border border-start-0 rounded-end"
                    id="extra"
                    value={totalIncome1}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-0">
        <div className="row align-items-center">
          <div className="col-6 mt-5" style={{ color: textColor }}>
            <div className="" style={{ marginLeft: "100px" }}>
              <h5 className="fs-4 text-center">
                <u>Housing</u>
              </h5>

              <div className="mb-5">
                <div
                  className="mb-0 d-flex input-group mt-3"
                  style={{ height: "50px" }}
                >
                  <label
                    htmlFor="rent"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
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
                    htmlFor="cable"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "150px",
                      marginBottom: 0,
                    }}
                  >
                    Cable
                  </label>
                  <input
                    type="number"
                    className="form-control text-center border-dark"
                    id="cable"
                    placeholder=""
                    style={{ width: "30px" }}
                    onInput={calculateSubtotal}
                  />
                </div>
                <div className="d-flex input-group" style={{ height: "50px" }}>
                  <label
                    htmlFor="waste"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "150px",
                      marginBottom: 0,
                    }}
                  >
                    Waste Removal
                  </label>
                  <input
                    type="number"
                    className="form-control text-center border-dark"
                    id="waste"
                    placeholder=""
                    style={{ width: "30px" }}
                    onInput={calculateSubtotal}
                  />
                </div>
                <div className="d-flex input-group" style={{ height: "50px" }}>
                  <label
                    htmlFor="repair"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "150px",
                      marginBottom: 0,
                    }}
                  >
                    Repairs
                  </label>
                  <input
                    type="number"
                    className="form-control text-center border-dark"
                    id="repair"
                    placeholder=""
                    style={{ width: "30px" }}
                    onInput={calculateSubtotal}
                  />
                </div>
                <div className="d-flex input-group" style={{ height: "50px" }}>
                  <label
                    htmlFor="supply"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
                    style={{
                      color: butColor,
                      backgroundColor: labelColor,
                      width: "150px",
                      marginBottom: 0,
                    }}
                  >
                    Supplies
                  </label>
                  <input
                    type="number"
                    className="form-control text-center border-dark"
                    id="supplies"
                    placeholder=""
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
          </div>

          <div
            className="col-6 "
            style={{ marginTop: "-140px", color: textColor }}
          >
            <div className="" style={{ marginLeft: "100px" }}>
              <h5 className="fs-4 text-center">
                <u> Entertainment</u>
              </h5>
              <div className="mb-5">
                <div
                  className="mb-0 d-flex input-group mt-3"
                  style={{ height: "50px" }}
                >
                  <label
                    htmlFor="video"
                    className="form-label d-flex align-items-center px-3 border border-end-0 rounded-start"
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
        </div>
      </div>

      <div className="row" style={{ color: textColor }}>
        {/* First 6 columns left intentionally empty */}
        <div className="col-4"></div>

        {/* Content in the right 6 columns */}
        <div className="col-6" style={{ marginTop: "-200px" }}>
          <div className=" ms-auto" style={{ maxWidth: "300px" }}>
            <h5 className="fs-4 text-center">
              <u>Savings</u>
            </h5>

            <div className="mt-3">
              <div className="form-group input-group" style={{ height: "50px" }}>
                <label
                  htmlFor="income1"
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
                  placeholder=""
                  style={{ width: "30px" }}
                  value={saving}
                />
                <button 
                  className="ms-5 btn btn-outline-success mt-3"
                  onClick={calculateSaving}
                >
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
